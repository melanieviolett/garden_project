import authImg from "/public/undraw_authentication_re_svpt.svg";
import Image from "next/image";
import Link from "next/link";
import { signIn, auth, providerMap } from "/auth.js";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default async function Page() {
  const session = await auth();

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
          <div className="flex flex-col space-y-4 w-3/4 items-center">

            {!session?.user && (
              <div className="flex flex-col gap-2">
                {Object.values(providerMap).map((provider) => (
                  <form
                    action={async () => {
                      "use server";
                      await signIn(provider.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-white hover:bg-slate-300 p-4 rounded-md flex-row flex items-center justify-center"
                    >
                      <span className="bg-[color:var(--background)] p-1 rounded">
                        <FaGithub size={30} />
                      </span>
                      <span className="font-bold">
                        Sign in with {provider.name}
                      </span>
                    </button>
                  </form>
                ))}
              </div>
            )}
            {session?.user && redirect("/blogs")}
            <p className="text-xs md:text-base text-white">
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
