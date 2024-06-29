import React from "react";

export default function Header() {
  return (
    <h1 className="text-center text-white py-4 font-bold flex items-center justify-center flex-col gap-2">
      <img
        src="/logo.jpg"
        className="rounded"
        alt="logo"
        width={100}
        height={100}
      />
      <code className="font-mono">
        <span className="text-green-300"> Code</span>
        <span className="text-yellow-300"> Editor</span>
        <span> by </span>
        <a
          target="_blank"
          href="https://kartikjoshi.netlify.app"
          className="text-purple-300 underline bg-gray-800 p-1 rounded hover:bg-gray-700 transition-colors"
        >
          KARTIK <span className="text-blue-300"> JOSHI</span>
        </a>
      </code>
    </h1>
  );
}
