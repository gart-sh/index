export const languages = {
    ts: {
        name: 'TypeScript',
        icon: 'typescript'
    },
    js: {
        name: 'JavaScript',
        icon: 'javascript'
    },
    html: {
        name: 'HTML',
        icon: 'html5'
    },
    css: {
        name: 'CSS',
        icon: 'css3'
    },
    java: {
        name: 'Java',
        icon: 'java'
    },
    kotlin: {
        name: 'Kotlin',
        icon: 'kotlin'
    },
    lua: {
        name: 'Lua',
        icon: 'lua'
    },
    luau: {
        name: 'Luau',
        icon: 'lua'
    },
    json: {
        name: 'JSON',
        icon: 'json'
    }
}

export type Language = keyof typeof languages
