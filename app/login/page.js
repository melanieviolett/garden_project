import authImg from "/public/undraw_authentication_re_svpt.svg";
import Image from "next/image";
import { auth } from "@/auth";
import checkAuth from "@/lib/utils";
import LoginForm from "./components/LoginForm";
// import LoginForm from "./components/LoginForm";

export default async function Page() {
  const session = await auth();

  // useEffect(() => {
  //   await checkAuth;
  // }, [session]);
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
            <p className="text-3xl font-bold mb-6">Welcome back!</p>
          </div>
          <LoginForm /> 
        </div>
      </div>
    </div>
  );
}
