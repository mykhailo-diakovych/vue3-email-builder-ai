module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "vue/require-v-for-key": "error",
    "vue/no-unused-vars": "error",
    "vue/no-mutating-props": "error",
    "vue/no-multi-spaces": "error",
    "vue/no-v-text-v-html-on-component": "off"
  },
};
