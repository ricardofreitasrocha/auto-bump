/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["develop"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
  ],
};