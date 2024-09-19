import React, { useState } from "react";

function Contact({ handleChangeInputValue, fields, formValues, emailRef, firstNameRef, lastNameRef, phoneRef, locationRef, commentRef }) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    fields.forEach(field => {
      if (field.required && !formValues[field.id]) {
        newErrors[field.id] = "Ce champ est obligatoire";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log('Envoi des données:', formValues);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
        if (data.emailSent) {
          alert('Message envoyé avec succès !');
          // Réinitialiser le formulaire ici si nécessaire
        } else {
          alert('Le message a été enregistré, mais l\'envoi de l\'email a échoué.');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
        alert('Une erreur est survenue lors de l\'envoi du message.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-end bg-bg-marbre bg-no-repeat bg-center bg-cover h-lvh bg-black bg-opacity-50 bg-blend-overlay relative">
      {fields.map((field) => (
        <fieldset key={field.id} className="flex flex-col mb-4">
          <label htmlFor={field.id} className="text-white mb-1">
            {field.text} {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.id}
              ref={field.ref}
              value={formValues[field.id]}
              onChange={handleChangeInputValue}
              aria-label={field.text}
              className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              ref={field.ref}
              value={formValues[field.id]}
              onChange={handleChangeInputValue}
              placeholder={field.text}
              aria-label={field.text}
              className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            />
          )}
          {errors[field.id] && <span className="text-red-500 text-sm mt-1">{errors[field.id]}</span>}
        </fieldset>
      ))}
      <button id="linkButton" type="submit" className="my-4">
        Envoyer
      </button>
    </form>
  );
}

export default Contact;