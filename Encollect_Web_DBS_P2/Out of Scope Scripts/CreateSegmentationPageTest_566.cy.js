import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CreateSegmentationPage from '../pages/CreateSegmentationPage';


describe('CreateSegmentation - Create Segmentation', () => {
    let loginPage;
    let createsegmentationPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('CreateSegmentationPage').then(locators => {  
            createsegmentationPage = new CreateSegmentationPage(locators); 
        });
    });

    it('Create Segmentation - TC_ID_566 - Create segmentation with Current DPD', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                createsegmentationPage.SegmentationModule();
               //createsegmentationPage.CreateSegmentationWithCustomerPersona564(); 
                //createsegmentationPage.CreateSegmentationWithCustomerPersona565();
                createsegmentationPage.CreateSegmentationWithCurrentDPD566(); 
                //loginPage.logout();        
            });
        });
    });