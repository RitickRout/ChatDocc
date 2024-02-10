/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "chatdoc-com-1920x1080-default-bright-gray": "#3d434e",
        "chatdoc-com-1920x1080-default-nero": "#fff",
        "chatdoc-com-1920x1080-default-alto": "#dedede",
        "chatdoc-com-1920x1080-default-big-stone": "#142132",
        "chatdoc-com-1920x1080-default-havelock-blue": "#6576db",
        "chatdoc-com-1920x1080-default-nero-02": "rgba(255, 255, 255, 0)",
        "chatdoc-com-1920x1080-default-tuna": "#3e3f42",
        silver: "rgba(196, 196, 196, 0.09)",
        cornflowerblue: {
          100: "#808ff5",
          200: "rgba(128, 143, 245, 0.09)",
        },
        "chatdoc-com-1920x1080-default-santas-gray": "#9ea0a5",
        "chatdoc-com-1920x1080-default-shuttle-gray": "#6b6c6f",
        "chatdoc-com-1920x1080-default-shark": "#212529",
        "chatdoc-com-1920x1080-default-alabaster": "#fbfbfb",
        "chatdoc-com-1920x1080-default-sandy-brown": "#f2af6d",
        "chatdoc-com-1920x1080-default-havelock-blue-10":
          "rgba(101, 118, 219, 0.1)",
        "chatdoc-com-1920x1080-default-portage": "#9d9df9",
        "chatdoc-com-1920x1080-default-link-water": "#e9eefa",
        "chatdoc-com-1920x1080-default-blue-stone": "#ff6154",
        "chatdoc-com-1920x1080-default-black": "#000",
      },
      spacing: {},
      fontFamily: {
        "chatdoc-com-1920x1080-default-poppins-regular-20": "Poppins",
        "chatdoc-com-1920x1080-default-inter-bold-1244": "Inter",
      },
      borderRadius: {
        "21xl": "40px",
        "80xl": "99px",
        "13xl": "32px",
        "8xs": "5px",
        "11xl": "30px",
        mid: "17px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      lg: "18px",
      "11xl": "30px",
      xs: "12px",
      "31xl": "50px",
      "21xl": "40px",
      "smi-4": "12.4px",
      "6xs": "7px",
      inherit: "inherit",
    },
    screens: {
      mq3000: {
        raw: "screen and (max-width: 3000px)",
      },
      mq2175: {
        raw: "screen and (max-width: 2175px)",
      },
      mq1280: {
        raw: "screen and (max-width: 1300px)",
      },
      mq768: {
        raw: "screen and (max-width: 768px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
