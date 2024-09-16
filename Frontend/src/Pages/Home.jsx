import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-blogs");
      const data = await response.json();
      setPosts(data.blogs);
    } catch (error) {
      toast.error("Failed to fetch posts");
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/delete-blog/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        toast.success("Blog deleted successfully");
        getPosts();
      } else {
        toast.error("Failed to delete post");
      }
    } catch (error) {
      toast.error("Failed to delete post");
    }
  };

  const handleEditClick = (id) => {
    if (editPostId === id) {
      setEditPostId(null);
    } else {
      setEditPostId(id);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="my-10 flex flex-col gap-5">
        {posts.map((post) => (
          <div
            key={post._id}
            className="w-[40vw] mx-auto p-3 rounded-md shadow-[0_4px_6px_rgba(255,255,255,0.5)]"
          >
            <div className="flex justify-end text-lg gap-3">
              <AiFillDelete
                className="text-gray-400 hover:text-red-400 cursor-pointer hover:scale-110 transition-all"
                onClick={() => deletePost(post._id)}
              />
              <MdOutlineEdit
                className="text-gray-400 hover:text-yellow-300 cursor-pointer hover:scale-110 transition-all"
                onClick={() => handleEditClick(post._id)}
              />
            </div>
            <h2 className="text-lg font-bold my-2">{post.title}</h2>
            <h3 className="text-gray-400 font-semibold">{post.description}</h3>
            <button
              className={`${
                editPostId === post._id ? "block" : "hidden"
              } bg-purple-400 hover:bg-purple-600 px-3 py-1 my-1 rounded-md text-white font-bold`}
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
