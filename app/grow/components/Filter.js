"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const Filter = ({ options, searchParams, query, clear }) => {
  const router = useRouter();

  let state = "";
  if (query == "watering") {
    state = "Watering";
  } else if (query == "cycle") {
    state = "Cycle";
  } else if (query == "sunlight") {
    state = "Sunlight";
  }
  const [selectedWord, setSelectedWord] = useState(state);
  const [open, setOpen] = useState(false);

  const set = (selectedKey, query) => {
    let queries = `?${query}=${options[selectedKey]}`;
      for (const [key, value] of searchParams.entries(searchParams)) {
          if(query !== key){
              queries += `&${key}=${value}`;
          }
      }

    router.push('/grow' + queries);
  };

  useEffect(() => {
    console.log(clear)

    if (clear) {
      if(!searchParams.get("watering")){
        setSelectedWord(state);
      }
      if(!searchParams.get("cycle")){
        setSelectedWord(state);
      }
      if(!searchParams.get("sunlight")){
        setSelectedWord(state);
      }

    }
    

  }, [searchParams])

  return (
    <div className="relative">
      <div>
        <button
          type="button"
          className="inline-flex w-32 justify-center items-center gap-x-1.5 rounded-md bg-white h-[52px] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {selectedWord}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1 " role="none">
            {Object.keys(options).map((i) => (
              <button
                key={i}
                className={
                  "pl-2 w-full text-start py-2 " +
                  (i === selectedWord
                    ? "bg-white text-coral"
                    : "hover:bg-coral/20 ")
                }
                onClick={() => {
                  setSelectedWord(i);
                  setOpen(false);
                  set(i, query);
                }}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
