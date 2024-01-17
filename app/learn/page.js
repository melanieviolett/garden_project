import Image from "next/image";
import flower from "/public/flowerImg.png";
import CheckCross from "./components/CheckCross";
import OtherNames from "./components/OtherNames";
import { GiHills } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";
import { GiSunCloud } from "react-icons/gi";
import { GiSpotedFlower } from "react-icons/gi";

export async function getPlants(searchParams) {
  if (searchParams.id) {
    const response = await fetch(
      process.env.NEXT_PUBLIC_PLANT_DETAILS +
        `${searchParams.id}?key=` +
        process.env.API_KEY,
      {}
    );
    return response.json();
  } else {
    const response = await fetch(process.env.NEXT_PUBLIC_PLANT_DETAILS, {});
    return response.json();
  }
}

export default async function Page({ searchParams }) {
  const data = await getPlants(searchParams);
  const uniq = [...new Set(data.pruning_month)];

  return (
    <div className="bg-deep-green ">
      <section className="flex flex-col md:flex-row justify-between md:items-stretch pt-6 items-center w-10/12 mx-auto">
        <div className="text-light-pink md:justify-between gap-y-8 flex flex-col md:flex-col-reverse h-auto items-center">
          <Image
            src={data.default_image?.original_url || flower}
            alt="temp pic"
            className="rounded-full w-40 md:w-48 h-40 md:h-48"
            width={300}
            height={300}
          ></Image>

          <div className="py-5 md:py-0 text-center">
            <h2 className=" capitalize font-bold text-xl md:text-3xl">
              {data.common_name}
            </h2>
            <h2 className=" capitalize font-semibold italic text-md md:text-xl">
              {data.scientific_name}
            </h2>
          </div>
        </div>

        <div className="flex-col text-start md:w-2/3 md:pl-24 w-5/6 text-light-pink h-auto">
          {data?.other_name?.length != 0 && (
            <h2 className="text-start capitalize font-semibold text-lg md:text-large py-1">
              Other Names
            </h2>
          )}

          <OtherNames d={data} />

          <h2 className="text-start capitalize font-semibold text-lg md:text-large py-1">
            Description
          </h2>
          <p className="text-start md:text-base text-sm text-light-pink/80">
            {data.description}
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-col-reverse justify-center pt-6 md:items-stretch items-center my-12 w-10/12 mx-auto">
        <div className="text-white gap-y-12 flex flex-col h-auto items-center justify-between">
          <div className="text-center">
            <h4 className="md:text-2xl text-lg text-light-pink font-semibold mb-3">
              Plant Care Basics
            </h4>
            <p className="text-str=art text-wrap md:text-base text-sm">
              <span>
                Learn about the basics you need to take care of your plant!{" "}
              </span>
              <span>
                The level of care that this plant needs is{" "}
                {data.care_level?.toLowerCase()}.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap Tmd:flex-row Tflex-col justify-around w-full mx-auto gap-7 lg:gap-10 ">
            <div className="w-80 h-72 Tmx-auto bg-green-800/10 p-3 rounded-lg shadow-xl">
              <div
                className={`rounded-md w-[72px] bg-light-pink p-4 mx-auto flex justify-center items-center mb-2`}
              >
                <GiWaterDrop color="black" size={40} />
              </div>
              <div className="mt-4 text-center Tmd:text-start">
                <p className="font-bold text-light-pink mb-2 md:text-base text-sm">
                  Watering
                </p>

                {data.watering_general_benchmark.value && (
                  <p className="mb-6 md:text-base text-sm">
                    Every {data.watering_general_benchmark.value}{" "}
                    {data.watering_general_benchmark.unit}.
                  </p>
                )}
                {data.watering_general_benchmark.value == undefined && (
                  <p>The watering data is unavailable for this plant.</p>
                )}
              </div>
            </div>
            <div className="w-80 h-72 Tmx-auto bg-green-800/10 p-3 rounded-lg shadow-xl">
              <div
                className={`rounded-md bg-light-pink p-4 mx-auto w-[72px] flex justify-center items-center mb-2 `}
              >
                <GiSunCloud color="black" size={40} />
              </div>
              <div className=" mt-4 text-center ">
                <p className="font-bold text-light-pink mb-2 md:text-base text-sm">
                  Sunlight
                </p>

                <p className="mb-6 md:text-base text-sm">
                  It will do well in
                  {" " +
                    data.sunlight
                      .map((w) => w.toLowerCase())
                      .join(", ")
                      .replace(/, ([^,]*)$/, " and $1")}
                  .{" "}
                </p>
              </div>
            </div>

            <div className="w-80 h-72 TAmx-auto bg-green-800/10 p-3 rounded-lg shadow-xl">
              <button
                className={`rounded-md bg-light-pink p-4 mx-auto w-[72px] flex justify-center items-center mb-2`}
              >
                <GiHills color="black" size={40} />
              </button>
              <div className="mt-4 text-center">
                <p className="font-bold text-light-pink mb-2 md:text-base text-sm">
                  Environment
                </p>

                <p className=" mb-2 text-sm">
                  It is an {data.indoor == true ? "indoor" : "outdoor"} plant.
                </p>

                {data.indoor == false ? (
                  <p className="mb-2 text-sm">
                    {" "}
                    Its USDA plant hardiness zones range from:{" "}
                    {data.hardiness?.min}-{data.hardiness?.max} (min-max).{" "}
                  </p>
                ) : (
                  <p></p>
                )}

                {data.drought_tolerant == true && (
                  <p className="text-light-pink/80 mb-2 font-bold text-sm">
                    Is Drought Tolerant
                  </p>
                )}
                {data.tropical == true && (
                  <p className="text-light-pink/80 font-bold text-sm">
                    Is Tropical
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {(data.pruning_month || data.pruning_count.amount) && (
        <section className="text-white py-10 flex justify-center items-start flex-col w-10/12 mx-auto">
          <h4 className="text-2xl text-light-pink my-4 font-semibold">
            Plant Maintenance and Propogation
          </h4>
          <div className="flex-col flex">
            <p className=" text-base">
              Overall, this {data.type?.toLowerCase()} is a plant that needs a{" "}
              {data.maintenance?.toLowerCase() ||
                data.care_level?.toLowerCase()}{" "}
              level of maintenance.
            </p>

            {(data.pruning_month ||
              data.pruning_count.amount ||
              data.pruning_count.interval) && (
              <div>
                <p className="font-bold mt-6 ml-0 text-light-pink/80">
                  Pruning
                </p>
                {data.pruning_month && (
                  <p className="text-str=art md:text-base text-sm my-2">
                    It is suggested to prune in the month(s) of{" "}
                    {" " +
                      uniq
                        .filter((item) => {
                          return item.length > 1;
                        })
                        .join(", ")
                        .replace(/, ([^,]*)$/, " and $1")}
                    .
                  </p>
                )}
                {data.pruning_count.amount && data.pruning_count.interval && (
                  <p className="md:text-base text-sm my-2">
                    Additionally, it is recommmended for this plant to be pruned{" "}
                    {data.pruning_count.amount} time(s){" "}
                    {data.pruning_count.interval}.
                  </p>
                )}
              </div>
            )}
            {data.harvest_season && (
              <div>
                <p className="font-bold mt-6 ml-0 text-light-pink/80">
                  Harvesting
                </p>
                <p className="md:text-base text-sm my-2">
                  {data.harvest_season && (
                    <span>
                      {" "}
                      It can be harvested in the{" "}
                      {data.harvest_season?.toLowerCase()}.
                    </span>
                  )}
                </p>
              </div>
            )}

            {data.propagation && (
              <div>
                <p className="font-bold text-light-pink/80 mt-6 ml-0">
                  Propogation
                </p>
                <p className="text-str=art md:text-base text-sm my-2">
                  This plant can be propagated by{" "}
                  {" " +
                    data.propagation
                      .map((w) => w.toLowerCase())
                      .join(", ")
                      .replace(/, ([^,]*)$/, " and $1")}
                  .
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className=" text-white my-6 py-10 flex flex-col md:flex-row gap-x-8 gap-y-20 md:gap-y-2 w-10/12 mx-auto items-center md:justify-around">
        <div className="bg-light-pink w-72 min-h-[16rem] flex flex-col items-center rounded-xl py-20 relative gap-y-8">
          <div className="rounded-full bg-coral w-10 h-10 z-10 absolute -top-4"></div>
          <div className="w-4/5 items-start flex flex-col gap-y-3">
            <p className="text-lg text-deep-green/80 italic mb-2 font-bold">
              Exercise caution if any of these are true-
            </p>
            <CheckCross data={data.thorny} text="Thorns" />
            <CheckCross data={data.invasive} text="Invasive" />
            <CheckCross
              data={data.poisonous_to_humans}
              text="Poisonous to humans"
            />
          </div>
        </div>

        <div className="bg-light-pink w-72 min-h-[16rem] flex flex-col items-center rounded-xl py-20 relative gap-y-8">
          <div className="rounded-full bg-coral w-10 h-10 z-10 absolute -top-4"></div>
          <div className="w-4/5 items-start flex flex-col gap-y-3">
            <p className="text-lg text-deep-green/80 italic mb-2 font-bold">
              Special uses for the plant-
            </p>
            <CheckCross data={data.cuisine} text="Used in cuisine" />
            <CheckCross data={data.medicinal} text="Medicinal" />
            <CheckCross data={data.edible_leaf} text="Edible leaves" />
            <CheckCross data={data.fruits} text="Produces fruits" />
          </div>
        </div>
      </section>
      <section className="text-white py-6 flex justify-center items-start flex-col gap-y-6 w-10/12 mx-auto">
        <h4 className="text-2xl text-light-pink font-semibold">
          Fun Facts About This Plant
        </h4>
        <div className="flex flex-col gap-y-2 text-sm md:text-base">
          {data.rare == true && <p>The {data.common_name} is rare!</p>}
          {data.origin && (
            <div>
              <p className="font-bold text-light-pink/80 ml-0 text-base">
                Origin
              </p>
              <p className="md:text-base text-sm my-2">
                This plant originates from{" "}
                {data.origin.join(", ").replace(/, ([^,]*)$/, " and $1")}.
              </p>
            </div>
          )}

          {(data.edible_fruit == true || data.edible_leaf == true) && (
            <div>
              <p className="font-bold text-light-pink/80 mt-6 ml-0 text-base">
                Edible
              </p>
              {data.edible_fruit == true && (
                <p className="text-str=art md:text-base text-sm my-2">
                  This is a plant with edible fruit!
                </p>
              )}
              {data.fruit_color == true && (
                <p className="text-str=art md:text-base text-sm my-2">
                  The fruit color is {data.fruit_color}.
                </p>
              )}
              {data.fruiting_season == true && (
                <p className="text-str=art md:text-base text-sm my-2">
                  THe fruiting season is {data.fruiting_season}.
                </p>
              )}
              {data.edible_leaf == true && (
                <p className="text-str=art md:text-base text-sm my-2">
                  This is a plant with edible leaves!
                </p>
              )}
            </div>
          )}

          {(data.growth_rate || data.dimension) && (
            <div>
              <p className="font-bold text-light-pink/80 mt-6 ml-0 text-base">
                Plant Growth
              </p>
              {data.growth_rate && (
                <p className="text-str=art md:text-base text-sm my-2">
                  The growth rate of this plant is{" "}
                  {data.growth_rate?.toLowerCase()}.{" "}
                </p>
              )}
              {data.dimension && (
                <p className="text-str=art md:text-base text-sm my-2">
                  It can grow between {data.dimension?.toLowerCase()}.
                </p>
              )}
            </div>
          )}
        </div>
        {data.flowers == true && (
          <div className="flex md:flex-row flex-col w-10/12 justify-between">
            <div className="flex flex-col gap-x-1">
              <p className="font-bold text-light-pink/80 ml-0 text-base">
                Flowers
              </p>
              {data.flowers == true ? (
                <p className="text-str=art md:text-base text-sm my-2">
                  {" "}
                  This plant flowers!{" "}
                </p>
              ) : (
                <p className="text-str=art md:text-base text-sm my-2">
                  This plant does not flower.
                </p>
              )}
              {data.flowering_season && (
                <p className="text-str=art md:text-base text-sm my-2">
                  Commonly, it will do so in {data.flowering_season}.
                </p>
              )}
              {data.flower_color && (
                <p className="text-str=art md:text-base text-sm my-2 text-wrap">
                  The information about the flower color(s) is as follows:{" "}
                  {data.flower_color?.toLowerCase()}.
                </p>
              )}
            </div>
            <div className="flex flex-row md:ml-6 ml-0 items-center">
              <GiSpotedFlower
                className="mr-2 text-light-pink animate-bounce-3 "
                size={24}
              />
              <GiSpotedFlower
                className="mr-6 mt-14 text-light-yellow ml-6 animate-bounce-4"
                size={24}
              />
              <GiSpotedFlower
                className=" text-coral mt-8 animate-bounce-2"
                size={24}
              />

              <GiSpotedFlower
                className=" text-[#AE667A] mt-20 animate-bounce-3"
                size={24}
              />
              <GiSpotedFlower
                className=" ml-12 mt-12 animate-bounce"
                size={24}
              />

              <GiSpotedFlower
                className="mr-2 text-light-pink animate-bounce-2"
                size={24}
              />
              <GiSpotedFlower
                className="mr-18 mt-28 text-light-yellow ml-4 animate-bounce-3"
                size={24}
              />
              <GiSpotedFlower
                className=" text-coral mt-2 animate-bounce-4"
                size={24}
              />

              <GiSpotedFlower
                className=" text-[#AE667A] mt-20 animate-bounce-2"
                size={24}
              />
              <GiSpotedFlower
                className=" ml-12 mt-7 animate-bounce-4 "
                size={24}
              />

              <GiSpotedFlower
                className="mr-2 text-light-pink animate-bounce"
                size={24}
              />
              <GiSpotedFlower
                className="mr-6 mt-24 text-light-yellow ml-4 animate-bounce"
                size={24}
              />
              <GiSpotedFlower
                className=" text-coral mt-8 animate-bounce-2"
                size={24}
              />

              <GiSpotedFlower
                className=" text-[#AE667A] mt-20 animate-bounce-4"
                size={24}
              />
              <GiSpotedFlower
                className=" ml-4 mt-18 animate-bounce-3"
                size={24}
              />
            </div>
          </div>
        )}

        {data.flowers == false && (
          <div className="flex flex-row w-10/12 justify-between mx-auto ">
            <GiSpotedFlower
              className="mr-2 text-light-pink animate-bounce-3 w-48 md:w-6"
              size={24}
            />
            <GiSpotedFlower
              className="mr-6 mt-14 text-light-yellow ml-6 w-48 animate-bounce-4 md:w-6"
              size={24}
            />
            <GiSpotedFlower
              className=" text-coral mt-8 w-48 animate-bounce-2 md:w-6"
              size={24}
            />

            <GiSpotedFlower
              className=" text-[#AE667A] mt-20 w-48 animate-bounce-3 md:w-6"
              size={24}
            />
            <GiSpotedFlower className=" ml-12 mt-12 w-48 animate-bounce md:w-6" size={24} />

            <GiSpotedFlower
              className="mr-2 text-light-pink w-48 animate-bounce-2 md:w-6"
              size={24}
            />
            <GiSpotedFlower
              className="mr-18 mt-28 text-light-yellow w-48 ml-4 animate-bounce-3 md:w-6"
              size={24}
            />
            <GiSpotedFlower
              className=" text-coral mt-2 w-48 animate-bounce-4 md:w-6"
              size={24}
            />

            <GiSpotedFlower
              className=" text-[#AE667A] mt-20 w-48 animate-bounce-2 md:w-6"
              size={24}
            />
            <GiSpotedFlower
              className=" ml-12 mt-7 w-48 animate-bounce-4 md:w-6"
              size={24}
            />

            <GiSpotedFlower
              className="mr-2 text-light-pink animate-bounce hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className="mr-6 mt-24 text-light-yellow ml-4 animate-bounce hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className=" text-coral mt-8 animate-bounce-2 hidden md:flex"
              size={24}
            />

            <GiSpotedFlower
              className=" text-[#AE667A] mt-20 animate-bounce-4 hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className=" ml-4 mt-18 animate-bounce-3 hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className="mr-2 text-light-pink mt-28 animate-bounce  hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className="mr-6 mt-14 text-light-yellow ml-6 animate-bounce-4 hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className=" text-coral mt-8 animate-bounce-2 hidden md:flex"
              size={24}
            />

            <GiSpotedFlower
              className=" text-[#AE667A] mt-20 animate-bounce-3 hidden md:flex"
              size={24}
            />
            <GiSpotedFlower className=" ml-12 mt-12 animate-bounce hidden md:flex" size={24} />

            <GiSpotedFlower
              className="mr-2 text-light-pink animate-bounce-2 hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className="mr-18 mt-28 text-light-yellow ml-4 animate-bounce-3 hidden md:flex" 
              size={24}
            />
            <GiSpotedFlower
              className=" text-coral mt-2 animate-bounce-4 hidden md:flex"
              size={24}
            />

            <GiSpotedFlower
              className=" text-[#AE667A] mt-20 animate-bounce-2 hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className=" ml-12 mt-7 animate-bounce-4  hidden md:flex"
              size={24}
            />

            <GiSpotedFlower
              className="mr-2 text-light-pink animate-bounce hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className="mr-6 mt-24 text-light-yellow ml-4 animate-bounce hidden md:flex"
              size={24}
            />
            <GiSpotedFlower
              className=" text-coral mt-8 animate-bounce-2 hidden md:flex"
              size={24}
            />

            <GiSpotedFlower
              className=" text-[#AE667A] mt-20 animate-bounce-4 hidden md:flex" 
              size={24}
            />
            <GiSpotedFlower
              className=" ml-4 mt-18 animate-bounce-3 hidden md:flex"
              size={24}
            />
          </div>
        )}
      </section>
    </div>
  );
}
