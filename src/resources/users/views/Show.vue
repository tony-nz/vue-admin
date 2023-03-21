<template>
  <div v-if="isMounted" :key="componentKey" :layout="'full'">
    <VaCard class="p-0 py-0" contentClass="p-0">
      <template v-slot:content>
        <div class="sm:flex sm:items-center sm:justify-between p-6 pb-0">
          <div class="sm:flex sm:space-x-5 w-full">
            <div class="flex-shrink-0">
              <img
                class="mx-auto h-30 w-40 rounded-lg"
                v-bind:src="
                  getBase64Avatar(
                    user?.thumbnailPhotoUrl ? user.thumbnailPhotoUrl : null
                  )
                "
                alt=""
              />
            </div>
            <div class="text-center sm:mt-0 sm:pt-1 sm:text-left w-full">
              <p class="text-xl font-bold text-gray-900 sm:text-2xl flex">
                {{ user.fullName }}
                <span
                  v-for="role in user.roles"
                  :key="role.id"
                  class="ml-2 h-6 bg-green-300 p-1 rounded text-xs text-white"
                  >{{ role.name }}</span
                >
              </p>
              <p class="text-sm font-normal text-gray-400">
                {{ user.primaryEmail }}
              </p>
              <div class="mt-4 flex flex-row gap-4">
                <StatBox1 title="Title" description="Description goes here" />
                <StatBox1
                  title="Stat"
                  description="Up 50% down 20%"
                  icon="trash-can"
                />
              </div>
            </div>
          </div>
          <div class="mt-5 flex justify-center sm:mt-0">
            <button
              @click="update"
              class="flex justify-center items-center px-4 py-2 border border-green-300 shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-400"
            >
              Save profile
            </button>
          </div>
        </div>
        <VaTabView
          v-model:activeIndex="activeIndex"
          :scrollable="true"
          class="bg-gray-100 mt-4 border-t"
        >
          <VaTabPanel v-for="(tab, index) in userTabs" :key="tab.name">
            <template #header>
              <span @click="true">
                {{ tab.name }}
              </span>
            </template>
          </VaTabPanel>
        </VaTabView>
      </template>
    </VaCard>
    <component
      :is="activeTab"
      :user="user"
      @updateData="updateData"
      class=""
      aria-hidden="true"
    />
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
// import { getBase64Avatar } from "@/core/helpers/functions";
// import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

import General from "../components/General.vue";
import Student from "../components/Student.vue";
import Attendance from "../components/Attendance.vue";
import Behaviour from "../components/Behaviour.vue";
import Contacts from "../components/Contacts.vue";
import Groups from "../components/Groups.vue";

// import store from "@/store";
// import StatBox1 from "@/components/ui/stats/StatBox1.vue";

export default defineComponent({
  watch: {
    "$route.params": {
      async handler(newValue) {
        // fix this for pinia
        // const { data } = await store.dispatch("UsersResource/getOne", {
        //   params: { id: newValue["id"] },
        // });
        // this.user = data;
        this.forceRerender();
        // console.log(data);
        // console.log(this.user);
      },
      immediate: true,
    },
  },
  setup() {
    const componentKey = ref(0);
    const user = ref([]);
    const isMounted = ref(false);
    const activeIndex = ref(0);
    const activeTab = computed(() => {
      return userTabs[activeIndex.value].component
        ? userTabs[activeIndex.value].component
        : null;
    });
    const forceRerender = () => {
      componentKey.value += 1;
    };

    const update = () => {
      // store.dispatch("UsersResource/update", user.value);
    };

    const updateData = (data) => {
      // replace user values with data values
      Object.keys(data).forEach((key) => {
        user.value[key] = data[key];
      });
    };

    const userTabs = [
      {
        name: "General",
        component: General,
      },
      {
        name: "Groups",
        component: Groups,
      },
    ];

    const studentTabs = [
      {
        name: "Contacts",
        component: Contacts,
      },
      {
        name: "Student Profile",
        component: Student,
      },
      {
        name: "Behaviour",
        component: Behaviour,
      },
      {
        name: "Goals",
        component: Behaviour,
      },
      {
        name: "Attendance",
        component: Behaviour,
      },
    ];
    onMounted(async () => {
      // user.value = await store.getters["UsersResource/getItem"];
      // // add student tabs if user is a student
      // if (user.value["student"]) {
      //   studentTabs.forEach((t) => userTabs.push(t));
      //   store
      //     .dispatch("StudentsResource/getOne", {
      //       params: { id: user.value.id },
      //     })
      //     .then(({ data }) => {
      //       store.commit("StudentsResource/setItem", data);
      //     });
      // }
      isMounted.value = true;
    });

    return {
      activeIndex,
      activeTab,
      isMounted,
      user,
      userTabs,
      componentKey,
      forceRerender,
      update,
      updateData,
    };
  },
});
</script>

<style>
.p-tabview-panels {
  padding: 0px !important;
}
.p-tabview .p-tabview-nav {
  border-color: #ffffff !important;
}
.p-tabview .p-tabview-nav {
  background: none !important;
  border: none !important;
}
/* .p-tabview .p-tabview-nav li .p-tabview-nav-link {
  background: none !important;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  box-shadow: none !important;
} */
</style>
