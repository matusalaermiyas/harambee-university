/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Manrope"],
      },
      colors: {
        primaryColor: "#f9a825",
        wrapperBorderColor: "#E9E9E9",
        inputBorderColor: "#E5E7EB",
        textInputColor: "#6B7280",
        redButtonColor: "#EB5757",
        lightGreyTextColor: "#4E5876",
        modalCloseBackgroundColor: "#80889E",
      },
    },
  },
  plugins: [],
};
