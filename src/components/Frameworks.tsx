import Divider from "~/components/decoration/Divider";
import Header from "~/components/typography/Header";
import {ComponentProps, For, JSX, splitProps} from "solid-js";
import Row from "~/components/layout/Row";
import {FrameworkItem, Frameworks} from "~/data/DisplayItems";
import {useNavigate} from "@solidjs/router";

export interface LanguageIconProps extends ComponentProps<"div"> {
    class?: string
}

function LanguageIcon(props: LanguageIconProps) {
    const [local, div] = splitProps(props, ["class"]);
    return <div class={`p-4 m-3 rounded bg-stone-950 fill ring-stone-200 transition-all ${local.class || ""}`} {...div}/>
}

export default function DisplayFrameworks() {
    function clickable(item: FrameworkItem): boolean {
        return item.id != undefined
    }

    const navigate = useNavigate();
    return <For each={Object.entries(Frameworks)}>{([name, items]) =>
        <>
            <Header class="text-center" size={5}>
                <code>{name}</code>
            </Header>
            <For each={items}>{item =>
                <Row class={"justify-evenly"}>
                    <For each={item}>{language =>
                        <LanguageIcon
                            class={`${clickable(language) ? "emerald-hover" : ""}`}
                            onClick={() => {
                                if (clickable(language)) navigate(`/experience/${language.id}`)
                            }}>
                            {language.icon()}
                        </LanguageIcon>
                    }</For>
                </Row>
            }</For>
            <Divider class={"mx-10 my-6"}/>
        </>
    }</For>;
}