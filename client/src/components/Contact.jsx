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
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:bg-marbre-gris lg:bg-no-repeat lg:bg-[center_top_-7.5rem] lg:bg-cover lg:bg-black lg:bg-opacity-50 bg-blend-overlay p-4 bg-light-color"
    >
      {fields.map((field) => (
        <fieldset key={field.id} className="flex flex-col mb-4">
          <label htmlFor={field.id} className="lg:text-white mb-1 text-[#222630]">
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
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-gold-color border-[#2B3040]"
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
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-gold-color border-[#2B3040]"
            />
          )}
          {errors[field.id] && (
            <span className="text-red-500 text-sm mt-1">
              {errors[field.id]}
            </span>
          )}
        </fieldset>
      ))}
      <button type="submit" className="my-4 col-span-1 lg:col-span-2 bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid border-[#2B3040] hover:bg-gold-color hover:text-[#2B3040]">
        Envoyer
      </button>
    </form>
  );
}

export default Contact;