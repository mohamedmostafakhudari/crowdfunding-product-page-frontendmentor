import React from "react";
import CustomRadioInput from "./CustomRadioInput";
export default function Pledge({
  modalEdition = false,
  reward,
  onSelect,
  onAmountChange,
  error,
  withNoReward,
}) {
  if (withNoReward && modalEdition) {
    return (
      <li
        key={reward.name}
        className={`border duration-200 ease-in-out ${
          reward.selected ? "border-primaryColor" : "border-neutralGray/50"
        } rounded-lg p-8 py-10 duration-200 ease-in-out`}
      >
        <div>
          <div>
            <CustomRadioInput
              reward={reward}
              selectReward={() => onSelect(reward.name)}
            />
          </div>
          <div className="text-neutralGray mt-6">{reward.offer}</div>
        </div>
        <div
          className={`flex ${
            reward.selected
              ? "mt-6 visible opacity-100"
              : "-mt-12 invisible opacity-0"
          } duration-200 ease-in-out`}
        >
          <button className="flex-1 bg-primaryColor text-white font-medium p-2 rounded-[30px] px-3 duration-200 ease-in-out hover:bg-primaryActive">
            Continue
          </button>
        </div>
      </li>
    );
  }
  if (modalEdition) {
    return (
      <li
        key={reward.name}
        id={reward.name}
        className={`border duration-200 ease-in-out ${
          reward.selected ? "border-primaryColor" : "border-neutralGray/50"
        } rounded-lg ${
          reward.left ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="p-6 py-10">
          <div>
            <CustomRadioInput
              reward={reward}
              selectReward={() => onSelect(reward.name)}
            />
          </div>
          <div
            className={`mt-6 ${
              reward.left ? "text-neutralGray" : "text-neutralGray/50"
            }`}
          >
            {reward.offer}
          </div>
          <div className="mt-6">
            <span
              className={`${
                reward.left ? "text-neutralBlack" : "text-neutralGray"
              } font-bold`}
            >
              {reward.left}
            </span>
            <span
              className={`${
                reward.left ? "text-neutralGray" : "text-neutralGray/50"
              } ml-2`}
            >
              left
            </span>
          </div>
        </div>
        <div
          className={`duration-200 ease-in-out  ${
            reward.selected
              ? "mt-0 visible opacity-100"
              : "-mt-36 invisible opacity-0"
          }`}
        >
          <hr />
          <div className="text-neutralGray text-center mt-8">
            Enter your pledge
          </div>
          <div className="flex items-stretch gap-2 my-6 px-4">
            <div className="relative flex-1">
              <input
                type="tel"
                value={reward.enteredAmount}
                className="border absolute inset-0 w-full h-full block rounded-[30px] text-center focus:outline-none hover:outline-none hover:border-primaryActive/50 focus:border-primaryActive/50"
                onChange={onAmountChange}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutralGray/50">
                $
              </span>
            </div>
            <button className="flex-1 bg-primaryColor text-white font-medium p-2 rounded-[30px] px-3 duration-200 ease-in-out hover:bg-primaryActive">
              Continue
            </button>
          </div>
          <div className="text-red-600 text-sm text-center py-2">
            {error &&
              `Minimum Amount Should Be $${reward.minAmount} For This Pledge`}
          </div>
        </div>
      </li>
    );
  }

  return (
    <div className="border border-neutralGray/50 rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h5
          className={`text-neutralBlack font-bold ${
            !reward.left && "text-neutralGray"
          } md:text-lg`}
        >
          {reward.name}
        </h5>
        <span
          className={`${
            reward.left ? "text-primaryColor" : "text-neutralGray/50"
          }`}
        >
          {reward.desc}
        </span>
      </div>
      <p
        className={`mt-8 ${
          reward.left ? "text-neutralGray" : "text-neutralGray/50"
        }`}
      >
        {reward.offer}
      </p>
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="mt-8 flex items-center gap-2">
          <span
            className={`${
              reward.left ? "text-black" : "text-neutralGray"
            } text-4xl font-bold`}
          >
            {reward.left}
          </span>
          <span
            className={`${
              reward.left ? "text-neutralGray" : "text-neutralGray/50"
            }`}
          >
            left
          </span>
        </p>
        <button
          className={`text-white p-3 px-8 rounded-[30px] font-bold mt-8 duration-200 ease-in-out ${
            reward.left ? "bg-primaryColor" : "bg-neutralGray/50"
          } ${
            reward.left ? "pointer-events-auto" : "pointer-events-none"
          } hover:bg-primaryActive`}
          onClick={onSelect}
        >
          {reward.left ? "Select Reward" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}
