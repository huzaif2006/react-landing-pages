import React from "react";

function Section3() {
  return (
    <section class="bg-[#F9F9FF] py-20 px-6 font-sans">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-4xl mb-16">
          <h2 class="text-[#1E1B4B] text-lg sm:text-[30px] md:text-4xl font-bold leading-tight mb-4">
            Transform your online presence with effortless creativity and robust
            performance,
            <span class="text-gray-400">
              our platform ensures your website journey is packed with
              unparalleled advantages.
            </span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="relative  bg-white rounded-[2rem] p-8 shadow-xl shadow-indigo-100/50 border-2 border-red-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50 ">
            <div class="relative z-10 ">
              <div class="w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
                <code class="text-white text-xl font-bold">&lt;/&gt;</code>
              </div>
              <h3 class="text-[#1E1B4B] text-2xl font-bold mb-4 leading-snug">
                No coding or design experience required
              </h3>
              <p class="text-gray-500 leading-relaxed text-sm">
                Unlock your creative potential, seamlessly craft your website
                with flow, where no coding or design experience is required —
                making web building accessible to all.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50">
            <div class="w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-md">
              <svg
                class="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            </div>
            <h3 class="text-[#1E1B4B] text-2xl font-bold mb-4 leading-snug">
              Easy-to-use web building tools
            </h3>
            <p class="text-gray-500 leading-relaxed text-sm">
              Streamline your web building journey, save valuable time, and cut
              costs with flow's easy-to-use tools for effortless and
              budget-friendly website creation.
            </p>
          </div>

          <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50">
            <div class="w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-md">
              <svg
                class="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-[#1E1B4B] text-2xl font-bold mb-4 leading-snug">
              Grow your business online
            </h3>
            <p class="text-gray-500 leading-relaxed text-sm">
              Empowers you to connect with a wider audience and foster online
              growth, unleashing the full potential of your digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
