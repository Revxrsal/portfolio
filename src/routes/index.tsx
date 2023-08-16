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

export default function Home() {
    const [currentDev, setCurrentDev] = createSignal(development[0]);
    onMount(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setCurrentDev(development[index % development.length])
        }, 3000)
        onCleanup(() => clearInterval(interval))
    })
    return (
        <main>
            <TopWave/>
            <Column>
                <Header size={6}>Hello 👋, I'm Ali </Header>
                <Row>
                    <Header size={3} class={"w-max mr-3 whitespace-nowrap"}>I've done</Header>
                    <div class={"w-max"}>
                        <Text
                            class={`text-3xl underline font-mono my-12 animate-typing pr-1
                        brightness-75 overflow-hidden border-r-2 border-r-stone-800 dark:border-r-white 
                        whitespace-nowrap`}
                        >{currentDev()}</Text>
                    </div>
                </Row>
            </Column>
            <BottomWave/>
        </main>
    );
}
