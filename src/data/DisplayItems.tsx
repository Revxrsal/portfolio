import {
    SiAndroid,
    SiFirebase,
    SiGo,
    SiGradle,
    SiHtml5,
    SiJavascript,
    SiJetpackcompose,
    SiKotlin,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiRust,
    SiSolid,
    SiSpringboot,
    SiSqlite,
    SiSupabase,
    SiSvelte,
    SiTailwindcss,
    SiTauri,
    SiTypescript,
    SiUnrealengine
} from "~/components/icons/si";
import {JSX} from "solid-js";
import {FaBrandsJava} from "~/components/icons/fa";

export interface FrameworkItem {
    title?: string;
    id?: string;
    icon: () => JSX.Element;
}

export type RowData = [FrameworkItem, FrameworkItem, FrameworkItem]

export const Frameworks: Record<string, RowData[]> = {
    "JVM / Android": [
        [
            {
                title: "Kotlin",
                id: "kotlin",
                icon: () => <SiKotlin size={80}/>,
            },
            {
                title: "Java",
                id: "java",
                icon: () => <FaBrandsJava size={80}/>
            },
            {
                title: "Android",
                id: "kotlin",
                icon: () => <SiAndroid size={80}/>
            }
        ],
        [
            {
                title: "Spring Boot",
                id: "spring-boot",
                icon: () => <SiSpringboot size={80}/>
            },
            {
                title: "JetPack Compose",
                id: "kotlin",
                icon: () => <SiJetpackcompose size={80}/>
            },
            {
                title: "Gradle",
                icon: () => <SiGradle size={80}/>
            }
        ],
    ],
    "Systems": [
        [
            {
                title: "GoLang",
                id: "systems",
                icon: () => <SiGo size={80}/>,
            },
            {
                title: "Rust",
                id: "systems",
                icon: () => <SiRust size={80}/>
            },
            {
                title: "Unreal Engine",
                icon: () => <SiUnrealengine size={80}/>
            }
        ],
    ],
    "Web": [
        [
            {
                title: "HTML",
                id: "web",
                icon: () => <SiHtml5 size={80}/>
            },
            {
                title: "JavaScript",
                id: "web",
                icon: () => <SiJavascript size={80}/>
            },
            {
                title: "TypeScript",
                id: "web",
                icon: () => <SiTypescript size={80}/>
            },
        ],
        [
            {
                title: "SolidJS",
                id: "web",
                icon: () => <SiSolid size={80}/>
            },
            {
                title: "HTML",
                id: "web",
                icon: () => <SiTauri size={80}/>
            },
            {
                title: "TailwindCSS",
                id: "web",
                icon: () => <SiTailwindcss size={80}/>
            },
        ],
        [
            {
                title: "Svelte",
                id: "web",
                icon: () => <SiSvelte size={80}/>
            },
            {
                title: "React",
                id: "web",
                icon: () => <SiReact size={80}/>
            },
            {
                title: "NextJS",
                id: "web",
                icon: () => <SiNextdotjs size={80}/>
            },
        ]
    ],
    "Databases": [
        [
            {icon: () => <SiFirebase size={80}/>},
            {icon: () => <SiSupabase size={80}/>},
            {icon: () => <SiRedis size={80}/>},
        ],
        [
            {icon: () => <SiPostgresql size={80}/>},
            {icon: () => <SiSqlite size={80}/>},
            {icon: () => <SiMysql size={80}/>},
        ]
    ]
}
