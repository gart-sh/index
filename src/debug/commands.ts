import ColorFormat from "../color/colorFormat"

const g = window as any

g.tokenize = ColorFormat.tokenize.bind(ColorFormat)