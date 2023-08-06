import React from 'react';
import ImgBrands from './ImgBrands';

const Brands = () => {
  return (
    <div className="px-[9.375rem] mt-[168px]">
      <section className="mb-[80px]">
        <h1 className="text-[20px] font-[700] tracking-wider">
          AS MELHORES MARCAS ESTÃO AQUI!
        </h1>
      </section>
      <div className="flex justify-between items-end">
        <ImgBrands srcImg="Adidas.jpg" />
        <ImgBrands srcImg="Viamarte.jpg" />
        <ImgBrands srcImg="Bebece.jpg" />
        <ImgBrands srcImg="Dumond.jpg" />
      </div>
    </div>
  );
};

export default Brands;
