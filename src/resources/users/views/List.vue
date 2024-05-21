<template>
  <div class="flex-1 overflow-hidden">
    <VaCard
      :title="'Users'"
      :description="'Effortlessly create, update, & delete user records'"
      :isLoading="isLoading"
      :clearCss="['content']"
      :classes="{
        base: ['overflow-hidden', 'col-span-12', 'shadow-md', 'rounded-md'],
        content: ['flex', 'flex-col', 'flex-1', 'overflow-hidden'],
        card: ['h-full'],
        header: ['bg-primary-500', 'dark:bg-primary-700'],
        title: ['text-white'],
        description: ['text-white'],
      }"
    >
      <VaAdvDataTable
        @rowSelect="onRowSelect"
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
                  <div class="text-left text-xs font-normal text-gray-700">
                    {{ data.email }}
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
          <Column field="phone" header="Email Verified" :sortable="true">
            <template #body="{ data }">
              <div>{{ data.emailVerified }}</div>
            </template>
          </Column>
        </template>
      </VaAdvDataTable>
    </VaCard>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { FilterMatchMode } from "primevue/api";
import { cleanTimestamp } from "@/core/utils/common";

export default defineComponent({
  props: {
    resource: {
      type: Object,
    },
  },
  setup() {
    const isMounted = ref(false);
    const isLoading = computed(() => {
      return false;
      // return store.getters[
      //   `${upperCaseFirst(props.resource.name)}Resource/getIsLoading`
      // ];
    });

    onMounted(async () => {
      isMounted.value = true;
    });

    const onRowSelect = (data) => {
      console.log("hello there");
    };

    return {
      cleanTimestamp,
      FilterMatchMode,
      isMounted,
      isLoading,
      onRowSelect,
    };
  },
});
</script>
