import prisma from "@/lib/db";
import Preview from "../blogs/components/Preview";
import { auth } from "@/auth";

export default async function Page() {
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

  const getPostsWithUsername = await prisma.post.findMany({
    where: {
      authorUsername: currentUser.username,
    },
  });

  return (
    <div className="flex flex-col space-y-10 justify-between items-center pt-12 w-10/12 mx-auto">
      {getPostsWithUsername.map((blog) => {
          return (
            <Preview
              // pic={blog.postImage}
              bodyText={blog.postTextContent}
              likes={blog.numLikes}
              title={blog.postTitle}
              num_comments={blog.numComments}
              cList={blog.comments}
              topics={blog.postTopics}
              author={blog.authorUsername}
              del={true}
              edit={true}
            />
          );
      })}
    </div>
  );
}
