<template>
  <button
    @click="backToUp"
    type="button"
    class="fixed right-10 bottom-16 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
  >
    <!--    <ChevronDoubleUpIcon class="w-6 h-6" />-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
      />
    </svg>
  </button>
</template>

<script setup>
// import ChevronDoubleUpIcon from "@heroicons/vue/24/outline";
</script>

<script>
// https://adambailey.io/blog/scroll-to-top-button-vue/
export default {
  name: "BackToUp",
  methods: {
    backToUp() {
      window.scroll();
    },
  },
};
</script>
