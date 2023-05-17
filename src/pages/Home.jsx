import {Animate} from "../components/Animate";
import {HowWork} from "../components/HowWork";
import {Expertise} from "../components/Expertise";
import {Categories} from "../components/Categories";

export function Home() {
    return (
        <div>
            <Animate/>
            <Expertise/>
            <HowWork/>
            <Categories/>
        </div>
    )
}