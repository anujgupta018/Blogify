import React from "react";

const CreateBlog = () => {
  return (
    <div className="sm:w-[90vw] lg:w-[60vw] mx-auto mt-10 ">
      <h1 className="text-2xl font-bold text-center">Create Blogs</h1>
      <form action="" className="flex flex-col gap-3">
        <label htmlFor="title" className="font-semibold text-lg">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Enter the blog title"
          className="px-3 py-2 rounded-md outline-none border-2 border-gray-400 text-black"
        />
        <label htmlFor="description" className="font-semibold text-lg">
          Description:
        </label>
        <textarea
          name=""
          id=""
          className="p-3 rounded-md outline-none border-2 border-gray-400 text-black"
          rows={10}
        />
        <button
          type="submit"
          className="bg-purple-300 hover:bg-purple-500 py-3 rounded-md text-xl font-bold"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
