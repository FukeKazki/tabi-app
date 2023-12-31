/** @type {import('prettier').Config} */
export default {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,

  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
