import {useNavigate, useParams} from "@solidjs/router";
import {createMemo, For, Show} from "solid-js";
import Text from "~/components/typography/Text";
import Row from "~/components/layout/Row";
import Header from "~/components/typography/Header";
import Column from "~/components/layout/Column";
import {VsLinkExternal} from "~/components/icons/vs";
import IconButton from "~/components/button/IconButton";
import Button from "~/components/input/Button";
import Projects from "~/data/projects";
import NotFound from "~/routes/[...404]";

export type PageParams = {
    id: string
}

export default function Framework() {
    const params = useParams<PageParams>();
    const navigate = useNavigate();

    const allProjects = createMemo(() => Projects[params.id]);

    if (!allProjects())
        return <NotFound/>
    return <main>
        <Button onClick={() => navigate("/")} class={`mx-12 text-xl`}>
            Go back
        </Button>
        <Header size={6} class={"text-center font-normal"}>My Experience in</Header>
        <For each={Object.entries(allProjects())}>{([title, projects]) =>
            <>
                <Header size={7} class={"text-center"}>
                    {title}
                </Header>
                <For each={projects}>{project => <Row
                    class={`bg-stone-950
                            mx-12 my-6 py-4 px-8
                            rounded-md
                            emerald-hover hover:scale-[1.02]
                            justify-between`
                    }
                    onClick={() => window.open(project.url)}
                >
                    <Column class={"select-none p-3"}>
                        <Text class={"text-3xl font-bold my-3"}>
                            {project.name}
                        </Text>
                        <Text class={""}>{project.description}</Text>
                        <Row class={"text fill my-4 items-center "}>
                            <For each={project.icons()}>{icon =>
                                <div class={"mr-3"}>{icon}</div>
                            }</For>
                        </Row>
                        <Show when={project.stack.length > 0}>
                            <Text>
                                <span class={"font-bold"}>Stack used: </span>
                                {project.stack.join(", ")}
                            </Text>
                        </Show>
                    </Column>
                    <IconButton onClick={() => window.open(project.url)}>
                        <VsLinkExternal size={30}/>
                    </IconButton>
                </Row>
                }</For>
            </>
        }</For>
    </main>;
}