import React from 'react';

export const InputText = ({ srcImg, placeholder }) => {
  return (
    <div className="mb-5 relative">
      <img className="block absolute w-5 h-5" src={srcImg} />
      <input
        className="block w-[220px] bg-transparent border-b outline-none pl-8 placeholder-white"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
export const InputWithLabel = ({ id, type, text }) => {
  const [check, setChecked] = React.useState(false);
  function handleClickChecked(event) {
    event.preventDefault();
    setChecked(!check);
  }

  return (
    <div className="flex items-center">
      <input className="hidden" id="masculino" type={type} />
      <label
        onClick={handleClickChecked}
        className="mr-3 w-5 h-5 flex justify-center items-center shadow-2xl bg-white"
        htmlFor={id}
      >
        <img className="block" src={check ? 'Checked.svg' : ''} />
      </label>
      <label htmlFor={id}>{text}</label>
    </div>
  );
};
