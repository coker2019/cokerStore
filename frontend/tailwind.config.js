// tailwind.config.js
import flowbitePlugin from  "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
}
