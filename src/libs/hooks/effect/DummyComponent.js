import React from 'react'
import useAPICallOnMount from './useAPICallOnMount'

function DummyComponent() {
    let [loading, data, errored] = useAPICallOnMount(() => fetch("https://jsonplaceholder.typicode.com/posts"));

    let getPosts = () => {
        return data.map(item => 
            <div key={item.id}>{item.title}</div>
        )
    }
    return (
        <div>
            {!errored && !loading && getPosts()}
        </div>
    )
}

export default DummyComponent