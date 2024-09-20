import React from "react";

function ProjectCard() {
  return (
    <article className="border border-logo-color card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] group gap-[0.5em] flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden bg-[#222630] cursor-pointer">
      <h2 className="">Projet 1</h2>
      <p className="text-[1.2em]">By Hirohiko Araki</p>
      <p className="font-nunito block text-black font-light h-[0em] group-hover:h-[10em] leading-[1.2em] duration-500 overflow-hidden">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
        officiis, dolorem ab animi magnam culpa fugit error voluptates adipisci,
        debitis ut fuga at nisi laborum suscipit a eos similique unde.
      </p>
    </article>
  );
}

export default ProjectCard;
