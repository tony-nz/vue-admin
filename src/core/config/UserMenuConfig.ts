import { ref } from "vue";
import useAuthStore from "@tony-nz/vue-admin-core";

const UserMenuConfig = ref([
  {
    header: true,
  },
  {
    separator: true,
  },
  {
    label: "userMenu.accountSettings",
    to: "/account",
    slug: "account",
    svgIcon: "/media/icons/duotone/Interface/Monitor.svg",
    icon: "fa-duotone fa-alicorn",
  },
  {
    label: "userMenu.language",
    slug: "language",
    svgIcon: "/media/icons/duotone/Interface/Monitor.svg",
    icon: "fa-duotone fa-alicorn",
    items: [
      {
        label: "English",
        icon: "English",
        command: () => {
          const store = useAuthStore();
          console.log("en");
          store.setLocale("en");
        },
      },
      {
        label: "Maori",
        icon: "Maori",
        command: () => {
          const store = useAuthStore();
          console.log("maori");
          store.setLocale("maori");
        },
      },
    ],
  },
  {
    label: "userMenu.signOut",
    slug: "sign-out",
    svgIcon: "/media/icons/duotone/Interface/Monitor.svg",
    icon: "fa-duotone fa-alicorn",
    command: () => {
      // store
      //   .dispatch("AuthModule/logout")
      //   .then(() => router.push({ name: "login" }));
      // store.dispatch("AuthModule/purgeAuth");
      // store.dispatch("AuthModule/logout");
    },
  },
  {
    separator: true,
  },
  {
    footer: true,
  },
]);

export default UserMenuConfig;
