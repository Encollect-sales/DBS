import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ClearSegmentationPage from '../pages/ClearSegmentationPage';



describe('ClearSegmentation - Clear Segment', () => {
    let loginPage;
    let clearsegmentationPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('ClearSegmentationPage').then(locators => {  
            clearsegmentationPage = new ClearSegmentationPage(locators); 
        });
    });

    it('Clear Segmentation - TC_ID_299 - Clear the segmentation by selecting the segmentation name in Auto predictive text', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                clearsegmentationPage.segmentationModule();
                clearsegmentationPage.ClearSegment299();
                //loginPage.logout();    
            });
        });
    });