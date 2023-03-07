import React from "react";
import CustomRadioInput from "./CustomRadioInput";
export default function BackModal({
  showModal,
  setShowModal,
  project,
  setProject,
}) {
  function handleSelectReward(name) {
    const nextRewards = project.rewards.map((reward) => {
      if (reward.name == name) {
        return {
          ...reward,
          selected: true,
        };
      } else {
        return {
          ...reward,
          selected: false,
        };
      }
    });
    setProject({
      ...project,
      rewards: nextRewards,
    });
  }
  return (
    <div
      className={`absolute inset-0 ${
        showModal && "bg-black/30"
      } grid place-items-center z-10 ${showModal ? "visible" : "invisible"}`}
    >
      <form className="mx-6 bg-white p-8 rounded-lg">
        <div>
          <h3 className="text-xl font-bold text-neutralBlack">
            Back this project
          </h3>
          <p className="text-neutralGray mt-8">
            Want to support us in bringing {project.name} out in the world?
          </p>
        </div>
        <ul>
          {project.rewards.map((reward) => {
            if (reward.name == "Pledge with no reward") {
              return (
                <li key={reward.name}>
                  <div>
                    <CustomRadioInput
                      reward={reward}
                      selectReward={() => handleSelectReward(reward.name)}
                    />
                  </div>
                </li>
              );
            } else {
              return (
                <li key={reward.name}>
                  <div>
                    <CustomRadioInput
                      reward={reward}
                      selectReward={() => handleSelectReward(reward.name)}
                    />
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </form>
    </div>
  );
}
