import React from "react";
import Stats from "./Stats";
import About from "./About";
import Project from "./Project";
import { useState } from "react";
const initialProject = {
  name: "Mastercraft Bamboo Monitor Riser",
  desc: "A beautifully handcrafted monitor stand to reduce neck and eye strain",
  bookmark: false,
  backAmount: 89914,
  totalBacked: 100000,
  backers: 5007,
  daysLeft: 56,
  about:
    "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand",
  rewards: [
    {
      name: "Pledge with no reward",
      desc: "",
      offer:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      left: "",
      selected: false,
    },
    {
      name: "Bamboo Stand",
      desc: "Pledge $25 or more",
      offer:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list",
      left: 101,
      selected: false,
      minAmount: 25,
      enteredAmount: 25,
      error: false,
    },
    {
      name: "Black Edition Stand",
      desc: "Pledge $75 or more",
      offer:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included",
      left: 64,
      selected: false,
      minAmount: 75,
      enteredAmount: 75,
      error: false,
    },
    {
      name: "Mahogany Special Edition",
      desc: "Pledge $200 or more",
      offer:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included",
      left: 0,
      selected: false,
      minAmount: 200,
      enteredAmount: 200,
      error: false,
    },
  ],
};
export default function Main() {
  const [project, setProject] = useState(initialProject);
  const [showBackModal, setShowBackModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  return (
    <main className="">
      <div className="container mx-auto px-6 space-y-6">
        <Project
          project={project}
          setProject={setProject}
          showBackModal={showBackModal}
          setShowBackModal={setShowBackModal}
          showThankYouModal={showThankYouModal}
          setShowThankYouModal={setShowThankYouModal}
        />
        <Stats project={project} />
        <About
          project={project}
          showBackModal={showBackModal}
          setProject={setProject}
          setShowBackModal={setShowBackModal}
        />
      </div>
    </main>
  );
}
