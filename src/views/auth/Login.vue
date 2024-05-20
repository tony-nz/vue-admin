<template>
  <div class="min-h-full flex w-full">
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <!-- <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> -->
          <h1>Vue Admin</h1>
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            {{ translate("va.auth.title") }}
          </h2>
          <p v-if="allowRegistration" class="mt-2 text-sm text-gray-600">
            {{ translate("va.auth.or") }}
            <router-link
              to="/register"
              class="font-medium text-primary-600 hover:text-primary-500"
            >
              {{ translate("va.auth.register") }}
            </router-link>
          </p>
        </div>

        <div class="mt-8">
          <div v-if="allowOAuth">
            <div>
              <p class="text-sm font-medium text-gray-700">
                {{ translate("va.auth.social.title") }}
              </p>

              <div class="mt-2">
                <button
                  aria-label="Continue with google"
                  role="button"
                  class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                      fill="#34A853"
                    />
                    <path
                      d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                      fill="#EB4335"
                    />
                  </svg>
                  <p class="ml-2" @click="handleSubmit">
                    {{ translate("va.auth.social.google") }}
                  </p>
                </button>
              </div>
            </div>

            <div class="mt-6 relative">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  {{ translate("va.auth.continueWith") }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="allowLocal" class="mt-6 space-y-6">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                {{ translate("va.auth.email") }}
              </label>
              <div class="mt-1">
                <input
                  v-model="vuelidate.email.$model"
                  :class="{
                    'border-red-500': vuelidate.email.$invalid && isLoggingIn,
                  }"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
              <div
                class="input-errors"
                v-for="(error, index) of vuelidate.email.$errors"
                :key="index"
              >
                <small class="error-msg">{{
                  // replace value with email
                  replaceAndCapitalize(error.$message, "value", "email address")
                }}</small>
              </div>
            </div>

            <div class="space-y-1">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                {{ translate("va.auth.password") }}
              </label>
              <div class="mt-1">
                <input
                  v-model="vuelidate.password.$model"
                  :class="{
                    'border-red-500':
                      vuelidate.password.$invalid && isLoggingIn,
                  }"
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
              <div
                class="input-errors"
                v-for="(error, index) of vuelidate.password.$errors"
                :key="index"
              >
                <small class="error-msg">{{
                  // replace value with email
                  replaceAndCapitalize(error.$message, "value", "password")
                }}</small>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  {{ translate("va.auth.rememberMe") }}
                </label>
              </div>

              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:text-primary-500"
                >
                  {{ translate("va.auth.forgottenPassword") }}
                </a>
              </div>
            </div>

            <div>
              <button
                @click="handleSubmit"
                :disabled="isLoggingIn"
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                :class="{
                  'bg-gray-300': isLoggingIn,
                  'hover:bg-gray-300': isLoggingIn,
                  'bg-primary-600': !isLoggingIn,
                  'hover:bg-primary-700': !isLoggingIn,
                  'focus:ring-primary-500': !isLoggingIn,
                }"
              >
                <div
                  v-if="isLoggingIn"
                  class="flex justify-center items-center h-5 w-5 animate-spin"
                >
                  <div class="spinner"></div>
                </div>
                <span v-else>{{ translate("va.auth.loginBtn") }}</span>
              </button>
            </div>
          </div>
          <div
            v-if="errors && Object.keys(errors).length > 0"
            class="mt-8 bg-red-100 border border-red-400 text-red-500 px-4 py-3 rounded relative"
          >
            <!-- title showing server erros -->
            <div class="hidden font-bold text-lg text-red-500 mb-4 text-left">
              {{ translate("va.auth.error.title") }}
            </div>
            <div
              v-for="(messages, index) of errors"
              :key="index"
              class=""
              role="alert"
            >
              <!-- capitalize index -->
              <strong class="font-bold">{{
                index.toString().charAt(0).toUpperCase() +
                index.toString().slice(1)
              }}</strong>
              <!-- loop through and list (ul,li) error messages -->
              <ul class="list-disc mt-2 ml-4">
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
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1 bg-primary-600">
      <img
        class="hidden absolute inset-0 h-full w-full object-cover"
        src="/media/illustrations/login-bg.svg"
        alt=""
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useAppStore, translate } from "@tony-nz/vue-admin-core";

export default defineComponent({
  name: "Login",
  setup() {
    const allowLocal = ref(true);
    const allowOAuth = ref(false);
    const allowRegistration = ref(true);
    const errors: any = ref({});
    const isLoggingIn = ref(false);
    const router = useRouter();
    const store = useAppStore();

    /**
     * Form state
     * @type {Object}
     */
    const state = reactive({
      email: "",
      password: "",
    });

    /**
     * Validation rules
     * @type {Object}
     */
    const rules = {
      email: { required, email },
      password: { required },
    };

    const vuelidate = useVuelidate(rules, state);

    const loginLocally = () => {
      isLoggingIn.value = true;
      store
        // .loginOauth()
        .login(state, router)
        .then(() => {
          // Go to page after successfully login
          router.push({ name: "dashboard" });
        })
        .catch((response) => {
          isLoggingIn.value = false;
          // Set errors
          errors.value = response.data.errors;
          // Show error message
          store.showToast({
            severity: "error",
            summary: "Error11111",
            message: translate("error.403.title"),
          });
        });
    };

    /**
     * Handle the submit
     * @param isFormValid
     */
    const handleSubmit = (isFormValid) => {
      // reset auth store
      store.purgeAuth();
      // clear errors
      errors.value = {};

      if (!isFormValid) {
        return;
      }

      // login locally
      loginLocally();
    };

    /**
     * Replace string and capitalize
     * @param str
     * @param find
     * @param replace
     */
    const replaceAndCapitalize = (str, find, replace) => {
      const replacedStr = str
        .toLowerCase()
        .replace(find.toLowerCase(), replace.toLowerCase());
      return replacedStr.charAt(0).toUpperCase() + replacedStr.slice(1);
    };

    return {
      allowLocal,
      allowOAuth,
      allowRegistration,
      errors,
      handleSubmit,
      isLoggingIn,
      loginLocally,
      replaceAndCapitalize,
      state,
      translate,
      vuelidate,
    };
  },
});
</script>

<style scoped>
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

.spinner {
  display: block;
  margin: auto;
  height: 100%;
  width: 100%;
  border: 4px solid rgba(0, 174, 239, 0.2);
  border-top-color: rgba(255, 255, 255, 0.8);
  /* border-top-color: rgba(0, 174, 239, 0.8); */
  border-radius: 50%;
  animation: rotation 5.2s infinite linear;
}
</style>
