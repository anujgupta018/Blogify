import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [posts]);
  const getPosts = async () => {
    const response = await fetch("http://localhost:5000/get-blogs");
    const data = await response.json();
    // console.log(data.blogs);
    setPosts(data.blogs);
  };
  return (
    <div className="mt-10">
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="w-[40vw] mx-auto p-3  rounded-md shadow-[0_4px_6px_rgba(255,255,255,0.5)]"
          >
            <div className="flex justify-end text-lg gap-3">
              <AiFillDelete className="text-gray-400 hover:text-red-400 cursor-pointer hover:scale-110 transition-all" />
              <MdOutlineEdit className="text-gray-400 hover:text-yellow-300 cursor-pointer hover:scale-110 transition-all" />
            </div>
            <h2 className="text-lg font-bold my-2">{post.title}</h2>
            <h3 className=" text-gray-400 font-semibold">{post.description}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
