"use client";
import { botanical_interests, emojis, users } from "@/utils/constants";
import { useState } from "react";
import Interest from "./components/Interest";
import InputBox from "./components/InputBox";
import TextAreaComp from "./components/TextAreaComp";

// decide if im doing server actions, form whatever
// could hypothetically reuse comps for input and text area for edit posts section!!

export default function Page() {
  const [inputState, setInputState] = useState(null);
  const [wantingToGrow, setWantingToGrow] = useState(null);
  const [currentlyGrow, setCurrentlyGrow] = useState(null);

  return (
    <div className="flex flex-col space-y-10 min-h-screen justify-start md:justify-between items-center w-10/12 mx-auto">
      <div className="flex flex-col space-y-10 justify-center items-center pt-12 w-full mx-auto">
        <div className="flex md:flex-row flex-col text-light-pink text-lg font-bold md:w-10/12 w-full items-center justify-around">
          {users.map((user) => {
            if (user.username === "melly") {
              return (
                <div className="flex blog-break:flex-row flex-col text-light-pink text-lg font-bold md:w-10/12 w-full items-center justify-around">
                  <div className="flex flex-col items-start blog-break:w-1/4 md:text-xl text-base">
                    <InputBox
                      headerText="Username"
                      userInfo={user.username}
                      editable={true}
                      inputState={inputState}
                      setInputState={setInputState}
                    />
                    <InputBox
                      headerText="Email"
                      userInfo={user.email}
                      editable={false}
                    />
                    <p className="mt-10 mb-4">Botanical Interests</p>

                    {botanical_interests.map((interest, index) => (
                      <Interest
                        key={index}
                        text={interest}
                        emoji={emojis[index]}
                        isInUser={user.botanical_interests.includes(interest)}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col md:w-1/2 md:text-xl text-base">
                    <TextAreaComp
                      headerText="Plants currently growing"
                      userInfo={user.plants_currently}
                      textArState={currentlyGrow}
                      setTextArState={setCurrentlyGrow}
                      headerColor="light-pink"
                    ></TextAreaComp>

                    <TextAreaComp
                      headerText="Plants wanting to grow"
                      userInfo={user.plants_wanting}
                      textArState={wantingToGrow}
                      setTextArState={setWantingToGrow}
                      headerColor="light-pink"
                    ></TextAreaComp>
                    <button className="bg-coral blog-break:w-1/2 rounded-lg md:text-base text-sm text-deep-green p-4 text-center md:mt-8 mt-4 hover:opacity-70">
                      Save changes
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
