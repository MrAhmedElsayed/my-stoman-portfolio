<template>
  <div class="relative p-5 pt-10 lg:pt-11 pb-10 bg-white">
    <!--    <div class="container">-->
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-5/12 px-4">
        <div class="hero-content text-center lg:text-left">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">Hi, I'm</span> <br />
            {{ " " }}
            <span class="block text-indigo-600 xl:inline">Ahmed El-Sayed</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
          >
            Full-stack web developer, Ready for New Journey.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <router-link
                to="/projects"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
              >
                My Projects
              </router-link>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/files/Stoman-Resume.pdf"
                class="group flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                download="ahmed-cv"
              >
                <ArrowDownCircleIcon class="h-7 w-7 mr-3" />
                <span>Download CV</span></a
              >
            </div>
          </div>
          <div class="clients pt-16">
            <h6
              class="font-normal text-xs flex items-center text-body-color mb-2"
            >
              Some Of Our Clients
              <span class="w-8 h-[1px] bg-body-color inline-block ml-2"></span>
            </h6>
            <div class="flex items-center">
              <div class="w-full py-3 mr-4">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                  alt="ayroui"
                />
              </div>
              <div class="w-full py-3 mr-4">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                  alt="graygrids"
                />
              </div>
              <div class="w-full py-3 mr-4">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                  alt="uideck"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/12 px-4"></div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="lg:text-right lg:ml-auto">
          <div class="relative inline-block z-10 pt-11 lg:pt-0">
            <img
              src="@/assets/images/hero-image.jpg"
              alt="hero"
              class="rounded-2xl lg:rounded-tl-[70px] max-w-full lg:ml-auto"
            />
            <span class="absolute -left-8 -bottom-8 z-[-1]">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--    </div>-->
  </div>
</template>

<script setup>
import { ArrowDownCircleIcon } from "@heroicons/vue/24/outline";
</script>

<script>
export default {
  name: "HomeView",
  components: {
    //
  },
  data: () => ({
    theme: "light",
  }),
};
</script>
