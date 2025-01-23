import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";

const providers = [GitHub, Google];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ account, profile, user, credentials }) {
      try {
        // check if user already exists
        const userExists = await prisma.user.findUnique({
          where: { email: profile.email },
        });

        // if not, create a new user with just the email
        if (!userExists) {
          await prisma.user.create({
            data: {
              email: profile.email,
              botanical_interests: [],
              comments: {
                create: [],
              },
            },
          });
        }
        return true;
      } catch (error) {
        console.log("Error logging in: ", error.message);
        return false;
      }
    },

  },
});
