import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <article className="flex flex-col justify-center items-center bg-bg-marbre bg-no-repeat bg-center bg-cover h-lvh bg-black bg-opacity-50 bg-blend-overlay relative">
      <h2 className="text-white">PLUS DE QUINZE ANNÉES D'EXPÉRIENCE</h2>
      <p className="text-white text-wrap indent-8 mx-8 my-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sint ut
        vero dolor natus quam eos quaerat. Et distinctio delectus enim rerum
        illum ut doloremque laboriosam, repellendus, molestiae deserunt
        consequatur. Illum enim pariatur aspernatur tempora, blanditiis quae
        dolor architecto ducimus quod aperiam, asperiores excepturi qui ullam ea
        deleniti error necessitatibus reprehenderit itaque quis? Tempore, magnam
        recusandae! Suscipit nemo culpa quia. Dolorum reprehenderit nobis illo
        eius voluptates eos. Qui porro eius eaque nostrum reiciendis autem
        perferendis illum, laboriosam assumenda natus corporis, saepe
        exercitationem quam odio molestias non labore laudantium voluptas
        officiis.
      </p>
      <Link to="/ProjectsPage" className="text-white">
        Découvrez
      </Link>
    </article>
  );
}

export default HeroSection;
