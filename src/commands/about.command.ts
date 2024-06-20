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
            `Currently working at <a href="https://gart.sh/l/cyt" target="_blank"><cyan>CraftYourTown</a>.`,
            `<n>`,
            `<bold>Links: `,
            `<a href="https://gart.sh/l/github" target="_blank"><green>GitHub</a>`,
            `<a href="https://gart.sh/l/twitter" target="_blank"><cyan>Twitter</a>`,
            `<a href="https://gart.sh/l/discord" target="_blank"><primary>Discord</a>`,
            `<a href="https://gart.sh/l/matrix" target="_blank"><text>Matrix</a>`,
            `<n>`,
            `<bold>Skills:`,
            `<primary>TypeScript <blue>Lua <danger>PostgreSQL <purple>Valkey`,
            `<success>Express <primary>discord.js <yellow>MikroORM`,
            `<green>Node.js <grey>git <orange>Linux <magenta>System Administration`,
            `<n>`,
            `<bold>Projects I'm proud of and I think you should check out:`,
            `<a href="https://github.com/gurrrrrrett3/gartbin" target="_blank"><green>gartbin</a> (<a href="https://gart.sh/l/gartbin" target="_blank"><cyan>seriously, check it out</a>)`,
            `<a href="https://github.com/jpxs-intl/ctf-public" target="_blank"><primary>Capture the Flag</a>`,
            `<a href="https://github.com/gart-sh/gateway" target="_blank"><cyan>gart.sh gateway</a> <white>(the backend for this site!)`,
            `<n>`,
            `<bold>Want to hire me? (always looking for work)`,
            `<text>Send me an email at <a href="https://gart.sh/l/mail" target="_blank"><cyan>gart@gart.sh</a>`,
            `Discord works too if that's more your thing. <a href="https://gart.sh/l/discord" target="_blank"><primary>@gart</a>`,
            `<n>`
        )
    }
}