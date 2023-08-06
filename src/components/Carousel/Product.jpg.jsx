import React from 'react';

const Product = ({ srcImg }) => {
  const [like, setLike] = React.useState(false);
  function handleClickLike() {
    setLike(!like);
  }
  return (
    <section className="w-[240px] bg-[#ffff] flex flex-col justify-center  pt-[3.3125rem] pb-[1.5625rem] px-[33px] shadow-xl">
      <div className="mb-[1.5rem] m-auto relative">
        <img
          onClick={handleClickLike}
          className="block w-[1.25rem] h-[1.25rem] absolute left-40 top-[-.625rem] cursor-pointer "
          src={like ? 'FullHeartProduct.jpg' : 'HeartProduct.jpg'}
        />
        <img className="block w-[180px] h-[120px] " src={srcImg} />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-sm mb-[.875rem] ">
          SCARPIN VIZZANO VERDE SALTO ALTO
        </h1>
        <p className="mb-[.4375rem] text-xl font-[700]">R$ 149,99</p>
        <p className="mb-[.6875rem] text-xs text-[#383838]">OU 9X R$ 16,66</p>
      </div>
      <button className="w-[174px] h-[2.875rem] text-white bg-gradient-to-t from-lightOrange_gray to-lightYellow">
        APROVEITE
      </button>
    </section>
  );
};

export default Product;
