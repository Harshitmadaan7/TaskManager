describe("TaskManager E2E - Home to Login", () => {
  it("loads Home page and navigates to Login", () => {
    cy.visit("http://localhost:3000/");
    cy.contains(/Welcome/i).should("be.visible"); 
    cy.contains(/login/i).click();
    cy.url().should("include", "/login");
    cy.get("input[type='email']").should("be.visible");
    cy.get("input[type='password']").should("be.visible");
  });
});
