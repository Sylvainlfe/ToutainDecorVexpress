import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <article className="flex flex-col justify-center items-center bg-fixed bg-bg-marbre bg-no-repeat bg-bottom bg-cover h-screen bg-black bg-opacity-50 bg-blend-overlay ">
      <h2 className="text-white">PLUS DE QUINZE ANNÉES D'EXPÉRIENCE</h2>
      <p className="text-white text-wrap indent-8 mx-8 my-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sint ut
        vero dolor natus quam eos quaerat. Et distinctio delectus enim rerum
        illum ut doloremque laboriosam, repellendus, molestiae deserunt
        consequatur. Illum enim pariatur aspernatur tempora, blanditiis quae
        dolor architecto ducimus quod aperiam, asperiores excepturi qui ullam ea
        deleniti error necessitatibus reprehenderit itaque quis? Tempore, magnam
        recusandae! Suscipit nemo culpa quia. Dolorum reprehenderit nobis illo
        eius voluptates eos.
      </p>
      <button>
        <Link to="/ProjectsPage" className="flex justify-center items-center border-2 border-transparent text-xl font-bold w-32 py-2 text-[#0f1011] bg-gold-500 backdrop-blur-sm rounded-full hover:bg-transparent hover:text-gold-500 hover:border-gold-500 hover:border-2 hover:duration-300">
          Découvrez
        </Link>
      </button>
    </article>
  );
}

export default HeroSection;
