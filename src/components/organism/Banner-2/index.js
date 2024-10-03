import React from "react";

function Banner2() {
  return (
    <section class="py-16 px-4 bg-gray-100">
      <div class="max-w-7xl mx-auto text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800">What you will learn</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7-7 7 7m0 4v7a2 2 0 002 2h2a2 2 0 002-2v-7m-7 4v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">
            Best Camera Settings
          </h3>
          <p class="text-gray-600">
            Discover the exact settings to use for different photo scenarios,
            ensuring sharp and vibrant results every time.
          </p>
        </div>
        <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8V4M8 12H4M16 12h4m-4 0a4 4 0 00-8 0m8 0a4 4 0 01-8 0M8 12v4m4-4v4"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">
            Better Composition
          </h3>
          <p class="text-gray-600">
            Learn easy tricks to frame your shots like a pro, making every
            picture look great.
          </p>
        </div>
        <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 4H9a2 2 0 00-2 2v3.5m0 0h-.5a2 2 0 00-2 2v3.5a2 2 0 002 2h7a2 2 0 002-2v-3.5a2 2 0 00-2-2H10m1 0V6a2 2 0 00-2-2m0 12h3"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">
            Quick Editing Tips
          </h3>
          <p class="text-gray-600">
            Enhance your photos directly on your iPhone with simple editing
            techniques anyone can use.
          </p>
        </div>
        <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.121 14.121A4 4 0 110 0a4 4 0 01-4 4v4.242A9.956 9.956 0 0112 22a9.956 9.956 0 01-4.242-8.484L12 7.758l2.121 2.121z"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">
            iPhone Camera Tricks
          </h3>
          <p class="text-gray-600">
            Discover hidden features and shortcuts that will take your
            photography to the next level.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner2;
