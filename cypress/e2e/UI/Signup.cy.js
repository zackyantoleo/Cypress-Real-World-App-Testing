/// <reference types="cypress" />

import AuthObject from "../../support/PageObject/Authobject";
import HomepageObject from "../../support/PageObject/Homepage";
const Auth = new AuthObject();
const Homepage = new HomepageObject();

const { firstName_unique, lastName, username_unique, password } =
  Auth.generate_signup_Data();

describe("Verify User Successfully Signup", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("With Valid Signup data", () => {
    Auth.first_name_signup().type(firstName_unique);
    Auth.last_name_signup().type(lastName);
    Auth.username_signup().type(username_unique);
    Auth.password_signup().type(password);
    Auth.password_confirm_signup().type(password);
    Auth.signup_button().click();
    cy.login(username_unique, password);
    Homepage.get_started_popup().should("be.visible");
  });
});

//Test1715727816315

describe("Verify User Failed to Signup", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("With Empty First name", () => {
    Auth.last_name_signup().type(lastName);
    Auth.username_signup().type(username_unique);
    Auth.password_signup().type(password);
    Auth.password_confirm_signup().type(password);
    Auth.signup_button().should("be.disabled");
  });

  it("With Empty Last name", () => {
    Auth.first_name_signup().type(firstName_unique);
    Auth.username_signup().type(username_unique);
    Auth.password_signup().type(password);
    Auth.password_confirm_signup().type(password);
    Auth.signup_button().should("be.disabled");
  });

  it("With Empty Username", () => {
    Auth.first_name_signup().type(firstName_unique);
    Auth.last_name_signup().type(lastName);
    Auth.password_signup().type(password);
    Auth.password_confirm_signup().type(password);
    Auth.signup_button().should("be.disabled");
  });

  it("With Empty Password", () => {
    Auth.first_name_signup().type(firstName_unique);
    Auth.last_name_signup().type(lastName);
    Auth.username_signup().type(username_unique);
    Auth.password_confirm_signup().type(password);
    Auth.signup_button().should("be.disabled");
  });

  it("With Empty Password Confirm", () => {
    Auth.first_name_signup().type(firstName_unique);
    Auth.last_name_signup().type(lastName);
    Auth.username_signup().type(username_unique);
    Auth.password_signup().type(password);
    Auth.signup_button().should("be.disabled");
  });

  it("With Registered Username", () => {
    Auth.first_name_signup().type(firstName_unique);
    Auth.last_name_signup().type(lastName);
    Auth.username_signup().type(username_unique);
    Auth.password_signup().type(password);
    Auth.password_confirm_signup().type(password);
    Auth.signup_button().click();
    Auth.login_button().should("be.not.exist");
  });
});
