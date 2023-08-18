import React, { useState } from "react";

import {
  creatAuthUserWithEmailAndPasword,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.componrnt";
import { SignUpContainer } from './sign-up-form.styles';
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password are not match");
      return;
    }
    try {
      var { user } = await creatAuthUserWithEmailAndPasword(email, password);
      await createUserDocument(user, { displayName });
      alert("login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use,try using different email");
        return;
      } else {
        console.log("Error while creating user with email and password", error);
      }
    }
  }

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          inputOptions={{
            onChange:handleChange,
            required: true,
            type: "text",
            name: "displayName",
            value: displayName,
          }}
        />

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

        <FormInput
          label="confirm password"
          inputOptions={{
            onChange:handleChange,
            required: true,
            type: "password",
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type='submit' >sign up</Button>
      </form>
    </SignUpContainer>
  );
}

export default Signup;
