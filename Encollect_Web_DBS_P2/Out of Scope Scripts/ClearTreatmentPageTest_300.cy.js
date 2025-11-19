import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ClearTreatmentPage from '../pages/ClearTreatmentPage';



describe('Clear Treatment - Clear Treatment', () => {
    let loginPage;
    let cleartreatmentPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('ClearTreatmentPage').then(locators => {  
            cleartreatmentPage = new ClearTreatmentPage(locators); 
        });
    });

    it('Clear Treatment - TC_ID_300 - Clear the treatment  by selecting the treatment name in Auto predictive text', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(10000);
                cleartreatmentPage.segmentationModule();
                cleartreatmentPage.ClearTreatment300();
                //loginPage.logout();
                     
            });
        });
    });