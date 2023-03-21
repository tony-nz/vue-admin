<template>
  <VaCard>
    <VaMyDataTable
      :resource="resource"
      :stateList="stateList"
      :showActions="true"
      :dataFilters="{ categoryName: 'test2' }"
    >
      <template v-slot:toolbar></template>
      <template v-slot:columns></template>
    </VaMyDataTable>
  </VaCard>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { fields } from "../fields";

export default defineComponent({
  props: {
    resource: {
      type: Object,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateData(data) {
      this.$emit("updateData", data);
    },
  },
  setup() {
    const student = ref([]);
    const isMounted = ref(false);
    const stateList = "posts";

    onMounted(async () => {
      isMounted.value = true;
      // setCurrentPageBreadcrumbs("General", ["SMS", "Users", "Students"]);
    });

    return {
      isMounted,
      student,
      fields,
      stateList,
    };
  },
});
</script>
