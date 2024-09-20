import React, { useEffect, useRef, useState } from "react";
import Contact from "../components/Contact";
import { useActionData } from "react-router-dom";
import { useSubmit } from "react-router-dom";

const emptyFields = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  location: "",
  comment: "",
};
function ContactPage() {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const locationRef = useRef();
  const commentRef = useRef();

  const submit = useSubmit();

  const textLabel = [
    {
      required: true,
      type: "text",
      id: "firstname",
      for: "firstname",
      text: "Prénom",
      ref: firstNameRef,
    },
    {
      required: true,
      type: "text",
      id: "lastname",
      for: "lastname",
      text: "Nom",
      ref: lastNameRef,
    },
    {
      required: true,
      type: "email",
      id: "email",
      for: "email",
      text: "Email",
      ref: emailRef,
    },
    {
      required: true,
      type: "tel",
      id: "phone",
      for: "phone",
      text: "Téléphone",
      ref: phoneRef,
    },
    {
      required: true,
      type: "text",
      id: "location",
      for: "location",
      text: "Ville",
      ref: locationRef,
    },
    {
      required: true,
      type: "textarea",
      id: "comment",
      for: "comment",
      text: "Commentaire",
      ref: commentRef,
    },
  ];

  const actionData = useActionData();
  const [formValues, setFormValues] = useState(emptyFields);
  const [fields, setFields] = useState(textLabel);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formValues[field.id]) {
        newErrors[field.id] = "Ce champ est obligatoire";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChangeInputValue = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  useEffect(() => {
    if (actionData) {
      if (actionData.ok) {
        alert("Email envoyé avec succès !");
        setFormValues(emptyFields);
      } else {
        alert("Erreur lors de l'envoi de l'email.");
      }
    }
  }, [actionData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submit(formValues, { method: "post", action: "/ContactPage" });
    }
  };

  return (
    <Contact
      handleChangeInputValue={handleChangeInputValue}
      handleSubmit={handleSubmit}
      fields={fields}
      formValues={formValues}
      emailRef={emailRef}
      firstNameRef={firstNameRef}
      lastNameRef={lastNameRef}
      phoneRef={phoneRef}
      locationRef={locationRef}
      commentRef={commentRef}
      errors={errors}
    />
  );
}

export default ContactPage;
