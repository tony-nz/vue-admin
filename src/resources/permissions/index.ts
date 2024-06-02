import { FilterMatchMode, FilterOperator } from "primevue/api";
import { fields } from "./fields";
import config from "@/core/config/AppConfig";

const resource = {
  name: "permissions",
  label: "Permissions",
  url: "/permissions",
  apiUrl: "/api/permissions",
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
    lazy: false,
    scrollable: true,
    scrollHeight: "flex",
    filterDisplay: "menu",
    rows: 25,
    paginator: true,
    show: {
      active: false,
      actions: true,
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
