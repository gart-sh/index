import ColoredText from "./coloredText";

export default class ColorFormat {

    /*
     * Color format
     * 
     *  - <red>text
     *  - <bgRed><green>text</> reset
     * 
     * - Colors 
     * 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'black' 
     * 'orange', 'pink', 'purple', 'brown', 'grey', 'silver', 'gold', 'maroon', 'olive', 'navy', 'teal'
     * 'primary', 'secondary', 'success', 'danger', 'warning', 'info'
     * 
     * - Background colors
     * 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgBlack'
     * 
     * - Styles
     * 'bold', 'italic', 'underline', 'strikethrough'
     * 
     * - Reset
     * 'reset' or '/'
     * 
     * -- misc
     * <n> new line
     * 
     * -- allow tags like a <a href="https://google.com">google</a> 
     * 
     */

    public static styles = [
        'bold', 'italic', 'underline', 'strikethrough'
    ]

    public static ignoreTags = [
        'a'
    ]

    /**
     * 
     * @param text Input text
     * @returns innerHTML formatted text
     */
    public static parse(text: string): string {

        const tokens = this.tokenize(text)

        let result = ""
        for (const token of tokens) {
            if (token.text === "") continue
            const style = token.toStyle()
            result += `<span ${style != ";" ? `style="${style}"` : ''}>${token.text}</span>`
        }

        return result
    }

    public static tokenize(text: string): ColoredText[] {
        const tokens: ColoredText[] = []
        const regex = /<(\w+)>/g
        let match: RegExpExecArray | null

        let lastIndex = 0
        let currentColor = "text"
        let currentBgColor = "background"
        let currentStyles: string[] = []

        while ((match = regex.exec(text)) !== null) {
            const token = text.substring(lastIndex, match.index)
            tokens.push(new ColoredText(token, currentColor, currentBgColor, currentStyles))

            const color = match[1]
            if (this.ignoreTags.includes(color)) {
                const closeTag = `</${color}>`
                const closeIndex = text.indexOf(closeTag, regex.lastIndex)
                if (closeIndex === -1) {
                    console.error(`Missing closing tag for ${color}`)
                    break
                }
                const token = text.substring(regex.lastIndex, closeIndex)
                tokens.push(new ColoredText(token, currentColor, currentBgColor, currentStyles))
                regex.lastIndex = closeIndex + closeTag.length
                continue
            } else if (color.startsWith("bg")) {
                currentBgColor = color
            } else if (this.styles.includes(color)) {
                currentStyles.push(color)
            } else if (color === "reset" || color === "/") {
                currentColor = "text"
                currentBgColor = "background"
                currentStyles = []
            } else {
                currentColor = color
            }

            lastIndex = regex.lastIndex
        }

        const token = text.substring(lastIndex)
        tokens.push(new ColoredText(token, currentColor, currentBgColor, currentStyles))

        return tokens
    }


}
