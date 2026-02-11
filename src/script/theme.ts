export default class Theme {
    public static colors: {
        bg0: string,
        bg1: string,
        bg2: string,
        bg3: string,
        fg0: string,
        fg1: string,
        fg2: string,
        a0: string,
        a1: string
    } = {
            bg0: "#000000",
            bg1: "#0a0a0a",
            bg2: "#1a1a1a",
            bg3: "#2a2a2a",
            fg0: "#f0f0f0",
            fg1: "#c0c0c0",
            fg2: "#808080",
            a0: "#60d15e",
            a1: "#30a12d"
        }

    public static style = document.createElement("style")
    private static themeColor = document.getElementById("theme:a0")

    public static apply() {
        this.style.textContent = `
        * {
            ${Object.entries(Theme.colors).reduce((p, c) => `${p}---${c[0]}: ${c[1]};`, "")}
        }
        `

        this.themeColor?.setAttribute("content", this.colors.a0)
    }
}

document.body.appendChild(Theme.style)