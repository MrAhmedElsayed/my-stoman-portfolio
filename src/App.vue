<template>
  <main :class="appTheme" class="min-h-full">
    <AppHeader />
    <section class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
    <BackToUp />
    <AppFooter />
  </main>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Ahmed El-Sayed";
      },
    },
  },
};
</script>

<script setup>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import BackToUp from "@/components/BackToUp";
const appTheme = localStorage.getItem("theme");
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
