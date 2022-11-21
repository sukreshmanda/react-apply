import React, { useState } from 'react'

export default function StateHook() {
    let [id, setId] = useState(0);
    return (
        <div>
            <button onClick={() => setId(id => id+1)}>
                Counter {id}
            </button>
        </div>
    )
}
