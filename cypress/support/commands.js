import AuthObject from "./PageObject/Authobject";
const Auth = new AuthObject();

Cypress.Commands.add("login", (username = "Heath93", password = "s3cret") => {
  Auth.username_login().type(username);
  Auth.password_login().type(password);
  cy.get(".MuiButton-label").click();
});

Cypress.Commands.add("logout", () => {
  Auth.username_login().type(username);
  Auth.password_login().type(password);
  cy.get(".MuiButton-label").click();
  cy.get('[data-test="sidenav-signout"]').click();
});

Cypress.Commands.add(
  "signup",
  (
    first_name,
    last_name = "password",
    email = "heath.brown@example.com",
    username = "Heath93",
    password = "s3cret"
  ) => {
    Auth.first_name_input().type(first_name);
    Auth.last_name_input().type(last_name);
    Auth.email_input().type(email);
    Auth.username_signup().type(username);
    Auth.password_signup().type(password);
    Auth.password_confirm_signup().type(password);
    Auth.signup_button().click();
  }
);

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
