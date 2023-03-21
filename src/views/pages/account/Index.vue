<template>
  <div>
    <div class="grid grid-cols-2 gap-4 grid-flow-col auto-cols-max">
      <div class="col-span-2">
        <VaCard
          :title="translate('account.profile.title')"
          :description="translate('account.profile.description')"
        >
          <VueFormGenerator :form="userProfile" />
        </VaCard>
        <VaCard
          :title="translate('account.settings.title')"
          :description="translate('account.settings.description')"
          class="col-span-2"
        >
        </VaCard>
      </div>
      <div>
        <VaCard
          :title="translate('account.avatar.title')"
          :description="translate('account.avatar.description')"
          class="max-w-sm"
        >
          <div
            class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div
              v-show="$refs.upload && $refs.upload.dropActive"
              class="drop-active"
            >
              <h3>Drop files to upload</h3>
            </div>
            <div class="avatar-upload" v-show="!edit">
              <div class="flex justify-center">
                <div for="avatar">
                  <img
                    :src="
                      files.length
                        ? files[0].url
                        : 'https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm'
                    "
                    class="rounded-circle opacity-30"
                  />
                  <h4 class="pt-2">or<br />Drop files anywhere to upload</h4>
                </div>
              </div>
              <file-upload
                v-model="files"
                @input-file="inputFile"
                @input-filter="inputFilter"
                :drop="!edit"
                accept="image/png,image/gif,image/jpeg,image/webp"
                class="bg-primary-500 hover:bg-primary-400 text-white text-sm py-2 px-8 border border-gray-400 rounded shadow whitespace-nowrap"
                extensions="gif,jpg,jpeg,png,webp"
                name="avatar"
                post-action="/upload/post"
                ref="upload"
              >
                Upload avatar
              </file-upload>
            </div>

            <div class="avatar-edit" v-show="files.length && edit">
              <div class="avatar-edit-image" v-if="files.length">
                <img ref="editImage" :src="files[0].url" />
              </div>
              <div class="text-center p-4">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.prevent="$refs.upload.clear"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="editSave"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </VaCard>
        <VaCard
          :title="translate('account.password.title')"
          :description="translate('account.password.description')"
          class="max-w-md"
        >
          <Button
            type="button"
            class="bg-primary-500 hover:bg-primary-400 w-full text-center block"
          >
            {{ translate("account.password.resetBtn") }}
          </Button>
        </VaCard>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
// import { translate } from "@tony-nz/vue-admin-core";
// import { userProfile } from "@/resources/fields/sms";
// import { getBase64Avatar } from "@/core/helpers/functions";
import FileUpload from "vue-upload-component";
import Cropper from "cropperjs";
import { fields as userProfile } from "@/resources/users/fields";
export default defineComponent({
  components: {
    FileUpload,
  },
  methods: {
    editSave() {
      this.edit = false;
      let oldFile = this.files[0];
      let binStr = atob(
        this.cropper.getCroppedCanvas().toDataURL(oldFile.type).split(",")[1]
      );
      let arr = new Uint8Array(binStr.length);
      for (let i = 0; i < binStr.length; i++) {
        arr[i] = binStr.charCodeAt(i);
      }
      let file = new File([arr], oldFile.name, { type: oldFile.type });
      this.$refs.upload.update(oldFile.id, {
        file,
        type: file.type,
        size: file.size,
        active: true,
      });
    },
    alert(message) {
      alert(message);
    },
    inputFile(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        this.$nextTick(function () {
          this.edit = true;
        });
      }
      if (!newFile && oldFile) {
        this.edit = false;
      }
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          this.alert("Your choice is not a picture");
          return prevent();
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.url = "";
        let URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.url = URL.createObjectURL(newFile.file);
        }
      }
    },
  },
  watch: {
    edit(value) {
      if (value) {
        this.$nextTick(function () {
          if (!this.$refs.editImage) {
            return;
          }
          let cropper = new Cropper(this.$refs.editImage, {
            aspectRatio: 1 / 1,
            viewMode: 1,
          });
          this.cropper = cropper;
        });
      } else {
        if (this.cropper) {
          this.cropper.destroy();
          this.cropper = false;
        }
      }
    },
  },
  setup() {
    const cropper = ref(false);
    const edit = ref(false);
    const isMounted = ref(false);
    const files = ref([]);

    onMounted(async () => {
      isMounted.value = true;
    });
    const translate = (key) => {
      return key;
    };

    return {
      cropper,
      edit,
      files,
      isMounted,
      translate,
      userProfile,
      // getBase64Avatar,
    };
  },
});
</script>
<style>
.p-fileupload .p-fileupload-buttonbar {
  display: none;
}
</style>
