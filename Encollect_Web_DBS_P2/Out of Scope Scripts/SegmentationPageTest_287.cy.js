import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SegmentationPage from '../pages/SegmentationPage';


describe('Segmentation - Compare Segmentation', () => {
    let loginPage;
    let segmentationPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('SegmentationPage').then(locators => {  
            segmentationPage = new SegmentationPage(locators); 
        });
    });

    it('Segmentation - TC_ID_287 - To check the manual execution count in compare segmentation after simulate', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                segmentationPage.SegmentationModule1();
                segmentationPage.CompareSequence287();     
                //loginPage.logout();
            });
        });
    });