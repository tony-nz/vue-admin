<template>
  <VaCard
    v-if="isMounted"
    :key="viewKey"
    :isLoading="!isMounted"
    :clearCss="['content']"
    :classes="{
      base: ['overflow-hidden', 'col-span-6', 'rounded-b-lg'],
      content: ['flex', 'flex-col', 'flex-1', 'overflow-hidden'],
      card: ['h-full'],
      header: ['bg-primary-500'],
      title: ['text-white'],
      description: ['text-white'],
    }"
  >
    <VaAdvDataView
      v-bind="resource.datatable"
      :resource="resource"
      class="flex flex-col flex-1 overflow-scroll"
    >
      <template v-slot:toolbar></template>
      <template v-slot:item="{ item }">
        <div class="flex flex-col h-[275px] w-full p-4 space-y-4">
          <span class="capitalize font-medium text-xl">{{ item.name }}</span>
          <span v-if="item.users_count > 0" class="text-sm"
            >Total users with this role: {{ item.users_count }}</span
          >
          <span v-else>No roles associated</span>
          <div v-if="item.permission" class="mt-1">
            <div class="flex flex-col">
              <div
                v-for="permission in item.permissions.slice(0, 5)"
                :key="permission.id"
                class="flex flex-row items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  class="h-4 w-2 mr-2"
                >
                  <path
                    class="fill-primary-500"
                    d="M512 256c0 17.67-14.33 32-32 32H32C14.33 288 0 273.7 0 256s14.33-32 32-32h448C497.7 224 512 238.3 512 256z"
                  />
                </svg>
                <span class="text-slate-400">{{ permission.name }}</span>
              </div>
              <div v-if="item.permissions.length - 5 > 0" class="mt-4">
                <span class="text-slate-400 italic"
                  >and {{ item.permissions.length - 5 }} more...</span
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </VaAdvDataView>
  </VaCard>
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, ref } from "vue";
import { useAppStore } from "@tony-nz/vue-admin-core";
import { cleanTimestamp } from "@/core/utils/common";

export default defineComponent({
  name: "Permissions",
  setup() {
    const isMounted = ref(false);
    const resource = ref(useAppStore().findResource("roles"));
    const viewKey = ref(0);

    onActivated(() => {
      viewKey.value += 1;
    });

    onMounted(async () => {
      isMounted.value = true;
    });

    return {
      cleanTimestamp,
      isMounted,
      resource,
      viewKey,
    };
  },
});
</script>
