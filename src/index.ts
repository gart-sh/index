import { PerspectiveCamera, Scene, WebGLRenderer } from "three"
import Cube from "./cube";
import State from "./state";
import loadMenus from "./menus";

const canvas = document.getElementById("main") as HTMLCanvasElement;
const width = window.innerWidth, height = window.innerHeight;

const scene = new Scene();
const cube = new Cube(scene);

State.cube = cube;

const camera = new PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 0.3;

const renderer = new WebGLRenderer({ antialias: true, canvas });
renderer.setSize(width, height);
renderer.setAnimationLoop(animation);

function animation(time: number) {

    cube.update(time);
    renderer.render(scene, camera);

}

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

loadMenus()