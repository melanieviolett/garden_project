import {
  botanical_interests,
  emojis,
  users,
  blogsMockAPI,
} from "@/utils/constants";
import Interest from "../e_profile/components/Interest";
import Preview from "../blogs/components/Preview";
export default async function Page() {
  return (
    <div className="flex flex-col space-y-10 bg-m-green/10 rounded-lg p-8 min-h-screen w-10/12 mx-auto">
      {users.map((user) => {
        if (user.username === "sallyperson") {
          return (
            <>
              <div className="flex flex-col text-center items-center">
                <div
                  className={`rounded-full ${user.profColor} md:w-28 md:h-28 w-16 h-16`}
                ></div>
                <p className="text-white font-semibold mt-4 md:text-4xl text-xl">
                  @{user.username}
                </p>
              </div>

              <div className="flex flex-row flex-wrap text-center items-center justify-center space-x-6 md:text-xl text-sm">
                {botanical_interests.map(
                  (interest, index) =>
                    user.botanical_interests.includes(interest) && (
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
                <p className="md:text-lg text-sm">{user.plants_currently}</p>
                <p className="text-light-pink font-semibold md:text-2xl text-lg italic mt-8">
                  Plants wanting to grow
                </p>
                <p className="md:text-lg text-sm">{user.plants_wanting}</p>
              </div>
              {blogsMockAPI.map((blog) => {
                if (blog.author === "@sallyperson") {
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
                      del={false}
                      edit={false}
                    />
                  );
                }
              })}
            </>
          );
        }
      })}
    </div>
  );
}
