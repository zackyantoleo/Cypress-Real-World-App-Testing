export default class HomepageObject {
  get_started_popup() {
    return cy.get('[data-test="user-onboarding-dialog-title"]');
  }
}
