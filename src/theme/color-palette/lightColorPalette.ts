import {
  BaseColorTokens,
  BasicColorTokenShades,
  ColorTokenShades,
} from "@surya-digital/leo-reactjs-material-ui";

const primaryPaletteShades: ColorTokenShades = {
  100: "#EDEEFF",
  200: "#CCCFFF",
  300: "#7F79F8",
  400: "#6252DE",
  500: "#3F2CA3",
};

const secondaryPaletteShades: ColorTokenShades = {
  100: "#FFF19F",
  200: "#FFCC27",
  300: "#B08100",
  400: "#886200",
  500: "#573E00",
};

const greenPaletteShades: ColorTokenShades = {
  100: "#DFF4E1",
  200: "#A6E1AE",
  300: "#249D48",
  400: "#00792F",
  500: "#004D18",
};

const bluePaletteShades: ColorTokenShades = {
  100: "#DFF1FF",
  200: "#A6D8FF",
  300: "#1D88FC",
  400: "#0067CD",
  500: "#00408A",
};

const orangePaletteShades: ColorTokenShades = {
  100: "#FFEBDF",
  200: "#FFC7A4",
  300: "#D9691B",
  400: "#AD4B00",
  500: "#732C00",
};

const redPaletteShades: ColorTokenShades = {
  100: "#FFEBE9",
  200: "#FFC4BF",
  300: "#EC5553",
  400: "#CC1E2C",
  500: "#8A000B",
};

const grayPaletteShades: ColorTokenShades = {
  100: "#F4F6F9",
  200: "#CED3DA",
  300: "#818A93",
  400: "#626972",
  500: "#3D4349",
};

const basicPaletteShades: BasicColorTokenShades = {
  white: "#FFFFFF",
  black: "#000000",
  whiteOverlay: "#FFFFFF66",
  blackOverlay: "#00000066",
  whiteTransparent: "#FFFFFF29",
  blackTransparent: "#00000029",
};

export const lightColorPalette: BaseColorTokens = {
  primary: primaryPaletteShades,
  secondary: secondaryPaletteShades,
  red: redPaletteShades,
  blue: bluePaletteShades,
  orange: orangePaletteShades,
  gray: grayPaletteShades,
  green: greenPaletteShades,
  basic: basicPaletteShades,
};
