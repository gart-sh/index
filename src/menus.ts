import State from "./state";

export default function loadMenus() {

    State.menus["main"] = {
        name: "Main",
        controls: "WASD/arrows - Menu Selection",
        render: (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = "white";
            ctx.font = "48px monospace";
            // arrow up
            ctx.fillText("▲ terminal", 100, 54);
            // arrow down
            ctx.fillText("▼ links", 100, 494);
        }
    }

    State.menus["links"] = {
        name: "Links",
        controls: "esc - Back | enter - Select",
        render: (ctx: CanvasRenderingContext2D) => {
            console.log("rendering links")

            ctx.fillStyle = "white";
            ctx.font = "20px monospace";
            ctx.fillText("gart.sh", 10, 25);
            ctx.fillText("github", 10, 50);
        }
    }

    State.menus["terminal"] = {
        name: "Main",
        controls: "esc - Back | enter - Select",
        render: (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = "white";
            ctx.font = "20px sans-serif";
            ctx.fillText("gart@gart.sh > _", 10, 25);
        }
    }

    State.menus["portfolio"] = {
        name: "Main",
        controls: "esc - Back | enter - Select",
        render: (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = "white";
            ctx.font = "48px sans-serif";
            ctx.fillText("gart.sh", 256, 256);
        }
    }

    State.controlsDiv.innerHTML = State.menus["main"].controls;
    State.updateTexture();

}