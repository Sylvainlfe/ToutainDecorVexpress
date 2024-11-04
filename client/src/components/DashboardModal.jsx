import React from "react";
import FocusLock from "react-focus-lock";

function DashboardModal({
  handleCloseModal,
  editingProject,
  handleChange,
  handleFileChange,
  handleSubmit,
  formData,
  modalRef,
  handleBackdropClick,
}) {
  
  const inputStyle = "bg-[#0f1011] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-gold-400 border-gold-500"
  const buttonStyle = "flex justify-center items-center border-2 border-transparent text-xl font-bold py-2 backdrop-blur-sm rounded-full hover:bg-transparent hover:text-gold-500 hover:border-gold-500 hover:border-2 hover:duration-300"

  return (
    <FocusLock>
      <dialog
        ref={modalRef}
        className="bg-gradient-to-r from-gray-700 via-gray-900 to-[#0f1011] p-6 rounded-lg place-self-center"
        onClick={handleBackdropClick}
      >
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="grid grid-cols-2 gap-4"
        >
          <h2 className="text-3xl place-self-center col-span-2 text-white">{editingProject ? "Modifier le projet" : "Ajouter un projet"}</h2>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titre"
            className={`col-span-2 ${inputStyle}`}
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Lieu du chantier"
            className={`col-span-2 ${inputStyle}`}
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className={`col-span-2 ${inputStyle}`}
          />
          <input
            type="file"
            name="thumbnail_url"
            onChange={handleFileChange}
            className={`col-span-2 ${inputStyle}`}
          />
          <input
            type="file"
            name="photos_url"
            multiple
            onChange={handleFileChange}
            className={`col-span-2 ${inputStyle}`}
          />
          <button
            type="button"
            onClick={handleCloseModal}
            className={`bg-black text-white ${buttonStyle}`}
          >
            Fermer
          </button>
          <button
            type="submit"
            className={`bg-gold-500 text-[#0f1011] ${buttonStyle}`}
          >
            {editingProject ? "Modifier" : "Ajouter"}
          </button>
        </form>
      </dialog>
    </FocusLock>
  );
}

export default DashboardModal;
