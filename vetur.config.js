const fs = require('fs')
const path = require('path')

const packages = fs.readdirSync(
  path.resolve(__dirname, 'packages/@vuepress-theme-mix')
)

module.exports = {
  settings: {
    'vetur.validation.template': false,
    'vetur.useWorkspaceDependencies': true,
  },
  projects: [
    './docs',
    './packages/vuepress-theme-mix',
    ...packages.map((item) => `./packages/@vuepress-theme-mix/${item}`),
  ],
}
