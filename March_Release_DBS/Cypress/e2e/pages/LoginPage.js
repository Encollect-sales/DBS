import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
 
class LoginPage {
  constructor(locators) {
    this.locators = locators;
  }
 
  visit() {

    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
   
    getBaseUrl().then((baseUrl) => {
      console.log('Visiting URL:', baseUrl);
      cy.visit(baseUrl);
    });
  }
 
  fillcompanyname(Companyname) {
    //cy.get(this.locators.companynameInput).type(Companyname);
    cy.get(this.locators.companynameInput).type("ENCollect");
    cy.wait(2000);
  }
 
  Clikcompanyname() {
   
    cy.get(this.locators.ClickonCompanyName).click();
    cy.wait(2000);
  }

  selectradio1(){
  cy.wait(2000);
   cy.get(this.locators.selectradio).each(($el) => {
  cy.wrap($el).click({ force: true });
});

cy.wait(2000);

  }

  selectradio2(){
 
    cy.wait(1000);
    cy.get(this.locators.selectradio_agency).click({force: true});
    cy.wait(1000);


  }
 
  fillUsername(email) {
    
    cy.get(this.locators.usernameInput).type(email);
    cy.wait(2000);
  }
 
  fillPassword(password) {
    
    cy.get(this.locators.passwordInput).type(password);
  }
 
  submit() {
    cy.wait(2000);
    cy.get(this.locators.signinButton).click();
    cy.wait(4000);
  }
 
  // verifyLoginSuccess() {
  //   return cy.get(this.locators.dashboard).then(() => {
  //   });
  // }
 
  login(Companyname, email, password) {
   
      this.visit();
      // this.fillcompanyname(Companyname);
      // this.Clikcompanyname();
      this.selectradio1();
      this.fillUsername(email);
      this.fillPassword(password);
      this.submit();
      cy.wait(3000);
      // this.verifyLoginSuccess();
  }

 



}
 
export default LoginPage;