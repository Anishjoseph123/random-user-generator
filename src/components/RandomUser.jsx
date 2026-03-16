import React, { useState } from "react";
const RandomUser = () => {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();

    setUser(data.results[0]);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Random User Generator</h1>

      <button
        onClick={fetchUser}
        className="cursor-pointer bg-[#ff8300] text-white px-6 py-2 rounded hover:bg-[#d08230]"
      >
        Generate User
      </button>

      {user && (
        <div className="border border-gray-300 mt-8 bg-white dark:bg-gray-700 dark:text-white shadow-xl rounded-lg p-6 w-80 text-center">
          <img
            src={user.picture.large}
            className="w-24 h-24 rounded-full mx-auto"
          />

          <h2 className="text-xl font-semibold mt-3">
            {user.name.first} {user.name.last}
          </h2>

          <p className="text-gray-600 dark:text-white">{user.email}</p>

          <p className="text-gray-500 dark:text-white">
            {user.location.city}, {user.location.country}
          </p>
          <p className="text-gray-500 dark:text-white">
            {user.dob.age},{user.dob.date}
          </p>
        </div>
      )}
    </div>
  );
};
export default RandomUser;
