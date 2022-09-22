<template>
  <Popover class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Portfolio Logo</span>
            <!-- ahmed svg-->
            <svg
              viewBox="0 0 305 62"
              class="text-slate-900 dark:text-white w-auto h-5"
            >
              <g fill="#38bdf8">
                <path
                  d="m26.2 35.4-20 12.5v4.2l20 12.5 2.6-4.2L12.2 50l16.6-10.4zM71.2 39.6 87.8 50 71.2 60.4l2.6 4.2 20-12.5v-4.2l-20-12.5zM51.7 28.7 39 55.9l13.6 6.3 1-2.2 11.6-25 3.2-6.8-13.6-6.3zM38.4 74.9l12.1-8.1-13.6-6.4z"
                  transform="translate(-6 -16)"
                />
              </g>
              <path
                d="M125.69 7.361c0 .31.918 3.266 2.75 8.873s3.836 11.74 6.006 18.403 5.087 15.471 8.756 26.424h3.332L126 0h-.62L105 61.06h3.177zm-1.395 36.343h-2.79l4.65 17.357h2.79zm34.947-6.045V0h-2.634v61.062h2.634V37.66zm1.085 2.48h22.627v20.922h2.635V16.04h-2.635v21.62h-22.627v2.48zm70.515 20.922V0h-2.557l-15.033 27.973-9.996-18.597-2.247 1.24 12.243 22.704 15.11-28.206v55.947h2.48zm-32.7 0V5.27l.62 1.162 2.247-1.162-2.867-5.27h-2.48v61.062h2.48zm44.944-22.627V2.17h18.597V0h-20.767v38.435h2.17zm19.372 22.627V58.97h-19.372v-16.04h3.1v-2.092h-5.27V61.06h21.542zm17.048 0c2.274 0 4.39-.26 6.354-.775l-.62-2.324c-1.755.465-3.67.697-5.734.697h-4.572V2.634h4.572a21.58 21.58 0 0 1 16.544 7.44c2.041 2.324 3.642 5.125 4.804 8.407s1.743 6.885 1.743 10.81v1.627c0 2.894-.387 5.734-1.162 8.524s-1.832 5.358-3.177 7.71-2.917 4.405-4.727 6.16-3.72 3.022-5.734 3.797l.93 2.247c2.274-.93 4.39-2.336 6.354-4.223s3.68-4.095 5.153-6.625 2.635-5.308 3.487-8.33 1.279-6.11 1.279-9.26V29.29c0-4.235-.647-8.125-1.938-11.662s-3.072-6.599-5.346-9.183-4.96-4.599-8.06-6.044-6.481-2.17-10.15-2.17h-6.974v60.83h6.974z"
                fill="currentColor"
              />
            </svg>
          </router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <router-link
            to="/projects"
            class="font-sans text-lg font-medium text-gray-500 hover:text-indigo-600"
            >Projects</router-link
          >
          <router-link
            to="/about"
            class="font-sans text-lg font-medium text-gray-500 hover:text-indigo-600"
            >About Me</router-link
          >
          <router-link
            to="/contact"
            class="font-sans text-lg font-medium text-gray-500 hover:text-indigo-600"
            >Contact</router-link
          >
        </PopoverGroup>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <!--  Hire Me Form -->
          <HireMe />
          <!-- theme switch here -->
          <ThemeSwitcher />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <!-- ahmed logo-->
                <svg
                  viewBox="0 0 305 62"
                  class="text-slate-900 dark:text-white w-auto h-5"
                >
                  <g fill="#38bdf8">
                    <path
                      d="m26.2 35.4-20 12.5v4.2l20 12.5 2.6-4.2L12.2 50l16.6-10.4zM71.2 39.6 87.8 50 71.2 60.4l2.6 4.2 20-12.5v-4.2l-20-12.5zM51.7 28.7 39 55.9l13.6 6.3 1-2.2 11.6-25 3.2-6.8-13.6-6.3zM38.4 74.9l12.1-8.1-13.6-6.4z"
                      transform="translate(-6 -16)"
                    />
                  </g>
                  <path
                    d="M125.69 7.361c0 .31.918 3.266 2.75 8.873s3.836 11.74 6.006 18.403 5.087 15.471 8.756 26.424h3.332L126 0h-.62L105 61.06h3.177zm-1.395 36.343h-2.79l4.65 17.357h2.79zm34.947-6.045V0h-2.634v61.062h2.634V37.66zm1.085 2.48h22.627v20.922h2.635V16.04h-2.635v21.62h-22.627v2.48zm70.515 20.922V0h-2.557l-15.033 27.973-9.996-18.597-2.247 1.24 12.243 22.704 15.11-28.206v55.947h2.48zm-32.7 0V5.27l.62 1.162 2.247-1.162-2.867-5.27h-2.48v61.062h2.48zm44.944-22.627V2.17h18.597V0h-20.767v38.435h2.17zm19.372 22.627V58.97h-19.372v-16.04h3.1v-2.092h-5.27V61.06h21.542zm17.048 0c2.274 0 4.39-.26 6.354-.775l-.62-2.324c-1.755.465-3.67.697-5.734.697h-4.572V2.634h4.572a21.58 21.58 0 0 1 16.544 7.44c2.041 2.324 3.642 5.125 4.804 8.407s1.743 6.885 1.743 10.81v1.627c0 2.894-.387 5.734-1.162 8.524s-1.832 5.358-3.177 7.71-2.917 4.405-4.727 6.16-3.72 3.022-5.734 3.797l.93 2.247c2.274-.93 4.39-2.336 6.354-4.223s3.68-4.095 5.153-6.625 2.635-5.308 3.487-8.33 1.279-6.11 1.279-9.26V29.29c0-4.235-.647-8.125-1.938-11.662s-3.072-6.599-5.346-9.183-4.96-4.599-8.06-6.044-6.481-2.17-10.15-2.17h-6.974v60.83h6.974z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid grid-cols-2 gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="h-6 w-6 flex-shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">{{
                    item.name
                  }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="flex justify-around">
              <div class="hireme">
                <HireMe />
              </div>
              <div class="switch">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  Squares2X2Icon,
  XMarkIcon,
  BookmarkSquareIcon,
} from "@heroicons/vue/24/outline";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import HireMe from "@/components/HireMe";
const solutions = [
  {
    name: "Projects",
    description: "See my work and rate me",
    href: "/projects",
    icon: Squares2X2Icon,
  },
  {
    name: "Contact",
    description: "Contact with me.",
    href: "/contact",
    icon: ChartBarIcon,
  },
  {
    name: "About me",
    description: "Know more about man you work with.",
    href: "/about",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Blog",
    description: "Know more about man you work with.",
    href: "/blog",
    icon: BookmarkSquareIcon,
  },
];
</script>

<style lang="scss" scoped>
.router-link-active,
.router-link-exact-active {
  @apply text-sky-600 underline decoration-sky-200;
}
</style>
