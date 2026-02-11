const time = 1000

const queue: [HTMLSpanElement, boolean][] = []

export default function text() {
    const elements = document.querySelectorAll("h1, h2, h3, p, button")

    elements.forEach((el) => {
        const textContent = el.textContent
        if (!textContent || el.childElementCount != 0) return

        el.setAttribute("data-pretext", textContent)
        el.textContent = ""

        el.setAttribute("data-ct", textContent.length.toString())

        textContent.split("").forEach((c) => {
            const sp = document.createElement("span")
            sp.textContent = c
            sp.style.opacity = "0"
            el.appendChild(sp)

            queue.push([sp, true])
        })
    })

    const interval = time / queue.length

    const update = setInterval(() => {
        for (let iv = 0; iv < (1 / interval * 10); iv++) {

            if (queue.length == 0) {
                clearInterval(update)
                return
            }

            const i = Math.floor(Math.random() * queue.length)
            const [el, state] = queue[i]

            if (state) {
                el.style.opacity = "50%"
                el.style.color = "var(---a0)"
                queue[i] = [el, false]
            } else {
                el.removeAttribute("style")
                const parent = el.parentElement

                if (!parent) {
                    queue.splice(i, 1)
                    return
                }

                const ct = el.parentElement?.getAttribute("data-ct")

                if (ct == "1") {
                    parent.textContent = parent.getAttribute("data-pretext")
                    parent.removeAttribute("data-pretext")
                    parent.removeAttribute("data-ct")

                } else {
                    parent.setAttribute("data-ct", (Number(ct) - 1).toString())
                }

                queue.splice(i, 1)
            }
        }
    }, Math.ceil(time / queue.length))

}