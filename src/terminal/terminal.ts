import ColorFormat from "../color/colorFormat"
import registerCommands from "./commands/commandList"
import CommandManager from "./commands/commandManager"

export default class Terminal {

    public static container: HTMLDivElement
    public static input: HTMLInputElement
    public static prompt: HTMLSpanElement

    public static history: string[] = []
    public static historyIndex: number = 0

    private static _promptText: string = ""
    private static _lines: string[] = []

    public static init(): void {
        this.container = document.createElement("div")
        this.container.id = "terminal"
        document.body.appendChild(this.container)

        const inputContainer = document.createElement("div")
        inputContainer.id = "input-container"
        document.body.appendChild(inputContainer)

        this.prompt = document.createElement("span")
        this.prompt.id = "prompt"
        inputContainer.appendChild(this.prompt)

        this.input = document.createElement("input")
        this.input.id = "input"
        this.input.spellcheck = false
        this.input.autocomplete = "off"
        this.input.focus()

        this.input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                this.history.push(this.input.value)
                this.historyIndex = this.history.length

                this.add(this._promptText + this.input.value)
                CommandManager.parseCommand(this.input.value)

                this.input.value = ""
            }
        })

        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowUp":
                    e.preventDefault()
                    if (this.historyIndex > 0) {
                        this.historyIndex--
                        this.input.value = this.history[this.historyIndex]
                    }
                    break
                case "ArrowDown":
                    e.preventDefault()
                    if (this.historyIndex < this.history.length - 1) {
                        this.historyIndex++
                        this.input.value = this.history[this.historyIndex]
                    }
                    break
            }

            this.input.focus()
        })


        window.addEventListener("click", () => {
            this.input.focus()
        })

        inputContainer.appendChild(this.input)

        registerCommands()

        this.setPrompt("<green><bold>gart.sh</> <text>> ")

        this.startup()
    }

    public static setPrompt(prompt: string): void {
        this._promptText = prompt + " "
        this.prompt.innerHTML = ColorFormat.parse(prompt) + " "
    }

    public static add(...lines: string[]): void {
        this._lines.push(...lines)
        this.render()
    }

    public static render(): void {
        this.container.innerHTML = ""
        for (const line of this._lines) {
            const div = document.createElement("div")
            div.className = "line"
            div.innerHTML = line == '<n>' ? '<br>' : ColorFormat.parse(line)
            this.container.appendChild(div)
        }
    }

    public static startup(): void {
        this.add("<green><bold>gart.sh <reset><white>version 1.0.0</reset>")
        this.add("type 'help' for a list of commands")
        this.add("<n>")

        this.parseHash()
    }

    public static parseHash(): void {
        if (window.location.hash) {
            const args = window.location.hash.split("_")
            const action = args.shift()

            switch (action) {
                case "#run":
                    CommandManager.parseCommand(args.join(" "))
                    break
            }
        }
    }

    public static clear(): void {
        this._lines = []
        this.render()
    }

    public static clearInput(): void {
        this.input.value = ""
    }

    public static focus(): void {
        this.input.focus()
    }

    public static log(...lines: string[]): void {
        this.add(...lines)
    }

    public static error(...lines: string[]): void {
        this.add("<red><bold>Error:</></> ", ...lines.map(l => `<red>${l}</>`))
    }

}