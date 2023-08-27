import Projects, {Project} from "~/data/projects/index";
import {
    SiAndroid, SiDocker, SiHtml5, SiJavascript,
    SiJetpackcompose,
    SiKotlin,
    SiRedis,
    SiRust,
    SiSpringboot,
    SiSupabase,
    SiTypescript
} from "~/components/icons/si";

export const SpringBootProjects: Project[] = [
    {
        name: "SpleefX Backend",
        description: "The implementation of SpleefX's web backend, used for statistics, debug reports, and wiki",
        stack: ["Kotlin", "Spring Boot", "Redis", "Caffeine", "Gson", "Docker"],
        url: "https://github.com/SpleefX/Backend",
        icons: () => [
            <SiKotlin size={30}/>,
            <SiSpringboot size={30}/>,
            <SiRedis size={30}/>,
            <SiHtml5 size={30}/>,
            <SiJavascript size={30}/>,
            <SiKotlin size={30}/>,
            <SiDocker size={30}/>
        ]
    }
]

export const KotlinProjects: Project[] = [
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
        name: "supabase-kt",
        description: "Implementation of `Supabase's libraries for Kotlin",
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
]
