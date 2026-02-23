import 'cypress-file-upload';

Cypress.Commands.add('dismissAgreePopup', () => {
  cy.get('body').then(($body) => {
    const btn = $body.find('button:contains("I Agree")');

    if (btn.length) {
      cy.log('Popup detected - Clicking I Agree');
      cy.wrap(btn).click({ force: true });
    }
  });
});