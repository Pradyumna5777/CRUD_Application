import React, { useContext } from "react";
import ItemContext from "./itemContext";

const UpdatePrompt = () => {
  const {
    items,
    setItems,
    slide,
    setSlide,
    form,
    setForm,
    setEditIndex,
    editIndex,
    
  } = useContext(ItemContext);
  const valChange = (e) => {
    const allNames = e.target.name;
    const allValues = e.target.value;
    setForm({
      ...form,
      [allNames]: allValues.toUpperCase(),
    });
  };
  const diffItems=items.some((val)=>{
    return(val.fullName===form.fullName)
   })
  
  const submitForm = (e) => {
    e.preventDefault();
   
    if(diffItems){
      swal({
        title: "Item Already Exists!"
      });
    }else if(form.fullName.length===0){
      swal({
        title: "Enter Something!"
      });
    }else{
      setItems([...items, form]);
      setSlide("0vw");
      setForm({
        fullName: "",
      });

    }

  }


  const hider = () => {
    setSlide("0vw");
    setEditIndex(null);
  }


  const saveForm = (e) => {
    e.preventDefault();
     if(diffItems){
      swal({
        title: "Item Already Exists!"
      });
     }else{
       const myData = [...items];
       myData[editIndex] = form;
       setItems(myData);
       setSlide("0vw");
       setEditIndex(null);
       swal({
         title: "Saved",
         icon: "success",
       });

     }
  }

  return (
    <div
      className="shadow-xl flex flex-col items-center rounded-l bg-[#fbfbfbee]"
      style={{
        width: slide,
        height: "40vh",
        position: "fixed",
        top: "9vh",
        right: 0,
        transition: "0.3s",
        overflow: "hidden",
      }}
    >
      <h1 className="text-4xl text-black py-6">{editIndex === null ? "Add Item" : "Update Item"}</h1>

      <form className="flex flex-col gap-6 justify-center items-center absolute h-full w-full">
        <input
          required
          value={form.fullName}
          onChange={(e) => valChange(e)}
          name="fullName"
          type="text"
          placeholder="Item"
          className="w-[85%] border-2 border-gray-600 py-2 px-3 h-[6vh] rounded outline-none"
        />

        {editIndex === null ? (
          <button
            onClick={(e) => submitForm(e)}
            className="bg-blue-500 hover:bg-[#0f5afc] hover:scale-[1.05] hover:font-extrabold transition-all ease-in duration-[0.1s] py-2 px-6 rounded text-white flex items-center justify-center w-[85%]"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={(e) => saveForm(e)}
            className="bg-red-500 hover:bg-[#ff0808] hover:scale-[1.05] hover:font-extrabold transition-all ease-in duration-[0.1s] py-2 px-6 rounded text-white flex items-center justify-center w-[85%]"
          >
            Save
          </button>
        )}
      </form>
      <button
        onClick={(e) => hider(e)}
        className="absolute  hover:text-[#ff0808] hover:scale-[1.2] hover:font-medium transition-all ease-in duration-[0.1s] text-black top-0 right-0 p-2 font-bold text-xl"
      >
        <i className="ri-close-large-fill"></i>
      </button>
    </div>
  );
};

export default UpdatePrompt;
