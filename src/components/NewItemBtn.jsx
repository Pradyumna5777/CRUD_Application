import React, { useContext } from 'react'
import ItemContext from './itemContext';

const NewItemBtn = () => {
    const {setSlide}=useContext(ItemContext);

    const slider = () => {
        setSlide("30vw");
      };

  return (
    <button
          className="bg-red-500 hover:bg-[#f00] py-2 px-6 font-semibold rounded text-white flex items-center gap-1 justify-center"
          onClick={slider}
        >
          <span>Add New Item </span> <i className="ri-add-large-line text-lg"></i>
        </button>
  )
}

export default NewItemBtn