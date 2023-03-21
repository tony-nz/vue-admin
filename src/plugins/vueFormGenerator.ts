import { App } from "vue";
import { VueFormGeneratorPlugin } from "@tony-nz/vue-form-generator";

/**
 * Initialize VueFormGenerator component
 * @param app vue instance
 */
export function initVueFormGenerator(app: App<Element>) {
  /**
   * Register VueFormGenerator
   */
  app.use(VueFormGeneratorPlugin);
}
// Example of how to override defaultFetchData:
// import ApiService from "@/vue-admin/src/core/services/ApiService";
// import { useResourceStore } from "@/vue-admin/src/store/resource";
// const resource = ref();
// function defaultFetchData(params): Promise<any> {
//   console.log("Using default");
//   if (params.resourceName) {
//     try {
//       for (const [key, value] of Object.entries(resources)) {
//         if (value.resource.name == params.resourceName) {
//           resource.value = value.resource;
//         }
//       }
//       const resourceStore = useResourceStore(resource.value)();
//       return resourceStore.getList().then(({ data }) => {
//         if (typeof data == "undefined") {
//           return null;
//         }
//         return data;
//       });
//     } catch (e) {
//       // TODO ERROR LOG
//       console.log(e);
//     }
//   }
//   return ApiService.get(params.url).then((res) => {
//     // state.value.options[fieldId] = res.data.data;
//     return res.data.data;
//   });
// }
// app.use(VueFormGeneratorPlugin, { defaultFetchData });
