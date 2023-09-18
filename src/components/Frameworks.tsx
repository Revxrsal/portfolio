import Divider from "~/components/decoration/Divider";
import Header from "~/components/typography/Header";
import {For} from "solid-js";
import Row from "~/components/layout/Row";
import Projects from "~/data/Projects";
import ProjectCard from "~/components/projects/ProjectCard";

// export interface LanguageIconProps extends ComponentProps<"div"> {
//     class?: string
// }
//
// function LanguageIcon(props: LanguageIconProps) {
//     const [local, div] = splitProps(props, ["class"]);
//     return <div
//         class={`p-4 m-3 rounded bg-stone-950 fill ring-stone-200 transition-all ${local.class || ""}`} {...div}/>
// }

export default function MyProjects() {
    return <For each={Object.entries(Projects)}>{([name, projects]) =>
        <>
            <Header class="text-center" size={5}>
                {name}
            </Header>
            <For each={projects}>{project =>
                <Row class={"justify-evenly"}>
                    <ProjectCard project={project}/>
                </Row>
            }</For>
            <Divider class={"mx-10 my-6"}/>
        </>
    }</For>;
}