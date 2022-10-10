<template>
  <section class="pt-5 pb-12 lg:pb-[90px] overflow-hidden">
    <div class="container">
      <div class="flex flex-wrap justify-between items-center -mx-4">
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex items-center -mx-3 sm:-mx-4">
            <div class="w-full xl:w-1/2 px-3 sm:px-4">
              <div class="py-3 sm:py-4">
                <img
                  src="@/assets/images/ahmed.jpg"
                  alt=""
                  class="rounded-2xl w-full"
                />
              </div>
              <div class="py-3 sm:py-4">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/services/image-2.jpg"
                  alt=""
                  class="rounded-2xl w-full"
                />
              </div>
            </div>
            <div class="w-full xl:w-1/2 px-3 sm:px-4">
              <div class="my-4 relative z-10">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/services/image-3.jpg"
                  alt=""
                  class="rounded-2xl w-full"
                />
                <span class="absolute -right-7 -bottom-7 z-[-1]">
                  <img
                    src="@/assets/images/about_circles.svg"
                    alt="about svg"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
          <div class="mt-10 lg:mt-0">
            <span class="font-semi-bold text-lg text-indigo-600 mb-2 block">
              Why Choose Me
            </span>
            <h2 class="font-bold text-3xl sm:text-4xl text-slate-700 mb-8">
              Make your customers happy by giving services.
            </h2>
            <p class="text-base text-body-color mb-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less.
            </p>

            <ul class="flex">
              <!-- https://play-tailwind.tailgrids.com/ ====> Main Features Of Play-->
              <li
                class="m-2 p-4 h-16 w-16 text-indigo-200 bg-indigo-500 rounded-full hover:rounded-2xl hover:delay-300 transition delay-150 duration-300 ease-in-out"
              >
                1
              </li>
              <li
                class="m-2 p-4 h-16 w-16 text-indigo-200 bg-indigo-500 rounded-full hover:rounded-2xl hover:delay-300 transition delay-150 duration-300 ease-in-out"
              >
                1
              </li>
              <li
                class="m-2 p-4 h-16 w-16 text-indigo-200 bg-indigo-500 rounded-full hover:rounded-2xl hover:delay-300 transition delay-150 duration-300 ease-in-out"
              >
                1
              </li>
              <li
                class="m-2 p-4 h-16 w-16 text-indigo-200 bg-indigo-500 rounded-full hover:rounded-2xl hover:delay-300 transition delay-150 duration-300 ease-in-out"
              >
                1
              </li>
            </ul>

            <a
              href="javascript:void(0)"
              class="py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base bg-indigo-700 hover:bg-opacity-90 font-normal rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView2",
};
</script>

<style scoped></style>
