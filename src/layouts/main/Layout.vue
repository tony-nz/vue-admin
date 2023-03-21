<template>
  <OffCanvas />
  <VaLayout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OffCanvas from "./OffCanvas/OffCanvas.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    OffCanvas,
  },
  setup() {
    //
  },
});
</script>
