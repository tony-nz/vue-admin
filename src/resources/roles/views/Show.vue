<template>
  <div class="flex flex-row gap-4">
    <div class="min-w-[300px] bg-white rounded-lg p-4">
      <div class="flex flex-col h-[275px] p-4 space-y-4">
        <span class="capitalize font-medium text-xl">{{ data.role.name }}</span>
        <span v-if="data.role.users_count > 0" class="text-sm"
          >Total users with this role: {{ data.role.users_count }}</span
        >
        <span v-else>No permissions associated</span>
        <div class="mt-">
          <div class="flex flex-col">
            <div
              v-for="permission in data.permissions.slice(0, 5)"
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
            <div v-if="data.permissions.length - 5 > 0" class="mt-4">
              <span class="text-slate-400 italic"
                >and {{ data.permissions.length - 5 }} more...</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white rounded-lg p-1">
      <VaAdvDataTable
        v-bind="roleUsersResource.datatable"
        :resource="roleUsersResource"
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
        </template>
      </VaAdvDataTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useAppStore, useResourceStore } from "@tony-nz/vue-admin-core";

export default defineComponent({
  name: "Show",
  props: {
    resource: {
      type: Object,
    },
    isLoading: {
      type: Boolean,
    },
  },
  setup(props) {
    const store = useResourceStore(props.resource)();
    const data = ref(store.getDataItem.data);
    const roleUsersResource = ref(useAppStore().findResource("roleUsers"));

    return {
      data,
      roleUsersResource,
    };
  },
});
</script>
