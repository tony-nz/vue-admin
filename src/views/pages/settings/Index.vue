<template>
  <div class="rounded-lg bg-emerald-500 shadow w-full dark:bg-slate-900">
    <div class="sm:flex sm:items-center sm:justify-between p-6 pb-0">
      <div class="sm:flex sm:space-x-5 w-full">
        <div class="text-center sm:mt-0 sm:pt-1 sm:text-left w-full">
          <p class="text-xl font-bold text-white sm:text-2xl flex">Settings</p>
          <p class="text-sm font-normal text-gray-100">
            Update your site settings here
          </p>
          <div class="mt-4 flex flex-row gap-4">
            <StatBox1 title="Title" description="Description goes here" />
            <StatBox1
              title="Stat"
              description="Up 50% down 20%"
              icon="trash-can"
            />
          </div>
        </div>
      </div>
    </div>
    <TabView
      v-model:activeIndex="activeIndex"
      :scrollable="true"
      class="bg-gray-100 w-full"
    >
      <TabPanel v-for="(tab, index) in tabs" :key="tab.name" class="bg-red-500">
        <template #header>
          <span @click="true">
            {{ tab.name }}
          </span>
        </template>
      </TabPanel>
    </TabView>
  </div>
  <component :is="activeTab" :key="viewKey" class="" aria-hidden="true" />
</template>

<script lang="ts">
import { computed, defineComponent, onActivated, onMounted, ref } from "vue";
import { useAppStore } from "@tony-nz/vue-admin-core";
import General from "./components/General.vue";
import Permissions from "./components/Permissions.vue";
import Roles from "./components/Roles.vue";

export default defineComponent({
  components: {
    General,
    Permissions,
    Roles,
  },
  setup(props) {
    const activeIndex = ref(0);
    const customer = ref();
    const store = useAppStore();
    const viewKey = ref(0);

    const activeTab = computed(() => {
      return tabs[activeIndex.value].component
        ? tabs[activeIndex.value].component
        : null;
    });

    const tabs = [
      {
        name: "General",
        component: General,
      },
      {
        name: "Permissions",
        component: Permissions,
      },
      {
        name: "Roles",
        component: Roles,
      },
    ];

    onActivated(() => {
      viewKey.value += 1;
    });

    onMounted(() => {
      customer.value = store.getItem;
    });

    return {
      activeIndex,
      activeTab,
      customer,
      tabs,
      viewKey,
    };
  },
});
</script>
