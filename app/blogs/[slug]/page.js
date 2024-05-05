"use client";
import { blogsMockAPI } from "@/utils/constants";
import Image from "next/image";
import cuteImg from "/public/Plant-Hero.jpg";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Page({ params }) {
  const slug = params.slug.replaceAll("%20", " ");

  const blog = blogsMockAPI.find((blog) => blog.title === slug);
  const [addComment, setAddComment] = useState(false);

  if (!blog) {
    throw new Error(404);
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col bg-m-green space-y-10 rounded-2xl min-h-[36rem] justify-start items-center md:py-8 py-4 w-10/12 mx-auto">
        <div className="flex flex-row w-10/12 items-center justify-between md:min-h-[103px] h-20 sm:h-2/12 md:h-48">
          {blog.pic ? (
            <Image
              src={cuteImg}
              alt="cute plant pusheen"
              className="md:w-48 sm:w-2/12 w-20 md:min-h-[103px] h-20 sm:h-2/12 md:h-48 rounded-lg justify-start"
            />
          ) : (
            <div className="md:w-48 sm:w-2/12 w-20 md:min-h-[103px] h-20 sm:h-2/12 md:h-48 rounded-lg custom-css"></div>
          )}
          <div className="flex flex-col flex-1 justify-around text-center h-full">
            <div>
              <h2 className="text-lg md:text-4xl text-light-pink font-bold">
                {blog.title}
              </h2>
              <p className="text-light-pink/70 font-semibold text-sm md:text-xl">
                <i>Topics:</i> {blog.topics}
              </p>
            </div>
            <p className="text-light-pink/70 font-semibold text-sm md:text-xl">
              <i>By:</i> {blog.author}
            </p>
          </div>
        </div>
        <div className="w-10/12 mx-auto text-center md:text-start text-white">
          <p className="md:text-lg text-sm">{blog.bodyText}</p>
        </div>
        <div className=" w-10/12 flex flex-row pt-24 items-center md:justify-start justify-around space-x-8 text-white md:text-lg">
          <div className="flex flex-row items-center">
            <FaRegHeart />
            <p className="ml-1">{blog.likes}</p>
          </div>
          <div className="flex flex-row items-center ">
            <Sheet>
              <SheetTrigger>
                <FaRegCommentDots />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Comments ({blog.num_comments})</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col space-y-8">
                      <button
                        className="p-4 rounded-full bg-m-green mx-10 my-5 md:text-base text-sm hover:bg-m-green/70"
                        onClick={() => {
                          setAddComment(true);
                        }}
                      >
                        Add a comment...
                      </button>
                      {addComment && (
                        <div className="rounded-xl bg-m-green flex flex-col overflow-scroll">
                          <p className="text-light-pink/80 text-base mx-2 mt-2">
                            @melly
                          </p>
                          <textarea
                            div
                            className="bg-inherit mx-2 mt-2"
                            rows="6"
                            aria-multiline="true"
                            role="textbox"
                            contentEditable="true"
                            placeholder="Start writing..."
                          ></textarea>
                          <div className="flex flex-row justify-end pt-16 pb-4">
                            <button
                              className="rounded-full bg-slate-300 p-2 mx-4 text-deep-green hover:bg-slate-300/70"
                              onClick={() => {
                                setAddComment(false);
                              }}
                            >
                              Cancel
                            </button>
                            <button
                              className="bg-coral rounded-full p-2 mx-4 hover:bg-coral/70"
                              onClick={() => {
                                setAddComment(false);
                              }}
                            >
                              Respond
                            </button>
                          </div>
                        </div>
                      )}
                      <p className="text-white">
                        {blog.comments.map((c) => {
                          return (
                            <div className="">
                              <div className="bg-light-pink h-1 mt-4"></div>
                              <div>
                                <p className="mt-4 text-light-pink/70 md:text-xl text-base">
                                  {c.username}
                                </p>
                                <p className="mt-2 md:text-base text-xs mb-12">
                                  {c.comment}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </p>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <p className="ml-1">{blog.num_comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
