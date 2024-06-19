export default class Theme {
    name: string
    colors: Record<string, string> = {
        red: "#ff0000",
        green: "#00ff00",
        yellow: "#ffff00",
        blue: "#0000ff",
        magenta: "#ff00ff",
        cyan: "#00ffff",
        white: "#ffffff",
        black: "#000000",
        orange: "#ffa500",
        pink: "#ffc0cb",
        purple: "#800080",
        brown: "#a52a2a",
        grey: "#808080",
        silver: "#c0c0c0",
        gold: "#ffd700",
        maroon: "#800000",
        olive: "#808000",
        navy: "#000080",
        teal: "#008080",

        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",

        info: "#17a2b8",
        bgRed: "#ff0000",
        bgGreen: "#00ff00",
        bgYellow: "#ffff00",
        bgBlue: "#0000ff",
        bgMagenta: "#ff00ff",
        bgCyan: "#00ffff",
        bgWhite: "#ffffff",
        bgBlack: "#000000",
    }

    background: string = "#000000"

    styles: Record<string, string> = {
        bold: "font-weight: bold",
        italic: "font-style: italic",
        underline: "text-decoration: underline",
        strikethrough: "text-decoration: line-through",
    }

    public apply(colors: Record<string, string>) {
        this.colors = { ...this.colors, ...colors }
    }
}