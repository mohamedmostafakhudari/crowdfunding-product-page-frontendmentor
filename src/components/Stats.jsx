import React from "react";
import { useMemo } from "react";
import { formattedAmount } from "../utils";
export default function Stats({ project }) {
  const { backAmount, totalBacked, backers, daysLeft } = project;
  const backPercent = useMemo(() => {
    return Math.round((backAmount / totalBacked) * 100);
  }, [backAmount, totalBacked]);
  return (
    <div className="bg-white shadow-lg shadow-black/20 rounded-lg p-6 py-10 max-w-2xl mx-auto">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative flex flex-col items-center space-y-1 md:items-start md:flex-1">
          <div className="text-neutralBlack font-bold text-3xl">
            ${formattedAmount(backAmount)}
          </div>
          <div className="text-neutralGray">
            of ${formattedAmount(totalBacked)} backed
          </div>
          <div className="relative py-2 md:p-0 md:hidden">
            <div className="absolute bg-neutralGray h-[1px] w-20 bottom-0 left-1/2 -translate-x-1/2 "></div>
          </div>
          <div className="hidden md:block absolute bg-neutralGray h-[1px] w-14 top-1/2 -translate-y-1/2 -right-6 rotate-90"></div>
        </div>
        <div className="relative flex flex-col items-center space-y-1 md:items-start md:flex-1">
          <div className="text-neutralBlack font-bold text-3xl">
            {formattedAmount(backers)}
          </div>
          <div className="text-neutralGray">total backers</div>
          <div className="relative py-2 md:p-0 md:hidden">
            <div className="absolute bg-neutralGray h-[1px] w-20 bottom-0 left-1/2 -translate-x-1/2"></div>
          </div>
          <div className="hidden md:block absolute bg-neutralGray h-[1px] w-14 top-1/2 -translate-y-1/2 -right-6 rotate-90"></div>
        </div>
        <div className="relative flex flex-col items-center space-y-1 md:items-start md:flex-1">
          <div className="text-neutralBlack font-bold text-3xl">{daysLeft}</div>
          <div className="text-neutralGray">days left</div>
        </div>
      </div>
      <div className="relative w-full h-[14px] rounded-[30px] overflow-hidden bg-neutralGray/10 mt-8">
        <div
          className="absolute h-full bg-primaryColor rounded-[30px]"
          style={{ width: backPercent + "%" }}
        ></div>
      </div>
    </div>
  );
}
