<template>
  <div>Dashboard</div>
</template>

<script>
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  name: "Dashboard",
  setup() {
    onMounted(async () => {
      // setCurrentPageBreadcrumbs("Classrooms", ["SMS", "Classrooms"]);
      // const { data } = await store.dispatch(`UsersResource/get`, null);
    });
    return {
      //
    };
  },
});
</script>

<style>
/* .p-datatable-thead {
  display: table-header-group;
} */
</style>
