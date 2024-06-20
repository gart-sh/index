import Command from "../terminal/commands/command";
import CommandManager from "../terminal/commands/commandManager";
import Terminal from "../terminal/terminal";

export default class HelpCommand extends Command {
    constructor() {
        super({
            name: "help",
            description: "Show help message",
            usage: "help [command]",
        })
    }

    public run(args: string[]): void {
        if (args.length === 0) {
            this.showGeneralHelp()
        } else {
            this.showCommandHelp(args[0])
        }
    }

    private showGeneralHelp(): void {
        Terminal.log("<bold>Available commands:</bold>")
        for (const command of CommandManager.commands.values()) {
            if (!command.hidden) {
                Terminal.log(`- <primary>${command.name}</><text>: ${command.description}</>`)
            }
        }
    }

    private showCommandHelp(commandName: string): void {
        const command = CommandManager.getCommand(commandName)
        if (command) {
            Terminal.log(
                `<bold>${command.name}</bold>`,
                `-----------------`,
                `<primary>${command.description}</primary>`,
                `<n>`,
                `Usage:`,
                `  > ${command.usage}`,
            )
            if (command.aliases.length > 0) {
                Terminal.log(`Aliases: ${command.aliases.join(", ")}`)
            }
        } else {
            Terminal.error(`Command not found: ${commandName}`)
        }
    }
}