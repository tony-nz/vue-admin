<template>
  <div class="bg-primary-600 min-h-full flex w-full">
    <div
      class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded-md shadow-md text-black w-full">
        <h1 class="mb-8 text-2xl text-center">
          {{ translate("va.auth.register.title") }}
        </h1>
        <input
          v-model="state.name"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
        />

        <input
          v-model="state.email"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />

        <input
          v-model="state.password"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
        />
        <input
          v-model="state.password_confirmation"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirm Password"
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

        <button
          @click="register"
          class="w-full text-center py-3 rounded bg-primary-500 text-white hover:bg-green-dark focus:outline-none my-1"
        >
          {{ translate("va.auth.register.createAccount") }}
        </button>

        <div class="text-center text-xs text-gray-400 mt-4">
          {{ translate("va.auth.register.byRegistering") }}
          <a
            class="no-underline border-b border-gray-dark text-gray-dark"
            href="#"
          >
            {{ translate("va.auth.register.termsOfService") }}
          </a>
          {{ translate("va.auth.register.and") }}
          <a
            class="no-underline border-b border-gray-dark text-gray-dark"
            href="#"
          >
            Privacy Policy
            {{ translate("va.auth.register.privacyPolicy") }}
          </a>
        </div>
      </div>

      <div class="text-gray-200 mt-6">
        {{ translate("va.auth.register.alreadyHaveAnAccount") }}
        <router-link
          to="/login"
          class="no-underline border-b border-blue text-blue"
        >
          {{ translate("va.auth.register.login") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useAppStore, translate } from "@tony-nz/vue-admin-core";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Register",
  setup() {
    const appStore = useAppStore();
    const errors: any = ref({});
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });

    const register = async () => {
      await appStore
        .register(state)
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
      register,
      state,
      translate,
    };
  },
});
</script>
