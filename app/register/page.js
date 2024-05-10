import registerImg from "/public/undraw_my_password_re_ydq7.svg";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { botanical_interests } from "@/utils/constants";

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row-reverse items-center min-h-screen">
        <div className="custom-css flex-col space-y-10 items-center hidden md:flex justify-center text-center md:w-1/2 w-full h-screen rounded-3xl">
          <div className="flex justify-center">
            <Image
              src={registerImg}
              alt="register image"
              className="md:w-[55%] w-2/5 h-auto"
            ></Image>
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold">
              Create an account and join the community today!
            </p>
            <p>
              Connect with other plant lovers around the world and improve your
              gardening skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col relative items-center justify-center text-center md:w-1/2 w-full h-screen">
          <div className="flex flex-col space-y-4 w-3/4">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="justify-center items-center flex">
                  {" "}
                  <div className="flex flex-col space-y-3 w-3/4">
                    <p className="text-start text-white">Name</p>
                    <input
                      type="text"
                      className="p-4 text-xs md:text-sm rounded-lg"
                      placeholder="Name"
                    />
                    <br />
                    <p className="text-start text-white">Username</p>
                    <input
                      type="text"
                      className="p-4 text-xs md:text-sm rounded-lg"
                      placeholder="Username"
                    />
                    <br />

                    <p className="text-start text-white">Email</p>
                    <input
                      type="text"
                      className="p-4 text-xs md:text-sm rounded-lg"
                      placeholder="Email"
                    />
                    <br />

                    <p className="text-start text-white">Password</p>
                    <input
                      type="password"
                      className="p-4 text-xs md:text-sm rounded-lg"
                      placeholder="Password"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="text-white flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-3 w-3/4">
                  <legend className="text-light-pink text-2xl mb-8">
                    Select all of the topics that interest you:
                  </legend>
                  <div className="flex flex-col space-y-2 text-lg">
                    {botanical_interests.map((interest, index) => (
                      <label>
                        <input
                          type="checkbox"
                          name="selectedOptions"
                          value={interest}
                          className="mr-2"
                          // checked={formData.selectedOptions.includes('option1')}
                          // onChange={handleChange}
                        />
                        {interest}
                      </label>
                    ))}
                  </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex flex-col items-center">
                  {" "}
                  <div className="flex flex-col space-y-3 w-3/4">
                  <p className="pt-16 mb-2 text-start text-base blog-break:text-lg text-white">
                    Plants currently growing
                  </p>
                  <textarea
                    className="p-4 ps-4 text-sm blog-break:text-lg rounded-lg mb-10 text-deep-green"
                    rows="5"
                    aria-multiline="true"
                    role="textbox"
                    contentEditable="true"
                    placeholder="Start writing..."
                  ></textarea>
                  <p className="pt-4 mb-2 text-start text-base blog-break:text-lg text-white">
                    Plants wanting to grow
                  </p>
                  <textarea
                    className="p-4 ps-4 text-sm blog-break:text-lg rounded-lg mb-10 text-deep-green"
                    rows="5"
                    aria-multiline="true"
                    role="textbox"
                    contentEditable="true"
                    placeholder="Start writing..."
                  ></textarea>
                  <button className="bg-coral text-white hover:opacity-70 mt-4 font-medium rounded-lg md:text-sm text-xs px-4 py-2">
                    Create account
                  </button>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-xs md:text-base text-white">
              Been here before?{" "}
              <Link
                href="/login"
                className="font-extrabold text-[#E0AFA5] underline hover:text-[#E0AFA5]/80 decoration-wavy"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
