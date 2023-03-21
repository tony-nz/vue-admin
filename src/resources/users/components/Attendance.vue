<template>
  <VaCard>General</VaCard>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
// import Card from "@/components/ui/card/Card.vue";

export default defineComponent({
  components: {
    // Card,
  },
  setup() {
    const isMounted = ref(false);
    onMounted(async () => {
      isMounted.value = true;
      // setCurrentPageBreadcrumbs("Attendance", ["SMS", "Users", "Students"]);
    });

    return {
      isMounted,
    };
  },
});
</script>
