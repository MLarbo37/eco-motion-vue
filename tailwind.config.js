/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "about-background-image":"url('@/assets/about-bg.png')",
          "service-background-image":"url('@/assets/service-background.png')",
          "byd-han":"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/byd-han.jpg')",
          "choose-us-background":"url('@/assets/choose-us-background.png')",
          "electric-vehicle-background":"url('@/assets/electric-vehicle-background.png')",
          "interior-background":"url('@/assets/byd-han.jpg')",
          "charger-background":"url('@/assets/charger6.jpg')",
          "chargers-background":"url('@/assets/chargers-background.png')",
          "bike-background-image":"url('@/assets/bike-background.png')",
          "bikes-image":"url('@/assets/bikes-background-image.png')",
          "bike-vect-image":"url('@/assets/vect-bike.jpg')",
          "power-station-background":"url('@/assets/powerstaionbackground.PNG')",
          "bus-background":"url('@/assets/bus-new.jpg')",
           "ecoflow-background":"url('@/assets/ecoone.webp')",
           "commericial-background":"url('@/assets/beny.jpg')",
           "interior-view-background":"url('@/assets/Interior.jpg')",
      },
      colors:{
        "word":"#667085",
        "heading":"#344054",
        "primary-green":"#13482C",
         "contact-us-primary":"#13482C",
         "address-text-color":"#475467",
         "heading-secondary":"#293056",
         "border-primary":"#D0D5DD",
         "card-background": "rgba(252, 253, 249, 0.7)",
         "footer-primary-color":"#3a3a3a",
         "secondary-color":"#E66C35"
      },

      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1)',
      },
    },  },
  plugins: [],
}

