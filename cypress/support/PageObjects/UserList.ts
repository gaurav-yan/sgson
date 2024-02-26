class UserList{
    getTooltip(){
        return cy.get('.mat-menu-content > .mat-focus-indicator');
    }
    getAddUserButton(){
        return cy.get(':nth-child(3) > .mat-tooltip-trigger')
    }
    getTitle(){
        return cy.get('#accountModalPopup > .modal-dialog > .modal-content > .modal-header > #exampleModalLabel > b')
    }
    getAccountNameLabel(){
        return cy.get('.col-sm-12 > .col-form-label > b')
    }
    getAccountNameTooltip(){
        return cy.get('.col-sm-12 > .col-form-label > .mat-menu-trigger')
    }
    getAccountNameText(){
        return cy.get('#accountName')
    }
    getFirstNameLabel(){
        return cy.get('label[for=\'firstName\'] b')
    }
    getFirstNameInput(){
        return cy.get('input[name=\'firstName\']')
    }
    getLastNameLabel(){
        return cy.get('label[for=\'lastName\'] b')
    }
    getLastNameInput(){
        return cy.get('input[name=\'lastName\']')
    }
    getEmailLabel(){
        return cy.get('label[for=\'Email\'] b')
    }
    getEmailTooltip(){
        return cy.get(':nth-child(3) > :nth-child(1) > .col-form-label > .mat-menu-trigger')
    }
    getEmailInput(){
        return cy.get('input[name=\'email\']')
    }
    getPasswordLabel(){
        return cy.get('label[for=\'Password\'] b')
    }
    getPasswordTooltip(){
        return cy.get(':nth-child(2) > .col-form-label > .mat-menu-trigger')
    }
    getPassworInput(){
        return cy.get('input[placeholder$=\'password\']')
    }
    getContactLabel(){
        return cy.get('label[for=\'ContactNo\'] b')
    }
    getContactInput(){
        return cy.get('input[class$=\'ng-valid\']')
    }
    getSaveButton(){
        return cy.get('.modal-footer > .ng-star-inserted')
    }
    getCancelButton(){
        return cy.get('#addUpdaeUerModalPopup > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]')
    }
}

export default UserList