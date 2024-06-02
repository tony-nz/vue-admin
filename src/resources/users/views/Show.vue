<template>
  <div class="rounded-lg bg-primary-500 shadow w-full dark:bg-slate-900">
    <div class="sm:flex sm:items-center sm:justify-between p-6 pb-0">
      <div class="sm:flex sm:space-x-5 w-full">
        <div class="text-center sm:mt-0 sm:pt-1 sm:text-left w-full mb-4">
          <p class="text-xl font-bold text-white sm:text-2xl flex">
            {{ user.name }}
          </p>
          <p class="text-sm font-normal text-gray-100">{{ user.email }}</p>
        </div>
      </div>
    </div>
    <TabView
      v-model:activeIndex="activeIndex"
      :scrollable="true"
      class="bg-gray-100 w-full rounded-b-lg"
    >
      <TabPanel v-for="(tab, index) in tabs" :key="index">
        <template #header>
          <span @click="true">
            {{ tab.name }}
          </span>
        </template>
      </TabPanel>
    </TabView>
  </div>
  <component
    :is="tabs[activeIndex].component"
    :key="viewKey"
    :resource="resource"
  />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onActivated,
  onMounted,
  ref,
  watch,
} from "vue";
import { useResourceStore } from "@tony-nz/vue-admin-core";
import { storeToRefs } from "pinia";
import General from "../components/General.vue";

export default defineComponent({
  components: {
    General,
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const activeIndex = ref(0);
    const user = ref();
    const store = ref(useResourceStore(props.resource)());
    const viewKey = ref(0);
    const { getDataItem } = storeToRefs(store.value);

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
    ];

    onActivated(() => {
      viewKey.value += 1;
    });

    onMounted(() => {
      user.value = store.value.getDataItem;
    });

    /**
     * watch user resource store for changes
     */
    watch(
      () => getDataItem.value,
      (updatedUser) => {
        user.value = updatedUser;
      },
      { deep: true }
    );

    return {
      activeIndex,
      activeTab,
      tabs,
      user,
      viewKey,
    };
  },
});
</script>
