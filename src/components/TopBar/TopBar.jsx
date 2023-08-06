import React from 'react';
import { MdOutlineHeadset } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';

const TopBar = () => {
  return (
    <div className="w-full h-[3.3125rem] flex justify-between items-center px-[9.375rem] bg-gradient-to-r from-lightOrange to-darkOrange text-white text-sm">
      <h2>Loja de Calçados e Moda Online</h2>

      <div className="flex justify-center gap-14">
        <div className="flex gap-3">
          <div className=" flex items-center justify-center ">
            <MdOutlineHeadset size={20} />
          </div>
          <a href="#">
            <p>Fale conosco</p>
          </a>
        </div>
        <div className="flex items-center gap-3 ">
          <FiMapPin size={18.5} />
          <a href="#">
            <p>Encontrar uma loja física</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
