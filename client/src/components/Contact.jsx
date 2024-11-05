import React from "react";

function Contact({
  handleChangeInputValue,
  fields,
  formValues,
  errors,
  handleSubmit,
}) {
  return (
    <main
      onSubmit={handleSubmit}
      className="flex items-center justify-center py-10 bg-fixed bg-bg-marbre bg-no-repeat bg-bottom bg-cover bg-black bg-opacity-50 bg-blend-overlay"
    >
      <form className="flex flex-col gap-4 lg:flex-row lg:border-2 lg:border-gold-500 lg:rounded-3xl lg:p-6 lg:backdrop-blur-xl">
        <div className="flex flex-col gap-4">
          {fields.slice(0, 4).map((field) => (
            <fieldset key={field.id} className="flex flex-col">
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
                  className="bg-[#0f1011] px-4 py-3 outline-none w-80 text-white rounded-lg border-2 transition-colors duration-100 focus:border-gold-400 border-gold-500"
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
                  className="bg-[#0f1011] px-4 py-3 outline-none w-80 h-12 text-white rounded-full border-2 transition-colors duration-100 focus:border-gold-400 border-gold-500"
                />
              )}
              {errors[field.id] && (
                <span className="text-red-500 text-sm mt-1">
                  {errors[field.id]}
                </span>
              )}
            </fieldset>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {fields.slice(4).map((field) => (
            <fieldset key={field.id} className="flex flex-col">
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
                  className="bg-[#0f1011] px-4 py-3 outline-none w-80 text-white rounded-lg border-2 transition-colors duration-100 focus:border-gold-400 border-gold-500"
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
                  className="bg-[#0f1011] px-4 py-3 outline-none w-80 h-12 text-white rounded-full border-2 transition-colors duration-100 focus:border-gold-400 border-gold-500"
                />
              )}
              {errors[field.id] && (
                <span className="text-red-500 text-sm mt-1">
                  {errors[field.id]}
                </span>
              )}
            </fieldset>
          ))}
          <button
            type="submit"
            className="w-80 h-12 flex justify-center items-center border-2 border-transparent text-xl font-bold text-[#0f1011] bg-gold-500 backdrop-blur-sm rounded-full hover:bg-transparent hover:text-gold-500 hover:border-gold-500 hover:border-2 hover:duration-300 mt-4"
          >
            Envoyer
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contact;
