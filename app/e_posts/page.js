"use client";
import { blogsMockAPI } from "@/utils/constants";
import Preview from "../blogs/components/Preview";
import SearchBar from "../grow/components/SearchBar";
import { useState } from "react";

export default function Page() {
const [createPost, setCreatePost] = useState(false);

  return (
    <div className="flex flex-col space-y-10 justify-between items-center pt-12 w-10/12 mx-auto">
      <div className="flex flex-wrap md:justify-between justify-center items-center md:items-end gap-4 w-full mx-auto">
        <SearchBar color={"light-pink"} />
        <button
          className=" bg-light-pink hover:underline hover:decoration-wavy p-4 font-semibold rounded-full text-deep-green"
          onClick={() => {
            setCreatePost(true);
          }}
        >
          + Create post
        </button>
        {createPost && (
        <div className="mt-12 flex blog-break:flex-row flex-col flex-wrap blog-break:flex-nowrap rounded-2xl bg-m-green py-10 px-5 w-full min-h-[12rem] p-4 shadow blog-break:items-start items-center justify-center">
          <button className="flex md:w-32 sm:w-2/12 w-20 md:min-h-[103px] h-20 sm:h-2/12 md:h-32 rounded-lg bg-light-yellow justify-center font-semibold hover:bg-light-yellow/70 text-deep-green items-center">
            Upload Photo
          </button>
          <div className="flex flex-col w-5/6">
            <div className="flex blog-break:flex-row flex-col justify-around">
              <div className="flex flex-col items-start md:text-xl text-base mb-4 md:mb-0">
                {" "}
                <p className="mb-2 text-white">Title</p>
                <input
                  type="text"
                  className="w-full p-4 ps-4 text-sm md:text-lg rounded-full"
                  placeholder="Enter title here..."
                />
              </div>

              <div className="flex flex-col items-start md:text-xl text-base">
                {" "}
                <p className="mb-2 text-white">Topics</p>
                <input
                  type="text"
                  className="w-full p-4 ps-4 text-sm md:text-lg rounded-full"
                  placeholder="Enter topics here..."
                />
              </div>
            </div>
            <div className="flex flex-col md:text-xl text-base justify-around mx-auto md:w-3/4 w-full mt-12">
              <p className="mb-2 md:mt-0 mt-12 text-white">Post text</p>
              <textarea
                className="w-full p-4 ps-4 text-sm md:text-lg bg-slate-100 rounded-lg"
                rows="6"
                aria-multiline="true"
                role="textbox"
                contentEditable="true"
                placeholder="Start writing..."
              ></textarea>
            </div>

            <div className="flex flex-row justify-end pt-16 pb-4">
              <button
                className="rounded-full bg-slate-400 p-2 md:mx-4 text-deep-green hover:bg-slate-300/70"
                onClick={() => {
                  setCreatePost(false);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-light-yellow rounded-full p-2 mx-4 hover:bg-light-yellow/70"
                onClick={() => {
                  setCreatePost(false);
                }}
              >
                Respond
              </button>
            </div>
          </div>
        </div>
        )}
      </div>

      {blogsMockAPI.map((blog) => {
        if (blog.author === "@melly") {
          return (
            <Preview
              pic={blog.pic}
              title={blog.title}
              bodyText={blog.bodyText}
              likes={blog.likes}
              num_comments={blog.num_comments}
              cList={blog.comments}
              topics={blog.topics}
              author={blog.author}
              del={true}
              edit={true}
            />
          );
        }
      })}
    </div>
  );
}
