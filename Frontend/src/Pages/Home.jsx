import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="w-[40vw] mx-auto p-3  rounded-md shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
        <div className="flex justify-end text-lg gap-3">
          <AiFillDelete className="text-gray-400 hover:text-red-400 cursor-pointer hover:scale-110 transition-all" />
          <MdOutlineEdit className="text-gray-400 hover:text-yellow-300 cursor-pointer hover:scale-110 transition-all" />
        </div>
        <h2 className="text-lg font-bold my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, esse.
        </h2>
        <h3 className=" text-gray-400 font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
          aperiam quasi eaque tenetur dignissimos aliquid? Voluptate optio quam
          magnam porro tempora doloremque, labore fugit aliquid provident
          corporis eum harum quaerat magni placeat voluptas consequuntur!
        </h3>
      </div>
    </div>
  );
};

export default Home;
