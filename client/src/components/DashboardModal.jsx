import React, { useState, useRef, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import FocusLock from "react-focus-lock";

function DashboardModal({ isModalOpen, handleCloseModal }) {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    thumbnail_url: null,
    photos_url: [],
  });
  const modalRef = useRef(null);
  const fetcher = useFetcher();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "thumbnail_url") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (name === "photos_url") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.from(files),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "photos_url") {
        formData[key].forEach((file) => formDataToSend.append("photos_url", file));
      } else if (key === "thumbnail_url") {
        formDataToSend.append("thumbnail_url", formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }
    fetcher.submit(formDataToSend, { method: "POST", action: "/dashboard", encType: "multipart/form-data" });
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      console.log("Réponse du serveur:", fetcher.data);
      if (fetcher.data.ok) {
        console.log("Projet ajouté avec succès:", fetcher.data.data.data);
        handleCloseModal();
      } else {
        console.error("Erreur lors de l'ajout du projet:", fetcher.data.error);
      }
    }
  }, [fetcher]);

  useEffect(() => {
    const dialogElement = modalRef.current;
    if (isModalOpen) {
      dialogElement.showModal();
    } else {
      dialogElement.close();
    }
  }, [isModalOpen]);

  const handleBackdropClick = (e) => {
    const dialogDimensions = modalRef.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      handleCloseModal();
    }
  };

  return (
    <FocusLock>
      <dialog
        ref={modalRef}
        className="bg-white p-6 rounded-lg w-full max-w-md place-self-center"
        onClick={handleBackdropClick}
      >
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="grid grid-cols-2 gap-4">
          <h2 className="text-2xl mb-4 col-span-2">Ajouter un projet</h2>
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
          <button type="button" onClick={handleCloseModal} className="bg-gray-300 px-4 py-2 rounded">
            Fermer
          </button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Ajouter
          </button>
        </form>
      </dialog>
    </FocusLock>
  );
}

export default DashboardModal;