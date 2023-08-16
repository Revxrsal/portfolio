import TopWave from "~/components/wave/TopWave";
import BottomWave from "~/components/wave/BottomWave";
import Header from "~/components/typography/Header";
import Column from "~/components/layout/Column";
import Text from "~/components/typography/Text";
import Row from "~/components/layout/Row";
import {createSignal, onCleanup, onMount} from "solid-js";

const development = [
    "systems programming",
    "Android apps",
    "desktop apps",
    "back-end development",
    "front-end development",
    "game development",
    "Minecraft plugins",
    "Minecraft mods"
]

function Experience() {
    const [currentDev, setCurrentDev] = createSignal(development[0]);
    onMount(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setCurrentDev(development[index % development.length])
        }, 3000)
        onCleanup(() => clearInterval(interval))
    })
    return <Row>
        <Header size={3} class={"lg:text-3xl text-xl w-max mr-3 whitespace-nowrap"}>I've done</Header>
        <div class={"w-max"}>
            <Text
                class={`lg:text-3xl text-xl underline font-mono my-12 animate-typing pr-1
                        brightness-75 overflow-hidden border-r-2 border-r-stone-800 dark:border-r-white 
                        whitespace-nowrap`}
            >{currentDev()}</Text>
        </div>
    </Row>
}

export default function Home() {
    return (
        <>
            <main>
                <TopWave/>
                <Row class={"justify-evenly"}>
                    <Column>
                        <h1 class={"text font-bold lg:m-12 lg:text-6xl text-3xl"}>Hello 👋, I'm Ali </h1>
                        <Experience/>
                    </Column>
                    <img src="/desktop-computer.png" alt="Desktop computer" class={"lg:w-96 lg:h-96 w-32 h-32 animate-float"}/>
                </Row>
                <BottomWave/>
            </main>
        </>);
}
