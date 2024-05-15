/// <reference types="cypress" />

import AuthObject from "../../support/PageObject/Authobject"; // Corrected the casing to match the file system
const Auth = new AuthObject();

describe("Verify User Successfully Login", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("With Valid Username & Password", () => {
    cy.login();
    Auth.profile().should("be.visible");
  });

  it("Keep to logged in after 30 days", () => {
    cy.get(".PrivateSwitchBase-input-14").click();
    cy.login();
    Auth.profile().should("be.visible");
    cy.getCookie("connect.sid").should("have.property", "expiry");
  });
});

describe("Verify User Failed to Login", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("With Invalid Password", () => {
    cy.login("Heath93", "BBBB");
    cy.get(".MuiTypography-h6").should("not.exist");
  });

  it("With Incorrect Case Username", () => {
    cy.login("HEATH93", "s3cret");
    cy.get(".MuiTypography-h6").should("not.exist");
  });

  it("With Directly Accessing the Homepage", () => {
    cy.visit("/");
    cy.get(".MuiTypography-h6").should("not.exist");
  });
});
