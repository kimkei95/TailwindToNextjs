import React from "react";

const Banner = () => {
  return (
    <section class="text-center py-16 px-4 bg-gradient-to-r from-blue-100 via-white to-blue-100 mb-12">
      <div class="mb-6">
        <span class="inline-block text-sm bg-blue-200 text-blue-700 px-4 py-1 rounded-full font-medium">
          Master the iPhone
        </span>
      </div>
      <h2 class="text-5xl lora font-bold mb-8 leading-tight text-gray-900">
        Unlock the Best Way to
        <span class="text-blue-700">Capture Stunning</span> iPhone Photos
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
        Join our step-by-step course and master the essential techniques for
        capturing beautiful images with your iPhone. No prior experience
        required. Just follow along and take your photography to the next level!
      </p>
      <a
        href="#"
        class="bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-600 transition-colors"
      >
        Get Started for $49 <span class="line-through">$99</span>
      </a>
      <p class="text-gray-500 mt-4">
        Special launch offer for a limited time only!
      </p>
    </section>
  );
};

export default Banner;
