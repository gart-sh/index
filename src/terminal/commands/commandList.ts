import AboutCommand from "../../commands/about.command";
import ClearCommand from "../../commands/clear.command";
import HelpCommand from "../../commands/help.command";
import LinkCommand from "../../commands/link.command";
import SourceCommand from "../../commands/source.command";
import ThemeCommand from "../../commands/theme.command";
import CommandManager from "./commandManager";

export default function registerCommands(): void {
    CommandManager.registerCommands(
        new HelpCommand(),
        // new ThemeCommand(), // not done yet
        new AboutCommand(),
        new ClearCommand(),
        new LinkCommand(),
        new SourceCommand()
    )
}