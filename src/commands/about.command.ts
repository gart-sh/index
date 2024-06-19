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
            `Currently working @ <a href="https://gart.sh/l/cyt"><cyan>CraftYourTown</a>.`,
            `<n>`,
            `<bold>Links: `,
            `<n>`,
            `<a href="https://gart.sh/l/github"><green>GitHub</a>`,
            `<a href="https://gart.sh/l/twitter"><cyan>Twitter</a>`,
            `<a href="https://gart.sh/l/discord"><primary>Discord</a>`,
            `<a href="https://gart.sh/l/matrix"><text>Matrix</a>`,
            `<n>`,
            `<bold>List of "skills" that won't get me hired:`,
            `<primary>TypeScript <blue>Lua <danger>PostgreSQL <purple>Valkey`,
            `<success>Express <primary>discord.js <yellow>MikroORM`,
            `<green>Node.js <grey>git <orange>Linux <magenta>System Administration`,
            `<n>`,
            `<bold>Projects I'm proud of and I think you should check out:`,
            `<a href="https://github.com/gurrrrrrett3/gartbin"><green>gartbin</a> (<a href="https://gart.sh/l/gartbin"><cyan>seriously, check it out</a>)`,
            `<a href="https://github.com/jpxs-intl/ctf-public"><primary>Capture the Flag</a>`,
            `<a href="https://github.com/gart-sh/gateway"><cyan>gart.sh gateway</a> <white>(the backend for this site!)`,
            `<n>`,
            `<bold>Want to hire me? (always looking for work)`,
            `<text>Send me an email at <a href="https://gart.sh/l/mail"><cyan>gart@gart.sh</a>`,
            `Discord works too if that's more your thing. <a href="https://gart.sh/l/discord"><primary>@gart</a>`,
            `<n>`
        )
    }
}