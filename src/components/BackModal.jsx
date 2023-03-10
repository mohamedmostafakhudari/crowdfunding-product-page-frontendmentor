import React from "react";
import Pledge from "./Pledge";
import { useState } from "react";

export default function BackModal({
  showModal,
  setShowModal,
  setShowThankYouModal,
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
  function handlePledgeAmountChange(e) {
    const nextRewards = project.rewards.map((reward) => {
      if (reward.selected) {
        return {
          ...reward,
          enteredAmount: e.target.value,
          error: false,
        };
      } else {
        return {
          ...reward,
          error: false,
        };
      }
    });
    setProject({
      ...project,
      rewards: nextRewards,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const currentReward = project.rewards.find(
      (reward) => reward.selected === true
    );
    if (currentReward.enteredAmount) {
      if (currentReward.enteredAmount < currentReward.minAmount) {
        const nextRewards = project.rewards.map((reward) => {
          if (reward.name === currentReward.name) {
            return {
              ...reward,
              error: true,
            };
          } else {
            return {
              ...reward,
              error: false,
            };
          }
        });
        setProject({
          ...project,
          rewards: nextRewards,
        });
        return;
      }
      const nextRewards = project.rewards.map((reward) => {
        if (reward.name === currentReward.name) {
          return {
            ...reward,
            left: --reward.left,
          };
        } else {
          return reward;
        }
      });
      const nextProject = {
        ...project,
        backAmount:
          Number(project.backAmount) + Number(currentReward.enteredAmount),
        backers: ++project.backers,
        rewards: nextRewards,
      };
      setProject(nextProject);
    } else {
      const nextProject = {
        ...project,
        backers: ++project.backers,
      };
      setProject(nextProject);
    }
    setShowThankYouModal(true);
    setShowModal(false);
  }
  return (
    <div
      id="backModal"
      className={`absolute inset-0 ${
        showModal && "bg-black/30"
      } grid place-items-center z-10 ${showModal ? "visible" : "invisible"}`}
      style={{ marginTop: "0px" }}
    >
      <form
        onSubmit={handleSubmit}
        className="mx-6 bg-white p-8 rounded-lg max-w-2xl mt-32 md:mt-40"
      >
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutralBlack">
              Back this project
            </h3>
            <div
              onClick={() => setShowModal(false)}
              className="p-2 cursor-pointer group"
            >
              <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                  fill="#000"
                  fillRule="evenodd"
                  opacity=".4"
                  className="duration-200 ease-in-out group-hover:opacity-100"
                />
              </svg>
            </div>
          </div>
          <p className="text-neutralGray mt-6">
            Want to support us in bringing {project.name} out in the world?
          </p>
        </div>
        <ul className="mt-7 space-y-8">
          {project.rewards.map((reward) => {
            if (reward.name == "Pledge with no reward") {
              return (
                <Pledge
                  key={reward.name}
                  modalEdition={true}
                  reward={reward}
                  onSelect={handleSelectReward}
                  withNoReward={true}
                />
              );
            } else {
              return (
                <Pledge
                  key={reward.name}
                  modalEdition={true}
                  reward={reward}
                  onSelect={handleSelectReward}
                  onAmountChange={handlePledgeAmountChange}
                  error={reward.error}
                  withNoReward={false}
                />
              );
            }
          })}
        </ul>
      </form>
    </div>
  );
}
