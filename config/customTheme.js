import { css } from "styled-components";
import { FormClose } from "grommet-icons";

const customTheme = {
  global: {
    background: "#fff",
    hover: {
      color: "#000",
      background: "rounded",
    },
    font: {
      family: "Inter, sans-serif",
      color: "#fff",
    },
    colors: {
      brand: "#rounded",
      active: "#22003b",
      color: "#rounded",
      control: "#rounded",
      border: "#62324C",
      placeholder: "#111",
      text: "#fff",
    },
    focus: {
      shadow: {
        color: "#62324C",
      },
      outline: {
        color: "#62324C",
      },
    },
    control: {
      border: {
        width: "6px",
      },
    },
  },
};

export default customTheme;
