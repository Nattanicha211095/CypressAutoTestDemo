describe('Login Test', () => {
  const baseUrl = 'http://183.90.168.49:15085';

  it('Successfully logs in with valid username', () => {
    cy.visit(`${baseUrl}/LoginUser`);

    // Enter username (using the v-model binding)
    cy.get('input[placeholder="Username"]').type('1709700163549'); // Update this selector if necessary

    // Click the login button
    cy.get('button[type=submit]').click();

    // Verify that the login was successful
    cy.url().should('include', '/ListDataView'); // Change this to the URL you expect after login
    cy.contains('Welcome').should('be.visible'); // Change this to any element that should be visible after login
  });

  it('Fails to log in with invalid username', () => {
    cy.visit(`${baseUrl}/LoginUser`);

    // Enter invalid username (using the v-model binding)
    cy.get('input[placeholder="Username"]').type('1709700163549'); // Update this selector if necessary

    // Click the login button
    cy.get('button[type=submit]').click();

    // Verify that the login failed
    cy.contains('การเข้าใช้งานไม่ถูกต้อง').should('be.visible'); // Change this to the actual error message
  });
});
