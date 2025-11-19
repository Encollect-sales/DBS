import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TreatmentPage from '../pages/TreatmentPage';
require ('@4tw/cypress-drag-drop')


describe('Treatment - Create Treatment with Qualifying Condition Applicable', () => {
    let loginPage;
    let treatmentPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('TreatmentPage').then(locators => {  
            treatmentPage = new TreatmentPage(locators); 
        });
    });

    it('Treatment - TC_ID_586 - 1. Create treatment Step 1 with CCM for Whats App 2.Now try to add Treatment step 2 CCM for SMS >>Now try to use the Qualifying condition applicable feature >>Click on YES', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(3000);
                treatmentPage.segmentationModule();
                treatmentPage.CreateTreatmentQualifing586();
                
                         
            });
        });
    });