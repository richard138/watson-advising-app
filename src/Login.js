import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        // TODO: fix this, doesn't work right now
        const url="https://uncw.instructure.com/login/ldap";
        fetch(url, {
            method: "POST",
            credentials: {
                "pseudonym_session[unique_id]": email,
                "pseudonym_session[password]": password,
                "pseudonym_session[remember_me]": 0
            },
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Host": "uncw.instructure.com",
                "Origin": "https://uncw.instructure.com",
                "Referer": "https://uncw.instructure.com/login/ldap",
                "Upgrade-Insecure-Requests": "1",
            },
        }).then((resp) => {
            console.log(resp.json(), "success");
        }).catch((error) => {
            console.error(error, "Something went wrong")
        });
    }

    return (
        <div className={"Login"}>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId={"email"} bssize={"large"}>
                    <FormLabel>Email</FormLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </FormGroup>
                <FormGroup controlId={"password"} bssize={"large"}>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={"password"}
                    />
                </FormGroup>
                <Button block bssize={"large"} disabled={!validateForm()} type={"submit"}>
                    Login
                </Button>
            </form>
        </div>
    );
}