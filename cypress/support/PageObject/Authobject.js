class AuthObject {
  username_login_input(username = "Heath93") {
    return cy.get("#username").type(username);
  }

  password_login_input(password = "s3cret") {
    return cy.get("#password").type(password);
  }
  username_login() {
    return cy.get("#username");
  }

  password_login() {
    return cy.get("#password");
  }

  login_button_click() {
    return cy.get(".MuiButton-label").click();
  }

  login_button() {
    return cy.get(".MuiButton-label");
  }

  profile() {
    return cy.get(".MuiTypography-h6");
  }

  remember_me_checkbox() {
    return cy.get(".PrivateSwitchBase-input-14");
  }

  generate_signup_Data() {
    const uniqueSuffix = Date.now();
    return {
      firstName_unique: `Test${uniqueSuffix}`,
      lastName: `Test`,
      username_unique: `Test${uniqueSuffix}`,
      password: "s3cret",
    };
  }

  signup_button() {
    return cy.get('[data-test="signup"]');
  }

  first_name_signup() {
    return cy.get("#firstName");
  }

  last_name_signup() {
    return cy.get("#lastName");
  }

  username_signup() {
    return cy.get("#username");
  }

  password_signup() {
    return cy.get("#password");
  }
  password_confirm_signup() {
    return cy.get("#confirmPassword");
  }

  signup_button() {
    return cy.get('[data-test="signup-submit"]');
  }
}

export default AuthObject;
