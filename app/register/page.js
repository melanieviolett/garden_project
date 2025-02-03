import registerImg from "/public/undraw_my_password_re_ydq7.svg";
import Image from "next/image";
import RegisterForm from "./components/RegisterForm";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { auth } from "/auth.js";
import { isRedirectError } from "next/dist/client/components/redirect";

export default async function Page() {

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row-reverse items-center min-h-screen">
        <div className="custom-css flex-col space-y-10 items-center hidden lg:flex justify-center text-center lg:w-1/2 w-full h-screen rounded-3xl">
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
        <div className="flex flex-col relative items-center justify-center text-center md:w-1/2 w-full">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
