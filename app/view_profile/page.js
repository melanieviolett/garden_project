import {
  botanical_interests,
  emojis,
  users,
  blogsMockAPI,
} from "@/utils/constants";
import Interest from "../e_profile/components/Interest";
import Preview from "../blogs/components/Preview";
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  const currentUser = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
  });
  if (!currentUser.username) {
    redirect("/register");
  }
  const userPosts = await prisma.post.findMany({
    where: {
      authorUsername: currentUser.username,
    },
  });

  return (
    <div className="flex flex-col space-y-10 bg-m-green/10 rounded-lg p-8 min-h-screen w-10/12 mx-auto">
      <div className="flex flex-col text-center items-center">
        {/* TODO: fix image? */}
        <div
          className={`rounded-full bg-blue-800 md:w-32 md:h-32 w-16 h-16`}
        ></div>
        <p className="text-white font-semibold mt-4 md:text-4xl text-xl">
          @{currentUser.username}
        </p>
      </div>

      <div className="flex flex-row flex-wrap text-center items-center justify-center space-x-6 md:text-xl text-sm">
        {botanical_interests.map(
          (interest, index) =>
            currentUser.botanical_interests.includes(interest) && (
              <Interest
                key={index}
                text={interest}
                emoji={emojis[index]}
                isInUser={true}
              />
            )
        )}
      </div>
      <div className="text-center text-white">
        <p className="text-light-pink font-semibold md:text-2xl text-lg italic mt-8">
          Plants currently growing
        </p>
        <p className="md:text-lg text-sm">{currentUser.plants_currently}</p>
        <p className="text-light-pink font-semibold md:text-2xl text-lg italic mt-8">
          Plants wanting to grow
        </p>
        <p className="md:text-lg text-sm">{currentUser.plants_wanting}</p>
      </div>
      {userPosts.map((blog) => {
        return (
          <Preview
            // pic={blog.pic}
            title={blog.postTitle}
            bodyText={blog.postTextContent}
            likes={blog.numLikes}
            num_comments={blog.numComments}
            // cList={blog.comments}
            topics={blog.postTopics}
            author={blog.authorUsername}
            del={false}
            edit={false}
            key={blog.id}
          />
        );
      })}
    </div>
  );
}
