<template>
  <div>
    EDIT
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  setup() {
    const isLoading = ref(true);
    const isMounted = ref(false);
    const users = ref([]);

    onMounted(async () => {
      console.log("edit");
      isMounted.value = true;
      // setCurrentPageBreadcrumbs("Index22", ["Home", "CRUD"]);
    });

    return { users, isLoading, isMounted };
  },
});
</script>
