<template>
  <div class="bg-primary-500 h-full">
    <div
      class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Google oAuth Successful</span>
      </h2>
      <p v-if="loading" class="mt-4 text-lg leading-6 text-indigo-200">
        Your login to Google was successful, please wait while we connect you to
        our backend API.
      </p>
      <button
        v-if="loading"
        disabled
        class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-gray-500 bg-white sm:w-auto disabled:bg-opacity-50"
      >
        <i class="fa-solid fa-cog fa-spin text-gray-400 mr-2 fa-lg"></i>
        <span v-if="loading">Connecting to backend API...</span>
        <span v-else>Continue to dashboard</span>
      </button>
      <button
        v-else
        class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-gray-500 bg-white sm:w-auto"
      >
        <span>Continue to dashboard</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { translate } from "@tony-nz/vue-admin-core";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import useAuthStore from "@tony-nz/vue-admin-core";
export default defineComponent({
  name: "GoogleCallBack",

  setup() {
    const loading = ref(true);
    const router = useRouter();
    const route = useRoute();
    const store = useAuthStore();
    const toast = useToast();

    const payload = {
      code: route.query.code,
    };
    store
      .loginOauthCallback(payload)
      .then(() => {
        // check if current user is authenticated
        if (store.isUserAuthenticated) {
          loading.value = false;
          toast.add({
            severity: "success",
            summary: "Success",
            detail: translate("oauth.callback.success"),
            life: 3000,
          });
          router.push({ name: "dashboard" });
        } else {
          toast.add({
            severity: "error",
            summary: "Error",
            detail: translate("oauth.callback.error"),
            life: 3000,
          });
          router.push({ name: "login" });
        }
      })
      .catch(() => {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: translate("oauth.callback.error"),
          life: 3000,
        });
        router.push({ name: "login" });
      });

    return { loading };
  },
});
</script>
