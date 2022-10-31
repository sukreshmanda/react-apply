import { useState } from "react";
import {Button, Form, InputField } from "./Form";

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = () => {
        console.log(`userName : ${userName}`);
        console.log(`password : ${password}`);
    }
    return(
        <Form onSubmit={onSubmit} preventDefault={true}> 
            <InputField label="User Name" placeholder="username" onChange={(event) => setUserName(event.target.value)}/><br/>
            <InputField label="Password" placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)}/><br/>
            <Button>Submit</Button>
        </Form>
    );
}
export default LoginForm;