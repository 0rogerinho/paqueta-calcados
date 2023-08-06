import React from 'react';
import Product from './Product.jpg';

const Carousel = () => {
  return (
    <section className="px-[9.375rem]">
      <div className="flex justify-between mb-[2.1875rem]">
        <h2 className="text-3xl font-[600]">Destaque</h2>
        <p className="text-lg text-[#121212] pt-[.4375rem] border-b border-lightOrange">
          CONFERIR TUDO
        </p>
      </div>
      <section className="flex justify-between">
        <Product srcImg="scarpin.jpg" />
        <Product srcImg="scarpin.jpg" />
        <Product srcImg="scarpin.jpg" />
        <Product srcImg="scarpin.jpg" />
      </section>
    </section>
  );
};

export default Carousel;
