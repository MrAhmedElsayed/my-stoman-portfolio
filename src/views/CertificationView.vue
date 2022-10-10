<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          Certifications
        </h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          Programming certifications aren't a big deal. Nowadays, anyone can get
          certifications online, and hence it has not much value. But, it's not
          the case for every certification. There might be some particular
          certifications that could potentially land you a job.
        </p>
      </div>
      <!-- text - end -->

      <div
        class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8"
      >
        <!-- article - start -->
        <div
          v-for="certificate in Certifications"
          :key="certificate.id"
          class="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden"
        >
          <div
            class="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
          >
            <img
              :src="certificate.imageUrl"
              loading="lazy"
              :alt="certificate.title"
              class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />
          </div>

          <div class="flex flex-col gap-2 p-4 lg:p-6">
            <span class="text-gray-400 text-sm">{{
              certificate.graduationDate
            }}</span>

            <h2 class="text-gray-800 text-xl font-bold">
              <div
                class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
              >
                {{ certificate.title }}
              </div>
            </h2>

            <p class="text-gray-500">
              {{ certificate.subTitle }}
            </p>

            <div>
              <button
                @click="certificateDetails(certificate)"
                class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
        <!-- article - end -->
      </div>
    </div>
    <!-- start - modal, TODO: try to make it a component -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="setIsOpen(false)" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:min-w-fit sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <p
                      class="text-indigo-500 font-bold text-center md:text-left"
                    >
                      {{ modalData.organization }}
                    </p>

                    <DialogTitle
                      as="h1"
                      class="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6"
                    >
                      {{ modalData.title }}
                    </DialogTitle>

                    <p
                      class="text-gray-500 sm:text-lg mb-6 md:mb-8 selection:bg-fuchsia-300 selection:text-fuchsia-900"
                    >
                      This is a section of some simple filler text, also known
                      as placeholder text. It shares some characteristics of a
                      real written text but is random or otherwise generated. It
                      may be used to display a sample of fonts or generate text
                      for testing. Filler text is dummy text which has no
                      meaning however looks very similar to real text.
                    </p>

                    <div
                      class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8"
                    >
                      <img
                        :src="modalData.imageUrl"
                        loading="lazy"
                        :alt="modalData.title"
                        class="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                      <div class="p-2 sm:w-1/2 w-full">
                        <div
                          class="bg-gray-100 rounded flex p-4 h-full items-center"
                        >
                          <svg
                            class="h-6 w-6 text-indigo-500 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
                            <path
                              d="M11 19.95a8 8 0 0 1 -5.3 -12.8"
                              stroke-dasharray=".001 4.13"
                            />
                          </svg>
                          <span class="title-font font-medium"
                            >Duration {{ modalData.durations }}</span
                          >
                        </div>
                      </div>
                      <div class="p-2 sm:w-1/2 w-full">
                        <div
                          class="bg-gray-100 rounded flex p-4 h-full items-center"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span class="title-font font-medium"
                            >Kinfolk Chips Snackwave</span
                          >
                        </div>
                      </div>
                      <div class="p-2 sm:w-1/2 w-full">
                        <div
                          class="bg-gray-100 rounded flex p-4 h-full items-center"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span class="title-font font-medium"
                            >Coloring Book Ethical</span
                          >
                        </div>
                      </div>
                      <div class="p-2 sm:w-1/2 w-full">
                        <div
                          class="bg-gray-100 rounded flex p-4 h-full items-center"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span class="title-font font-medium"
                            >Typewriter Polaroid Cray</span
                          >
                        </div>
                      </div>
                      <div class="p-2 sm:w-1/2 w-full">
                        <div
                          class="bg-gray-100 rounded flex p-4 h-full items-center"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span class="title-font font-medium"
                            >Pack Truffaut Blue</span
                          >
                        </div>
                      </div>
                      <div class="p-2 sm:w-1/2 w-full">
                        <div
                          class="bg-gray-100 rounded flex p-4 h-full items-center"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span class="title-font font-medium"
                            >The Catcher In The Rye</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="setIsOpen(false)"
                    ref="cancelButtonRef"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- end - modal-->
  </div>
</template>

<script setup>
import Certifications from "@/data/certifications";
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);
const modalData = ref(Object);

function setIsOpen(value) {
  isOpen.value = value;
}

function certificateDetails(certificate) {
  modalData.value = certificate;
  setIsOpen(true);
}
</script>

<script>
export default {
  name: "CertificationView",
};
</script>
