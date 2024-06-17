import React from 'react';

function Button({ text ,onClick }) {
  return (
    <button 
    onClick={onClick}
    className='bg-red-500 shadow-orange-400 w-24 h-8 rounded-xl text-white hover:bg-red-700 hover:shadow-orange-600 transition duration-200'>
      {text}
    </button>
  );
}

export default Button;
