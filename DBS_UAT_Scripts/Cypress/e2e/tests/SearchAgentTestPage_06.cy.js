import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';

import SearchAgentPage from '../pages/SearchAgentPage';

describe('Search Agent - User should be able to search saved as draft agents by selecting saved as draft status under empanelment approval status', () => {
    let loginPage;
    let searchagentpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Searchagent').then(locators => {  
            searchagentpage = new SearchAgentPage(locators); 
        });
    });

    it('Agent Empanelment - Search Agent - TC_ID_06', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                searchagentpage.SearchAgentTestPage_06();
            
            });
        });
    });