import globals from "globals";

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  },
  {
    files: ['src/scripts/**/*.js'],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  },
  {
    files: ['components/**/*.js'],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  },
];
