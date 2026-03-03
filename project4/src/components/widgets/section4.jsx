import React from "react";

function Section4() {
  return (
    <section class="bg-[#FDF9FF] py-24 px-6 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/50 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-pink-100/40 blur-[100px] rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-24">
          <div class="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 mb-8">
            <span class="text-purple-500 text-xs">🪄</span>
            <span class="text-xs font-semibold text-gray-600 tracking-wide uppercase">
              Features
            </span>
          </div>
          <h2 class="text-[#0F172A] text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Experience the versatility of flow website authoring tool
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            Embark on a journey of creative freedom: unleash your imagination
            and craft unique websites with the versatile Flow website authoring
            tool.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-10">
            <div>
              <div class="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 mb-6">
                <span class="text-purple-500 text-xs">👥</span>
                <span class="text-xs font-semibold text-gray-600 tracking-wide uppercase">
                  Collaborative
                </span>
              </div>
              <h3 class="text-[#0F172A] text-4xl font-bold leading-tight mb-6">
                Efficient teamwork for faster results
              </h3>
              <p class="text-gray-500 text-lg">
                Effortlessly cultivate a dynamic collaboration among friends and
                colleagues.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-8 border-l border-gray-200 pl-8">
              <div>
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                  <span class="text-white text-xs">⠿</span>
                </div>
                <h4 class="text-[#0F172A] font-bold text-lg mb-2">
                  Less Effort
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed">
                  Effortlessly cultivate a dynamic collaboration among friends.
                </p>
              </div>
              <div>
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mb-4">
                  <span class="text-white text-xs">⇄</span>
                </div>
                <h4 class="text-[#0F172A] font-bold text-lg mb-2">
                  Easy Transform
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed">
                  Transforms your web development into a collaborative
                  masterpiece.
                </p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-300 p-1 rounded-[2.5rem] shadow-2xl">
              <div class="bg-white rounded-[2.3rem] overflow-hidden shadow-inner">
                <div class="p-4 bg-blue-600 min-h-[300px] relative">
                  <div class="text-white font-bold text-2xl max-w-[200px] leading-tight mt-10 ml-6">
                    Invoices & work management made easy
                  </div>
                  <button class="mt-6 ml-6 bg-white text-blue-600 text-[10px] font-bold px-4 py-2 rounded-full">
                    GET STARTED →
                  </button>
                </div>
              </div>
            </div>

            <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=1" />
                </div>
                <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=2" />
                </div>
                <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=3" />
                </div>
              </div>
              <div class="h-6 w-[1px] bg-gray-200"></div>
              <button class="bg-purple-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg">
                Join
              </button>
              <button class="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-lg">
                Publish
              </button>
            </div>

            <div class="absolute bottom-10 -right-4 md:-right-8 bg-[#222] text-white p-4 rounded-2xl shadow-2xl w-64 border border-white/10">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-600">
                  <img src="https://i.pravatar.cc/100?u=9" />
                </div>
                <div>
                  <div class="text-[10px] font-bold">Hellen Jummy</div>
                  <div class="text-[8px] text-gray-400">20 minutes ago</div>
                </div>
              </div>
              <p class="text-[10px] text-gray-300 leading-normal mb-4">
                @Oludayo Ayomide Change the heading and capitalize each word,
                please
              </p>
              <div class="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a comment"
                  class="bg-white/10 border-none rounded-md text-[9px] flex-1 px-2 py-1.5 outline-none"
                />
                <button class="bg-blue-500 text-white text-[9px] px-3 py-1.5 rounded-md font-bold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
