import Cube from "./cube";
import Debug from "./debug";

export default class State {

    public static mode: "cube" | "fullscreen" = "cube";
    public static menu: string = "main";
    public static controls: string = ""

    public static cube: Cube;

    public static controlsDiv: HTMLDivElement = document.querySelector(".controls") as HTMLDivElement;

    public static menus: {
        [key: string]: {
            name: string,
            controls: string
            render: (ctx: CanvasRenderingContext2D) => void
        }
    } = {};

    public static changeCubeMenu(menu: string) {

        const menuData = State.menus[menu];

        if (!menuData) {
            console.error(`Menu ${menu} not found`);
            this.changeCubeMenu("main");
            return
        }

        State.menu = menu;
        State.controls = menuData.controls;

        this.controlsDiv.innerHTML = menuData.controls;

        this.updateTexture();

    }

    public static updateTexture() {
        const ctx = State.cube.textureContext;
        ctx.clearRect(0, 0, 512, 512);

        ctx.fillStyle = "white";
        ctx.font = "48px sans-serif";

        const menu = State.menus[State.menu];
        console.log(menu)
        menu.render(ctx);

        State.cube.textureObject.needsUpdate = true;
    }
}

window.addEventListener("keydown", (e) => {
    // arrows
    if (State.mode == "cube" && State.menu == "main") {
        switch (e.key) {
            case "ArrowUp":
                State.cube.rotateDirection("up");
                State.changeCubeMenu("terminal")
                break;
            case "ArrowDown":
                State.cube.rotateDirection("down");
                State.changeCubeMenu("links")
                break;
            case "ArrowLeft":
                State.cube.rotateDirection("left");
                break;
            case "ArrowRight":
                State.cube.rotateDirection("right");
                State.changeCubeMenu("portfolio")
                break;
        }
    } else if (State.mode == "cube" && State.menu != "main") {
        if (e.key == "Escape") {
            State.cube.rotateBack()
            State.changeCubeMenu("main");
        }
    }
})
