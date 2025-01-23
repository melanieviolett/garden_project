"use client";

import { addUser } from "@/app/actions";
import { botanical_interests } from "@/utils/constants";
import { useFormState } from "react-dom";

export default function RegisterForm() {
  const [errorMessage, dispatch] = useFormState(addUser, null);

  return (
    <form action={dispatch} className="justify-center flex">
      <div className="flex flex-col space-y-3 w-3/4 md:w-full justify-center Titems-center">
        <p className="text-start text-white">Username</p>
        <input
          id="username"
          name="username"
          type="text"
          className="p-4 text-xs md:text-sm rounded-lg text-black"
          placeholder="Username"
        />
        {errorMessage?.data?.username && (
          <p className="text-red-500">{errorMessage.data.username}</p>
        )}
        <br />
        <legend className="text-light-pink text-2xl mb-8 text-left">
          Select all of the topics that interest you:
        </legend>
        <div className="flex flex-col space-y-2 text-lg text-white">
          {botanical_interests.map((interest, index) => (
            <label className="flex items-center" key={index}>
              <input
                id="botanical_interests"
                type="checkbox"
                name="botanical_interests"
                value={interest}
                className="mr-2"
              />
              {interest}
            </label>
          ))}
          {errorMessage?.data?.botanical_interests && (
            <p className="text-red-500">
              {errorMessage.data.botanical_interests}
            </p>
          )}
        </div>

        <p className="pt-8 mb-2 text-start text-base md:text-lg text-white">
          Plants currently growing
        </p>
        <textarea
          className="p-4 ps-4 text-sm md:text-lg rounded-lg mb-10 text-deep-green"
          rows="5"
          aria-multiline="true"
          role="textbox"
          contentEditable="true"
          placeholder="Start writing..."
          name="plants_currently"
          id="plants_currently"
        ></textarea>
        {errorMessage?.data?.plants_currently && (
          <p className="text-red-500">{errorMessage.data.plants_currently}</p>
        )}
        <p className="pt-4 mb-2 text-start text-base md:text-lg text-white">
          Plants wanting to grow
        </p>
        <textarea
          className="p-4 ps-4 text-sm md:text-lg rounded-lg text-deep-green"
          rows="5"
          aria-multiline="true"
          role="textbox"
          contentEditable="true"
          placeholder="Start writing..."
          name="plants_wanting"
          id="plants_wanting"
        ></textarea>
        {errorMessage?.data?.plants_wanting && (
          <p className="text-red-500">{errorMessage.data.plants_wanting}</p>
        )}
        <button className="bg-coral text-white hover:opacity-70 font-medium rounded-lg md:text-sm text-xs px-4 py-2">
          Create account
        </button>
        {errorMessage?.data?.general_error && (
          <p className="text-red-500">{errorMessage.data.general_error}</p>
        )}
      </div>
    </form>
  );
}
