<template>
  <div class="bg-primary-600 min-h-full flex w-full">
    <div
      class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded-md shadow-md text-black w-full">
        <h1 class="mb-8 text-2xl text-center">
          {{ translate("va.auth.forgot.title") }}
        </h1>

        <p class="text-center text-gray-400 mb-4">
          {{ translate("va.auth.forgot.description") }}
        </p>

        <input
          v-model="state.email"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />

        <div
          v-if="errors && Object.keys(errors).length > 0"
          class="my-8 bg-red-100 border border-red-400 text-red-500 px-4 py-3 rounded relative"
        >
          <!-- title showing server erros -->
          <div class="hidden font-bold text-lg text-red-500 text-left">
            {{ translate("va.auth.error.title") }}
          </div>
          <div
            v-for="(messages, index) of errors"
            :key="index"
            class=""
            role="alert"
          >
            <!-- loop through and list (ul,li) error messages -->
            <ul class="list-disc ml-4">
              <li
                v-for="(message, index) of messages"
                :key="index"
                class="text-sm"
              >
                {{ message }}
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <button
            @click="forgotPassword"
            class="w-full text-center py-3 rounded bg-primary-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            {{ translate("va.auth.forgot.send") }}
          </button>

          <router-link
            to="/login"
            class="w-full text-center py-3 rounded bg-primary-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            <button>
              {{ translate("va.auth.forgot.backToLogin") }}
            </button>
          </router-link>
        </div>
        <div class="text-center text-xs text-gray-400 mt-4">
          {{ translate("va.auth.forgot.byForgetting") }}
          <a
            class="no-underline border-b border-gray-dark text-gray-dark"
            href="#"
          >
            {{ translate("va.auth.forgot.termsOfService") }}
          </a>
          {{ translate("va.auth.forgot.and") }}
          <a
            class="no-underline border-b border-gray-dark text-gray-dark"
            href="#"
          >
            {{ translate("va.auth.forgot.privacyPolicy") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useAppStore, translate } from "@tony-nz/vue-admin-core";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Forgot",
  setup() {
    const appStore = useAppStore();
    const errors: any = ref({});
    const router = useRouter();
    const state = reactive({
      email: "",
    });

    const forgotPassword = async () => {
      await appStore
        .forgotPassword(state)
        .then(() => {
          router.push({ name: "login" });
        })
        .catch((error) => {
          console.log(error);
          errors.value = error.data.errors;
        });
    };

    return {
      errors,
      forgotPassword,
      state,
      translate,
    };
  },
});
</script>
