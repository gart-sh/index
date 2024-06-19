import Theme from "../theme";

export default class LightTheme extends Theme {
    public name = "light"
    public background: "#f0f0f0"

    constructor() {
        super()
        this.apply({
            text: "#fff",
            primary: "#007bff",
            secondary: "#6c757d",
            success: "#28a745",
            danger: "#dc3545",
            warning: "#ffc107",
            info: "#17a2b8",
            light: "#f8f9fa",
            dark: "#343a40",
        })
    }


}