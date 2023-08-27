import {FaBrandsJava} from "~/components/icons/fa";
import {SiKotlin} from "~/components/icons/si";
import {Project} from "~/data/projects/index";

export const JavaProjects: Project[] = [
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
    {
        name: "SpleefX",
        description: "A high-performance, customizable, and powerful spleef-like game engine plugin for Bukkit.",
        url: "https://github.com/SpleefX/SpleefX",
        stack: ["Caffeine", "Gson", "WorldEdit", "HikariCP", "Guava", "OkHttp3"],
        icons: () => [
            <FaBrandsJava size={40}/>
        ]
    },
    {
        name: "OllozSays",
        description: "A modern yet familiar, Minecraft-adapted Simon Says game with 40+ different tasks",
        url: "https://www.spigotmc.org/resources/91868",
        stack: ["Caffeine", "Log4J", "Gson", "SnakeYAML", "ASM", "WorldEdit"],
        icons: () => [
            <FaBrandsJava size={40}/>
        ]
    }
]
