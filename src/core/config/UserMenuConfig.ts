import { ref } from "vue";
import { useAppStore } from "@tony-nz/vue-admin-core";

const UserMenuConfig = ref({
  header: true,
  footer: true,
  seperators: false,
  menu: [
    {
      items: [
        {
          label: "userMenu.accountSettings",
          to: "/account",
          slug: "account",
        },
      ],
    },
    {
      items: [
        {
          label: "userMenu.signOut",
          slug: "sign-out",
          command: () => {
            useAppStore()
              .logout()
              .then(() => {
                window.location.href = "/login";
              });
          },
        },
      ],
    },
  ],
});

export default UserMenuConfig;
