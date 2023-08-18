import React, { useState } from "react";
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import {
  signInAuthUserWithEmailAndPasword,signInWithGooglePopUp,createUserDocument
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.componrnt";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signin() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password} = formFields;
  console.log(formFields);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  async function logWithGooglePopUp() {
    const response = await signInWithGooglePopUp();
    await createUserDocument(response.user);
    console.log(response);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
       let response = await signInAuthUserWithEmailAndPasword(email,password);
       console.log(response)
    } catch (error) {
        switch (error.code) {
            case "auth/user-not-found":
              alert("Email is not found");
              break;
            case "auth/wrong-password":
              alert("Password is wrong");
              break;
            default:
              console.log(error);
          }
    }
  }

  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="email"
          inputOptions={{
            onChange:handleChange,
            required: true,
            type: "email",
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="password"
          inputOptions={{
            onChange:handleChange,
            required: true,
            type: "password",
            name: "password",
            value: password,
          }}
        />
        <ButtonsContainer>
        <Button type='submit' >sign up</Button>
        <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logWithGooglePopUp} >Google signin</Button>
        </ButtonsContainer>
      </form>
      
    </SignInContainer>
  );
}

export default Signin;
