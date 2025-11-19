import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SegmentationPage from '../pages/SegmentationPage';


describe('Segmentation - Search Segmentation', () => {
    let loginPage;
    let segmentationPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('CreateSegmentationPage').then(locators => {  
            segmentationPage = new SegmentationPage(locators); 
        });
    });

    it('Segmentation - TC_ID_285 - To Check the manual execution happening for the created segmentation', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                segmentationPage.SegmentationModule();
                segmentationPage.SearchSegmentation285(); 
                //loginPage.logout();    
            });
        });
    });