import React from 'react';

export const DataCatolog = ({ text, textPosition, textDirection }) => {
  return (
    <div
      className={`flex flex-col justify-center items-${textPosition} gap-14 w-[628px] text-[22px] ${textDirection} tracking-wide`}
    >
      <p>{text}</p>
      <button className="w-[15.4375rem] h-[2.875rem] text-white bg-gradient-to-t from-lightOrange_gray to-lightYellow">
        Conferir
      </button>
    </div>
  );
};
