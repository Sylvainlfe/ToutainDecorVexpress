import React, { useState, useRef, useEffect } from 'react';

function DashboardModal({ isModalOpen, handleCloseModal }) {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: ''
  });
  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleCloseModal();
  };

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
    <dialog 
      ref={modalRef} 
      className="bg-white p-6 rounded-lg w-full max-w-md place-self-center"
      onClick={handleBackdropClick}
    >
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
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
          <button type="button" className="bg-gray-200 px-4 py-2 rounded">Miniature</button>
          <button type="button" className="bg-gray-200 px-4 py-2 rounded">Photos</button>
          <button type="button" onClick={handleCloseModal} className="bg-gray-300 px-4 py-2 rounded">Fermer</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
        </form>
    </dialog>
  );
}

export default DashboardModal;