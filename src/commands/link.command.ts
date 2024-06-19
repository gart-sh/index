import Command from "../terminal/commands/command";
import UsageError from "../terminal/commands/usageError";
import Terminal from "../terminal/terminal";

export default class LinkCommand extends Command {
    constructor() {
        super({
            name: "link",
            description: "Create a shortlink",
            usage: "link <link> [shortlink]",
            aliases: []
        })
    }

    public async run(args: string[]): Promise<void> {
        if (args.length === 0) {
            throw new UsageError()
        }

        const link = args[0]
        const shortlink = args[1]

        const res = await fetch(`/api/shortlink.create?url=${encodeURIComponent(link)}${shortlink ? `&id=${shortlink}` : ""}`)
        const data = await res.json()

        const id = data.id

        Terminal.log(`Link created: <a href="/l/${id}"><cyan>${window.location.origin}/l/${id}</></a>`)
    }
}
