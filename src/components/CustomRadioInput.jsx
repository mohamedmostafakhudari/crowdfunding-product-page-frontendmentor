import React from "react";

export default function CustomRadioInput({ reward, selectReward }) {
  return (
    <>
      {!reward.desc ? (
        <>
          <label
            htmlFor={reward.name}
            className="font-bold grid gap-[0.5em] duration-200 ease-in-out cursor-pointer hover:text-primaryColor"
            style={{ gridTemplateColumns: "2.125em auto" }}
          >
            <div className="w-fit rounded-full relative grid place-content-center -translate-y-[0.075em]">
              <input
                type="radio"
                id={reward.name}
                value={reward.selected}
                onChange={selectReward}
                name="rewards"
                className="appearance-none bg-white m-0 font-inherit text-neutralGray w-[1.625em] h-[1.625em] border-[0.10em] border-neutralGray rounded-full"
              />
              {/* active state */}
              <div
                className={`absolute rounded-full grid place-content-center inset-0 duration-200 ease-in-out ${
                  reward.selected ? "scale-100" : "scale-0"
                }`}
              >
                <div className="w-[0.725em] h-[0.725em] rounded-full bg-primaryColor"></div>
              </div>
            </div>
            {reward.name}
          </label>
        </>
      ) : (
        <>
          <label
            htmlFor={reward.name}
            className="font-bold grid gap-[0.5em]"
            style={{ gridTemplateColumns: "2.125em auto" }}
          >
            <div
              className={`w-fit rounded-full relative grid place-content-center -translate-y-[0.075em] ${
                reward.left ? "visible" : "invisible"
              }`}
            >
              <input
                type="radio"
                id={reward.name}
                value={reward.selected}
                onChange={selectReward}
                name="rewards"
                className="appearance-none bg-white m-0 font-inherit text-neutralGray w-[1.625em] h-[1.625em] border-[0.10em] border-neutralGray rounded-full"
              />
              {/* active state */}
              <div
                className={`absolute rounded-full grid place-content-center inset-0 
                }`}
              >
                <div
                  className={`w-[0.725em] h-[0.725em] rounded-full duration-200 ease-in-out ${
                    reward.selected ? "scale-100" : "scale-0"
                  }`}
                  style={{ boxShadow: "inset 1em 1em hsl(176, 50%, 47%)" }}
                ></div>
              </div>
            </div>
            <div className={`space-y-1 ${reward.left && "group"}`}>
              <div
                className={`${
                  reward.left ? "text-neutralBlack" : "text-neutralGray"
                } duration-200 ease-in-out cursor-pointer group-hover:text-primaryColor`}
              >
                {reward.name}
              </div>
              <div
                className={`text-sm font-light ${
                  reward.left ? "text-primaryColor" : "text-neutralGray/50"
                } duration-200 ease-in-out cursor-pointer group-hover:text-primaryColor`}
              >
                {reward.desc}
              </div>
            </div>
          </label>
        </>
      )}
    </>
  );
}
