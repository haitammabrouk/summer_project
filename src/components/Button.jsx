import React from 'react';

function Button({ text, type, height, width , textSize, fontFamily, borderRadius, borderShadow}) {
  const customStyle = {
    height: height,
    width: width,
    fontSize : textSize,
    fontFamily : fontFamily,
    borderRadius : borderRadius,
    boxShadow : borderShadow,
  };

  return (
    <div className='button'>
      <button
        className='bg-[#222c39] font-medium font-montserrat rounded-2xl border border-[#3b4d64] text-[#ffffff] text-sm px-4 py-1'
        style={customStyle}
        type={type}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
