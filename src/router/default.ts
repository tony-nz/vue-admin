import { RouteRecordRaw } from "vue-router";
import { errorRoutes } from "./error";

export const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/main/dashboard",
    component: () => import("@/layouts/main/Layout.vue"),
    meta: {
      title: "Home",
      isCache: true,
      requiresAuth: true,
      // middleware: roles,
      roles: ["admin", "teacher"],
    },
    children: [
      {
        path: "/main/dashboard",
        name: "dashboard",
        component: () => import("@/views/pages/dashboard/Index.vue"),
        meta: {
          title: "Dashboard",
          isCache: false,
          isNav: true,
          requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/main/account",
        name: "account",
        component: () => import("@/views/pages/account/Index.vue"),
        meta: {
          title: "My Account",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      ...errorRoutes,
      {
        path: "/uikit/formlayout",
        name: "formlayout",
        component: () => import("@/views/pages/uikit/FormLayout.vue"),
        meta: {
          title: "Form Layout",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/input",
        name: "input",
        component: () => import("@/views/pages/uikit/Input.vue"),
        meta: {
          title: "Input",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/floatlabel",
        name: "floatlabel",
        component: () => import("@/views/pages/uikit/FloatLabel.vue"),
        meta: {
          title: "Float Label",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/invalidstate",
        name: "invalidstate",
        component: () => import("@/views/pages/uikit/InvalidState.vue"),
        meta: {
          title: "Invalid State",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/button",
        name: "button",
        component: () => import("@/views/pages/uikit/Button.vue"),
        meta: {
          title: "Button",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/table",
        name: "table",
        component: () => import("@/views/pages/uikit/Table.vue"),
        meta: {
          title: "Table",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/list",
        name: "list",
        component: () => import("@/views/pages/uikit/List.vue"),
        meta: {
          title: "List",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/tree",
        name: "tree",
        component: () => import("@/views/pages/uikit/Tree.vue"),
        meta: {
          title: "Tree",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/panel",
        name: "panel",
        component: () => import("@/views/pages/uikit/Panels.vue"),
        meta: {
          title: "Panel",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },

      {
        path: "/uikit/overlay",
        name: "overlay",
        component: () => import("@/views/pages/uikit/Overlay.vue"),
        meta: {
          title: "Overlay",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/media",
        name: "media",
        component: () => import("@/views/pages/uikit/Media.vue"),
        meta: {
          title: "Media",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/menu",
        component: () => import("@/views/pages/uikit/Menu.vue"),
        meta: {
          title: "Menu",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/message",
        name: "message",
        component: () => import("@/views/pages/uikit/Messages.vue"),
        meta: {
          title: "Message",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/file",
        name: "file",
        component: () => import("@/views/pages/uikit/File.vue"),
        meta: {
          title: "File",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/charts",
        name: "charts",
        component: () => import("@/views/pages/uikit/Chart.vue"),
        meta: {
          title: "Charts",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/uikit/misc",
        name: "misc",
        component: () => import("@/views/pages/uikit/Misc.vue"),
        meta: {
          title: "Misc",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
    ],
  },
];
