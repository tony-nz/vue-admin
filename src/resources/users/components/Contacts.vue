<template>
  <VaCard>
    <VaMyDataView
      v-if="resource"
      :resource="resource"
      :params="params"
      :gridCols="3"
      colWidth="w-48"
      :stateUser="true"
    >
      <template v-slot:header> </template>
      <template v-slot:list="{ slotProps }">
        <div class="col-12">
          <div class="contact-list-item">
            <div class="contact-list-detail">
              <div class="contact-name">
                {{ slotProps.data.firstname }} {{ slotProps.data.surname }}
              </div>
              <div class="contact-occupation">
                {{ slotProps.data.occupation }}
              </div>
              <i class="pi pi-tag contact-category-icon"></i
              ><span class="contact-email">{{ slotProps.data.email }}</span>
            </div>
            <div class="contact-list-action">
              <VaButton
                icon="pi pi-shopping-cart"
                label="Add to Cart"
              ></VaButton>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:grid="{ slotProps }">
        <ContactProfileCard :contact="slotProps.data" :gridCols="3" />
      </template>
    </VaMyDataView>
  </VaCard>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { studentFields } from "../fields";
// import ContactProfileCard from "@/components/sms/contact/ContactProfileCard.vue";
// import store from "@/store";

export default defineComponent({
  components: {
    // ContactProfileCard,
  },
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
    const isMounted = ref(false);

    onMounted(async () => {
      const groups = ref([]);
      // groups.value = await store
      //   .dispatch("ContactsResource/getList", {})
      //   .then(({ data }) => {
      //     console.log(data);
      //     return data;
      //   });
      isMounted.value = true;
      // setCurrentPageBreadcrumbs("Contacts", ["SMS", "Users"]);
    });

    return {
      isMounted,
      studentFields,
    };
  },
});
</script>
