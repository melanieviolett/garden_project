import registerImg from "/public/undraw_my_password_re_ydq7.svg";
import Image from "next/image";
import Link from "next/link";
export default async function Page() {
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
            <p className="text-3xl font-bold">Join the community today!</p>
            <p>
              Connect with other plant lovers around the world and improve your
              gardening skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col relative space-y-10 items-center justify-center text-center md:w-1/2 w-full h-screen">
          <div className="space-y-4 text-white">
            <p className="text-3xl font-bold">Create an account</p>
          </div>
          <div className="flex flex-col space-y-4 w-3/4">
            <input
              type="text"
              className="p-4 text-xs md:text-sm rounded-lg"
              placeholder="Name"
            />
            <input
              type="text"
              className="p-4 text-xs md:text-sm rounded-lg"
              placeholder="Username"
            />
            <input
              type="text"
              className="p-4 text-xs md:text-sm rounded-lg"
              placeholder="Email"
            />
            <input
              type="password"
              className="p-4 text-xs md:text-sm rounded-lg"
              placeholder="Password"
            />
            <button className="bg-coral text-white hover:opacity-70 font-medium rounded-lg md:text-sm text-xs px-4 py-2">
              Create account
            </button>
            <p className="text-xs text-white">
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
