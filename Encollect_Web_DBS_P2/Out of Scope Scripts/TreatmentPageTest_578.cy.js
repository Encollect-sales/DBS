import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TreatmentPage from '../pages/TreatmentPage';
require ('@4tw/cypress-drag-drop')


describe('Treatment - Create Treatment', () => {
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

    it('Creat Treatment - TC_ID_578 - To check the treatment creating by Communication to customer', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(3000);
                treatmentPage.segmentationModule();
                treatmentPage.CreateTreatment578();
               
                         
            });
        });
    });