// example theme.js
// import theme from 'mdx-deck/themes'
import { code as theme } from "mdx-deck/themes";
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

let colors = theme.colors;
let css = theme.css;

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  // font: 'Roboto, sans-serif',
  // custom colors
  // font: '"Work Sans", sans-serif',

  // root object
  // css: {
  //   position: 'relative',
  // },

  fontSizes: [
    '0.75rem', '1rem', '1.5rem', '2rem', '3rem'
  ],
  prism: {
    style: okaidia
  },
  h1: {
    fontFamily: '"Work Sans", sans-serif',
    letterSpacing: '0.02em',
    fontWeight: 900
  },
  h2: {
    fontFamily: '"Work Sans", sans-serif',
    letterSpacing: '0.02em',
    fontWeight: 900
  },
  a: {
    textDecoration: 'none',
  },
  strong: {
    fontFamily: '"Work Sans", sans-serif',
  },

  colors: {
    ...colors,
    background: "#1ba9d5",
    text: "#0a0045",
    link: "yellow"
  },
  css: {
    ...css,
    textAlign: "left",

    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '96px',
    }
  },
  transitionDuration: 0
};
