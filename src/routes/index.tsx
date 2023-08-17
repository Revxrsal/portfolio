import Header from "~/components/typography/Header";
import Column from "~/components/layout/Column";
import Row from "~/components/layout/Row";
import {JSX} from "solid-js";
import Spacer from "~/components/decoration/Spacer";
import Text from "~/components/typography/Text";
import {VsCopy, VsLinkExternal} from "~/components/icons/vs";
import {AiOutlineMail} from "~/components/icons/ai";
import {BsDiscord} from "~/components/icons/bs";
import {FaSolidPhone} from "~/components/icons/fa";
import IconButton from "~/components/button/IconButton";
import DisplayFrameworks from "~/components/Frameworks";
import Flex from "~/components/layout/Flex";

export default function Home() {
    return (
        <main>
            <Flex class={"center flex-col lg:flex-row justify-evenly"}>
                <Text class={"text-6xl lg:text-7xl font-bold lg:m-12 text-center"}>
                    Hello 👋 I'm Ali
                </Text>
                <img src="/desktop-computer.png" alt="Desktop computer"
                     class={"lg:w-96 lg:h-96 w-48 h-48 animate-float image-non-draggable my-12"}/>
            </Flex>
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