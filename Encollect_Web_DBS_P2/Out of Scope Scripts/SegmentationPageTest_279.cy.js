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

    it('Segmentation - TC_ID_279 - To Check the user able to create new segmentation by filling all required fields in segmentation details and PBG', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                segmentationPage.SegmentationModule();
                segmentationPage.CreateSegmentation279();  
                //loginPage.logout();   
            });
        });
    });