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
          <Column field="roles" header="Roles" :sortable="true">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <div
                  v-for="role in data.roles"
                  :key="role.id"
                  class="text-left text-sm font-normal text-slate-500 px-2 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 dark:text-white"
                >
                  {{ role.name }}
                </div>
              </div>
            </template>
          </Column>
          <Column
            field="emailVerified"
            header="Email Verified"
            :sortable="true"
          >
            <template #body="{ data }">
              <div>{{ cleanTimestamp(data.emailVerified) }}</div>
            </template>
          </Column>
        </template>
        <template v-slot:actionCol="{ data }">
          <button
            @click="resetPasswordDialog(data)"
            class="transition duration-150 ease-in-out btn bg-gray-100 border-gray-800 rounded-lg fill-gray-400 disabled:hover:fill-gray-400 hover:bg-red-400 hover:fill-white disabled:hover:bg-gray-100 dark:bg-slate-800 p-2 shadow"
            data-pd-tooltip="true"
            v-tooltip="'Reset password'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176C160 78.798 238.797.001 335.999 0C433.488-.001 512 78.511 512 176.001M336 128c0 26.51 21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48s-48 21.49-48 48"
              />
            </svg>
          </button>
        </template>
      </VaAdvDataTable>
    </VaCard>
  </div>
  <ResetPassword
    v-if="showResetPasswordDialog"
    @close="closeResetPasswordDialog"
    :user="selectedUser"
  />
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { FilterMatchMode } from "primevue/api";
import { cleanTimestamp } from "@/core/utils/common";
import ResetPassword from "../components/ResetPassword";

export default defineComponent({
  name: "UsersList",
  components: {
    ResetPassword,
  },
  props: {
    resource: {
      type: Object,
    },
  },
  setup() {
    const isMounted = ref(false);
    const selectedUser = ref(null);
    const showResetPasswordDialog = ref(false);
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

    /**
     * Close the reset password dialog
     */
    const closeResetPasswordDialog = () => {
      showResetPasswordDialog.value = false;
    };

    /**
     * Open the reset password dialog
     * @param user
     */
    const resetPasswordDialog = (user) => {
      selectedUser.value = user;
      showResetPasswordDialog.value = true;
    };

    return {
      cleanTimestamp,
      closeResetPasswordDialog,
      FilterMatchMode,
      isMounted,
      isLoading,
      onRowSelect,
      resetPasswordDialog,
      selectedUser,
      showResetPasswordDialog,
    };
  },
});
</script>
