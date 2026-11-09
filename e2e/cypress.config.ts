const { nxE2EPreset } = require('@nx/cypress/plugins/cypress-preset');
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: process.env['CI']
          ? 'npx nx run enterprise-angular-nx-monorepo:serve-static'
          : 'npx nx run enterprise-angular-nx-monorepo:serve',
        production: 'npx nx run enterprise-angular-nx-monorepo:serve-static',
      },
      ciWebServerCommand:
        'npx nx run enterprise-angular-nx-monorepo:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
