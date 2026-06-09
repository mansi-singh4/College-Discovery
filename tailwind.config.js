/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#e0e3e5",
        "on-primary": "#ffffff",
        primary: "#000000",
        "secondary-container": "#645efb",
        secondary: "#4b41e1",
        background: "#f7f9fb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "surface-container": "#eceef0",
        "surface-container-high": "#e6e8ea",
        "on-surface": "#191c1e",
        "on-surface-variant": "#45464d",
        outline: "#76777d",
        "outline-variant": "#c6c6cd",
        surface: "#f7f9fb",
      },

      spacing: {
        "margin-mobile": "16px",
        "stack-lg": "32px",
        "margin-desktop": "32px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "container-max": "1280px",
        gutter: "24px",
      },

      fontSize: {
        "body-md": [
          "16px",
          { lineHeight: "24px", fontWeight: "400" },
        ],
        "body-sm": [
          "14px",
          { lineHeight: "20px", fontWeight: "400" },
        ],
        "headline-md": [
          "24px",
          { lineHeight: "32px", fontWeight: "600" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "40px", fontWeight: "700" },
        ],
        "headline-xl": [
          "48px",
          { lineHeight: "56px", fontWeight: "700" },
        ],
        "label-md": [
          "14px",
          { lineHeight: "20px", fontWeight: "600" },
        ],
        "label-sm": [
          "12px",
          { lineHeight: "16px", fontWeight: "500" },
        ],
      },

      fontFamily: {
        "body-md": ["Inter"],
        "body-sm": ["Inter"],
        "headline-md": ["Inter"],
        "headline-lg": ["Inter"],
        "headline-xl": ["Inter"],
        "label-md": ["Inter"],
        "label-sm": ["Inter"],
      },
    },
  },
  plugins: [],
};