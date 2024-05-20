import { FilterMatchMode, FilterOperator } from "primevue/api";
import { fields } from "./fields";
import config from "@/core/config/AppConfig";

const resource = {
  name: "users",
  label: "Users",
  url: "/users",
  apiUrl: "/api/users",
  lazy: true,
  roles: ["admin"],
  keepAlive: true,
  permissions: [
    {
      role: "admin",
      actions: ["create", "list", "show", "edit", "delete"],
    },
  ],
  fields,
  icon: {
    path: "",
  },
  create: {
    modal: true,
    page: true,
  },
  show: {
    modal: true,
    page: true,
  },
  delete: false,
  edit: {
    modal: true,
    page: true,
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
      email: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
      },
    },
    lazy: true,
    scrollable: true,
    scrollHeight: "flex",
    filterDisplay: "menu",
    rows: 25,
    paginator: true,
    show: {
      active: true,
      actions: true,
      header: true,
      refresh: true,
      toolbar: true,
      loading: true,
    },
    toolbar: {
      simpleCreate: true,
    },
    selectionMode: "single",
    dataKey: "id",
    metaKeySelection: false,
    globalFilterFields: ["name", "email"],
  },
};

export default resource;
