import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SegmentationPage from '../pages/SegmentationPage';


describe('Segmentation - Create Segmentation', () => {
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

    it('Segmentation - TC_ID_283 - To check able to create new segmentation and able to view in search result', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                segmentationPage.SegmentationModule();
                segmentationPage.CreateSegmentation283();    
                //loginPage.logout(); 
            });
        });
    });