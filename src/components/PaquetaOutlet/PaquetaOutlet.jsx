import React from 'react';
import { Size } from './Size';

export const PaquetaOutlet = () => {
  return (
    <div className="px-[9.375rem] flex flex-col gap-16 mb-[168px]">
      <div className="flex justify-between items-center">
        <img src="PaquetaOutlet.svg" />

        <p className="text-[#383838]">
          Você também pode escolher o seu novo sapato <br /> favorito de acordo
          com a sua numeração.
        </p>
      </div>
      <div className="w-full flex justify-between">
        <Size number="33" />
        <Size number="34" />
        <Size number="35" />
        <Size number="36" />
        <Size number="37" />
        <Size number="38" />
        <Size number="39" />
        <Size number="40" />
        <Size number="41" />
        <Size number="42" />
        <Size number="43" />
        <Size number="44" />
      </div>
    </div>
  );
};
