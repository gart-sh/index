import { AxesHelper, BoxGeometry, CanvasTexture, Mesh, MeshBasicMaterial, PlaneGeometry, Scene, Vector3 } from 'three';
import Debug from './debug';

export type CubeRotation = "up" | "down" | "left" | "right";

export default class Cube {

    public geometry: BoxGeometry;
    public material: MeshBasicMaterial;
    public mesh: Mesh;

    public isRotating: boolean = false;
    public rotationStartTime: number = 0;

    public currentRotation: Vector3 = new Vector3(0, 0, 0);
    public targetRotation: Vector3
    public offset: Vector3 = new Vector3(0, 0, 0);

    public positionHelper: AxesHelper;

    public textureObject: CanvasTexture;
    public textureOverlay: Mesh;
    public textureCanvas: HTMLCanvasElement;
    public textureContext: CanvasRenderingContext2D;
    public textureMaterial: MeshBasicMaterial;

    constructor(scene: Scene) {
        this.geometry = new BoxGeometry(0.2, 0.2, 0.2);
        this.material = new MeshBasicMaterial({
            color: 0x4a4a4a,
            opacity: 0.5,
            transparent: true,
        })

        this.mesh = new Mesh(this.geometry, this.material);
        scene.add(this.mesh);

        this.positionHelper = new AxesHelper(0.1);
        this.mesh.add(this.positionHelper);

        const textureGeometry = new BoxGeometry(0.2, 0.2, 0.2);
        this.textureMaterial = new MeshBasicMaterial({
            map: this.material.map,
            side: 2,
            transparent: true,
            depthWrite: false,

        });

        this.textureOverlay = new Mesh(textureGeometry, this.textureMaterial);

        this.textureCanvas = document.createElement("canvas");
        this.textureCanvas.width = 512;
        this.textureCanvas.height = 512;
        this.textureContext = this.textureCanvas.getContext("2d") as CanvasRenderingContext2D;

        this.textureObject = new CanvasTexture(this.textureCanvas);
        this.textureMaterial.map = this.textureObject;

        this.textureOverlay = new Mesh(textureGeometry, this.textureMaterial);
        scene.add(this.textureOverlay);
    }

    public update(time: number) {

        if (this.isRotating) {

            this.textureMaterial.opacity = 0;

            if (this.rotationStartTime === 0) {
                this.rotationStartTime = time;
            }

            const rotationTime = time - this.rotationStartTime;

            if (rotationTime < 300) {

                // rotate 90 degrees in 500ms

                const progress = rotationTime / 300;

                this.offset = this.currentRotation.clone().lerp(this.targetRotation, progress);
            } else {
                this.isRotating = false;
                this.rotationStartTime = 0;

                this.currentRotation = this.targetRotation;

                this.textureMaterial.opacity = 1;
            }
        }

        this.mesh.position.setY(Math.sin((time + 300) / 1000) * 0.01)

        this.mesh.rotation.x = this.offset.x + Math.sin(time / 1000) * 0.1;
        this.mesh.rotation.y = this.offset.y;
        this.mesh.rotation.z = this.offset.z + Math.cos(time / 1000) * 0.1;

        this.textureOverlay.position.set(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
        this.textureOverlay.rotation.set(this.mesh.rotation.x, this.mesh.rotation.y, this.mesh.rotation.z);

        this.positionHelper.position.set(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
        this.positionHelper.rotation.set(this.mesh.rotation.x, this.mesh.rotation.y, this.mesh.rotation.z);
    }

    public rotateDirection(direction: CubeRotation) {
        /// get target side based on current side and direction

        if (this.isRotating) {
            return;
        }

        this.targetRotation = this.getOffsetForDirection(direction);
        this.isRotating = true;
    }

    public rotateBack() {
        if (this.isRotating) {
            return;
        }

        this.targetRotation = new Vector3(0, 0, 0);
        this.isRotating = true;
    }

    public getOffsetForDirection(direction: CubeRotation) {
        // calculate the rotation direction based on the current rotation
        // radians
        switch (direction) {
            case "up":
                return this.currentRotation.clone().add(new Vector3(Math.PI / 2, 0, 0));
            case "down":
                return this.currentRotation.clone().add(new Vector3(-Math.PI / 2, 0, 0));
            case "left":
                return this.currentRotation.clone().add(new Vector3(0, Math.PI / 2, 0));
            case "right":
                return this.currentRotation.clone().add(new Vector3(0, -Math.PI / 2, 0));
        }
    }
}