import Image from "next/image";
import wishesImg from "../public/undraw_wishes_icyp.svg";
import FeaturesCard from "@/components/FeaturesCard";
import pottedPlant from "../public/icons8-potted-plant-48.png";
import booksImg from "../public/icons8-book-50.png";
import communityImg from "../public/icons8-community-48.png";
import publicDiscImg from "../public/undraw_public_discussion_re_w9up.svg";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="bg-deep-green">
        <header className=" bg-deep-green flex flex-col md:flex-row whitespace-normal w-10/12 mx-auto items-center justify-around pt-12 md:pt-28">
          <Image
            src={wishesImg}
            alt="wishes image"
            className="max-w-[300px] max-h-[200px] md:max-w-none md:max-h-none md:w-[30%] w-4/5 h-auto"
          />

          <div className="w-3/4 text-center">
            <h2 className="text-white text-2xl lg:text-5xl whitespace-normal md:text-3xl sm:text-xl p-2">
              Find the Best Plant to Grow Next
            </h2>

            <p className="text-gray-300 inline-block pt-3 text-sm lg:text-base p-2">
              When choosing your new plant, we provide for you many options of
              plants. These plants would give you the most success based on the
              conditions you'll provide for it.
            </p>

            <Link href="/grow">
              <button className="bg-coral w-1/4 rounded-lg md:text-base text-sm text-deep-green font-semibold mt-3 p-2 text-center hover:opacity-70">
                Grow
              </button>
            </Link>
          </div>
        </header>
      </div>
      <div className="flex flex-col md:flex-row w-10/12 mx-auto justify-between py-24 bg-deep-green">
        <FeaturesCard
          headText="Grow Your Garden"
          circleColor="bg-[#DFAFA580]"
          imgType={pottedPlant}
          bodyText="Find your new plant here! Look through thousands of species and find the perfect new plant for you to grow. Use the filters to find the best option for your next plant."
        />

        <FeaturesCard
          headText="Learn About Plant Care"
          circleColor="bg-[#B27E50]"
          imgType={booksImg}
          bodyText="Learn all of the details about the plant you decide on. Give your new plant the best chance at surviving by learning everything it needs to thrive!"
        />

        <FeaturesCard
          headText="Join the Community Blog"
          circleColor="bg-[#FBDC9A80]"
          imgType={communityImg}
          bodyText="Join our community blog and connect with fellow plant lovers! Get and give advice on plant care, look at beautiful plants, or show off your plant's progress."
        />
      </div>

      <div className="flex flex-col md:flex-row w-10/12 mx-auto py-16 bg-deep-green items-center justify-around">
        <Image
          src={publicDiscImg}
          alt="public discussion"
          className=" md:w-[35%] w-3/5 h-auto"
        />

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl lg:text-4xl text-white font-medium my-4">
            Join the Community Today!
          </h2>
          <p className="text-white">Blog feature coming soon.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
