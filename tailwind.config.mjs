export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#171717',
        graphite: '#2b2d31',
        tfgRed: '#6c2c84',
        foschini: '#6c2c84',
        pearl: '#f7f4ef',
        mist: '#edf2f5',
        ciGrey: '#58595b',
        ciSage: '#89ac8f',
        ciOlive: '#bbb76d',
        ciMustard: '#d9b84f',
        ciLavender: '#a1859c',
        ciLilac: '#8086a7',
        ciTeal: '#99bccb',
        sage: '#e7eee8',
        gold: '#d9b84f',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(23, 23, 23, 0.08)',
      },
    },
  },
  plugins: [],
};
