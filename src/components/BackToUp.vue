<template>
  <button
    id="progress"
    class="z-20 hidden fixed right-10 bottom-10 h-16 w-16 rounded-full cursor-pointer place-items-center shadow-[0_0_10px_rgba(0,0,0,0.2)]"
  >
    <span
      id="progress-value"
      class="grid bg-blue-100 rounded-full place-items-center w-[calc(100%_-_10px)] h-[calc(100%_-_10px)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6 text-indigo-400 hover:text-indigo-800"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
    </span>
  </button>
</template>

<script>
// https://adambailey.io/blog/scroll-to-top-button-vue/
export default {
  name: "BackToUp",
  mounted() {
    window.onscroll = this.calcScrollValue;
    window.onload = this.calcScrollValue;
  },
  methods: {
    // todo : change all selector and make it in vue js way !!!
    calcScrollValue() {
      let scrollProgress = document.getElementById("progress");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#2563EB ${scrollValue}%, #BFDBFE ${scrollValue}%)`;
    },
  },
};
</script>
