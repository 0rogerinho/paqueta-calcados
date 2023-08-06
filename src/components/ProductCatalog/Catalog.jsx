import React from 'react';
export const Catalog = ({
  srcImg,
  GradientDirection,
  title1,
  title2,
  textPosition,
}) => {
  return (
    <div
      className={`w-[41.75rem] h-[470px] ${srcImg}  bg-contain bg-no-repeat`}
    >
      <div
        className={`w-full h-full flex flex-col items-${textPosition} justify-end py-[79px] px-12 bg-left ${GradientDirection} from-[rgb(245,112,2)] from-0% to-70% text-5xl text-white`}
      >
        <h1>{title1}</h1>
        <h1>{title2}</h1>
      </div>
    </div>
  );
};
