import React from 'react';
import { InfoStory } from './InfoStory';

export const Info = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-lightYellow to-darkOrange flex  justify-between px-[9.375rem] py-5 flex-wrap">
      <InfoStory
        srcImg="card.svg"
        text1="PAGUE EM ATÉ 10X"
        text2="SEM JUROS*"
        hidden1="block"
        weigth="w-[120px]"
      />
      <InfoStory
        srcImg="Map.svg"
        text1="RETIRE GRÁTIS"
        text2="EM NOSSAS LOJAS"
        weigth="w-[120px]"
      />
      <InfoStory
        srcImg="Promotion.svg"
        text1="GANHE 20% DE DESCONTO*"
        weigth="w-[170px]"
      />
      <InfoStory
        srcImg="Box.svg"
        text1="FRETE GRÁTIS"
        text2="REGIÕES SUL E SUDESTE*"
        weigth="w-[157px]"
      />
      <InfoStory
        srcImg="Circlo.svg"
        text1="PRIMEIRA TROCA GRÁTIS"
        weigth="w-[9.5625rem]"
      />
    </div>
  );
};

export default Info;
