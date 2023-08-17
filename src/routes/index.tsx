import Header from "~/components/typography/Header";
import Column from "~/components/layout/Column";
import Row from "~/components/layout/Row";
import {createSignal, JSX, onCleanup, onMount} from "solid-js";
import Spacer from "~/components/decoration/Spacer";
import {Development} from "~/data/DisplayItems";
import Text from "~/components/typography/Text";
import {VsCopy, VsLinkExternal} from "~/components/icons/vs";
import {AiOutlineMail} from "~/components/icons/ai";
import {BsDiscord} from "~/components/icons/bs";
import {FaSolidPhone} from "~/components/icons/fa";
import IconButton from "~/components/button/IconButton";
import DisplayFrameworks from "~/components/Frameworks";

function Experience() {
    const [typing, setTyping] = createSignal(Development[0]);
    onMount(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setTyping(Development[index % Development.length])
        }, 3000)
        onCleanup(() => clearInterval(interval))
    })
    return <Row class={"items-center justify-between w-96"}>
        <Header size={3} class={"lg:text-3xl text-xl mr-3 whitespace-nowrap"}>I've done</Header>
        <div class={"w-max"}>
            <code>
                <Text
                    class={`lg:text-3xl text-xl underline font-mono my-12 animate-typing pr-1
                        brightness-75 overflow-hidden border-r-2 border-r-stone-800 dark:border-r-white 
                        whitespace-nowrap`}>
                    {typing()}
                </Text>
            </code>
        </div>
    </Row>
}

export default function Home() {
    return (
        <main>
            <Column center>
                <Row class={"justify-evenly w-full"}>
                    <Column>
                        <Text class={"text-5xl lg:text-7xl font-bold m-3 lg:m-12"}>Hello 👋 I'm Ali </Text>
                        <Experience/>
                    </Column>
                    <img src="/desktop-computer.png" alt="Desktop computer"
                         class={"lg:w-96 lg:h-96 w-48 h-48 animate-float invisible lg:visible image-non-draggable my-12"}/>
                </Row>
            </Column>
            <Column>
                <DisplayFrameworks/>
            </Column>
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