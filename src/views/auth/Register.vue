<template>
  <div class="bg-primary-600 min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Register</h1>
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

        <button
          @click="register"
          class="w-full text-center py-3 rounded bg-primary-500 text-white hover:bg-green-dark focus:outline-none my-1"
        >
          Create Account
        </button>

        <div class="text-center text-sm text-gray-600 mt-4">
          By signing up, you agree to the
          <a
            class="no-underline border-b border-gray-dark text-gray-dark"
            href="#"
          >
            Terms of Service
          </a>
          and
          <a
            class="no-underline border-b border-gray-dark text-gray-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div class="text-gray-300 mt-6">
        Already have an account?
        <router-link
          to="/login"
          class="no-underline border-b border-blue text-blue"
        >
          Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useAuthStore } from "@tony-nz/vue-admin-core";

export default defineComponent({
  name: "Register",
  setup() {
    const authStore = useAuthStore();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });

    const register = async () => {
      await authStore.register(state);
    };

    return {
      register,
      state,
    };
  },
});
</script>
