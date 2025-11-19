import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class SearchAgentPage {
  constructor(locators) {
    this.locators = locators;
  }

 SearchAgentTestPage_01(){

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAgentNAme).type("dbstesteight ABE Arun");
  cy.wait(2000);
  cy.get(this.locators.SelectAgentStatus).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click();
  cy.wait(2000);
  cy.get('[role="alert"]').should('contain.text', 'No Results Found!');
  cy.wait(2000);

}

SearchAgentTestPage_02(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAgentNAme).type("dbstesteight AB&%#E");
  cy.wait(2000);
  cy.get(this.locators.SelectAgentStatus).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click();
  cy.wait(2000);
  cy.get('[role="alert"]').should('contain.text', 'No Results Found!');
  cy.wait(2000);
}

SearchAgentTestPage_03(){

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectAgentStatus).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
}

SearchAgentTestPage_04(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectAgentStatus).select("Disabled");
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);

  
}

SearchAgentTestPage_05(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectAgentStatus).select("Pending Approval");
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  
}

SearchAgentTestPage_06(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectAgentStatus).select("Saved as Draft");
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);

}

SearchAgentTestPage_07(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectAgentStatus).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.ClickOn_NextPage).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Firstpage).click();
  cy.wait(2000);
  
}

SearchAgentTestPage_08(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.SelectAgentStatus).select("Approved");
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click();
  cy.wait(2000);
  cy.contains("Search Result").should('be.visible');
  cy.wait(2000);
  cy.get(this.locators.SelectPAge_count).select("50");
  cy.wait(2000);
}

SearchAgentTestPage_09(){

  cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.Click_Search_Btn).click({force: true});
  cy.wait(2000);
  cy.get('[role="alert"]').should('contain.text', 'lease enter the mandatory field');
  cy.wait(2000);

}

SearchAgentTestPage_10(){

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAgentNAme).type("d");
  cy.wait(2000);
  cy.contains('Agent name must be at least 2 characters long.').should('be.visible');
  cy.wait(2000);
  
}

SearchAgentTestPage_11(){   

   cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAgencyName).type("Aru$%#");
  cy.wait(2000);
  cy.contains('Please enter characters only.').should('be.visible');
  cy.wait(2000);

}

SearchAgentTestPage_12(){  

    cy.get(this.locators.clickonusermanagement).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
  cy.wait(2000);
  cy.get(this.locators.Searchagent).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAgent_phno).type("8674");
  cy.wait(2000);
  cy.contains('Enter valid 10 Agent Phone Number').should('be.visible');
  cy.wait(2000);


}



}

export default SearchAgentPage;
