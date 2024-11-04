import React from "react";

function Contact({
  handleChangeInputValue,
  fields,
  formValues,
  errors,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-fixed bg-bg-marbre bg-no-repeat bg-bottom bg-cover bg-black bg-opacity-50 bg-blend-overlay"
    >
      {fields.map((field) => (
        <fieldset key={field.id} className="flex flex-col mb-4">
          <label htmlFor={field.id} className="font-bold mb-1 text-white">
            {field.text}{" "}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.id}
              ref={field.ref}
              value={formValues[field.id]}
              onChange={handleChangeInputValue}
              aria-label={field.text}
              className="bg-[#0f1011] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-gold-400 border-gold-500"
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
              className="bg-[#0f1011] px-4 py-3 outline-none w-full text-white rounded-full border-2 transition-colors duration-100 border-solid focus:border-gold-400 border-gold-500"
            />
          )}
          {errors[field.id] && (
            <span className="text-red-500 text-sm mt-1">
              {errors[field.id]}
            </span>
          )}
        </fieldset>
      ))}
      <button type="submit" className="my-4 col-span-2 flex justify-center items-center border border-transparent text-xl font-bold w-52 py-2 text-[#0f1011] bg-gold-500 backdrop-blur-sm rounded-full hover:bg-transparent hover:text-gold-500 hover:border-gold-500 hover:border hover:duration-300">
        Envoyer
      </button>
    </form>
  );
}

export default Contact;