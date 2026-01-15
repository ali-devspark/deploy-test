"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mt-16 p-5 w-10/12  bg-indigo-800 rounded-xl shadow-lg shadow-indigo-500 dark:text-amber-600">
        Home
      </h1>

      <h2 className="text-2xl font-bold text-center mt-16 p-5 w-1/2  bg-indigo-800 rounded-xl shadow-lg shadow-indigo-500 dark:text-amber-600">
        Aloooosh
      </h2>

      <button
        onClick={() => alert("Hello World")}
        className="w-64 h-32 bg-red-500 rounded-2xl mt-16 "
      >
        Click me, Please
      </button>
    </div>
  );
}
