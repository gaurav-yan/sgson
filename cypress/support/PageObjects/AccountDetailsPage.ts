class AccountDetailsPage{
    getAccountName() {
        return cy.get('#sidebar').find('/h5');
    }
    getAddGroupButton() {
        return cy.get('app-add-node');
    }
    getAddGroupPopupHeader() {
        return cy.get('#mat-dialog-title-0');
    }
    getAddGroupPopupAddButton() {
        return cy.get('.mat-dialog-actions > :nth-child(1)');
    }
    getAddGroupPopupCancelButton() {
        return cy.get('.mat-dialog-actions > :nth-child(2)');
    }
    getAddGroupPopupValidationMessage() {
        return cy.get('.mat-dialog-content > .ng-star-inserted');
    }
    getAddGroupPopupCloseButton() {
        return cy.get('.alertred > .mat-focus-indicator');
    }
    getMenuToggleButton() {
        return cy.get('.sidebar-toggle');
    }
    getDevicesTab() {
        return cy.get('.mat-tab-label').contains('Devices');
    }
    getDevicesTabTooltip() {
        return cy.get('.mat-tab-label').contains('Devices').find('.mat-tooltip-trigger');
    }
    getUsersTab() {
        return cy.get('.mat-tab-label').contains('Users');
    }
    getIntegrationsTab() {
        return cy.get('.mat-tab-label').contains('Integrations');
    }
    getAccount_InfoTab() {
        return cy.get('.mat-tab-label').contains('Account Info');
    }
    getAnalyticsTab() {
        return cy.get('.mat-tab-label').contains('Analytics');
    }
    getReportsTab() {
        return cy.get('.mat-tab-label').contains('Reports');
    }
    getLogo(){
        return cy.get('.full-logo')
    }
}

export default AccountDetailsPage