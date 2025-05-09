import { defineConfig, globalIgnores} from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import css from "@eslint/css";


export default defineConfig([
  globalIgnores(["dist/*", "package-lock.json", "webpack.config.*"]),
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  {
		rules: {
			"no-restricted-imports": "off",
		},
	},
]);