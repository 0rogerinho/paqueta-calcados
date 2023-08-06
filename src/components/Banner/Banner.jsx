import React from 'react';

export const Banner = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-end justify-center">
        <div className=" relative">
          <img
            className="block w-full h-[454px] object-cover"
            src="Banner.svg"
          />
        </div>
        <div className="absolute m-6">
          <div>
            <h1 className="text-[3.75rem] text-[#383838] font-[600]">
              Tênis Casual
            </h1>
            <p className="text-5xl text-[#CF5D00]">Masculino</p>
          </div>
          <div>
            <p className="text-2xl text-[#383838]">apartir de</p>
            <p className="text-[3.125rem] text-[#383838] font-[700]">R$79,99</p>
            <button className="w-[15.4375rem] h-[2.875rem] text-white bg-gradient-to-t from-lightOrange_gray to-lightYellow">
              APROVEITE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
