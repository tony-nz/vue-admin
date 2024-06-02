import { Form } from "@tony-nz/vue-form-generator/src/types/VueFormGenerator";

export const fields: Array<Form> = [
  {
    name: "Site defaults",
    description: "This is a description for the form",
    children: [
      {
        label: "General",
        class: "col-span-6",
        description: "Settings for the site",
        fields: [
          {
            type: "text",
            label: "Site Name",
            placeholder: "",
            id: "site_name",
            required: true,
          },
          {
            type: "text",
            label: "Description",
            placeholder: "",
            id: "description",
            required: false,
          },
          {
            type: "switch",
            label: "Allow Registration",
            placeholder: "",
            id: "site_registration",
            required: false,
          },
          {
            type: "file",
            label: "Logo",
            placeholder: "Upload your logo",
            id: "site_logo",
          },
          {
            type: "file",
            label: "Favicon",
            placeholder: "",
            id: "site_logo",
            required: false,
          },
          // ['key' => 'site_logo', 'value' => 'logo.png'],
          // ['key' => 'site_favicon', 'value' => 'favicon.png'],
        ],
      },
    ],
  },
];
