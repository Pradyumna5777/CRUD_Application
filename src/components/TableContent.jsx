import React, { useContext } from "react";
import ItemContext from "./itemContext";
import swal from "sweetalert";

const TableContent = () => {
  const {
    items,
    setItems,
    setEditIndex,
    setForm,
    setSlide,
    searchTerm,
    setEditItem,
    allItems
  } = useContext(ItemContext);

  const deleteItems = async (e) => {
    const willDelete= await swal("Do you want to delete this data?", {
      dangerMode: true,
      buttons: true,
    });

    if(willDelete){
      const updatedData = items.filter((val) => val.fullName !== e.fullName);
      setItems(updatedData);
  
      swal({
        title: "Data Deleted",
        icon: "success",
      });
    }
  };
  const editItems = (e, index) => {
    setSlide("30vw");
    setForm(e);
    setEditIndex(index);
    setEditItem(e);
  };

  return (
    <div className="bg-[#b8bfc04f] rounded w-[95vw] min-h-[100vh] flex justify-center">
      <table className="w-[80vw] h-[5vh] border-collapse shadow-xl mt-[5vh] mb-[5vh]">
        <thead>
          <tr className="text-center font-semibold bg-[#0f5afc] text-white ">
            <td className="py-4">S.No</td>
            <td>Items</td>
            <td>Action</td>
          </tr>
        </thead>

        {allItems ? (
          <tbody>
            {allItems.map((items, index) => (
              <tr
                key={index}
                className="text-center odd:bg-white even:bg-slate-100 "
              >
                <td className="py-4 text-black px-[2vw]">{index + 1}</td>
                <td
                  className="text-black text-wrap px-[2vw]"
                  style={{ overflow: "visible", wordBreak: "break-word" }}
                >
                  {items.fullName}
                </td>

                <td className="flex items-center justify-center gap-3 px-[2vw]">
                  <button
                    onClick={() => deleteItems(items, index)}
                    className="bg-red-500 hover:bg-[#ff0808] hover:scale-[1.2] transition-all ease-in duration-[0.1s] px-3 py-2 text-white rounded mt-2 "
                  >
                    <i className="ri-delete-bin-5-line font-normal"></i>
                  </button>
                  <button
                    onClick={() => editItems(items, index)}
                    className="bg-yellow-400 hover:bg-[#ffd813] hover:scale-[1.2] transition-all ease-in duration-[0.1s] px-3 text-white py-2 rounded mt-2"
                  >
                    <i className="ri-reset-left-line font-normal"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : !arr && searchTerm !== "" ? (
          <div className="absolute top-[30%] left-[33%] text-xl font-black">
            <img src="./images/nodata.png" alt="" />
            <span className="absolute top-[90%] left-[33%]">
              Data Not Found!
            </span>
          </div>
        ) : (
          <div className="absolute top-[35%] left-[35%] text-xl font-black">
            <img className="h-[50vh]" src="./images/emp.png" alt="" />
            <span className="absolute top-[100%] w-full left-[16%]">
              No Records! Add Something...
            </span>
          </div>
        )}
      </table>
    </div>
  );
};

export default TableContent;
