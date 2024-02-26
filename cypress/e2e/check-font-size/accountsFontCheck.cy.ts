/// <reference types="cypress" />
// Press Shift+F10 or click the green icon in the gutter to run all tests
//import SignInPage from "../../support/PageObjects/SignInPage";
import AccountPage from "../../support/PageObjects/AccountPage";
describe('check font size', () => {
  //const signInPage =new SignInPage();
  const accountPage =new AccountPage();
 // const validationFS = '12px';
  //const labelFS = '16px';
  const headerFS = '25px';
    before(function () {
        // "this" points at the test context object
  })
  beforeEach(function () {
      cy.fixture('admin.json').as('user')
      cy.login()
      cy.visit('https://connecttestingweb-lrsb4.ondigitalocean.app/')
  })
    it('check account title font size', function () {
        accountPage.getAccountHeading().should('have.css', 'font-size', headerFS)
    })

    it('check user name', function () {
        accountPage.getUserMenu().click()
        accountPage.getUserName().click()
        accountPage.getUserName().should('have.text', this.user.name)
    })
})
// Hint: Press Double Shift to search everywhere for classes, files, tests, actions, and settings.
