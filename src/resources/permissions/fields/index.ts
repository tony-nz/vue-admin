import { Form } from "@tony-nz/vue-form-generator/src/types/VueFormGenerator";

export const fields: Array<Form> = [
  {
    name: "Permission Details",
    description: "",
    children: [
      {
        label: "General",
        class: "col-span-12",
        fields: [
          {
            type: "text",
            label: "Name",
            placeholder: "Enter name",
            id: "name",
            required: true,
          },
        ],
      },
    ],
  },
];
