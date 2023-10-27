module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "no-inner-declarations": "off",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: {
          // Specify a parser for each lang.
          ts: "@typescript-eslint/parser",
          js: "espree",
          typescript: "@typescript-eslint/parser",
        },
      },
    },
  ],
  settings: {
    svelte: {
      ignoreWarnings: [
        "@typescript-eslint/no-unsafe-assignment",
        "@typescript-eslint/no-unsafe-member-access",
      ],
      compileOptions: {
        postcss: {
          configFilePath: "./path/to/my/postcss.config.js",
        },
      },
      kit: {
        files: {
          routes: "src/routes",
        },
      },
    },
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["node_modules", "*.js", "dist", "dist"],
};
