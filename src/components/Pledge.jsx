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
        } rounded-lg p-8 py-10`}
      >
        <div>
          <CustomRadioInput
            reward={reward}
            selectReward={() => onSelect(reward.name)}
          />
        </div>
        <div className="text-neutralGray mt-6">{reward.offer}</div>
      </li>
    );
  }
  if (modalEdition) {
    return (
      <li
        key={reward.name}
        className={`border duration-200 ease-in-out ${
          reward.selected ? "border-primaryColor" : "border-neutralGray/50"
        } rounded-lg`}
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
            reward.selected ? "mt-0 visible" : "-mt-36 invisible"
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
                className="border absolute inset-0 w-full h-full block rounded-[30px] text-center focus:outline-none hover:outline-none"
                onChange={onAmountChange}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutralGray/50">
                $
              </span>
            </div>
            <button className="flex-1 bg-primaryColor text-white font-medium p-2 rounded-[30px] px-3">
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
  return <div>Pledge</div>;
}
