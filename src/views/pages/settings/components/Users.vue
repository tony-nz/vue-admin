<template>
  <VaCard
    v-if="isMounted"
    :key="viewKey"
    :isLoading="!isMounted"
    :clearCss="['content']"
    :classes="{ content: ['p-0'] }"
  >
    <VaAdvDataTable :resource="resource">
      <template v-slot:toolbar></template>
    </VaAdvDataTable>
  </VaCard>
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, ref } from "vue";
import { useAppStore } from "@tony-nz/vue-admin-core";

export default defineComponent({
  setup() {
    const appStore = useAppStore();
    const isMounted = ref(false);
    const resource = ref();
    const viewKey = ref(0);

    try {
      for (const [key, value] of Object.entries(appStore.getResources)) {
        const foundResource = value as { name: string } | undefined;
        if (foundResource?.name == "containers") {
          resource.value = foundResource;
        }
      }
    } catch (e) {
      // TODO ERROR LOG
      console.log(e);
    }

    onActivated(() => {
      viewKey.value += 1;
    });

    onMounted(async () => {
      isMounted.value = true;
    });

    return {
      isMounted,
      resource,
      viewKey,
    };
  },
});
</script>
