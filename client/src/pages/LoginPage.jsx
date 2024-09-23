import React, { useRef, useState } from "react";
import Logging from "../components/Logging";
import { useLocation } from "react-router-dom";

const loginContent = {
  title: "Connexion",
  button: "Se connecter",
  linkToRegister: "Pas de compte ? Créez un compte",
};

const emptyFields = {
  email: "",
  password: "",
};

function LoginPage() {
  const path = useLocation();
  const url = path.pathname.substring(1);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [formValues, setFormValues] = useState(emptyFields);

  const fields = [
    {
      id: "email",
      text: "Email",
      type: "email",
      ref: emailRef,
      required: true,
      error: "L'email est invalide",
    },
    {
      id: "password",
      text: "Mot de passe",
      type: "password",
      ref: passwordRef,
      required: true,
      error:
        "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
    },
  ];

  const handleChangeInputValue = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return (
    <Logging
      fields={fields}
      formValues={formValues}
      handleChangeInputValue={handleChangeInputValue}
      loginContent={loginContent}
      url={url}
    />
  );
}

export default LoginPage;
