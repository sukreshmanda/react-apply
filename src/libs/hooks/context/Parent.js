import React, { createContext } from 'react'
import useAPICallOnMount from '../effect/useAPICallOnMount';
import ChildComponent from './ChildComponent';

export const UserContext = createContext();
export const ConfigurationContext = createContext();

function Parent() {
    let response = useAPICallOnMount(() => fetch("https://jsonplaceholder.typicode.com/posts"))
    return (
        <div>
            <UserContext.Provider value='sukresh'>
                <ConfigurationContext.Provider value={response}>
                    <ChildComponent/>
                </ConfigurationContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Parent