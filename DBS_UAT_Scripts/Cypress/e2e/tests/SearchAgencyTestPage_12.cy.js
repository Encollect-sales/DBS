import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';

import SearchAgencyPage from '../pages/SearchAgencyPage';

describe('Search Agency - If the user wants to see more than 5 agents in the result grid, user should be able to click on "showing Agents" dropdown  and select anyone of the dropdown value.', () => {
    let loginPage;
    let searchagencypage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Searchagency').then(locators => {  
            searchagencypage = new SearchAgencyPage(locators); 
        });
    });

    it('Agency Empanelment - Search Agency - TC_ID_12', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                searchagencypage.SearchAgencyTestPage_12();
            
            });
        });
    });