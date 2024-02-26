class AccountPage {
    getAccountHeading() {
        return cy.get('.accountheaderAccountList');
    }
    getUserMenu() {
        return cy.get('#dropdownMenuButton');
    }
    getUserName() {
        return cy.get('.userhover.role-name');
    }
    getSignOutButton() {
        return cy.get('.row > .col-md-1');
    }

    getSearch() {
        return cy.get('form.ng-pristine > .form-control');
    }
    getSearchButton() {
        return cy.get('.btn > .fa');
    }

    getAddAccountButton(){
        return cy.get(':nth-child(5) > .btn');
    }
    getAccountNameLabel(){
        return cy.get('.col-sm-12 > .col-form-label > b');
    }
    getAccountName(){
        return cy.get('.col-sm-12 > .col-form-label > .mat-menu-trigger');
    }
    getAccountNameInfo(){
        return cy.get('label[for=\'accountName\'] i[class$=\'fa-info-circle\']');
    }
    getTimeZoneLabel(){
        return cy.get(':nth-child(2) > :nth-child(1) > .col-form-label > b');
    }
    getTimeZone(){
        return cy.get('#timezone > ngx-atlas-select > .ng-select-searchable > .ng-select-container > .ng-arrow-wrapper');
    }
    getTimeZoneInfo(){
        return cy.get(':nth-child(2) > :nth-child(1) > .col-form-label > .mat-menu-trigger');
    }
    getValidityLabel(){
        return cy.get(':nth-child(2) > .col-form-label > b');
    }

    getValidity(){
        return cy.get('.popbtn');
    }
    getValidityInfo(){
        return cy.get(':nth-child(2) > .col-form-label > .mat-menu-trigger');
    }
    getTooltip(){
        return cy.get('.mat-menu-content > .mat-focus-indicator');
    }

}

export default AccountPage