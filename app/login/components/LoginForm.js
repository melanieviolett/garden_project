import { signIn, auth, providerMap } from "/auth.js";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="flex flex-col space-y-4 w-3/4 items-center">
      <div className="flex flex-col gap-2">
        {Object.values(providerMap).map((provider) => (
          <form
            action={async () => {
              "use server";
              await signIn(provider.id, { redirectTo: "/register" });
            }}
          >
            <button
              type="submit"
              className="bg-white hover:bg-slate-300 p-4 rounded-md flex-row flex items-center mb-6 justify-center"
            >
              <span className="bg-[color:var(--background)] p-1 rounded">
                {provider.name === "GitHub" ? (
                  <FaGithub size={30} />
                ) : (
                  <FaGoogle size={30} />
                )}
              </span>
              <span className="font-bold">Sign in with {provider.name}</span>
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}
