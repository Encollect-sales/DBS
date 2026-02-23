export const getBaseUrl = () => {
  // Get the environment variable (defaults to 'QA' if not specified)
  const env = Cypress.env('ENV') || 'QA'; // Default to 'QA' if ENV is not set
 
  // Load the fixture and modify the base URL dynamically based on the environment
  return cy.fixture('config').then((config) => {
    // Modify the baseUrl based on the environment (QA or UAT)
    if (env === 'UAT') {
      config.baseUrl = 'https://enttest.sumeruentiger.com/dbsscb/web/#/login?tenantid=2'; // UAT URL
    } else {
      config.baseUrl = 'https://enttest.sumeruentiger.com/dbsscb/web/#/login?tenantid=2'; // QA URL
    }
   
    return config.baseUrl;
  });
};
