import React from "react";
import { useState } from "react";
import BackModal from "./BackModal";
export default function Project({ project, setProject }) {
  const [showBackModal, setShowBackModal] = useState(true);
  function handleBack() {}
  function handleBookmark() {
    setProject({
      ...project,
      bookmark: !project.bookmark,
    });
  }
  return (
    <>
      <div className="bg-white relative p-10 pt-12 px-5 shadow-lg rounded-lg -mt-14">
        <div className="absolute bottom-full translate-y-1/2 -translate-x-1/2 left-1/2">
          <img
            src="./assets/images/logo-mastercraft.svg"
            alt="mastercraftLogo"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-neutralBlack">
            {project.name}
          </h3>
          <p className="text-neutralGray mt-4">{project.desc}.</p>
        </div>
        <div className="flex gap-2 mt-6">
          <button
            onClick={handleBack}
            className="bg-primaryColor text-white font-bold p-4 px-10 rounded-[30px] duration-200 ease-in-out hover:bg-primaryActive"
          >
            Back this project
          </button>
          <div onClick={handleBookmark} className="cursor-pointer">
            <img src="./assets/images/icon-bookmark.svg" alt="bookmark" />
          </div>
        </div>
      </div>
      <BackModal
        showModal={showBackModal}
        setShowModal={setShowBackModal}
        project={project}
        setProject={setProject}
      />
    </>
  );
}
