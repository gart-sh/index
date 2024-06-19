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
            `I'm a 21 year old backend developer from the midwest that enjoys making stupid shit.`,
            `Currently working at <a href="https://craftyourtown.com"><cyan>CraftYourTown</a>.`,
            `<n>`,
            `<bold>Links: `,
            `<n>`,
            `<a href="https://github.com/gurrrrrrett3"><green>GitHub</a>`,
            `<a href="https://twitter.com/gurrrrrrett3"><cyan>Twitter</a>`,
            `<a href="https://discord.com/users/@me/232510731067588608"><primary>Discord</a>`,
            `<a href="https://matrix.to/#/%40gart%3Ajpxs.io"><text>Matrix</a>`,
            `<n>`,
            `<bold>List of "skills" that won't get me hired:`,
            `<primary>TypeScript <blue>Lua <danger>PostgreSQL <purple>Valkey`,
            `<success>Express <primary>discord.js <yellow>MikroORM`,
            `<green>Node.js <grey>git <orange>Linux <magenta>System Administration`,
            `<n>`,
            `<bold>Projects I'm proud of and I think you should check out:`,
            `<a href="https://github.com/gurrrrrrett3/gartbin"><green>gartbin</a> (<a href="https://bin.gart.sh"><cyan>seriously, check it out</a>)`,
            `<a href="https://github.com/jpxs-intl/ctf-public"><primary>Capture the Flag</a>`,
            `<a href="https://github.com/gart-sh/gateway"><cyan>gart.sh gateway</a> <white>(the backend for this site!)`,
            `<n>`,
            `<bold>Want to hire me? (always looking for work)`,
            `<text>Send me an email at <a href="mailto:gart@gart.sh"><cyan>gart@gart.sh</a>`,
            `Discord works too if that's more your thing. <a href="https://discord.com/users/@me/232510731067588608"><primary>@gart</a>`,
            `<n>`
        )
    }
}