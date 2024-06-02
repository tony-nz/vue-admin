import { FilterMatchMode, FilterOperator } from "primevue/api";
import { fields } from "./fields";
import config from "@/core/config/AppConfig";

const dataViewStyle = {
  content: {
    class: [
      // Spacing
      "p-0",

      // Shape
      "border-0",

      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-800",
      // Scroll
      "overflow-scroll",
    ],
  },
  grid: {
    class: [
      // flex
      "flex flex-wrap",

      // Spacing
      "ml-0 mr-0 mt-0",

      // Color
      "bg-surface-0 dark:bg-surface-800",
    ],
  },
  header: {
    class: [
      "font-semibold",

      // Spacing
      "p-1",

      // Color
      // "text-surface-800 dark:text-white/80",
      // "bg-slate-100 dark:bg-surface-800",
      // "border-surface-200 dark:border-surface-700 border-b",
      "border-b border-x-0 bg-slate-100 dark:bg-slate-800 border-surface-300 dark:border-surface-600 text-surface-700 dark:text-white/80",
    ],
  },
};
const resource = {
  name: "roles",
  label: "Roles",
  url: "/roles",
  apiUrl: "/api/roles",
  lazy: false,
  roles: ["admin"],
  keepAlive: true,
  permissions: [
    {
      role: "admin",
      actions: ["create", "read", "update", "delete"],
    },
  ],
  fields,
  icon: {
    path: "",
  },
  create: {
    modal: true,
    page: false,
  },
  show: {
    modal: false,
    page: false,
  },
  delete: false,
  edit: {
    modal: true,
    page: false,
    sideBar: false,
  },
  routes: ["list", "create", "edit", "show"],
  notifications: config.notifications,
  datatable: {
    filters: {
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
      },
    },
    pt: dataViewStyle,
    lazy: false,
    scrollable: true,
    scrollHeight: "flex",
    filterDisplay: "menu",
    rows: 25,
    paginator: true,
    show: {
      active: false,
      actions: true,
      create: true,
      header: true,
      refresh: true,
      toolbar: true,
      loading: true,
      select: false,
    },
    toolbar: {
      active: false,
      create: true,
      refresh: true,
      select: false,
      search: true,
      simpleCreate: true,
    },
    selectionMode: "single",
    dataKey: "id",
    metaKeySelection: false,
    globalFilterFields: ["name"],
  },
};

export default resource;
