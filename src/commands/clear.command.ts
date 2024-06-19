import Command from "../terminal/commands/command";
import Terminal from "../terminal/terminal";

export default class ClearCommand extends Command {
    constructor() {
        super({
            name: "clear",
            description: "Clear the terminal",
            usage: "clear",
            aliases: ["cls"]
        })
    }

    public run(args: string[]): void {
        Terminal.clear()
    }
}