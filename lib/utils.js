import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ZodError, ZodSchema } from "zod";
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


/**
 * Validates an object against a given Zod schema.
 *
 * @template T - The type of the object to be validated.
 *
 * @param {ZodSchema} schema - The Zod schema to validate the object against.
 * @param {T} object - The object to be validated.
 *
 * @returns {ValidateResponse<T>} - The validated object if it passes the schema,
 * or an object containing an error message and a map of validation errors.
 *
 * @throws Will rethrow any errors that are not instances of ZodError. **(It should never happen)**
 *
 * @example
 * const schema = z.object({
 *   name: z.string(),
 *   age: z.number(),
 * });
 *
 * const result = validate(schema, { name: "John", age: 30 });
 * if ('message' in result) {
 *   console.error(result.message, result.data);
 * } else {
 *   console.log("Validation successful:", result);
 * }
 */

export function validate(
    schema,
    object
){
    try {
        const parsedBody = schema.parse(object);
        return parsedBody;
    } catch (err) {
        if (err instanceof ZodError) {
            // Format Zod errors into a more readable structure
            const formattedErrors = {};
            err.errors.forEach((e) => {
                formattedErrors[e.path.join(".")] = e.message;
            });

            return {
                message: "Invalid data",
                data: formattedErrors,
            };
        }
        throw err; // should never happen
    }
}

// export default async function checkAuth() {
//     const session = await auth();
//     console.log("in checkAuth")
//     if (session) {
//         const user = await prisma.user.findUnique({
//             where: {
//                 email: session.user.email,
//             },
//         });

//         if (user.username) {
//             console.log("username exists")
//             return NextResponse.next()
//         } else {
//             console.log("username does not exist, redirecting to register")
//             return NextResponse.redirect(new URL('/register', request.url))
//         }

//     } else {
//         console.log("not logged in, redirect to login")
//         return NextResponse.redirect(new URL('/login', request.url))
//     }
// }
