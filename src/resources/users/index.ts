import { fields } from "./fields";

const resource = {
  name: "users",
  label: "Users",
  url: "/users",
  apiUrl: "/api/users",
  roles: ["admin", "teacher"],
  keepAlive: true,
  permissions: [
    {
      role: "teacher",
      actions: ["create", "list", "show", "edit", "delete"],
    },
  ],
  fields,
  icon: {
    path: "/media/icons/duotone/Communication/Group.svg",
  },
  create: {
    modal: true,
    page: true,
  },
  show: {
    modal: true,
    page: true,
  },
  delete: true,
  edit: {
    modal: true,
    page: true,
    sideBar: true,
  },
  routes: ["list", "create", "edit", "show"],
};

export default resource;
