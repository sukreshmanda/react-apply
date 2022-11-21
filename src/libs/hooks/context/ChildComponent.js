import React, { useContext } from 'react'
import { ConfigurationContext, UserContext } from './Parent'

function ChildComponent() {
    let userName = useContext(UserContext);
    let [loading, data, errored] = useContext(ConfigurationContext);

    let getPosts = () => {
        return data.map(item => 
            <div key={item.id}>{item.title}</div>
        );
    }
    return (
        <div>
            <h1>UserName is {userName}</h1>
            <div>
                {!errored && !loading && getPosts()}
            </div> 
        </div>
    )
}

export default ChildComponent