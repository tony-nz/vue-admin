import { Form } from "@tony-nz/vue-form-generator/src/types/VueFormGenerator";

export const fields: Array<Form> = [
  {
    name: "User details",
    description: "Update user details and roles.",
    children: [
      {
        class: "col-span-12",
        fields: [
          {
            type: "text",
            label: "Name",
            placeholder: "John Smith",
            id: "name",
            required: true,
            class: "col-span-12",
          },
          {
            type: "text",
            label: "Email",
            placeholder: "john.smith@example.com",
            id: "email",
            required: true,
          },
          {
            type: "multiselect",
            label: "Roles",
            id: "role_ids",
            optionValue: "id",
            optionsLabel: "name",
            optionsUrl: "/api/roles",
            // options: [
            //   { id: 1, name: "admin" },
            // ],
            required: false,
          },
          {
            type: "switch",
            label: "Active",
            placeholder: "",
            id: "active",
            required: false,
          },
        ],
      },
    ],
  },
];
