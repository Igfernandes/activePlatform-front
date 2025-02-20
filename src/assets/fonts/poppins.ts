import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/poppins/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      weight: "100",
      style: "italic",
      path: "../../../public/fonts/poppins/Poppins-ThinItalic.ttf",
    },
    {
      weight: "200",
      style: "normal",
      path: "../../../public/fonts/poppins/Poppins-ExtraLight.ttf",
    },
    {
      weight: "200",
      style: "italic",
      path: "../../../public/fonts/poppins/Poppins-ExtraLightItalic.ttf",
    },
    {
      weight: "300",
      style: "normal",
      path: "../../../public/fonts/poppins/Poppins-Light.ttf",
    },
    {
      weight: "300",
      style: "italic",
      path: "../../../public/fonts/poppins/Poppins-LightItalic.ttf",
    },
    {
        weight: "400",
        style: "normal",
        path: "../../../public/fonts/poppins/Poppins-Regular.ttf",
    },
    {
        weight: "500",
        style: "normal",
        path: "../../../public/fonts/poppins/Poppins-Medium.ttf",
    },
    {
        weight: "500",
        style: "italic",
        path: "../../../public/fonts/poppins/Poppins-MediumItalic.ttf",
    },
    {
        weight: "600",
        style: "normal",
        path: "../../../public/fonts/poppins/Poppins-SemiBold.ttf",
    },
    {
        weight: "600",
        style: "italic",
        path: "../../../public/fonts/poppins/Poppins-SemiBoldItalic.ttf",
    },
    {
        weight: "700",
        style: "normal",
        path: "../../../public/fonts/poppins/Poppins-Bold.ttf",
    },
    {
        weight: "700",
        style: "italic",
        path: "../../../public/fonts/poppins/Poppins-BoldItalic.ttf",
    },
    {
        weight: "800",
        style: "normal",
        path: "../../../public/fonts/poppins/Poppins-ExtraBold.ttf",
    },
    {
        weight: "800",
        style: "italic",
        path: "../../../public/fonts/poppins/Poppins-ExtraBoldItalic.ttf",
    },
    {
        weight: "900",
        style: "normal",
        path: "../../../public/fonts/poppins/Poppins-Black.ttf",
    },
    {
        weight: "900",
        style: "italic",
        path: "../../../public/fonts/poppins/Poppins-BlackItalic.ttf",
    },
  ],
  variable: '--font-poppins'
});
