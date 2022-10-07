import { useState } from "react";

let ListsAndKeys = () => {
    let [numbers, setNumber] = useState([]);
    let getNumberList = () => {
        return numbers.map(num => {
            return <div key={num}>{num}</div>
        });
    }
    let incrementClick = (e) => {
        if(numbers.length == 0) setNumber([0]);
        else setNumber([...numbers, numbers.at(-1)+1]);
    }
    let decrementClick = (e) => {
        setNumber(numbers.slice(0, numbers.length-1));
    }
    return(
        <div>
            <button onClick={incrementClick}>Increment</button>
            {getNumberList()}
            <button onClick={decrementClick}>Decrement</button>
        </div>
    )
}
export default ListsAndKeys;