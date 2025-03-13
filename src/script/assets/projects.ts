
import { Language } from "./languages";

export const projects: Project[] = [
    {
        id: 'watchtower',
        name: 'watchtower',
        description: 'Massive moderation backend for Starfall, handles chat logs, tickets, moderation actions, and a lot more. Frontend is built with SSR TSX and htmx. Built off of gateway.',
        languages: ['ts', 'htmx', 'luau', 'css'],
        date: '2025-01-13',
        links: []
    },
    {
        id: 'gartsh',
        name: 'gart.sh',
        description: 'Personal website and portfolio, uses no libraries or frameworks.',
        languages: ['ts', 'html', 'css'],
        date: '2024-12-14',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/gart-sh/index'
            },
            {
                name: 'Website',
                url: 'https://gart.sh'
            }
        ]
    },
    {
        id: 'fixspotify',
        name: 'fixSpotify',
        description: 'A alternate spotify url, similar to fxTwitter that makes Discord embeds look a little nicer. Also finds songs and albums on other platforms, like YouTube or Tidal.',
        languages: ['ts', 'js', 'html', 'css'],
        date: '2024-12-13',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/gurrrrrrett3/fixspotify'
            },
            {
                name: 'Website',
                url: 'https://fixspotify.com'
            }
        ]
    },
    {
        id: 'slimefunbeutified',
        name: 'Slimefun Beautified',
        description: 'A resource pack for Slimefun that utilizes OptiFine\'s CIT feature to make Slimefun items distinct. I mainly made small utility scripts to update the pack between versions.',
        languages: ['ts'],
        date: '2024-11-30',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/54M44R/Slimefun-Beautified'
            },
        ]
    },
    {
        id: 'thighhighsgay',
        name: 'thighhighs.gay',
        description: 'Simple link website made in about an hour for my VRChat profile.',
        languages: ['ts', 'html', 'css'],
        date: '2024-11-15',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/gurrrrrrett3/thighhighs.gay'
            },
            {
                name: 'Website',
                url: 'https://thighhighs.gay'
            }
        ]
    },
    {
        id: 'gateway',
        name: 'gateway',
        description: 'Shared backend for a lot of my projects, handles logging, authentication, and networking.',
        languages: ['ts'],
        date: '2024-11-15',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/gart-sh/gateway'
            }
        ]
    },
    {
        id: 'jpxsplugin',
        name: 'jpxs-plugin',
        description: 'RosaServer plugin that handles networking, authentication, data collection, moderation tools, and cloud logging for over a dozen servers.',
        languages: ['lua'],
        date: '2024-10-29',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/jpxs-intl/jpxs-plugin'
            }
        ]
    },
    {
        id: 'nova',
        name: 'Nova',
        description: 'General purpose Discord bot for personal use.',
        languages: ['ts'],
        date: '2024-7-26',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/gurrrrrrett3/nova'
            }
        ]
    },
    {
        id: 'polymathts',
        name: 'Polymath-ts',
        description: 'A rewrite of oraxen\'s polymath in TypeScript. Has processed hundreds of thousands of requests for CraftYourTown.',
        languages: ['ts'],
        date: '2024-7-25',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/gurrrrrrett3/polymath-ts'
            }
        ]
    },
    {
        id: 'freeweekend',
        name: 'Free Weekend',
        description: 'Revese engineered the authentication system for Sub Rosa, allowing for the game to be played even after the servers shut down.',
        languages: ['ts'],
        date: '2024-7-5',
        links: []
    },
    {
        id: 'vrchatjellyfin',
        name: 'VRChat-Jellyfin',
        description: 'A Jellyfin client that handles transcoding and streaming media to VRChat video players.',
        languages: ['ts'],
        date: '2024-06-19',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/gurrrrrrett3/vrchat-jellyfin'
            }
        ]
    },
    {
        id: 'ctf',
        name: 'Capture The Flag',
        description: 'CTF game mode for RosaServer, completely from scratch.',
        languages: ['lua'],
        date: '2024-6-12 ',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/jpxs-intl/ctf-public'
            }
        ]
    },
    {
        id: 'gartbin',
        name: 'gartbin',
        description: 'A pastebin clone that uses PostgreSQL and Express as a backend.',
        languages: ['ts'],
        date: '2024-6-12 ',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/gurrrrrrett3/gartbin'
            }
        ]
    },
    {
        id: 'jpxs',
        name: 'JPXS',
        description: 'Mass data collection and moderation tool for dozens of Sub Rosa servers.',
        languages: ['ts', 'lua'],
        date: '2023-3-25',
        links: [
            {
                name: 'Website',
                url: 'https://jpxs.io'
            }
        ]
    },
    {
        id: 'onebot',
        name: 'Onebot',
        description: 'Mini bot framework that handles loading commands and splits code into manageable modules. All of my Discord bots are built off of this.',
        languages: ['ts'],
        date: '2023-1-26',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/OnebotTeam/OnebotCore'
            }
        ]
    },
]

export interface Project {
    id: string,
    name: string,
    description: string,
    languages: Language[],
    date: string,
    links: ProjectLink[],

    // Optional fields
    image?: string,
}

export interface ProjectLink {
    name: string,
    url: string
}

