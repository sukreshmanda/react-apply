import { useState } from "react"
import ClassComponent from "../components/ClassComponent";
import Functional from "../components/Functional";

let ConditionalRendering = () => {
    let [toggle, setToggle] = useState(false);
    let condition = () => {
        if(toggle) return <ClassComponent/>
        else return <Functional/>
    }
    return (
        <div>
            <label className="switch">
                <input type="checkbox" onChange={e => {
                    console.log(e.target)
                    setToggle(e.target.checked)
                    }}/>
                <span className="slider round"></span>
            </label>
            {condition()}
        </div>
    )
}
export default ConditionalRendering;