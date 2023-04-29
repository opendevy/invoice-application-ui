const spacings = {};
for (let i = -100; i < 500; i += 0.5) {
  spacings[i] = `${i / 4}rem`;
}

const opacities = {};
for (let i = 0; i < 100; i ++) {
  opacities[i] = (i * 0.01).toFixed(2);
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
    },
    screens: {
      xxs: '400px',
      xs: '556px',
      sm: '800px',
      md: '1024px',
      lg: '1280px',
      xl: '1400px',
    },
    fontSize: {
      xs: '0.75rem',
      ts: '0.8125rem',
      sm: '0.875rem',
      md: '0.9375rem',
      base: '1rem',
      lg: '1.125rem',
      '1.5lg': '1.1875rem',
      xl: '1.25rem',
      '1.25xl': '1.3125rem',
      '1.5xl': '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '3.5xl': '1.875rem',
      '3.6xl': '2rem',
      '3.7xl': '2.125rem',
      '4xl': '2.25rem',
      '5xl': '2.6875rem',
      '6xl': '3.75rem',
    },
    extend: {
      fontFamily: {
        'title': ['sans-serif'],
        'body': ['serif']
      },
      colors: {
        primary: {
          DEFAULT: '#1081fc',
        },
        secondary: {

        },
        light: {

        },
      },
      backgroundColor: () => ({}),
      backgroundImage: {},
      backgroundPosition: {},
      boxShadow: {},
      width: {
        ...spacings,
      },
      height: {
        ...spacings,
      },
      minWidth: spacings,
      minHeight: spacings,
      maxWidth: spacings,
      maxHeight: spacings,
      padding: spacings,
      margin: spacings,
      spacing: spacings,
      opacity: opacities,
    },
  },
  plugins: [],
};
