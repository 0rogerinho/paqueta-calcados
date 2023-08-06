import React from 'react';
import { InputText, InputWithLabel } from './Inputs';

const PageEmailMarketing = () => {
  return (
    <div className="w-full px-[9.375rem] py-16 flex gap-4 mt-[12.625rem] bg-gradient-to-t from-darkOrange to-lightOrange text-white">
      <div className="flex items-end text-[2rem]">
        <h1 className="w-[26.875rem]">
          SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
        </h1>
        <img className="w-[8.125rem] h-[8.125rem]" src="Aviao.svg" />
      </div>
      <div className="w-[33.75rem]">
        <h1 className="text-lg mb-10">
          Nos informe o seu e-mail e nome para o melhor atendimento!
        </h1>
        <form action="">
          <div className="flex gap-5 mb-5">
            <div>
              <InputText srcImg="Email.svg" placeholder="maria@seuemail.com" />
              <p>Tenho interesse na categoria:</p>
            </div>

            <div>
              <InputText srcImg="User.svg" placeholder="Maria da Silva" />
              <div className="flex gap-5">
                <InputWithLabel
                  id="Masculino"
                  type="checkbox"
                  text="Masculino"
                />
                <InputWithLabel id="feminino" type="checkbox" text="Feminino" />
              </div>
            </div>
          </div>

          <button className="w-[10.875rem] h-[2.875rem] text-white bg-gradient-to-t from-lightOrange_gray to-lightYellow">
            QUERO RECEBER
          </button>
        </form>
      </div>
    </div>
  );
};

export default PageEmailMarketing;
