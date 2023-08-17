import Divider from "~/components/decoration/Divider";
import Header from "~/components/typography/Header";
import {For, JSX} from "solid-js";
import Row from "~/components/layout/Row";
import {Frameworks} from "~/data/DisplayItems";

function LanguageIcon(props: {
    children: JSX.Element;
}) {
    return <div class={`p-4 m-3 rounded bg-stone-950 fill ring-stone-200 hover:brightness-150
     hover:scale-105 hover:ring-2 hover:ring-emerald-800 transition-all`}>
        {props.children}
    </div>
}

export default function DisplayFrameworks() {
    return <For each={Object.entries(Frameworks)}>{([name, items]) =>
        <>
            <Divider class={"mx-10 my-6"}/>
            <Header class="text-center" size={5}>
                <code>{name}</code>
            </Header>
            <For each={items}>{item =>
                <Row class={"justify-evenly"}>
                    <For each={item}>{language =>
                        <LanguageIcon>
                            {language.icon()}
                        </LanguageIcon>
                    }</For>
                </Row>
            }</For>
        </>
    }</For>;
}