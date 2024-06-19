interface CommandOptions {
    name: string
    description: string
    usage: string
    aliases?: string[]
    hidden?: boolean
}

export default class Command {
    public name: string
    public description: string
    public usage: string
    public aliases: string[]
    public hidden: boolean

    constructor(options: CommandOptions) {
        this.name = options.name
        this.description = options.description
        this.usage = options.usage
        this.aliases = options.aliases || []
        this.hidden = options.hidden || false
    }

    public run(args: string[]): void | Promise<void> {
        throw new Error("Method not implemented.")
    }

}