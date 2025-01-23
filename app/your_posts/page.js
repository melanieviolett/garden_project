import prisma from "@/lib/db";
import Preview from "../blogs/components/Preview";
import SearchBar from "../grow/components/SearchBar";

export default async function Page () {
  const posts = await prisma.post.findMany();
  return (
    <div className="flex flex-col space-y-10 justify-between items-center pt-12 w-10/12 mx-auto">
    {/* //       <div className="flex flex-wrap md:justify-between justify-center items-center md:items-end gap-4 w-full mx-auto">
    //     <SearchBar color={"light-pink"} />
        

    //   </div> */}


{posts.map((blog) => {
    if (blog.authorUsername === "melly") {
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
    }
  })}
  </div>
);
}
