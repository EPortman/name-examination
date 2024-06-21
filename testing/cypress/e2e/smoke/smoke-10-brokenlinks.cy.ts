describe('Check for Broken Static Links', () => {
  beforeEach(() => {
    cy.setid('default')
    cy.login().then(() => {
      cy.log('Logged in successfully');
    })
  })

  afterEach(() => {
    cy.logout().then(() => {
      cy.log('Logged out successfully');
    })
  })

  it('Check All Static Links', () => {
    // Debugging the initial state of the application
    cy.log('Starting test for static links');
    cy.document().then(doc => {
      cy.log('Document state:', doc.readyState);
      cy.screenshot('before-checking-links');
    });

    // Iterate through all the links on the page
    // If the link has a specified URL, check if the link is operational
    cy.linkChecker().then(() => {
      cy.log('First link check completed');
    })

    // Navigate to the next tab
    cy.contains('a', 'Examine Names').click().then(() => {
      cy.log('Clicked on Examine Names');
      cy.url().should('include', '/examine').then(url => {
        cy.log('Current URL:', url);
      });
    });
    cy.linkChecker().then(() => {
      cy.log('Second link check completed after Examine Names');
      cy.screenshot('after-examine-names');
    });

    // Navigate to the next tab
    cy.contains('a', 'Search').click().then(() => {
      cy.log('Clicked on Search');
      cy.url().should('include', '/search').then(url => {
        cy.log('Current URL:', url);
      });
    });
    cy.linkChecker().then(() => {
      cy.log('Third link check completed after Search');
      cy.screenshot('after-search');
    });
  })
})
