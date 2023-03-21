<template>
  <VaCard class="pt-0" contentClass="px-4 py-5 pt-4 h-full">
    <Form
      v-if="isMounted && user['student']"
      @onChange="updateData"
      :data="user['student']"
      :fields="fields"
      type="tabs"
    />
  </VaCard>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { fields } from "../fields";

export default defineComponent({
  props: {
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

    onMounted(async () => {
      // student.value = await store.getters["StudentsResource/getItem"];
      isMounted.value = true;
      // setCurrentPageBreadcrumbs("General", ["SMS", "Users", "Students"]);
    });

    return {
      isMounted,
      student,
      fields,
    };
  },
});
</script>
