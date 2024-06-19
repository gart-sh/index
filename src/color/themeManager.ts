import Theme from "./theme";
import DarkTheme from "./themes/dark.theme";
import LightTheme from "./themes/light.theme";

export default class ThemeManager {

    public static currentTheme: Theme
    public static tokens: Map<string, string> = new Map()
    public static themes: Theme[] = []

    public static init(): void {
        // Load themes

        this.themes.push(
            new DarkTheme(),
            new LightTheme()
        )

        // Load the default theme
        this.loadTheme(this.themes[0])
    }

    public static loadTheme(theme: Theme): void {
        this.currentTheme = theme
        this.tokens = new Map()
        for (const [key, value] of Object.entries(theme.colors)) {
            this.tokens.set(key, `color: ${value}`)
        }

        for (const [key, value] of Object.entries(theme.styles)) {
            this.tokens.set(key, value)
        }

        document.body.style.backgroundColor = theme.background

    }
}