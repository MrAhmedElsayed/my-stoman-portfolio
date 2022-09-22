<template>
  <Switch
    v-model="darkEnabled"
    :class="
      darkEnabled
        ? 'bg-slate-700 text-slate-400 focus-visible:ring-slate-500'
        : 'bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600'
    "
    class="ml-6 relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none"
  >
    <span class="sr-only"
      >{{ darkEnabled ? "Enabled" : "Disabled" }}
      <!-- -->
      dark mood</span
    >
    <!-- sun svg -->
    <SunIcon
      :class="darkEnabled ? 'scale-100 duration-300' : 'scale-0 duration-500'"
      class="h-6 w-6 transform transition-transform"
    />
    <!-- sun svg-->

    <!-- moon svg-->
    <svg
      width="24"
      height="24"
      fill="none"
      aria-hidden="true"
      :class="darkEnabled ? 'scale-0 duration-500' : 'scale-100 duration-300'"
      class="ml-3.5 transform transition-transform"
    >
      <path
        d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
    <!-- moon svg-->

    <!-- span with two svg -->
    <span
      aria-hidden="true"
      :class="darkEnabled ? 'translate-x-10' : 'translate-x-0'"
      class="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform"
    >
      <!-- sun svg-->
      <SunIcon
        :class="darkEnabled ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
        class="h-6 w-6 flex-none transition duration-500 transform text-cyan-500"
      />

      <!-- sun svg-->

      <!-- moon svg -->
      <svg
        width="24"
        height="24"
        fill="none"
        aria-hidden="true"
        :class="darkEnabled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
        class="flex-none -ml-6 transition duration-500 transform text-slate-700"
      >
        <path
          d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <!-- moon svg -->
    </span>
    <!-- span with two svg -->
  </Switch>
</template>

<script>
export default {
  name: "ThemeSwitcher",
};
</script>

<script setup>
// https://flowbite.com/docs/customize/dark-mode/
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
import { SunIcon } from "@heroicons/vue/24/solid";

const darkEnabled = ref(false);
</script>
