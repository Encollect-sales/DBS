//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetailsPage from '../pages/AccountDetailsPage';


describe('Segmentation - Compare Segmentation', () => {
    let loginPage;
    let accountdetailsPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('AccountDetailsPage').then(locators => {  
            accountdetailsPage = new AccountDetailsPage(locators); 
        });
    });

    it('Segmentation - TC_ID_288 - To check the segmentation stamping is happened for execution', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(3000);
                accountdetailsPage.CompareSegmentation88();
                //loginPage.logout();        
            });
        });
    });