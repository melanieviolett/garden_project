"use server";
import prisma from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import { validate } from "@/lib/utils";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function addPost(formData) {
  // TODO: add image support
  const session = await auth();
  if (session === null || session === undefined) {
    redirect("/login");
  }
  if (session.user === null || session.user === undefined) {
    redirect("/login");
  }

  const currentUser = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  if (currentUser === null || currentUser === undefined) {
    redirect("/login");
  }


  try {
    await prisma.post.create({
      data: {
        authorUsername: currentUser.username,
        postTextContent: formData.get("textContent"),
        numLikes: 0,
        numComments: 0,
        postTopics: formData.get("topics"),
        postTitle: formData.get("title"),
        postImage: "",
        comments: {
          create: [],
        },
      },
    });
  } catch (e) {
    throw Error(e);
  }
}

const registerSchema = z.object({
  username: z.string().trim().min(1, "Please enter a username."),
  botanical_interests: z
    .array(z.string())
    .nonempty("Please select at least one interest."),
  plants_currently: z
    .string()
    .trim()
    .min(1, "Please enter plants you are currently growing."),
  plants_wanting: z
    .string()
    .trim()
    .min(1, "Please enter plants you want to grow."),
  registered: z.boolean(),
});

export async function addUser(prevState, formData) {
  // validate form data
  const parsedValues = validate(registerSchema, {
    username: formData.get("username"),
    botanical_interests: formData.getAll("botanical_interests"),
    plants_currently: formData.get("plants_currently"),
    plants_wanting: formData.get("plants_wanting"),
    registered: true,
  });

  // return message if validation fails
  if ("message" in parsedValues) {
    return {
      success: false,
      message: parsedValues.message,
      data: parsedValues.data,
    };
  }
  // get session and ensure it is valid
  const session = await auth();
  if (session === null || session === undefined) {
    redirect("/login");
  }
  if (session.user === null || session.user === undefined) {
    redirect("/login");
  }

  // TODO: add image support
  try {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        ...parsedValues,
      },
    });
    // success registering, so redirect to blogs page
    redirect("/blogs");
  } catch (e) {
    console.log("e ", e);
    // handles unique attribute failure on username
    if (e instanceof PrismaClientKnownRequestError && e.code === "P2002") {
      if (e.meta.target.includes("username")) {
        return {
          success: false,
          message: "Invalid data",
          data: {
            username: "Can not have already existing username.",
          },
        };
      }
    }
    console.log("Error registering user: ", e.message);
    return {
      success: false,
      message: "Error registering user",
      data: { general_error: "Error registering user" },
    };
  }
}
