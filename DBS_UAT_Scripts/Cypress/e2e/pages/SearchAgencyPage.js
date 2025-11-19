import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class SearchAgencyPage {
  constructor(locators) {
    this.locators = locators;
  }

 SearchAgencyTestPage_01(){
  
   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Approved");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Approved').should('be.visible');
  cy.wait(2000);


}

SearchAgencyTestPage_02(){

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Approved With Deferrals");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Approved With Deferrals').should('be.visible');
  cy.wait(2000);
  
}

SearchAgencyTestPage_03(){
  
   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("ContractExpired");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('ContractExpired').should('be.visible');
  cy.wait(2000);
}

SearchAgencyTestPage_04(){
  
   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Disabled");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Disabled').should('be.visible');
  cy.wait(2000);
}

SearchAgencyTestPage_05(){
  
   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Pending Approval");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Pending Approval').should('be.visible');
  cy.wait(2000);
}

SearchAgencyTestPage_06(){

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Pending Approval With Deferrals");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Pending Approval With Deferrals').should('be.visible');
  cy.wait(2000);
  
}

SearchAgencyTestPage_07(){
  
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Rejected");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Rejected').should('be.visible');
  cy.wait(2000);
}

SearchAgencyTestPage_08(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Saved As Draft");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Saved As Draft').should('be.visible');
  cy.wait(2000);
  
}

SearchAgencyTestPage_09(){
  
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Agencyname).type("Arun Arun");
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Approved");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.get('[role="alert"]').should('contain.text', 'No Results Found!');
  cy.wait(2000);
}

SearchAgencyTestPage_10(){
  
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Agencyname).type("test$%one");
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Approved");
  cy.wait(2000);
   cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.get('[role="alert"]').should('contain.text', 'No Results Found!');
  cy.wait(2000);
}

SearchAgencyTestPage_11(){

cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.ClickOn_NextPage).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Firstpage).click();
  cy.wait(2000);
}

SearchAgencyTestPage_12(){

  
  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgencyEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagency).click();
  cy.wait(2000);
   cy.get(this.locators.selectagencysts).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_Submit_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.SelectPAge_count).select("50");
  cy.wait(2000);

}








}

export default SearchAgencyPage;
