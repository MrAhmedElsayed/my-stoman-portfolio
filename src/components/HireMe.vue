<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      :class="open ? '' : 'text-opacity-90'"
      class="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-medium uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-300"
    >
      <span>Hire Me</span>
      <ChevronDownIcon
        :class="open ? '' : 'text-opacity-70'"
        class="2ml- h-5 w-5 text-indigo-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
        aria-hidden="true"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute left-1/2 z-50 mt-3 w-96 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
      >
        <!-- start form -->
        <form
          name="hire"
          method="POST"
          data-netlify="true"
          class="p-7 bg-white shadow-xl rounded-2xl max-w-xl border border-gray-200"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            What project are you looking for?
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            what is your next dream project, you can read my skills first.
          </p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            send Request
          </button>
          <p class="text-xs text-gray-500 mt-3">
            i will reply as soon as posible maximum 24 hours.
          </p>
        </form>
        <!-- end -->
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
export default {
  name: "HireMe",
};
</script>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>
