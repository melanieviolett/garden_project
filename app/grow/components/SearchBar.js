'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SearchBar = ({ query }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [str, setStr] = useState(searchParams.get(query) || '')

  const makeQueryStr = (newStr) => {
    setStr(newStr)
    let queries = (newStr === '') ? '?' : `?q=${newStr}`;
    router.push('/grow' + queries);
  }

  return (
    <section className="flex flex-row justify-around items-center mb-12">
      <div className="w-1/2 md:w-1/4 relative">
        {/* search svg */}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="text" className="w-full p-4 ps-10 text-sm rounded-lg" placeholder="Search for your next plants..."
          value={str}
          onChange={e => makeQueryStr(e.target.value)}
        />
        {/* <button onClick={() => makeQueryStr('')} className="text-white absolute end-2.5 bottom-2.5 bg-coral hover:bg-coral/80 font-small md:font-medium rounded-lg text-sm md:px-4 md:py-2 px-2 py-1">Search</button> */}
      </div>
    </section>
  )
}

export default SearchBar