import React from "react";
import SavedShows from "../components/SavedShows";
import { UserAuth } from "../context/AuthContext";
const Account = () => {
  const { user } = UserAuth();
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[440px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <p className="py-5 my-4 text-xl font-bold text-gray-300 border-y-2 border-gray-400 ">{user?.email}</p>
          <h1 className="mt-[20%] text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
