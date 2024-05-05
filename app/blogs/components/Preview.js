import React from "react";
import cuteImg from "/public/Plant-Hero.jpg";
import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Preview = ({ pic, title, bodyText, likes, num_comments, del, edit }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap blog-break:flex-nowrap rounded-2xl bg-m-green py-10 px-5 w-full min-h-[12rem] p-4 shadow items-center ">
        <div className="flex flex-row flex-nowrap w-full">
          {pic == true ? (
            <Image
              src={cuteImg}
              alt="cute plant pusheen"
              className="md:w-32 sm:w-2/12 w-20 md:min-h-[103px] h-20 sm:h-2/12 md:h-32 rounded-lg"
            />
          ) : (
            <div className="md:w-32 sm:w-2/12 w-20 md:min-h-[103px] h-20 sm:h-2/12 md:h-32 rounded-lg custom-css"></div>
          )}
          <div className="flex flex-col md:flex-nowrap flex-wrap justify-center pl-5 sm:w-10/12 w-9/12">
            <Link
              className="text-light-pink font-semibold text-sm md:text-xl hover:underline hover:text-[#E0AFA5]/80 decoration-wavy"
              href={`/blogs/${title}`}
            >
              {title}
            </Link>
            <p className="text-white md:text-base text-xs line-clamp-3">
              {bodyText}
            </p>
          </div>
        </div>
        <div className="flex text-white flex-row md:w-4/12 w-7/12 justify-end md:space-x-2 mt-4 md:text-base text-xs">
          <div className="flex items-center w-24">
            {del && <FaRegTrashAlt className="hover:scale-150 scale-125"></FaRegTrashAlt>}
            {!del && (
              <>
                <FaRegHeart/>
                <p className="ml-1">{likes}</p>
              </>
            )}
          </div>
          <div className="flex items-center w-24">
            {edit && <FaRegEdit className="hover:scale-150 scale-125"/>}
            {!edit && (
              <>
                <FaRegCommentDots/>
                <p className="ml-1">{num_comments}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
