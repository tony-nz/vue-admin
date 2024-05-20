<template>
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
    style="background-image: url('')"
  >
    <!--begin::Content-->
    <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-20">
      <span class="svg-icon mb-10 pt-lg-20 svg-icon-5hx svg-icon-white">
        <!-- <inline-svg src="" /> -->
      </span>
      <!--end::Svg Icon-->

      <!--begin::Wrapper-->
      <div class="pt-lg-10">
        <!--begin::Logo-->
        <h1 class="fw-bolder fs-4x text-gray-700 mt-8 mb-10">
          Unauthorized access
        </h1>
        <!--end::Logo-->

        <!--begin::Message-->
        <div class="fw-bold fs-3 text-gray-400 mb-15">
          Insufficient permissions <br />
        </div>
        <!--end::Message-->

        <!--begin::Action-->
        <div class="text-center">
          <button
            type="button"
            class="btn btn-lg btn-primary me-3"
            @click="goBack()"
          >
            Go back
          </button>
        </div>
        <!--end::Action-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { goBack } from "@tony-nz/vue-admin-core";

export default defineComponent({
  name: "403",
  components: {},
  setup() {
    return { goBack };
  },
});
</script>
