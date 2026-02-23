import './commands'
import 'cypress-mochawesome-reporter/register'
import '@shelex/cypress-allure-plugin'

Cypress.on('window:load', (win) => {
  cy.get('body').then(($body) => {
    if ($body.find('button:contains("I Agree")').length) {
      cy.contains('button', 'I Agree').click({ force: true });
    }
  });
});