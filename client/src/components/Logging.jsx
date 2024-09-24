import React from "react";
import { Link } from "react-router-dom";

function Logging({
  fields,
  formValues,
  handleChangeInputValue,
  errors,
  registerContent,
  url,
  loginContent,
  handleSubmit,
  message,
  handleCloseModal,
}) {
  console.log(formValues);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center bg-bg-marbre bg-no-repeat bg-center bg-cover h-lvh bg-black bg-opacity-50 bg-blend-overlay relative"
      >
        <h2 className="text-white mb-1">
          {url === "register" ? registerContent.title : loginContent.title}
        </h2>
        {fields.map((field) => (
          <fieldset key={field.id} className="flex flex-col mb-4">
            <label htmlFor={field.id} className="text-white mb-1">
              {field.text}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </label>

            <input
              type={field.type}
              id={field.id}
              name={field.id}
              ref={field.ref}
              value={formValues[field.id]}
              onChange={handleChangeInputValue}
              placeholder={field.text}
              aria-label={field.text}
              pattern={field.pattern}
              className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            />

            {errors && errors[field.id] && (
              <span className="text-red-500 text-sm mt-1">
                {errors[field.id]}
              </span>
            )}
          </fieldset>
        ))}
        <Link
          to={url === "register" ? "/loginPage" : "/register"}
          className="mb-10"
        >
          {url === "register"
            ? registerContent.linkToLogin
            : loginContent.linkToRegister}
        </Link>
        <button id="linkButton" type="submit" className="my-4">
          {url === "register" ? registerContent.button : loginContent.button}
        </button>
      </form>
      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>{message}</p>
            <button onClick={handleCloseModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Logging;
