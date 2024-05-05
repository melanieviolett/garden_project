"use client";
import { botanical_interests, emojis, users } from "@/utils/constants";
import { useState } from "react";
import { blogsMockAPI } from "@/utils/constants";
import Preview from "../blogs/components/Preview";
import SearchBar from "../grow/components/SearchBar";
import Link from "next/link";
import Interest from "./components/Interest";

export default function Page() {
  const [userInfo, setUserInfo] = useState(true);
  const [userPosts, setUserPosts] = useState(false);
  const [active, setActive] = useState("opt1");
  const [createPost, setCreatePost] = useState(false);

  const [userName, setUserName] = useState("");
  const [wantingToGrow, setWantingToGrow] = useState("");
  const [currentlyGrow, setCurrentlyGrow] = useState("");
  const [botanActive, setBotanActive] = useState(null);

  return (
    <div className="flex flex-col space-y-10 min-h-screen justify-start md:justify-between items-center w-10/12 mx-auto">
      <div className="flex flex-col space-y-10 justify-center items-center pt-12 w-full mx-auto">
        <div className="text-light-pink md:text-3xl text-lg flex text-center flex-row md:mb-16 mb-8">
          <button
            className={`p-5 rounded-md mr-8 md:mr-24 ${
              active === "opt1" ? "bg-m-green/70" : "bg-m-green/30"
            }`}
            onClick={() => {
              setUserInfo(true);
              setUserPosts(false);
              setActive("opt1");
            }}
          >
            <p className="link-underline link-underline-black">
              Edit user info
            </p>
          </button>
          <button
            className={`bg-m-green/30 p-5 rounded-md mr-8 md:mr-24 ${
              active === "opt2" ? "bg-m-green/70" : "bg-m-green/30"
            }`}
            onClick={() => {
              setUserInfo(false);
              setUserPosts(true);
              setActive("opt2");
            }}
          >
            <p className="link-underline link-underline-black">Edit posts</p>
          </button>

          <button className="bg-m-green/30 p-5 rounded-md">
            <Link href="/view_profile">
              <p className="link-underline link-underline-black">
                View Public Profile
              </p>
            </Link>
          </button>
        </div>

        {userInfo && (
          <div className="flex md:flex-row flex-col text-light-pink text-lg font-bold md:w-10/12 w-full items-center justify-around">
            {users.map((user) => {
              if (user.username === "melly") {
                return (
                  <div className="flex md:flex-row flex-col text-light-pink text-lg font-bold md:w-10/12 w-full items-center justify-around">
                    <div className="flex flex-col items-start md:w-1/4 md:text-xl text-base">
                      <p className="mb-2">Username</p>
                      <input
                        type="text"
                        className="w-full p-4 ps-4 text-sm md:text-lg rounded-full text-deep-green"
                        placeholder="Username"
                        value={userName == "" ? user.username : userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                      <p className="mt-10 mb-2">Email</p>
                      <input
                        type="text"
                        className="w-full p-4 ps-4 text-sm md:text-lg rounded-full text-deep-green bg-slate-400"
                        placeholder="Email"
                        value={user.email}
                      />
                      <p className="mt-10 mb-4">Botanical Interests</p>

                      {
                        botanical_interests.map((interest, index) => (
                          <Interest 
                            key={index} 
                            text={interest} 
                            emoji={emojis[index]}
                            isInUser={user.botanical_interests.includes(interest)}
                          />
                        ))
                      }

                    </div>
                    <div className="flex flex-col md:w-1/2 md:text-xl text-base">
                      <p className="mb-2 md:mt-0 mt-12">
                        Plants wanting to grow
                      </p>
                      <textarea
                        className="w-full p-4 ps-4 text-sm md:text-lg rounded-lg text-deep-green"
                        rows="6"
                        aria-multiline="true"
                        role="textbox"
                        contentEditable="true"
                        placeholder="Start writing..."
                        value={
                          wantingToGrow == ""
                            ? user.plants_wanting
                            : wantingToGrow
                        }
                        onChange={(e) => {
                          setWantingToGrow(e.target.value);
                        }}
                      ></textarea>
                      <p className="md:mt-28 lg:mt-16 mt-12 mb-2">
                        Plants currently growing
                      </p>
                      <textarea
                        className="w-full p-4 ps-4 text-sm md:text-lg rounded-lg text-deep-green"
                        rows="6"
                        aria-multiline="true"
                        role="textbox"
                        contentEditable="true"
                        placeholder="Start writing..."
                        value={
                          currentlyGrow == ""
                            ? user.plants_currently
                            : currentlyGrow
                        }
                        onChange={(e) => {
                          setCurrentlyGrow(e.target.value);
                        }}
                      ></textarea>
                      <button className="bg-coral md:w-1/2 rounded-lg md:text-base text-sm text-deep-green p-4 text-center md:mt-8 mt-4 hover:opacity-70">
                        Save changes
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}

        {userPosts && (
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
        )}
      </div>
    </div>
  );
}
