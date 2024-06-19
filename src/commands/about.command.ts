import Command from "../terminal/commands/command";
import Terminal from "../terminal/terminal";

export default class AboutCommand extends Command {
    constructor() {
        super({
            name: "about",
            description: "About me",
            usage: "about"
        })
    }

    public run(args: string[]): void {
        Terminal.log(
            `<bold>Hey, I'm <green>gart</><text>!</>`,
            `-----------------`,
            `I'm a backend developer that enjoys making stupid shit.`,
            `Currently working at <a href="https://craftyourtown.com"><cyan>CraftYourTown</a>.`,
            `<n>`,
            `<bold>Links: `,
            `<n>`,
            `<a href="https://github.com/gurrrrrrett3"><green>GitHub</a>`,
            `<a href="https://twitter.com/gurrrrrrett3"><cyan>Twitter</a>`,
            `<a href="https://discord.com/users/@me/232510731067588608"><primary>Discord</a>`,
            `<a href="https://matrix.to/#/%40gart%3Ajpxs.io"><text>Matrix</a>`,

            `<n>`

        )
    }
}