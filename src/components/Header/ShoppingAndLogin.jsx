import React from 'react';
export const ShoppingAndLogin = ({ icons, text, display }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div
          className={`${display} px-[6px] py-[2px] rounded-full bg-gradient-to-tr from-lightOrange_gray to-lightYellow flex  text-white absolute left-[17px] bottom-[14px] text-xs`}
        >
          1
        </div>
        <img className="w-[1.5625rem] h-[1.5625rem]" src={icons} />
      </div>
      <p>{text}</p>
    </div>
  );
};
