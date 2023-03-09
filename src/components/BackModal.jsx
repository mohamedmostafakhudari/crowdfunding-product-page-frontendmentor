import React from "react";
import Pledge from "./Pledge";
import { useState } from "react";
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
  }
  return (
    <div
      className={`absolute inset-0 ${
        showModal && "bg-black/30"
      } grid place-items-center z-10 ${showModal ? "visible" : "invisible"}`}
    >
      <form onSubmit={handleSubmit} className="mx-6 bg-white p-8 rounded-lg">
        <div>
          <h3 className="text-xl font-bold text-neutralBlack">
            Back this project
          </h3>
          <p className="text-neutralGray mt-8">
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
