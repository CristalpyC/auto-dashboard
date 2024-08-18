import AddIcon from "@mui/icons-material/Add";
import AddFormModal from "./AddFormModal";
import React from "react";
import { SelectScrollable } from "../Select";

export const AddProductButton = ({ onClick }: { onClick: () => void}) => {
  return (
    <div onClick={onClick}>
      <button className="rounded-md w-[40vw] md:w-[8rem] lg:w-[8rem] text-left flex justify-between p-2 shadow-sm bg-[#1550a8] text-white ease-in-out hover:scale-95 hover:bg-[#1550a8ab]">
        Add car
        <AddIcon className="mt-1" sx={{ fontSize: "16px" }} />
      </button>
    </div>
  );
};

export const ActionComponents = () => {
  return (
    <div className="p-[1rem] mb-5 flex justify-between">
      {/* Filter component */}
      <SelectScrollable />
      
      {/* Add button component */}
      <AddFormModal />
    </div>
  );
};
