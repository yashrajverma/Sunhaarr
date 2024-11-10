/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryNavy: "#0A2239", // Primary navy color used for header, footer, and text
        accentGold: "#D4AF37", // Gold accent color for highlights and buttons
        backgroundBeige: "#F8F4EF", // Beige background color for main content sections
        textGray: "#4A4A4A", // Dark gray for secondary text information
        lightGray: "#F0F0F0", // Light gray for background or subtle contrast elements
        softPeach: "#FFF5E5", // Soft peach for testimonial or highlighted sections
        badgeRed: "#C1272D", // Red for discount badges or promotional labels
        white: "#FFFFFF", // White for text/icons on dark backgrounds
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
