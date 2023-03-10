import React from "react";
import Pledge from "./Pledge";
import { useEffect } from "react";
export default function About({
  project,
  setProject,
  showBackModal,
  setShowBackModal,
}) {
  const [aboutP1, aboutP2, aboutP3] = project.about.split(".");
  function handlePledgeSelect(currentReward) {
    const nextRewards = project.rewards.map((reward) => {
      if (reward.name === currentReward.name) {
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
    setShowBackModal(true);
  }
  useEffect(() => {
    function scrollToPledge() {
      const modal = document.getElementById("backModal");
      if (!modal) return;
      const currentReward = project.rewards.find(
        (reward) => reward.selected === true
      );
      if (!currentReward) return;
      const pledgeNodes = modal.querySelectorAll("li");
      pledgeNodes.forEach((node) => {
        if (node.id === currentReward.name) {
          node.scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        }
      });
    }
    scrollToPledge();
  }, [showBackModal]);
  return (
    <div className="bg-white p-12 px-6 shadow shadow-black/15 max-w-2xl mx-auto">
      <div>
        <h4 className="text-xl font-bold">About this project</h4>
        <p className="text-neutralGray mt-6">
          {aboutP1}.{aboutP2}. <br /> <br /> {aboutP3}.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        {project.rewards.map((reward) => {
          if (reward.name === "Pledge with no reward") {
            return;
          } else {
            return (
              <Pledge
                key={reward.name}
                reward={reward}
                onSelect={() => handlePledgeSelect(reward)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
