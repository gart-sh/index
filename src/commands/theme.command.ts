import ThemeManager from "../color/themeManager"
import Command from "../terminal/commands/command"
import Terminal from "../terminal/terminal"

export default class ThemeCommand extends Command {

    constructor() {
        super({
            name: "theme",
            description: "Change the terminal theme",
            usage: "theme [themeName]"
        })
    }

    public run(args: string[]): void {
        if (args.length === 0) {
            this.showThemes()
        } else {
            this.setTheme(args[0])
        }
    }

    private showThemes(): void {
        ThemeManager.themes.forEach((theme) => {
            Terminal.log(`- ${theme.name}`)
        })
    }

    private setTheme(themeName: string): void {
        // Set the theme

        const theme = ThemeManager.themes.find(theme => theme.name === themeName)
        if (theme) {
            ThemeManager.loadTheme(theme)
            Terminal.log(`Theme set to ${themeName}`)
        } else {
            Terminal.error(`Theme not found: ${themeName}`)
        }

    }
}