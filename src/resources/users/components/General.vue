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
    <template v-slot:header_right>
      <Button
        :label="translate('va.actions.save')"
        @click="submit = true"
        :class="{ 'opacity-50': submit }"
        :disabled="submit"
      />
    </template>
    <VueFormGenerator
      @updateData="updateData"
      @validated="validated"
      :data="modalData"
      :fetchData="fetchResourceData"
      :form="resource.fields"
      :type="'form'"
      :submit="submit"
    />
  </VaCard>
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, ref } from "vue";
import { fetchResourceData } from "@/core/utils/common";
import { useRoute } from "vue-router";
import { useResourceStore, translate } from "@tony-nz/vue-admin-core";

export default defineComponent({
  name: "General",
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const dataValues = ref();
    const isMounted = ref(false);
    const modalData = ref();
    const route = useRoute();
    const store = useResourceStore(props.resource)();
    const submit = ref(false);
    const viewKey = ref(0);

    /**
     * updateData
     * @param {object} data
     */
    const updateData = (data) => {
      modalData.value = data;
    };

    /**
     * validated
     * @param {boolean} valid
     * @param {object} data
     */
    const validated = (valid, data = null) => {
      modalData.value = data;
      if (valid) {
        if (dataValues.value) {
          // add dataValues to modalData
          modalData.value = { ...modalData.value, ...dataValues.value };
        }
        store.update({
          params: modalData.value,
          routeId: route.params.id,
        });
      }
      submit.value = false;
    };

    onActivated(() => {
      viewKey.value += 1;
      modalData.value = store.getDataItem;
    });

    onMounted(() => {
      modalData.value = store.getDataItem;
      isMounted.value = true;
    });

    return {
      dataValues,
      fetchResourceData,
      isMounted,
      modalData,
      submit,
      translate,
      updateData,
      validated,
      viewKey,
    };
  },
});
</script>
