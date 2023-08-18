import React from "react";
import { AuthenticationContainer } from './authentication.styles';
import Signup from "../../component/sign-up-form/sign-up-form.component";
import Signin from "../../component/sign-in-form/sign-in-form.comonent";

const Authentication = () =>{

    return (
        <AuthenticationContainer>
            <Signin/>
            <Signup/>
        </AuthenticationContainer>
    )
}

export default Authentication