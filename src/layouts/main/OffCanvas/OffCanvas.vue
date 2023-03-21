<template>
  <transition
    enter-from-class="-translate-y-[150%] opacity-0"
    enter-active-class="transition duration-1000"
  >
    <div
      v-if="isVisible"
      class="fixed z-10 bg-emerald-600 w-full h-full -mb-4"
      tabindex="-1"
      id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel"
      data-te-offcanvas-init
    >
      <aside class="flex h-full pt-[52px]">
        <TopMenu :tab="activeTab" @changeTab="switchTab" />
        <SecondaryMenu :tab="activeTab" @closeOffCanvas="close" />
        <div class="w-full sm:hidden md:block">
          <Header />
          <Content />
        </div>
      </aside>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { translate } from "@tony-nz/vue-admin-core";
import Content from "./Content.vue";
import Header from "./Header.vue";
import TopMenu from "./TopMenu.vue";
import SecondaryMenu from "./SecondaryMenu.vue";

export default defineComponent({
  name: "OffCanvas",
  components: {
    Content,
    Header,
    SecondaryMenu,
    TopMenu,
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
  setup() {
    const activeTab = ref(0);
    const isVisible = ref(false);

    const close = () => {
      isVisible.value = false;
    };

    onBeforeRouteUpdate((to, from, next) => {
      close();
      next();
    });

    onMounted(() => {
      setTimeout(() => {
        isVisible.value = false;
      }, 2000);
    });
    return {
      activeTab,
      close,
      isVisible,
      translate,
    };
  },
});
</script>
