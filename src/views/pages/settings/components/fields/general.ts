import { Form } from "@tony-nz/vue-form-generator/src/types/VueFormGenerator";

export const fields: Array<Form> = [
  {
    name: "Site defaults",
    description: "This is a description for the form",
    children: [
      {
        label: "General",
        class: "col-span-6",
        description: "General settings for the user",
        // class: "col-span-12",
        fields: [
          {
            type: "text",
            label: "Business Name",
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
          // {
          //   type: "file",
          //   label: "Favicon",
          //   placeholder: "",
          //   id: "site_logo",
          //   required: false,
          // },
          // ['key' => 'site_logo', 'value' => 'logo.png'],
          // ['key' => 'site_favicon', 'value' => 'favicon.png'],
          {
            type: "address",
            label: "Address",
            placeholder: "Enter site address",
            id: "address",
          },
          {
            type: "text",
            label: "Opening Hours",
            placeholder: "Enter site opening hours",
            id: "opening_hours",
          },
          {
            type: "text",
            label: "Contact Person",
            placeholder: "Enter contact person",
            id: "contact_person",
          },
          {
            type: "email",
            label: "Contact Email",
            placeholder: "Enter contact email",
            id: "contact_email",
          },
        ],
      },
      {
        label: "Marker",
        class: "col-span-6",
        description: "Marker settings for the frontend map",
        fields: [
          {
            type: "colorpicker",
            label: "Background",
            placeholder: "",
            id: "marker_background",
            required: false,
          },
          {
            type: "colorpicker",
            label: "Border",
            placeholder: "",
            id: "marker_stroke",
            required: false,
          },
        ],
      },
    ],
  },
  {
    name: "Google Maps",
    description: "Google Maps default settings",
    children: [
      {
        // label: "Map",
        class: "col-span-6",
        fields: [
          {
            type: "address",
            label: "Map Center",
            placeholder: "Select map center",
            id: "map_center",
          },
        ],
      },
      {
        label: "Map Options",
        class: "col-span-6",
        fields: [
          {
            type: "number",
            class: "col-span-1",
            label: "Zoom Level",
            placeholder: "Map zoom level",
            id: "zoom_level",
            showButtons: true,
            buttonLayout: "horizontal",
          },
          {
            type: "switch",
            label: "Zoom Control",
            id: "zoom_control",
          },
          {
            type: "switch",
            label: "Map Type Control",
            placeholder: "",
            id: "map_type_control",
          },
          {
            type: "switch",
            label: "Scale Control",
            placeholder: "",
            id: "scale_control",
          },
          {
            type: "switch",
            label: "Street View Control",
            placeholder: "",
            id: "street_view_control",
          },
          {
            type: "switch",
            label: "Rotate Control",
            placeholder: "",
            id: "rotate_control",
          },
          {
            type: "switch",
            label: "Fullscreen Control",
            placeholder: "",
            id: "fullscreen_control",
          },
        ],
      },
    ],
  },
];
