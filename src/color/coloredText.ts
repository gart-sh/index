import ThemeManager from "./themeManager";

export default class ColoredText {

    constructor(public text: string, public color: string, public bgColor: string, public styles: string[]) { }

    public toStyle(): string {
        const style: string[] = []
        style.push(ThemeManager.tokens.get(this.color)!)
        style.push(ThemeManager.tokens.get(this.bgColor)!)
        for (const s of this.styles) {
            style.push(ThemeManager.tokens.get(s)!)
        }
        return style.join(";")
    }
}
