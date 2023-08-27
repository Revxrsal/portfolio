import {JSX} from "solid-js";
import {JavaProjects} from "~/data/projects/JavaProjects";
import {KotlinProjects, SpringBootProjects} from "~/data/projects/KotlinProjects";
import {SolidProjects, SvelteProjects, TauriProjects} from "~/data/projects/WebProjects";

export interface Project {
    name: string;
    description: string;
    url: string;
    stack: string[];
    icons: () => JSX.Element[];
}

const Projects: Record<string, Record<string, Project[]>> = {
    "java": {
        "Java": JavaProjects,
    },
    "kotlin": {
        "Kotlin / Android": KotlinProjects,
    },
    "spring-boot": {
        "Spring Boot": SpringBootProjects,
    },
    "web": {
        "SolidJS": SolidProjects,
        "Tauri": TauriProjects,
        "Svelte": SvelteProjects
    }
}

export default Projects;