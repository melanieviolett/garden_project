import { signIn, signOut } from "/auth.js";
import { FaGithub } from "react-icons/fa";

export function AuthButton({ provider, ...props }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button
        
        className="bg-white border-gray-400 border shadow-xl hover:shadow-gray-900 rounded-xl py-1 px-3 flex gap-x-5 items-center"
      >
        <span className="bg-[color:var(--background)] p-1 rounded">
          <FaGithub size={30} />
        </span>
        <p className="sm:text-xl text-gray-700">
          Sign Up with GitHub
        </p>
      </button>
    </form>
  );
}
