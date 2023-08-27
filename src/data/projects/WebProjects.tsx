import {Project} from "~/data/projects/index";
import {
    SiRust,
    SiSolid,
    SiSqlite,
    SiSvelte,
    SiTailwindcss,
    SiTauri,
    SiTypescript,
    SiVite,
    SiWindows
} from "~/components/icons/si";

export const WindowsAssistant: Project = {
    name: "Windows Assistant",
    description: "A desktop application that lets you build routines, run automated tasks, and focus on what matters.",
    url: "https://github.com/Revxrsal/windows-assistant",
    stack: ["SolidJS", "Tauri", "TailwindCSS", "Vite", "Rust", "Win-API"],
    icons: () => [
        <SiSolid size={30}/>,
        <SiTauri size={30}/>,
        <SiTailwindcss size={30}/>,
        <SiVite size={30}/>,
        <SiRust size={30}/>,
        <SiWindows size={30}/>,
        <SiTypescript size={30}/>
    ]
}

export const PocketDictionary: Project = {
    name: "Pocket Dictionary",
    description: "A simple-to-use, clipboard-aware desktop dictionary. The dictionary is not available to the public.",
    url: "https://github.com/Revxrsal/pocket-dictionary",
    stack: ["Svelte", "PicoCSS", "Tauri", "SQLite", "Vite"],
    icons: () => [
        <SiSvelte size={30}/>,
        <SiTauri size={30}/>,
        <SiSqlite size={30}/>,
        <SiVite size={30}/>,
        <SiTypescript size={30}/>
    ]
}

export const SolidProjects: Project[] = [
    WindowsAssistant,
    {
        name: "Portfolio",
        description: "The very portfolio you are viewing right now!",
        url: "https://github.com/Revxrsal/portfolio",
        stack: ["SolidJS", "TailwindCSS", "Vite"],
        icons: () => [
            <SiSolid size={30}/>,
            <SiTailwindcss size={30}/>,
            <SiVite size={30}/>,
            <SiTypescript size={30}/>
        ]
    }
]

export const TauriProjects: Project[] = [
    WindowsAssistant,
    PocketDictionary
]

export const SvelteProjects: Project[] = [
    PocketDictionary
]
