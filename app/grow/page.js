"use client";
import Image from "next/image";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import gardeningImg from "/public/undraw_gardening_re_e658-3.svg";
import voidImg from "/public/undraw_void_-3-ggu.svg";
import { GiPlantWatering } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { GoDotFill } from "react-icons/go";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const wateringFilterOpts = {
  Frequent: "frequent",
  Average: "average",
  Minimum: "minimum",
};
const cycleFilteringOpts = {
  Perennial: "perennial",
  Annual: "annual",
};
const sunlightFilterOpts = {
  "Full Shade": "full_shade",
  "Part Shade": "part_shade",
  "Full Sunlight": "full_sun",
};

export default function Page() {
  const searchParams = useSearchParams();
  const [plantsObjs, setPlantsObjs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const [clearFilters, setClearFilters] = useState(false);

  useEffect(() => {
    const query = searchParams.get("q");
    const watering = searchParams.get("watering") || "Frequent";
    const cycle = searchParams.get("cycle") || "Perennial";
    const sunlight = searchParams.get("sunlight") || "Full Sun";

    let path = "";

    if (query) {
      path += "&q=" + query + "&";
    } else {
      path += "&";
    }
    if (
      searchParams.get("watering") != null ||
      searchParams.get("cycle") != null ||
      searchParams.get("sunlight") ||
      null
    ) {
      path +=
        "watering=" + watering + "&cycle=" + cycle + "&sunlight=" + sunlight;
    }

    fetch(process.env.NEXT_PUBLIC_ALL_PLANTS_API + path)
      .then((response) => response.json())
      .then((data) => {
        setPlantsObjs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [searchParams]);

  const searchPlant = (common, scientific, other) => {
    if (searchParams.q) {
      return (
        common.toLowerCase().includes(searchParams.q.toLowerCase()) ||
        scientific.some((i) =>
          i.toLowerCase().includes(searchParams.q.toLowerCase())
        ) ||
        other.some((i) =>
          i.toLowerCase().includes(searchParams.q.toLowerCase())
        )
      );
    }
    return true;
  };

  return (
    <>
      <section className="bg-deep-green pt-6 min-h-screen ">
        <div className="flex flex-row justify-between items-center mb-12 w-10/12 mx-auto">
          {/* src={plantsImg} alt="plants image" className="w-1/4 h-auto" */}
          <Image
            src={gardeningImg}
            alt="garden image"
            className="md:w-1/4 w-1/2 h-auto"
          />
          <div className="flex flex-col items-center w-3/5 text-center">
            <h2 className="text-[#E0AFA5] font-bold text-xl md:text-4xl py-4">
              Find the Best Plants to Start Growing Next!
            </h2>

            <p className="text-xs md:text-base text-[#E0AFA5]/70 font-semibold">
              Filter by as many options as possible to get the best results for
              you (and your plants). Click "Learn More" on your card result to
              learn all the inside tips on how to care for your new plant. Happy
              Gardening!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-center md:items-end gap-4 mb-12 w-10/12 mx-auto">
          <SearchBar
            query={"q"}
            onClick={() => {
              setClearFilters(false);
            }}
          ></SearchBar>

          <div
            className="flex gap-y-3 items-center flex-col"
            onClick={() => {
              setClearFilters(false);
            }}
          >
            <p className="hidden md:flex text-white ">Watering Frequency</p>
            <Filter
              options={wateringFilterOpts}
              searchParams={searchParams}
              query={"watering"}
              clear={clearFilters}
            />
          </div>
          <div
            className="flex gap-y-3 items-center flex-col"
            onClick={() => {
              setClearFilters(false);
            }}
          >
            <p className="hidden md:flex text-white"> Cycle</p>
            <Filter
              options={cycleFilteringOpts}
              searchParams={searchParams}
              query={"cycle"}
              clear={clearFilters}
            />
          </div>

          <div
            className="flex gap-y-3 items-center flex-col"
            onClick={() => {
              setClearFilters(false);
            }}
          >
            <p className="hidden md:flex text-white">Sunlight</p>
            <Filter
              options={sunlightFilterOpts}
              searchParams={searchParams}
              query={"sunlight"}
              clear={clearFilters}
            />
          </div>
          <button
            onClick={() => {
              router.push(pathname);
              setClearFilters(true);
            }}
            className="gap-y-3 border-dashed border rounded-md border-deep-green/20 flex-row text-white gap-x-2 flex w-32 justify-center items-center h-[52px] hover:bg-white/10"
          >
            <ImCross />
            <p>Clear Filters</p>
          </button>
        </div>
        {loading && (
          <div className="text-white flex flex-row justify-center items-center">
            <GoDotFill size={70} className="animate-bounce transition-all" />
            <GoDotFill size={70} className="animate-bounce-1 transition-all" />
            <GoDotFill size={70} className="animate-bounce-2 transition-all" />
            <GoDotFill size={70} className="animate-bounce-3 transition-all" />
          </div>
        )}
        {plantsObjs.length == 0 && !loading ? (
          <div className="flex flex-col justify-center items-center gap-y-12">
            <Image
              src={voidImg}
              alt="garden image"
              className="md:w-1/6 w-1/4 h-auto"
            />
            <p className="text-white text-center">No results found</p>{" "}
          </div>
        ) : (
          <div className="flex flex-wrap gap-10 justify-center md:justify-between items-center mx-auto w-10/12">
            {plantsObjs?.map((d) => {
              if (
                !d.cycle.includes("Upgrade") &&
                searchPlant(d.common_name, d.scientific_name, d.other_name)
              )
                return <Card d={d} />;
            })}
          </div>
        )}
      </section>
    </>
  );
}
