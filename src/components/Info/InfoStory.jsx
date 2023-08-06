import React from 'react';

export const InfoStory = ({ srcImg, text1, text2, width, weigth }) => {
  return (
    <div className={`${width} h-10 text-xs text-white flex gap-2 items-center`}>
      <img className="block w-7" src={srcImg} />
      <div className={`flex flex-col ${weigth}`}>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};
