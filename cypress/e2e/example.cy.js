describe('Home Page', () => {
  it('should load the home page and display the correct content', () => {
    // Visit the home page
    cy.visit('http://localhost:3000/');

    // Check if the expected content is on the page
    cy.contains('Hello, World!').should('exist');
  });
});
