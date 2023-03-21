<template>
  <div>
    <VaCard
      :title="'Users'"
      :description="'Displaying users for the organization '"
      :isLoading="isLoading"
      class="col-span-2"
    >
      <VaAdvDataTable :resource="resource">
        <template v-slot:toolbar></template>
        <template v-slot:columns>
          <Column field="name" header="Name" :sortable="true">
            <template #body="{ data }">
              <VaUserDisplay :user="data" />
            </template>
          </Column>
          <Column field="lastLoginTime" header="Last Seen" :sortable="true">
            <template #body="{ data }">
              <span v-if="data.lastLoginTime">
                {{ moment(data.lastLoginTime).fromNow() }}
              </span>
              <span v-else> Never </span>
            </template>
          </Column>
        </template>
        <template v-slot:actionCol="{ data }">
          <router-link :to="{ name: 'UsersShow', params: { id: data.id } }">
            <VaActionBtn :ariaLabel="'Show User'" icon="user" />
          </router-link>
        </template>
      </VaAdvDataTable>
    </VaCard>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import moment from "moment";

export default defineComponent({
  props: {
    resource: {
      type: Object,
    },
  },
  setup() {
    const isMounted = ref(false);
    const isLoading = computed(() => {
      return false;
      // return store.getters[
      //   `${upperCaseFirst(props.resource.name)}Resource/getIsLoading`
      // ];
    });

    onMounted(async () => {
      isMounted.value = true;
    });

    return {
      isMounted,
      isLoading,
      moment,
    };
  },
});
</script>
