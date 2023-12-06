/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '300px',
        'tab': '426px',
        'desk': '769px'
      },
      colors: {
        'dark-cyan': 'rgb(14, 135, 132)',
        'dark-grey-blue': 'rgb(51, 61, 75)',
        'pale-orange': 'rgb(253, 214, 186)',
        'light-cream': 'rgb(254, 252, 247)',
        'grey': 'rgb(131, 136, 143)'
      },
      backgroundImage: {
        'home-hero-desk': "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        'home-hero-tab' : "url('/assets/home/tablet/image-hero-coffeepress.jpg')",
        'home-hero-mob' : "url('/assets/home/mobile/image-hero-coffeepress.jpg')",
        'about-hero-desk': "url('/assets/about/desktop/image-hero-whitecup.jpg')",
        'about-hero-tab': "url('/assets/about/tablet/image-hero-whitecup.jpg')",
        'about-hero-mob': "url('/assets/about/mobile/image-hero-whitecup.jpg')",
        'quality-desktop': "url('/assets/about/desktop/bg-quality.png')",
        'quality-tab': "url('/assets/about/tablet/bg-quality.png')",
        'quality-mobile': "url('/assets/about/mobile/bg-quality.png')"
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'barlow': ['Barlow', 'sans-serif']
      }
    },

  },
  plugins: [],
}

