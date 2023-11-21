import {
  BaseColorTokens,
  BasicColorTokenShades,
  ColorTokenShades,
} from "@surya-digital/leo-reactjs-material-ui";

const primaryPaletteShades: ColorTokenShades = {
  100: "#1A0D51",
  200: "#34218A",
  300: "#6D62EB",
  400: "#8F8EFF",
  500: "#CCCFFF",
};

const secondaryPaletteShades: ColorTokenShades = {
  100: "#271A00",
  200: "#483200",
  300: "#986F00",
  400: "#C59200",
  500: "#FFCC29",
};

const greenPaletteShades: ColorTokenShades = {
  100: "#002206",
  200: "#003F11",
  300: "#0B8838",
  400: "#3EAF5A",
  500: "#A5E0AE",
};

const bluePaletteShades: ColorTokenShades = {
  100: "#001A40",
  200: "#003472",
  300: "#0074E2",
  400: "#3D9DFF",
  500: "#A8D8FF",
};

const orangePaletteShades: ColorTokenShades = {
  100: "#341000",
  200: "#5F2300",
  300: "#C05700",
  400: "#ED7B35",
  500: "#FFC7A4",
};

const redPaletteShades: ColorTokenShades = {
  100: "#420001",
  200: "#730005",
  300: "#DB353A",
  400: "#F7706A",
  500: "#FFC4BF",
};

const grayPaletteShades: ColorTokenShades = {
  100: "#191C1F",
  200: "#31363B",
  300: "#6E7780",
  400: "#929BA5",
  500: "#CED3DA",
};

const basicPaletteShades: BasicColorTokenShades = {
  white: "#FFFFFF",
  black: "#000000",
  whiteOverlay: "#FFFFFF66",
  blackOverlay: "#00000066",
  whiteTransparent: "#FFFFFF29",
  blackTransparent: "#00000029",
};

export const darkColorPalette: BaseColorTokens = {
  primary: primaryPaletteShades,
  secondary: secondaryPaletteShades,
  red: redPaletteShades,
  blue: bluePaletteShades,
  orange: orangePaletteShades,
  gray: grayPaletteShades,
  green: greenPaletteShades,
  basic: basicPaletteShades,
};
