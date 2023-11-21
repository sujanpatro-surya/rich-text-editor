import { Typography } from "@surya-digital/leo-reactjs-material-ui";

/**
 * Function to convert px to rem
 */
export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

const PRIMARY_FONT = "Inter";

const h1 = {
  fontWeight: 700,
  lineHeight: "132px",
  letterSpacing: "-1.5px",
  fontFamily: PRIMARY_FONT,
  fontSize: "96px",
};

const h2 = {
  fontWeight: 700,
  lineHeight: "84px",
  letterSpacing: "-1px",
  fontFamily: PRIMARY_FONT,
  fontSize: "60px",
};

const h3 = {
  fontWeight: 700,
  lineHeight: "64px",
  letterSpacing: "-0.5px",
  fontFamily: PRIMARY_FONT,
  fontSize: "48px",
};

const h4 = {
  fontWeight: 700,
  lineHeight: "48px",
  letterSpacing: "0px",
  fontFamily: PRIMARY_FONT,
  fontSize: "34px",
};

const h5 = {
  fontWeight: 700,
  lineHeight: "32px",
  letterSpacing: "0.25px",
  fontFamily: PRIMARY_FONT,
  fontSize: "24px",
};

const h6 = {
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.5px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const sh1 = {
  fontWeight: 700,
  lineHeight: "32px",
  letterSpacing: "0px",
  fontFamily: PRIMARY_FONT,
  fontSize: "22px",
};

const sh2 = {
  fontWeight: 700,
  lineHeight: "28px",
  letterSpacing: "0.03px",
  fontFamily: PRIMARY_FONT,
  fontSize: "18px",
};

const sh3 = {
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.05px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const sh4 = {
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: "0.1px",
  fontFamily: PRIMARY_FONT,
  fontSize: "14px",
};

const body1 = {
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0.2px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const body2 = {
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0.22px",
  fontFamily: PRIMARY_FONT,
  fontSize: "14px",
};

const body3 = {
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.25px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

const body4 = {
  fontWeight: 400,
  lineHeight: "12px",
  letterSpacing: "0.3px",
  fontFamily: PRIMARY_FONT,
  fontSize: "10px",
};

const small1 = {
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.2px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const small2 = {
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: "0.22px",
  fontFamily: PRIMARY_FONT,
  fontSize: "14px",
};

const small3 = {
  fontWeight: 700,
  lineHeight: "16px",
  letterSpacing: "0.25px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

const small4 = {
  fontWeight: 700,
  lineHeight: "12px",
  letterSpacing: "0.3px",
  fontFamily: PRIMARY_FONT,
  fontSize: "10px",
};

const caption1 = {
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.3px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

const caption2 = {
  fontWeight: 400,
  lineHeight: "12px",
  letterSpacing: "0.35px",
  fontFamily: PRIMARY_FONT,
  fontSize: "10px",
};

const overline1 = {
  fontWeight: 700,
  lineHeight: "16px",
  letterSpacing: "2px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

const overline2 = {
  fontWeight: 700,
  lineHeight: "12px",
  letterSpacing: "2.5px",
  fontFamily: PRIMARY_FONT,
  fontSize: "10px",
};

const button1 = {
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.3px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const button2 = {
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: "0.32px",
  fontFamily: PRIMARY_FONT,
  fontSize: "14px",
};

const button3 = {
  fontWeight: 700,
  lineHeight: "16px",
  letterSpacing: "0.35px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

export const typographyStyles: Typography = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  sh1,
  sh2,
  sh3,
  sh4,
  body1,
  body2,
  body3,
  body4,
  small1,
  small2,
  small3,
  small4,
  caption1,
  caption2,
  overline1,
  overline2,
  button1,
  button2,
  button3,
};
