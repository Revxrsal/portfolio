import {
    SiAndroid,
    SiJetpackcompose,
    SiKotlin,
    SiRust,
    SiSolid,
    SiSqlite,
    SiSupabase,
    SiSvelte,
    SiTailwindcss,
    SiTauri,
    SiTypescript,
    SiVite,
    SiWindows
} from "solid-icons/si";
import {FaBrandsJava} from "solid-icons/fa";
import {JSX} from "solid-js";

export interface Project {
    name: string;
    description: string;
    url: string;
    stack: string[];
    icons: () => JSX.Element[];
}

const Projects: Record<string, Project[]> = {
    "Frameworks & Libraries": [
        {
            name: "Lamp",
            description: "An declarative framework for building cross-platform commands using annotations",
            url: "https://github.com/Revxrsal/Lamp",
            stack: [],
            icons: () => [
                <FaBrandsJava size={40}/>,
                <SiKotlin size={36}/>,
            ]
        },
        {
            name: "Kono",
            description: "A framework for building cross-platform desktop apps using a Kotlin backend and a web front-end",
            stack: ["Kotlin (JVM)", "JNA", "Wry (Rust)", "Tao (Rust)", "TypeScript"],
            url: "https://github.com/kono-apps/kono",
            icons: () => [
                <SiKotlin size={36}/>,
                <SiRust size={36}/>,
                <SiTypescript size={36}/>
            ]
        },
        {
            name: "EventBus",
            description: "A blazingly fast, reflectionless, multi-threaded event bus for Java.",
            url: "https://github.com/Revxrsal/EventBus",
            stack: ["ASM"],
            icons: () => [
                <FaBrandsJava size={40}/>
            ]
        },
        {
            name: "Tuna-Bytes",
            description: "An all-purpose mixins framework for Java bytecode manipulation at runtime. Requires zero understanding of the JVM bytecode.",
            url: "https://github.com/Revxrsal/Tuna-Bytes",
            stack: ["ASM"],
            icons: () => [
                <FaBrandsJava size={40}/>
            ]
        },
        {
            name: "Mirror",
            description: "A simple, fast and powerful reflection library, with built-in Bukkit support",
            url: "https://github.com/Revxrsal/Mirror",
            stack: [],
            icons: () => [
                <FaBrandsJava size={40}/>
            ]
        },
    ],
    "Desktop Apps": [
        {
            name: "Focus Assistant",
            description: "A simple but powerful pomodoro-like application that blocks any distracting apps during focus sessions",
            url: "https://github.com/Revxrsal/focus-assistant",
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
        },
        {
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
        },
        {
            name: "Pocket Dictionary",
            description: "A simple-to-use, clipboard-aware desktop dictionary. The dictionary is not available to the public.",
            url: "https://github.com/Revxrsal/pocket-dictionary",
            stack: ["Svelte", "PicoCSS", "Tauri", "SQLite", "Vite"],
            icons: () => [
                <SiSvelte size={30}/>,
                <SiTauri size={30}/>,
                <SiSqlite size={30}/>,
                <SiVite size={30}/>,
                <SiRust size={30}/>,
                <SiTypescript size={30}/>,
            ]
        }
    ],
    "Mobile (Android)": [
        {
            name: "supabase-kt",
            description: "Implementation of Supabase's libraries for Kotlin",
            stack: ["Moshi", "OkHttp3"],
            url: "https://github.com/Revxrsal/supabase-kt",
            icons: () => [
                <SiKotlin size={36}/>,
                <SiAndroid size={36}/>,
                <SiSupabase size={36}/>,
            ]
        },
        {
            name: "Flashcat",
            description: "A flashcards app built with JetPack Compose, with labels and multiple options for revising",
            stack: ["JetPack Compose", "Android Room", "Kotlin Coroutines", "Hilt"],
            url: "https://github.com/Revxrsal/Flashcat",
            icons: () => [
                <SiKotlin size={36}/>,
                <SiAndroid size={36}/>,
                <SiJetpackcompose size={36}/>,
            ]
        },
        {
            name: "Fiqh Search",
            description: "A service that simplifies studying and searching in the Islamic jurisprudence (fiqh)",
            stack: ["JetPack Compose", "Supabase", "Kotlin Coroutines", "Hilt", "Material 3"],
            url: "https://github.com/fiqhsearch/android",
            icons: () => [
                <SiKotlin size={36}/>,
                <SiAndroid size={36}/>,
                <SiSupabase size={36}/>,
                <SiJetpackcompose size={36}/>,
            ]
        },
        {
            name: "BetterSpender",
            description: "A calendar-based, super simple app that allows setting budgets and tracking expenses.",
            stack: ["JetPack Compose", "Android Room", "Kotlin Coroutines", "Hilt"],
            url: "https://github.com/Revxrsal/BetterSpender",
            icons: () => [
                <SiKotlin size={36}/>,
                <SiAndroid size={36}/>,
                <SiJetpackcompose size={36}/>,
            ]
        }
    ],
    "Websites": [
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
}

export default Projects;