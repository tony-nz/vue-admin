<template>
  <VaCard
    v-if="isMounted"
    :key="viewKey"
    :isLoading="!isMounted"
    :clearCss="['content']"
    :classes="{
      base: ['overflow-hidden', 'col-span-12', 'shadow-md', 'rounded-b-lg'],
      content: ['flex', 'flex-col', 'flex-1', 'overflow-hidden', 'p-4'],
      card: ['h-full', 'rounded-none'],
    }"
  >
    <VueFormGenerator
      @updateData="updateData"
      @validated="validated"
      :data="data"
      :fetchData="fetchResourceData"
      :form="fields"
      :type="'tabs'"
      :submit="submit"
    />
  </VaCard>
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, ref } from "vue";
import { useAppStore } from "@tony-nz/vue-admin-core";
import { fields } from "./fields/general";
import { fetchResourceData } from "@/core/utils/common";

export default defineComponent({
  methods: {
    close() {
      this.$emit("close");
    },
    onSubmit() {
      this.submit = true;
    },
    updateData(data) {
      const appStore = useAppStore();
      this.modalData = data;
      appStore.updateSettings(data);
    },
    validated(valid, data = null) {
      this.modalData = data;
      if (valid) {
        // this.$emit("update", this.modalData, this.dataId, this.subId);
      }
      this.submit = false;
    },
  },
  setup() {
    const appStore = useAppStore();
    const isMounted = ref(false);
    const resource = ref();
    const viewKey = ref(0);
    const submit = ref(false);
    const modalData = ref();
    const data = ref();

    onActivated(() => {
      viewKey.value += 1;
    });

    onMounted(async () => {
      data.value = appStore.getSettings;
      isMounted.value = true;
    });

    return {
      isMounted,
      fetchResourceData,
      fields,
      resource,
      viewKey,
      submit,
      modalData,
      data,
    };
  },
});
</script>
