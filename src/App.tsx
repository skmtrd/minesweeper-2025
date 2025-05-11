"use client";

import { useState } from "react";
import viteLogo from "/vite.svg";
import biomeLogo from "./assets/biome.svg";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwind.svg";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 text-center md:p-8 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm md:p-10 dark:bg-gray-800/90">
        <div className="mb-8 flex flex-wrap justify-center gap-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="group"
            rel="noreferrer"
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
              <img
                src={viteLogo || "/placeholder.svg"}
                className="h-20 w-20 object-contain p-2 transition-all duration-500 group-hover:drop-shadow-[0_0_1.5em_#646cffaa]"
                alt="Vite logo"
              />
            </div>
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="group"
            rel="noreferrer"
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
              <img
                src={reactLogo || "/placeholder.svg"}
                className="h-20 w-20 object-contain p-2 transition-all duration-500 group-hover:drop-shadow-[0_0_1.5em_#61dafbaa]"
                alt="React logo"
              />
            </div>
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="group"
            rel="noreferrer"
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
              <img
                src={tailwindLogo || "/placeholder.svg"}
                className="h-20 w-20 object-contain p-2 transition-all duration-500 group-hover:drop-shadow-[0_0_1.5em_#44a8b3aa]"
                alt="Tailwind logo"
              />
            </div>
          </a>
          <a
            href="https://biomejs.dev"
            target="_blank"
            className="group"
            rel="noreferrer"
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-700">
              <img
                src={biomeLogo || "/placeholder.svg"}
                className="h-20 w-20 object-contain p-2 transition-all duration-500 group-hover:drop-shadow-[0_0_1.5em_#F25022aa]"
                alt="Biome logo"
              />
            </div>
          </a>
        </div>

        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-4xl text-transparent md:text-5xl dark:from-blue-400 dark:to-purple-400">
          Vite + React + Tailwind + Biome
        </h1>

        <div className="mb-8 inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-blue-800 text-sm dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
          Fast Development Environment
        </div>

        <div className="mx-auto mb-6 max-w-md rounded-xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-md dark:from-gray-700 dark:to-gray-800">
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
              className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg"
            >
              Count: {count}
            </button>

            <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm dark:bg-gray-800">
                src/App.tsx
              </code>{" "}
              Edit and save to test HMR
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://vitejs.dev/guide/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Learn more about Vite and React
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <p className="mt-6 text-gray-500 text-sm dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
