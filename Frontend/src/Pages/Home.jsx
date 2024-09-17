import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
  const updatePost = async (id) => {
    console.log(title, description, id);
    const response = await fetch(`http://localhost:5000/update-blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (response.status === 200) {
      toast.success("Blog updated successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  const handleEditClick = (id) => {
    setEditPost((prev) => (prev === id ? null : id));
    setSelectedPost(id);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="my-10 flex flex-col gap-5">
        {posts.length === 0 ? (
          <div className="flex items-center justify-center text-3xl font-bold mt-10">
            No post
          </div>
        ) : (
          posts.map((post) => (
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
                  className={`${
                    selectedPost === post._id && editPost
                      ? "text-yellow-300"
                      : "text-gray-400"
                  }text-gray-400 hover:text-yellow-300 cursor-pointer hover:scale-110 transition-all`}
                  onClick={() => {
                    setEditPost(!editPost);
                    setSelectedPost(post._id);
                  }}
                />
              </div>
              <h2
                className="text-lg font-bold my-2 outline-none focus:bg-gray-800"
                contentEditable={editPost}
                onInput={(e) => setTitle(e.target.innerText)}
              >
                {post.title}
              </h2>
              <h3
                className="text-gray-400 font-semibold  focus:bg-gray-800 selection:bg-yellow-100 outline-none"
                contentEditable={editPost}
                onInput={(e) => setDescription(e.target.innerText)}
              >
                {post.description}
              </h3>
              <button
                className={`${
                  selectedPost === post._id && editPost ? "block" : "hidden"
                } bg-purple-400 hover:bg-purple-600 px-3 py-1 my-1 rounded-md text-white font-bold`}
                onClick={() => updatePost(post._id)}
              >
                Save
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
