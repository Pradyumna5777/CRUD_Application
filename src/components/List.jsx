import "remixicon/fonts/remixicon.css";
import NewItemBtn from "./NewItemBtn";
import UpdatePrompt from "./UpdatePrompt";
import FilterSearch from "./FilterSearch";
import TableContent from "./TableContent";

const List = () => {
  return (
    <div>
      <div className="py-8 flex flex-col items-center gap-4 min-h-[100vh] relative">
        <UpdatePrompt />
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-black font-black text-4xl">CRUD APPLICATION</h1>
          <NewItemBtn />
          <FilterSearch />
        </div>

        <TableContent />
      </div>
    </div>
  );
};
export default List;
