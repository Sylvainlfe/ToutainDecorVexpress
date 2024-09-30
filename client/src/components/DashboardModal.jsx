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
  

  return (
    <FocusLock>
      <dialog
        ref={modalRef}
        className="bg-white p-6 rounded-lg w-full max-w-md place-self-center"
        onClick={handleBackdropClick}
      >
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="grid grid-cols-2 gap-4"
        >
          <h2 className="text-2xl mb-4 col-span-2">{editingProject ? "Modifier le projet" : "Ajouter un projet"}</h2>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titre"
            className="col-span-2 p-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Lieu du chantier"
            className="col-span-2 p-2 border rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="col-span-2 p-2 border rounded"
          />
          <input
            type="file"
            name="thumbnail_url"
            onChange={handleFileChange}
            className="col-span-2 p-2 border rounded"
          />
          <input
            type="file"
            name="photos_url"
            multiple
            onChange={handleFileChange}
            className="col-span-2 p-2 border rounded"
          />
          <button
            type="button"
            onClick={handleCloseModal}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Fermer
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editingProject ? "Modifier" : "Ajouter"}
          </button>
        </form>
      </dialog>
    </FocusLock>
  );
}

export default DashboardModal;
