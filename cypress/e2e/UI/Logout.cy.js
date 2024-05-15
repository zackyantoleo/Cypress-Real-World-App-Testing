/// <reference types="cypress" />

import AuthObject from "../../support/PageObject/Authobject";
const Auth = new AuthObject();

describe("Verify User Successfully Logout", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("With Click the Logout Button", () => {
    cy.login();
    cy.get('[data-test="sidenav-signout"]').click();
    Auth.login_button().should("be.visible");
  });
});

describe("Verify User Failed to Logout", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("With Directly Navigate to Login Page", () => {
    cy.login();
    cy.visit("/signin");
    Auth.login_button().should("be.not.exist");
  });
});
