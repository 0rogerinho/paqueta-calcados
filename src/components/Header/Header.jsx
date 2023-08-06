import React from 'react';
import { ShoppingAndLogin } from './ShoppingAndLogin';

const Header = () => {
  return (
    <header className="w-full h-[11.75rem] flex flex-col  justify-center bg-white px-[9.375rem] gap-10 text-gray text-lg ">
      <div className="flex justify-between">
        <img src="logo.svg" alt="Logo Paqueta calçados" />
        <div className="flex gap-10 text-sm">
          <ShoppingAndLogin
            display=""
            icons="Heart__icon.svg"
            text="Lista de desejos"
          />
          <ShoppingAndLogin
            display=""
            icons="Bag__icon.svg"
            text="Lista de desejos"
          />
          <ShoppingAndLogin
            display="hidden"
            icons="Account__icon.svg"
            text="Lista de desejos"
          />
        </div>
      </div>
      <nav>
        <ul className="flex justify-between">
          <li>Novidade</li>
          <li>Feminino</li>
          <li>Masculino</li>
          <li>Paquetá Esportes</li>
          <li>Outlet</li>
          <li>Cashback</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
