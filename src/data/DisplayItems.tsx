import {
    SiAndroid, SiFirebase,
    SiGo,
    SiGradle,
    SiHtml5,
    SiJavascript,
    SiJetpackcompose,
    SiKotlin, SiMysql,
    SiNextdotjs, SiPostgresql,
    SiReact, SiRedis,
    SiRust,
    SiSolid,
    SiSpringboot, SiSqlite, SiSupabase,
    SiSvelte,
    SiTailwindcss,
    SiTauri,
    SiTypescript,
    SiUnrealengine
} from "solid-icons/si";
import {FaBrandsJava} from "solid-icons/fa";
import {JSX} from "solid-js";

export interface FrameworkItem {
    icon: () => JSX.Element
}

export type RowData = [FrameworkItem, FrameworkItem, FrameworkItem]

export const Development = [
    "systems programming",
    "Android apps",
    "desktop apps",
    "back-end development",
    "front-end development",
    "game development",
    "networking",
]

export const Frameworks: Record<string, RowData[]> = {
    "JVM / Android": [
        [
            {icon: () => <SiKotlin size={80}/>},
            {icon: () => <FaBrandsJava size={80}/>},
            {icon: () => <SiAndroid size={80}/>}
        ],
        [
            {icon: () => <SiSpringboot size={80}/>},
            {icon: () => <SiJetpackcompose size={80}/>},
            {icon: () => <SiGradle size={80}/>}
        ],
    ],
    "Systems": [
        [
            {icon: () => <SiGo size={80}/>},
            {icon: () => <SiRust size={80}/>},
            {icon: () => <SiUnrealengine size={80}/>}
        ],
    ],
    "Web": [
        [
            {icon: () => <SiHtml5 size={80}/>},
            {icon: () => <SiJavascript size={80}/>},
            {icon: () => <SiTypescript size={80}/>},
        ],
        [
            {icon: () => <SiSolid size={80}/>},
            {icon: () => <SiTauri size={80}/>},
            {icon: () => <SiTailwindcss size={80}/>},
        ],
        [
            {icon: () => <SiSvelte size={80}/>},
            {icon: () => <SiReact size={80}/>},
            {icon: () => <SiNextdotjs size={80}/>},
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
