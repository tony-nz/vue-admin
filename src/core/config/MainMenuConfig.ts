import { ref } from "vue";

const MainMenuConfig = ref([
  {
    label: "menu.main.title",
    backgroundColor: "bg-primary-500",
    textColor: "text-primary",
    slug: "main",
    class: "bg-success",
    icon: {
      path: "/media/icons/duotone/Communication/Group.svg",
    },
    to: "/",
    items: [
      {
        label: "General",
        divider: true,
      },
      {
        label: "menu.main.dashboard",
        to: "/main/dashboard",
        // icon: "/media/icons/duotone/General/Settings-2.svg",
      },
      {
        label: "menu.main.account",
        to: "/main/account",
        icon: "/media/icons/duotone/Code/Compiling.svg",
      },
      {
        label: "menu.main.resources.title",
        icon: "/media/icons/duotone/Code/Compiling.svg",
        to: "/resources",
        type: "grid",
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
    icon: "/media/icons/duotone/Communication/Group.svg",
    items: [
      {
        label: "UI Components",
        to: "/secondary/dashboard",
        type: "list",
        items: [
          {
            label: "Form Layout",
            icon: "pi pi-fw pi-id-card",
            to: "/uikit/formlayout",
          },
          {
            label: "Input",
            icon: "pi pi-fw pi-check-square",
            to: "/uikit/input",
          },
          {
            label: "Float Label",
            icon: "pi pi-fw pi-bookmark",
            to: "/uikit/floatlabel",
          },
          {
            label: "Invalid State",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/uikit/invalidstate",
          },
          {
            label: "Button",
            icon: "pi pi-fw pi-mobile",
            to: "/uikit/button",
            class: "rotated-icon",
          },
          { label: "Table", icon: "pi pi-fw pi-table", to: "/uikit/table" },
          { label: "List", icon: "pi pi-fw pi-list", to: "/uikit/list" },
          { label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/uikit/tree" },
          { label: "Panel", icon: "pi pi-fw pi-tablet", to: "/uikit/panel" },
          { label: "Overlay", icon: "pi pi-fw pi-clone", to: "/uikit/overlay" },
          { label: "Media", icon: "pi pi-fw pi-image", to: "/uikit/media" },
          {
            label: "Menu",
            icon: "pi pi-fw pi-bars",
            to: "/uikit/menu",
            preventExact: true,
          },
          {
            label: "Message",
            icon: "pi pi-fw pi-comment",
            to: "/uikit/message",
          },
          { label: "File", icon: "pi pi-fw pi-file", to: "/uikit/file" },
          {
            label: "Chart",
            icon: "pi pi-fw pi-chart-bar",
            to: "/uikit/charts",
          },
          { label: "Misc", icon: "pi pi-fw pi-circle", to: "/uikit/misc" },
        ],
      },
    ],
  },
]);

export default MainMenuConfig;
