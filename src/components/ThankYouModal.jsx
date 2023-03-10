import React from "react";

export default function ThankYouModal({ project, setShowThankYouModal }) {
  return (
    <div
      className="absolute inset-0 bg-black/30 grid place-items-center z-10 px-6"
      style={{ marginTop: "0px" }}
    >
      <div className="bg-white rounded-lg p-6 py-8 flex flex-col items-center gap-6 text-center max-w-md -mt-52 md:mt-0">
        <div>
          <img src="./assets/images/icon-check.svg" alt="check" />
        </div>
        <h5 className="font-bold text-lg">Thanks for your support</h5>
        <p className="text-neutralGray">
          Your pledge brings us one step closer to sharing {project.name}{" "}
          worldwide. You will get an email once our campaign is completed.
        </p>
        <button
          className="bg-primaryColor text-white p-3 px-8 font-bold rounded-[25px]"
          onClick={() => setShowThankYouModal(false)}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
