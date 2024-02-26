/// <reference types="cypress" />
// Press Shift+F10 or click the green icon in the gutter to run all tests
import AccountPage from "../../support/PageObjects/AccountPage";
import AccountDetailsPage from "../../support/PageObjects/AccountDetailsPage";
import DeviceList from "../../support/PageObjects/DeviceList";
describe('Check Device List tooltips', () => {
    const accountDetailsPage =new AccountDetailsPage();
    const deviceList= new DeviceList();
    before(function () {
        // "this" points at the test context object
    })
    beforeEach(function () {
        cy.fixture('tooltips.json').as('Tooltip')
        cy.loginClientAdmin()
        cy.visit('https://connecttestingweb-lrsb4.ondigitalocean.app/')
    })
    it('Devices tab tooltip', function () {
        accountDetailsPage.getDevicesTabTooltip().should('have.attr', 'mattooltip', this.Tooltip.DeviceTab)
        deviceList.getDeviceTypeTooltip().click()
        cy.tooltip().should('contain.text', this.Tooltip.DeviceList_DeviceType).type('{esc}')
        //deviceList.getDeviceTypeTooltip().blur()
        deviceList.getDeviceTypeFilter().click()
        deviceList.getFilterOption("Dot").click()
        deviceList.getDotTypeTooltip().click()
        cy.tooltip().should('contain.text', this.Tooltip.DeviceList_DotType).type('{esc}')
        deviceList.getExportDevicesButtonTooltip().should('have.attr', 'mattooltip', this.Tooltip.Export_Device_Info)
        deviceList.getImportDevicesButtonTooltip().should('have.attr', 'mattooltip', this.Tooltip.Import_Device)
    })

})