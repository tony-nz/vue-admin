import LayoutConfigTypes from "./LayoutConfigTypes";

const config: LayoutConfigTypes = {
  theme: {
    name: "VueAdmin",
    version: "1.0.0",
    darkMode: false,
    display: "fluid",
    light: {
      black: "#000000",
      white: "#ffffff",
      primary: "#3f51b5",
      secondary: "#ff4081",
      success: "#4caf50",
      info: "#2196f3",
      warning: "#ffc107",
      danger: "#f44336",
      light: "#eceff1",
      dark: "#212121",
    },
    dark: {
      black: "#000000",
      white: "#ffffff",
      primary: "#3f51b5",
      secondary: "#ff4081",
      success: "#4caf50",
      info: "#2196f3",
      warning: "#ffc107",
      danger: "#f44336",
      light: "#eceff1",
      dark: "#212121",
    },
  },
  logo: {
    display: true,
    dark: "media/logos/logo-light.svg",
    light: "media/logos/logo-light.svg",
    alt: "VueAdmin",
    class: "h-8 w-auto mr-2",
  },
  loader: {
    logo: "media/logos/logo-light.svg",
    display: true,
    type: "default",
  },
  scrollTop: {
    display: true,
  },
  header: {
    display: false,
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  menu: {
    display: true,
    menuIcon: "font",
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  breadcrumbs: {
    display: true,
  },
  toolbar: {
    display: false,
    width: "fluid",
  },
  content: {
    width: "fluid",
  },
};

export default config;
