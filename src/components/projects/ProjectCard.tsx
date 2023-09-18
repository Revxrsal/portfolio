import {For, Show} from "solid-js";
import Text from "~/components/typography/Text";
import Row from "~/components/layout/Row";
import Column from "~/components/layout/Column";
import {VsLinkExternal} from "solid-icons/vs";
import IconButton from "~/components/button/IconButton";
import {Project} from "~/data/projects";

export default function ProjectCard(props: { project: Project }) {
    return <Row
        class={`bg-stone-950 w-full
                            mx-12 my-6 py-4 px-8
                            rounded-md
                            emerald-hover hover:scale-[1.02]
                            justify-between`
        }
        onClick={() => window.open(props.project.url)}
    >
        <Column class={"select-none p-3"}>
            <Text class={"text-3xl font-bold my-3"}>
                {props.project.name}
            </Text>
            <Text class={""}>{props.project.description}</Text>
            <Row class={"text fill my-4 items-center "}>
                <For each={props.project.icons()}>{icon =>
                    <div class={"mr-3"}>{icon}</div>
                }</For>
            </Row>
            <Show when={props.project.stack.length > 0}>
                <Text>
                    <span class={"font-bold"}>Stack used: </span>
                    {props.project.stack.join(", ")}
                </Text>
            </Show>
        </Column>
        <IconButton onClick={() => window.open(props.project.url)}>
            <VsLinkExternal size={30}/>
        </IconButton>
    </Row>
}