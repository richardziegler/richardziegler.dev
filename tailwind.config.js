module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    maxWidth: {
      '1/5': '20%'
    },
    extend: {
      cursor: {
        'fancy': 'url(hand.cur), pointer',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
    },
  },
  plugins: [],
};
