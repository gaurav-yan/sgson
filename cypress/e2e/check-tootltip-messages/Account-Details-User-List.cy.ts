/// <reference types="Cypress" />
import UserList from "../../support/PageObjects/UserList";
import AccountDetailsPage from "../../support/PageObjects/AccountDetailsPage";
describe('Check User List tooltips', () => {
    const accountDetails= new AccountDetailsPage()
    const userList = new UserList();
    before(function () {
        // "this" points at the test context object
    })
    beforeEach(function () {
        cy.fixture('tooltips.json').as('Tooltip')
        cy.loginClientAdmin()
        cy.visit('https://connecttestingweb-lrsb4.ondigitalocean.app/')
        accountDetails.getUsersTab().click()
    })
    it('Add User screen tooltips', function () {
        userList.getAddUserButton().should('contain.attr','mattooltip', this.Tooltip.AddUser)

        userList.getAddUserButton().click()
        userList.getAccountNameTooltip().click()
        cy.tooltip().should('have.text', this.Tooltip.User_AccountName).clickOutside()
        userList.getEmailTooltip().click()
        cy.tooltip().should('have.text', this.Tooltip.Email).clickOutside()

        userList.getPasswordTooltip().click()
        cy.tooltip().should('have.text', this.Tooltip.Password).clickOutside()
    })
})