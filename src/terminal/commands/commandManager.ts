import Terminal from "../terminal"
import Command from "./command"

export default class CommandManager {
    public static commands: Command[] = []

    public static registerCommands(...commands: Command[]): void {
        for (const command of commands) {
            this.commands.push(command)
        }
    }

    public static executeCommand(name: string, args: string[]): void {
        const command = this.getCommand(name)
        if (command) {
            try {
                command.run(args)
            } catch (error) {
                switch (error.name) {
                    case "CommandError":
                        console.error(error.message)
                        break
                    case "UsageError":
                        console.error("Usage: ", command.usage)
                        break
                    default:
                        console.error("An error occurred while executing the command")
                        console.error(error)
                        break
                }
            }

        } else {
            Terminal.error(`Command not found: ${name}`)
        }
    }

    public static getCommand(name: string): Command | undefined {
        return this.commands.find(command => command.name === name || command.aliases.includes(name))
    }

    public static parseCommand(input: string): void {
        const [command, ...args] = input.split(" ")
        this.executeCommand(command, args)
    }
}
