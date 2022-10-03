import { useState } from "react";

let State = () =>{
    let [name, setName] = useState("");
    let [heroName, setHeroName] = useState("");
    return(
        <div>
            <p>Hello {name} a.k.a {heroName}</p>
            <input placeholder="name" onChange={e => setName(e.target.value)}/>
            <input placeholder="hero name" onChange={e => setHeroName(e.target.value)}/>
        </div>
    )
}

export default State;