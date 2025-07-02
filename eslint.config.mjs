import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // turn off specific Next.js script warnings:
  {
    rules: {
      // disables: Synchronous scripts should not be used
      "@next/next/no-sync-scripts": "off",
      // disables: beforeInteractive strategy outside of _document.js
      "@next/next/no-before-interactive-script-outside-document": "off",
      // if you still need to silence the comment-in-JSX linter:
      "react/jsx-no-comment-textnodes": "off",
    },
  },
];

export default eslintConfig;
