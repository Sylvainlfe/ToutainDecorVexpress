import React, { useRef, useState } from 'react';
import { useLocation, useNavigate, useSubmit } from 'react-router-dom';
import Logging from '../components/Logging';

const emptyFields = {
  email: "",
  password: "",
};

const registerContent = {
  title: "Inscription",
  button: "Créer votre compte",
  linkToLogin: "Déjà un compte ? Connectez-vous.",
};

function RegisterPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const submit = useSubmit();

  const textLabel = [
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
      error: "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
    //   pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
    },
  ];

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(emptyFields);
  const [fields, setFields] = useState(textLabel);
  const path = useLocation();
  const url = path.pathname.substring(1);

  const handleChangeInputValue = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    submit(formValues, { method: "post", action: "/register" });
  };

  return (
    <Logging 
      fields={fields}
      formValues={formValues}
      handleChangeInputValue={handleChangeInputValue}
      handleSubmit={handleSubmit}
      navigate={navigate}
      registerContent={registerContent}
      url={url}
    />
  );
}

export default RegisterPage;