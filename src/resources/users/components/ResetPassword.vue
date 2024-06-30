<template>
  <div>
    <Dialog
      v-model:visible="visible"
      :modal="true"
      :maximizable="true"
      :breakpoints="{ '1280px': '75vw' }"
      :style="{ width: '50vw' }"
      :closeOnEscape="true"
      @hide="close"
    >
      <template #header>
        <h3 class="text-lg font-semibold">
          Reset password for {{ user.name }}
        </h3>
      </template>
      <div
        class="p-4 mb-4 bg-gray-100 dark:bg-slate-800 grid grid-cols-12 gap-4 text-left"
      >
        <div class="col-span-12">
          <div class="grid grid-cols-12 gap-4 mx-auto">
            <div class="col-span-12">
              <label class="label mb-2" for="name">Password</label>
              <Password v-model="password" toggleMask inputId="new_password" />
            </div>
            <div class="col-span-12">
              <label class="label mb-2" for="name">Confirm Password</label>
              <Password
                v-model="confirmPassword"
                toggleMask
                inputId="new_password_confirm"
              />
            </div>
          </div>
          <!-- show errors -->
          <div class="col-span-12">
            <div
              class="text-red-500 dark:text-red-400 text-sm"
              v-if="errors.password"
            >
              {{ errors.password }}
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <button
          type="button"
          aria-label="Cancel"
          class="relative items-center justify-center inline-flex text-center align-bottom text-sm px-4 py-2 min-w-[2rem] shadow-sm rounded-md text-white dark:text-surface-900 bg-primary-500 dark:bg-primary-400 ring-1 ring-primary-500 dark:ring-primary-400 focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current focus:ring-offset-2 hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-600 dark:hover:ring-primary-300 focus:ring-primary-500 dark:focus:ring-primary-400 transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none p-button-text"
          data-pc-name="button"
          data-pc-section="root"
        >
          <span class="pi pi-times mx-0 mr-2" data-pc-section="icon"></span>
          <span class="duration-200 flex-1" data-pc-section="label"
            >Cancel</span
          >
        </button>
        <button
          @click="resetPassword"
          type="button"
          aria-label="Update"
          class="relative items-center justify-center inline-flex text-center align-bottom text-sm px-4 py-2 min-w-[2rem] shadow-sm rounded-md text-white dark:text-surface-900 bg-primary-500 dark:bg-primary-400 ring-1 ring-primary-500 dark:ring-primary-400 focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-current focus:ring-offset-2 hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-600 dark:hover:ring-primary-300 focus:ring-primary-500 dark:focus:ring-primary-400 transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none btn bg-primary-500"
          data-pc-name="button"
          data-pc-section="root"
        >
          <span class="pi pi-check mx-0 mr-2" data-pc-section="icon"></span>
          <span class="duration-200 flex-1" data-pc-section="label">Reset</span>
        </button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ApiService } from "@tony-nz/vue-admin-core";

export default defineComponent({
  name: "ResetPassword",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(_props, { emit }) {
    const errors = ref({
      password: "",
    });
    const password = ref("");
    const confirmPassword = ref("");
    const visible = ref(true);

    const close = () => {
      emit("close");
    };

    const validate = () => {
      let valid = true;
      if (!password.value) {
        errors.value.password = "Password is required";
        valid = false;
      } else {
        errors.value.password = "";
      }

      if (password.value !== confirmPassword.value) {
        errors.value.password = "Passwords do not match";
        valid = false;
      }

      return valid;
    };

    const resetPassword = async () => {
      if (!validate()) {
        return;
      }

      try {
        ApiService.setHeader();
        await ApiService.post(`/api/users/${_props.user.id}/password`, {
          password: password.value,
          password_confirmation: confirmPassword.value,
        });
        emit("close");
      } catch (error) {
        console.error(error);
      }
    };

    return {
      close,
      errors,
      password,
      confirmPassword,
      resetPassword,
      visible,
    };
  },
});
</script>
