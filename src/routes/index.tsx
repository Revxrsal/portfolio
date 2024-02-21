import Header from "~/components/typography/Header";
import Column from "~/components/layout/Column";
import Row from "~/components/layout/Row";
import {JSX} from "solid-js";
import Spacer from "~/components/decoration/Spacer";
import Text from "~/components/typography/Text";
import {VsCopy, VsLinkExternal} from "solid-icons/vs";
import IconButton from "~/components/button/IconButton";
import Flex from "~/components/layout/Flex";
import Divider from "~/components/decoration/Divider";
import {AiOutlineMail} from "solid-icons/ai";
import {BsDiscord} from "solid-icons/bs";
import {FaSolidPhone} from "solid-icons/fa";
import {useNavigate} from "@solidjs/router";
import Button from "~/components/input/Button";
import MyProjects from "~/components/Frameworks";

export default function Home() {
    const navigate = useNavigate();
    return (
        <main>
            <Flex class={"center flex-col lg:flex-row justify-evenly"}>
                <Column class={"center"}>
                    <Text class={"text-6xl lg:text-7xl font-bold lg:m-12 text-center"}>
                        Hello 👋 <span class={"visible lg:sr-only"}><br/></span> I'm Ali
                    </Text>
                    <Text class={"text-3xl lg:text-4xl p-6 text-center leading-relaxed"}>
                        Speaking the language of computers since 2015
                    </Text>
                </Column>
                <img src="/desktop-computer.png" alt="Desktop computer"
                     class={"lg:w-96 lg:h-96 w-48 h-48 animate-float image-non-draggable my-12"}/>
            </Flex>

            <Divider class={"mx-10 my-6"}/>
            <Column class={"mx-12"} center>
                <Header size={5} class={"text-center"}>My Story</Header>
                <Button
                    onClick={() => navigate("/story")}
                    class={`text-2xl`}
                >
                    Click here to read it!
                </Button>
                <Divider class={"m-4 mt-10 w-full"}/>
            </Column>
            <Header size={6} class={"text-center"}>My Projects</Header>
            <MyProjects/>

            <Header size={6} class={"text-center"}>Contact me</Header>
            <ContactDetails/>
            <Spacer class={"my-5"}/>
        </main>
    );
}

function ContactDetails() {
    return <>
        <ContactInfo
            onExternal={() => console.log()}
            icon={<AiOutlineMail size={36}/>}
            title={"E-mail"}
            value={"business@kasasbeh.net"}/>
        <ContactInfo
            onExternal={() => console.log()}
            icon={<BsDiscord size={36}/>}
            title={"Discord"}
            value={"@revxrsal"}/>
        <ContactInfo
            onExternal={() => console.log()}
            icon={<FaSolidPhone size={30}/>}
            title={"Phone number"}
            value={"TBA"}/>
    </>
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