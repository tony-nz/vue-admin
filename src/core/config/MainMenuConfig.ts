import { ref } from "vue";

const MainMenuConfig = ref([
  {
    label: "menu.main.title",
    backgroundColor: "bg-primary-500",
    textColor: "text-primary",
    slug: "main",
    class: "bg-success",
    svgIcon: "/media/icons/duotone/Communication/Group.svg",
    to: "/",
    items: [
      {
        label: "General",
        divider: true,
      },
      {
        label: "menu.main.dashboard",
        to: "/main/dashboard",
        svgIcon: "/media/icons/duotone/General/Settings-2.svg",
        icon: "fas fa-cog",
      },
      {
        label: "menu.main.account",
        to: "/main/account",
        svgIcon: "/media/icons/duotone/General/Settings-2.svg",
        icon: "fas fa-cog",
      },
      {
        label: "menu.main.resources.title",
        svgIcon: "/media/icons/duotone/Code/Compiling.svg",
        icon: "fa-duotone fa-alicorn",
        items: [
          {
            label: "menu.main.resources.users",
            to: "/users",
          },
          {
            label: "menu.main.resources.googleOrgUnits",
            to: "/main/google/organizations",
          },
        ],
      },
    ],
  },
  {
    label: "menu.secondary.title",
    backgroundColor: "bg-primary-500",
    textColor: "text-primary",
    slug: "secondary",
    class: "bg-success",
    svgIcon: "/media/icons/duotone/Communication/Group.svg",
    items: [
      {
        label: "Secondary Dashboard",
        to: "/secondary/dashboard",
        svgIcon: "/media/icons/duotone/Files/Selected-file.svg",
        icon: "fas fa-file-invoice-dollar",
      },
    ],
  },
]);

export default MainMenuConfig;
