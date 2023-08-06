import React from 'react';
import { Catalog } from './Catalog';
import { DataCatolog } from './DataCatolog';

export const ProductCatalog = () => {
  return (
    <div className="flex flex-col gap-28 px-[9.375rem] pt-28 pb-24">
      <div className="flex gap-5">
        <Catalog
          srcImg="bg-[url(CalcadoFeminino.jpg)]"
          GradientDirection="bg-gradient-to-r"
          title1="CALÇADOS"
          title2="FEMININO"
          textPosition="start"
        />
        <DataCatolog
          text="Escolher o seu sapato favorito entre nossa
        variedade de modelos e cores
        não será uma tarefa fácil, mas o que uma mulher não consegue fazer?"
          textPosition="end"
          textDirection="text-right"
        />
      </div>
      <div className="flex gap-5">
        <DataCatolog
          text="Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o dia a dia, trabalho e até mesmo para praticar esportes!"
          textPosition="start"
          textDirection="text-left"
        />
        <Catalog
          srcImg="bg-[url(CalcadoMasculino.jpg)]"
          GradientDirection="bg-gradient-to-l"
          title1="CALÇADOS"
          title2="MASCULINO"
          textPosition="end"
        />
      </div>
    </div>
  );
};
