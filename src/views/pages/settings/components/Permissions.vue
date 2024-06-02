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
    <VaAdvDataTable
      v-bind="resource.datatable"
      :resource="resource"
      class="flex flex-col flex-1"
    >
      <template v-slot:toolbar></template>
      <template v-slot:columns>
        <Column field="name" header="Name" :sortable="true">
          <template #body="{ data }">
            <div class="flex items-center">
              <button class="w-full">
                <div class="text-left text-sm font-normal text-slate-500">
                  {{ data.name }}
                </div>
              </button>
            </div>
          </template>
          <template #filter="{ filterModel }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="p-column-filter"
              placeholder="Search by name"
            />
          </template>
        </Column>
        <Column field="roles" header="Roles" :sortable="true">
          <template #body="{ data }">
            <div class="flex items-center">
              <div
                v-for="role in data.roles"
                :key="role.id"
                class="text-left text-sm font-normal text-slate-500"
              >
                {{ role.name }}
              </div>
            </div>
          </template>
          <template #filter="{ filterModel }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="p-column-filter"
              placeholder="Search by role"
            />
          </template>
        </Column>
        <Column field="roles" header="Created" :sortable="true">
          <template #body="{ data }">
            <div class="flex items-center">
              <div class="text-left text-sm font-normal text-slate-500">
                {{ cleanTimestamp(data.created_at) }}
              </div>
            </div>
          </template>
        </Column>
      </template>
    </VaAdvDataTable>
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
    const resource = ref(useAppStore().findResource("permissions"));
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
