import Header from "~/components/typography/Header";
import Spacer from "~/components/decoration/Spacer";
import Biography from "~/components/Biography";
import {MyStory} from "~/data/Biography";
import Column from "~/components/layout/Column";
import Button from "~/components/input/Button";
import {useNavigate} from "@solidjs/router";

export default function Story() {
    const navigate = useNavigate();
    return <main>
        <Column class={"mx-12"}>
            <Header size={6}>My Story</Header>
            <Button onClick={() => navigate("/")} class={`mx-12 text-2xl`}>
                Go back
            </Button>
            <Spacer class={"my-4"}/>
            <Biography story={MyStory}/>
            <Spacer class={"my-4"}/>
        </Column>
    </main>;
}