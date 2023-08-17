import Header from "~/components/typography/Header";
import Column from "~/components/layout/Column";
import Row from "~/components/layout/Row";
import {createSignal, For, JSX, onCleanup, onMount} from "solid-js";
import Spacer from "~/components/decoration/Spacer";
import Divider from "~/components/decoration/Divider";
import {Development, Frameworks} from "~/data/DisplayItems";
import Text from "~/components/typography/Text";
import {VsCopy, VsLinkExternal} from "solid-icons/vs";
import {AiOutlineMail} from "solid-icons/ai";
import {BsDiscord} from "solid-icons/bs";
import {FaSolidPhone} from "solid-icons/fa";
import IconButton from "~/components/button/IconButton";

function Experience() {
    const [currentDev, setCurrentDev] = createSignal(Development[0]);
    onMount(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setCurrentDev(Development[index % Development.length])
        }, 3000)
        onCleanup(() => clearInterval(interval))
    })
    return <Row>
        <Header size={3} class={"lg:text-3xl text-xl w-max mr-3 whitespace-nowrap"}>I've done</Header>
        <div class={"w-max"}>
            <code>
                <Text
                    class={`lg:text-3xl text-xl underline font-mono my-12 animate-typing pr-1
                        brightness-75 overflow-hidden border-r-2 border-r-stone-800 dark:border-r-white 
                        whitespace-nowrap`}>
                    {currentDev()}
                </Text>
            </code>
        </div>
    </Row>
}

function LanguageIcon(props: {
    children: JSX.Element;
}) {
    return <div class={`p-4 m-3 rounded bg-stone-950 fill ring-stone-200 hover:brightness-150
     hover:scale-105 hover:ring-2 hover:ring-emerald-800 transition-all`}>
        {props.children}
    </div>
}

export default function Home() {
    return (
        <main>
            <Row class={"justify-evenly"}>
                <Column>
                    <h1 class={"text font-bold lg:m-12 lg:text-6xl text-3xl"}>Hello 👋, I'm Ali </h1>
                    <Experience/>
                </Column>
                <img src="/desktop-computer.png" alt="Desktop computer"
                     class={"lg:w-96 lg:h-96 w-32 h-32 animate-float"}/>
            </Row>
            <Spacer class={"my-10"}/>
            <Column>
                <For each={Object.entries(Frameworks)}>{([name, items]) =>
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
                }</For>
            </Column>
            <Divider class={"mx-10 my-6"}/>
            <Header size={6} class={"text-center"}>Contact me</Header>
            <ContactInfo
                onExternal={() => console.log()}
                icon={<AiOutlineMail size={36}/>}
                title={"E-mail"}
                value={"business@kasasbeh.net"}
            />
            <ContactInfo
                onExternal={() => console.log()}
                icon={<BsDiscord size={36}/>}
                title={"Discord"}
                value={"@revxrsal"}
            />
            <ContactInfo
                onExternal={() => console.log()}
                icon={<FaSolidPhone size={30}/>}
                title={"Phone number"}
                value={"TBA"}
            />
            <Spacer class={"my-5"}/>
        </main>
    );
}

function ContactInfo(props: {
    onExternal: () => void,
    icon: JSX.Element,
    title: string,
    value: string
}) {
    return <Row class={`lg:w-[36rem] w-96 m-3 bg-stone-950 rounded-md p-5 mx-auto justify-between`}>
        <Column>
            <Row>
                <div class={"fill text"}>
                    {props.icon}
                </div>
                <Spacer class={"m-3"}/>
                <Text class={"text-3xl select-none font-bold"}>{props.title}</Text>
            </Row>
            <Spacer class={"my-3"}/>
            <Row>
                <Text class={"text-xl"}>{props.value}</Text>
                <Spacer class={"mx-2"}/>
            </Row>
        </Column>
        <Row class={"justify-around"}>
            <IconButton onClick={async () => await navigator.clipboard.writeText(props.value)}>
                <VsCopy size={30}/>
            </IconButton>
            <Spacer class={"mx-2"}/>
            <IconButton onClick={props.onExternal}>
                <VsLinkExternal size={30}/>
            </IconButton>
        </Row>
    </Row>
}