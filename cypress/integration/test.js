////test 1 --it works

describe('visit all the pages', () => {
  it('page', () => {
    cy.visit('/');
    cy.url().should('include', '/');
    ///login
    cy.visit('/login');
    cy.url().should('include', '/login');
    ///profile
    cy.visit('/profile');
    cy.url().should('include', '/profile');
    ///
    cy.visit('/addvideo');
    cy.url().should('include', '/addvideo');

    cy.visit('/search');
    cy.url().should('include', '/search');
  });
});

//// test 2 --> it works

describe('login', () => {
  it('page', () => {
    ///id="email-input"
    cy.visit('/login');
    cy.get('#email-input')
      .type('nacero7373@luxiu2.com')
      .get('[type=submit]')
      .click();
  });
});

//// test 3 -- it works

describe('search', () => {
  it('page', () => {
    ///id="email-input"
    cy.visit('/search');
    cy.get('form').get('[type=text]').type('Cat').type('{enter}');
  });
});

////test 4

describe('search by filter', () => {
  it('page', () => {
    cy.visit('/search');
    cy.get('form').get('[type=text]').type('Cat').type('{enter}');
    cy.contains('Newest').click().wait(2000);
    cy.contains('Oldest').click();
    // cy.contains
  });
});
