import Command from "../terminal/commands/command"
import Terminal from "../terminal/terminal"

export default class SourceCommand extends Command {
    constructor() {
        super({
            name: "source",
            description: "View the source code for this site",
            usage: "source",
            aliases: ["src"]
        })
    }

    public run(args: string[]): void {
        Terminal.log("Opening source code in new tab...")
        const a = document.createElement("a")
        a.href = "https://gart.sh/l/source"
        a.target = "_blank"
        a.click()
    }
}
