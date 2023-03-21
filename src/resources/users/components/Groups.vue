<template>
  <VaCard>
    <VaMyDataTable
      :resource="resource"
      :params="params"
      :showActions="true"
      :showActionDefaults="false"
    >
      <template v-slot:toolbar></template>
      <template v-slot:columns>
        <VaColumn
          field="name"
          header="Group Name"
          sortable
          bodyStyle="overflow: visible"
          class="text-muted"
        >
          <template #body="{ data }">
            <p class="text-sm font-medium text-purple-600 truncate">
              <router-link v-bind:to="'/main/users/groups/' + data.id">
                {{ data.name }}
              </router-link>
            </p>
            <p class="mt-2 flex items-center text-sm text-gray-500">
              <span
                >{{ data.members ? data.members.length : "0" }} members</span
              >
            </p>
          </template>
        </VaColumn>
      </template>
      <template v-slot:actionCol="{ data }">
        <router-link :to="{ name: 'users-show', params: { id: data.id } }">
          <VaActionBtn
            :ariaLabel="'Remove user from group'"
            icon="user-minus"
          />
        </router-link>
      </template>
    </VaMyDataTable>
  </VaCard>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    resource: {
      type: Object,
    },
  },
  setup() {
    const isMounted = ref(false);
    const groups = ref([]);
    const route = useRoute();
    const params = { apiUrl: "/api/sms/user/" + route?.params.id + "/groups" };

    onMounted(async () => {
      // groups.value = await ApiService.get(
      //   "/api/sms/user/" + route?.params.id + "/groups"
      // ).then(({ data }) => {
      //   isMounted.value = true;
      //   return data;
      // });

      // groups.value = await store
      //   .dispatch("GroupsResource/getList", {
      //     apiUrl: "/api/sms/user/" + route?.params.id + "/groups",
      //   })
      //   .then(({ data }) => {
      //     return data;
      //   });
      isMounted.value = true;
      // setCurrentPageBreadcrumbs("Groups", ["SMS", "Users"]);
    });

    return {
      isMounted,
      params,
    };
  },
});
</script>
