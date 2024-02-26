/// <reference types="cypress" />
// Press Shift+F10 or click the green icon in the gutter to run all tests
import AccountPage from "../../support/PageObjects/AccountPage";
describe('check font size', () => {
  const accountPage =new AccountPage();
  before(function () {
    // "this" points at the test context object
  })
  beforeEach(function () {
    cy.fixture('tooltips.json').as('Account')
    cy.loginAdmin()
    cy.visit('https://connecttestingweb-lrsb4.ondigitalocean.app/')
  })
  it('account name tooltip', function () {
    accountPage.getAddAccountButton().click()
    accountPage.getAccountNameInfo().click()
    accountPage.getTooltip().should('contain.text', this.Account.account_name)
  })

  it('timezone tooltip', function () {
    accountPage.getAddAccountButton().click()
    accountPage.getTimeZoneInfo().click()
    accountPage.getTooltip().should('contain.text', this.Account.timezone)
  })

  it('valid till tooltip', function () {
    accountPage.getAddAccountButton().click()
    accountPage.getValidityInfo().click()
    accountPage.getTooltip().should('contain.text', this.Account.valid_upto)
  })
})