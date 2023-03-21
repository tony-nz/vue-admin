import { Form } from "@tony-nz/vue-form-generator/src/types/VueFormGenerator";

export const fields: Array<Form> = [
  {
    name: "Basic details",
    description: "This is a description for the form",
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
          // {
          //   type: "select",
          //   label: "Gender",
          //   id: "gender",
          //   options: [
          //     { name: "Female", id: "female" },
          //     { name: "Male", id: "male" },
          //   ],
          //   required: true,
          // },
          {
            type: "text",
            label: "Email",
            placeholder: "john.smith@domain.school.nz",
            id: "email",
            required: true,
          },
        ],
      },
    ],
  },
];
