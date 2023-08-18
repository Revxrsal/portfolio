import Row from "~/components/layout/Row";
import Text from "~/components/typography/Text";
import {For, Show} from "solid-js";
import Column from "~/components/layout/Column";

export interface StoryEntry {
    title?: string,
    content: string,
    image: string,
    alt: string
}

export interface BiographyProps {
    story: StoryEntry[]
}

function Storyline(props: {
    reverse: boolean,
    entry: StoryEntry
}) {
    function StoryImage() {
        return <img
            src={props.entry.image}
            alt={props.entry.alt}
            class={"lg:w-96 lg:h-96 w-48 h-48 image-non-draggable"}
        />
    }

    function StoryText() {
        return <Text class={"w-1/2 text-2xl"}>
            <span class={"font-bold text-3xl my-3"}>{props.entry.title}</span>
            <br/>
            {props.entry.content}
        </Text>
    }

    return <Row class={"w-full lg:justify-around justify-between"}>
        <Show when={props.reverse} fallback={
            <>
                <StoryImage/>
                <StoryText/>
            </>
        }>
            <StoryText/>
            <StoryImage/>
        </Show>
    </Row>
}

export default function Biography(props: BiographyProps) {
    return <Column>
        <For each={props.story}>{(entry, index) =>
            <Storyline entry={entry} reverse={index() % 2 == 0}/>
        }</For>
    </Column>
}

