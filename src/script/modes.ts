import text from "./text"
import Theme from "./theme"

const mode = window.location.hash.substring(1)

const modeActions: Record<string, () => any> = {
    "nfc": () => {
        Theme.colors.a0 = "#e602adff"
        Theme.colors.a1 = "#350028ff"

        Theme.apply()

        const desc = document.getElementById("desc")!
        desc.textContent = desc.textContent += atob("LCAvZGV2L2hhY2sgbWVtYmVy")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (modeActions[mode]) {
        console.log(`custom mode detected! running mods for mode ${mode}`)
        modeActions[mode]()
    }

    text()
})