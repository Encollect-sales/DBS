import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SegmentationPage from '../pages/SegmentationPage';


describe('View and Edit Segmentation - View and Edit Segmentation', () => {
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

    it('View and Edit Segmentation - TC_ID_568 - View and edit Segmentation', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                segmentationPage.SegmentationModule();
                segmentationPage.createsegmentation568(); 
                //loginPage.logout();    
            });
        });
    });