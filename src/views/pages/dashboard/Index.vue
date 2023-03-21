<template>
  <div class="home">
    testing
  </div>
</template>

<script lang="ts">
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { defineComponent, onMounted } from "vue";

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
