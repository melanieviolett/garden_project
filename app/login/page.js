import authImg from "/public/undraw_authentication_re_svpt.svg";
import Image from "next/image";
import Link from "next/link";
export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row-reverse items-center min-h-screen">
        <div className="custom-css flex-col space-y-10 items-center hidden md:flex justify-center text-center md:w-1/2 w-full h-screen rounded-3xl">
          <div className="flex justify-center">
            <Image
              src={authImg}
              alt="public discussion"
              className="md:w-[55%] w-2/5 h-auto"
            />
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold">Grow your garden</p>
            <p>
              Connect with other plant lovers around the world and improve your
              gardening skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col relative space-y-10 items-center justify-center text-center md:w-1/2 w-full h-screen">
          <div className="space-y-4 text-white">
            <p className="text-3xl font-bold">Welcome back!</p>
          </div>
          <div className="flex flex-col space-y-4 w-3/4">
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
              Log in
            </button>
            <p className="text-xs text-white">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-extrabold text-[#E0AFA5] underline hover:text-[#E0AFA5]/80 decoration-wavy"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
