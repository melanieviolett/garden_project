import Preview from "./components/Preview";
import { blogsMockAPI } from "@/utils/constants";

export default async function Page() {
  return (
    <div className="flex flex-col space-y-10 justify-between items-center pt-12 w-10/12 mx-auto">
      {blogsMockAPI.map((blog) => {
        return (
          <Preview
            pic={blog.pic}
            title={blog.title}
            bodyText={blog.bodyText}
            likes={blog.likes}
            num_comments={blog.num_comments}
            cList={blog.comments}
            topics={blog.topics}
            author={blog.author}
          />
        );
      })}
    </div>
  );
}
