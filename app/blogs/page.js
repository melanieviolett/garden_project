import Preview from "./components/Preview";
import prisma from "@/lib/db";
export default async function Page() {
  const allPosts = await prisma.post.findMany();

  return (
    <div className="flex flex-col space-y-10 justify-between items-center pt-12 w-10/12 mx-auto">
      {allPosts.map((blog) => {
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
          />
        );
      })}
    </div>
  );
}
