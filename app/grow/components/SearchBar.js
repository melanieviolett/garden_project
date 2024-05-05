"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SearchBar = ({ query, color }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [str, setStr] = useState(searchParams.get(query) || "");

  const makeQueryStr = (newStr) => {
    setStr(newStr);
    let queries = newStr === "" ? "?" : `?${query}=${newStr}`;

    for (const [key, value] of searchParams.entries()) {
      if (query !== key) {
        queries += newStr === "" ? `${key}=${value}&` : `&${key}=${value}`;
      }
    }

    if (newStr === "") queries = queries.substring(0, queries.length - 1);

    router.push("/grow" + queries);
  };

  useEffect(() => {
    if (!searchParams.get("q")) {
      setStr("");
    }
  }, [searchParams]);

  return (
    <div className="w-10/12 md:w-1/3 relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none h-12 w-32">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="w-full p-4 ps-10 text-xs md:text-sm rounded-lg"
        placeholder="Search..."
        value={str}
        onChange={(e) => setStr(e.target.value)}
      />
      <button
        onClick={(e) => makeQueryStr(str)}
        className={`bg-${color} text-deep-green absolute end-2 bottom-2 focus:ring-4 font-semibold hover:underline hover:decoration-wavy rounded-lg md:text-sm text-xs px-4 py-2`}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
