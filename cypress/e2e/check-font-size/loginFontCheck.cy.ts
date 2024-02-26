/// <reference types="cypress" />
// Press Shift+F10 or click the green icon in the gutter to run all tests
import SignInPage from "../../support/PageObjects/SignInPage";
describe('check font size', () => {
  const signInPage =new SignInPage();
  const validationFS = '12px';
  const labelFS = '16px';

  beforeEach(() => {
      cy.visit('https://connecttestingweb-lrsb4.ondigitalocean.app/')
      cy.fixture('admin').then(function (user) {
      this.user = user;
    })
  })

  it('check email label font size', () => {
    signInPage.getEmailLabel().should('have.css', 'font-size', labelFS)
    })

    it('check email validation font size', () => {
        signInPage.getEmail().click()
        signInPage.getPassword().click()
        signInPage.getEmailValidation().should('have.css', 'font-size', validationFS)
    })
})
// Hint: Press Double Shift to search everywhere for classes, files, tests, actions, and settings.
