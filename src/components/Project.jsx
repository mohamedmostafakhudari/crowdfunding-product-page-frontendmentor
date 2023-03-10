import React from "react";
import { useState } from "react";
import BackModal from "./BackModal";
import ThankYouModal from "./ThankYouModal";
export default function Project({
  project,
  setProject,
  showBackModal,
  setShowBackModal,
  showThankYouModal,
  setShowThankYouModal,
}) {
  function handleBookmark() {
    setProject({
      ...project,
      bookmark: !project.bookmark,
    });
  }
  return (
    <>
      <div className="bg-white relative p-10 pt-12 px-4 shadow-lg rounded-lg -mt-14 max-w-2xl mx-auto md:px-8">
        <div className="absolute bottom-full translate-y-1/2 -translate-x-1/2 left-1/2">
          <img
            src="./assets/images/logo-mastercraft.svg"
            alt="mastercraftLogo"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-neutralBlack md:text-[1.6rem]">
            {project.name}
          </h3>
          <p className="text-neutralGray mt-4">{project.desc}.</p>
        </div>
        <div className="flex gap-2 mt-8 justify-center md:justify-between">
          <button
            onClick={() => setShowBackModal(true)}
            className="bg-primaryColor text-white font-bold p-4 px-10 rounded-[30px] duration-200 ease-in-out hover:bg-primaryActive"
          >
            Back this project
          </button>
          <div onClick={handleBookmark} className="cursor-pointer md:hidden">
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle
                  fill="#2F2F2F"
                  cx="28"
                  cy="28"
                  r="28"
                  className={`duration-200 ease-in-out ${
                    project.bookmark && "fill-primaryActive"
                  } hover:${!project.bookmark && "fill-neutralGray"}`}
                />
                <path
                  fill="#B1B1B1"
                  d="M23 19v18l5-5.058L33 37V19z"
                  className={`${project.bookmark && "fill-white"}`}
                />
              </g>
            </svg>
          </div>
          <div className="hidden bg-neutralGray/10 text-neutralGray font-bold rounded-[30px] min-w-[150px] group cursor-pointer md:flex md:items-center md:gap-3 md:pr-6">
            <div onClick={handleBookmark} className="">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle
                    fill="#2F2F2F"
                    cx="28"
                    cy="28"
                    r="28"
                    className={`duration-200 ease-in-out ${
                      project.bookmark && "fill-primaryActive"
                    } group-hover:${!project.bookmark && "fill-neutralGray"}`}
                  />
                  <path
                    fill="#B1B1B1"
                    d="M23 19v18l5-5.058L33 37V19z"
                    className={`${project.bookmark && "fill-white"}`}
                  />
                </g>
              </svg>
            </div>
            <div
              className={`duration-200 ease-in-out ${
                project.bookmark && "text-primaryActive"
              }`}
            >
              {project.bookmark ? "Bookmarked" : "Bookmark"}
            </div>
          </div>
        </div>
      </div>
      {showThankYouModal ? (
        <>
          <ThankYouModal
            project={project}
            setShowThankYouModal={setShowThankYouModal}
          />
        </>
      ) : showBackModal ? (
        <>
          <BackModal
            showModal={showBackModal}
            setShowModal={setShowBackModal}
            setShowThankYouModal={setShowThankYouModal}
            project={project}
            setProject={setProject}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
