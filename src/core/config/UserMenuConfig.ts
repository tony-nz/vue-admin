import { ref } from "vue";
import { useAppStore } from "@tony-nz/vue-admin-core";

const UserMenuConfig = ref({
  header: true,
  footer: true,
  seperators: true,
  menu: [
    {
      items: [
        {
          label: "userMenu.accountSettings",
          to: "/account",
          slug: "account",
        },
        {
          label: "userMenu.language",
          slug: "language",
          items: [
            {
              label: "English",
              icon: "English",
              command: () => {
                const store = useAppStore();
                store.setLocale("en");
              },
            },
          ],
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
                window.location.href = "/";
              });
          },
        },
      ],
    },
  ],
});

export default UserMenuConfig;
