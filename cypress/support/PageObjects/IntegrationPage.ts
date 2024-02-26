class IntegrationPage {
    getAddIntegrationButton(){
        return cy.get('button.addintegrationbtn')
    }
    getStatusFilter(){
        return cy.get('div[id="listactiveinactive"] input')
    }
    getStatusFilterOption(option:string){
        return cy.get('span.ng-option-label').contains(option)
    }
    getAddIntegrationLabel(){
        return cy.get('h4.addintnew b')
    }
    getDeviceTypeFilterLabel(){
        return cy.get('label.col-form-label b').contains('Device Type')
    }
    getDeviceTypeFilter(){
        return cy.get(':nth-child(1) > :nth-child(2) > ngx-atlas-select > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input')
    }
    getDeviceTypeFilterTooltip(){
        return cy.get('label[for="IntegrationType"] i').eq(0)
    }
    selectFilterOption(option:string){
        return cy.get('div[role="option"]').contains(option)
    }
    getIntegrationTypeFilterLabel(){
        return cy.get('label[for="IntegrationType"] b').contains('b', 'Integration Type')
    }
    getIntegrationTypeFilter(){
        return cy.get(':nth-child(2) > :nth-child(2) > ngx-atlas-select > .ng-select-searchable > .ng-select-container')
    }
    getIntegrationTypeFilterTooltip(){
        return cy.get('i.fa-info-circle').eq(1)
    }
    getDotTypeFilterLabel(){
        return cy.get('label[for="DotType"] b')
    }
    getDotTypeFilter(){
        return cy.get('form.ng-untouched > :nth-child(1) > :nth-child(3)').contains('.ng-input > input')
    }
    getDotTypeTooltip(){
        return cy.get('label[for=\'DotType\'] i[class$=\'fa-info-circle\']')
    }
    getDotType(){
        return cy.get(':nth-child(3) > :nth-child(2) > ngx-atlas-select > .ng-select-searchable > .ng-select-container')
    }
    selectOption(option:string){
        return cy.get('div[role="option"]').find(option)
    }
    getDataTypelabel(){
        return cy.get('.col-sm-4 > .col-form-label > b')
    }
    getDataTypeTooltip(){
        return cy.get('.col-sm-4 > .col-form-label > .mat-menu-trigger')
    }
    getDataType(){
        return cy.get('.col-sm-4 > :nth-child(2) > ngx-atlas-select > .ng-select-searchable > .ng-select-container')
    }
    getIntegrationTypeLabel(){
        return cy.get('.col-sm-4 > :nth-child(2) > ngx-atlas-select > .ng-select-searchable > .ng-select-container')
    }
    getIntegrationTypeTooltip(){
        return cy.get(':nth-child(5) > .col-form-label > .mat-menu-trigger')
    }
    getIntegrationType(){
        return cy.get(':nth-child(5) > :nth-child(2) > ngx-atlas-select > .ng-select-searchable > .ng-select-container')
    }
    getConfigurationLabel(){
        return cy.get('mat-tab-body[role="tabpanel"] b').eq(6)
    }
    getIntegrationDescriptionLabel(){
        return cy.get('.row.ng-star-inserted > :nth-child(1) > :nth-child(1) > .col-form-label > b')
    }
    getIntegrationDescriptionTooltip(){
        return cy.get('.row.ng-star-inserted > :nth-child(1) > :nth-child(1) > .col-form-label > .mat-menu-trigger')
    }
    getIntegrationDescription(){
        return cy.get('#integratioDescriptionId')
    }
    getIntegrationURLLabel(){
        return cy.get('.row.ng-star-inserted > :nth-child(2) > :nth-child(1) > .col-form-label > b')
    }
    getIntegrationURLTooltip(){
        return cy.get(':nth-child(2) > :nth-child(1) > .col-form-label > .mat-menu-trigger')
    }
    getIntegrationURL(){
        return cy.get('input[id*=\'Endpoint\']')
    }
    getRequestFormatLabel(){
        return cy.get('.row.ng-star-inserted > :nth-child(3) > :nth-child(1) > .col-form-label > b')
    }
    getRequestFormatTooltip(){
        return cy.get('.row.ng-star-inserted > :nth-child(3) > :nth-child(1) > .col-form-label > .mat-menu-trigger')
    }
    getRequestFormat(){
        return cy.get('.row.ng-star-inserted > :nth-child(3) > :nth-child(1)').find('ng-select')
    }
    getAuthorizationTab(){
        return cy.get('.mat-tab-label-content').contains('Authorization')
    }
    getHeaderTab(){
        return cy.get('.mat-tab-label-content').contains('Header')
    }
    getBodyTab(){
        return cy.get('.mat-tab-label-content').contains('Body')
    }
    getTokenTypeLabel(){
        return cy.get('label[for="ConnectionName"] b').eq(3)
    }
    getTokenTypeTooltip(){
        return cy.get('i.fa-info-circle').eq(8)
    }
    getTokenType(){
        return cy.get('.ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input').eq(6)
    }
    getTokenURLLabel(){
        return cy.get(':nth-child(2) > :nth-child(1) > div.ng-star-inserted > .col-form-label > b')
    }
    getTokenURLTooltip(){
        return cy.get(':nth-child(2) > :nth-child(1) > div.ng-star-inserted > .col-form-label > .mat-menu-trigger')
    }
    getTokenURL(){
        return cy.get('input[name="integratioToken URLName"]')
    }
    getUserNameLabel(){
        return cy.get(':nth-child(3) > :nth-child(1) > div.ng-star-inserted > .col-form-label > b')
    }
    getUserNameTooltip(){
        return cy.get(':nth-child(3) > :nth-child(1) > div.ng-star-inserted > .col-form-label > .mat-menu-trigger')
    }
    getUserName(){
        return cy.get('input#integratioUserNameId')
    }
    getPasswordLabel(){
        return cy.get(':nth-child(4) > :nth-child(1) > div.ng-star-inserted > .col-form-label > b')
    }
    getPasswordTooltip(){
        return cy.get(':nth-child(4) > :nth-child(1) > div.ng-star-inserted > .col-form-label > .mat-menu-trigger')
    }
    getPassword(){
        return cy.get('input#integratioPasswordId')
    }
    getAuthorizationCheckbox(){
        return cy.get('.mat-checkbox-inner-container')
    }
    getAuthorizationLabel(){
        return cy.get('.mat-checkbox-label > b')
    }
    getServerUserNameLabel(){
        return cy.get(':nth-child(3) > :nth-child(5) > .col-form-label > b')
    }
    getServerUserNameTooltip(){
        return cy.get(':nth-child(3) > :nth-child(5) > .col-form-label > .mat-menu-trigger')
    }
    getServerUserName(){
        return cy.get(':nth-child(2) > :nth-child(1) > div.ng-star-inserted > .col-form-label > b')
    }
    getServerPasswordLabel(){
        return cy.get(':nth-child(6) > div.ng-star-inserted > .col-form-label > b')
    }
    getServerPasswordTooltip(){
        return cy.get(':nth-child(6) > div.ng-star-inserted > .col-form-label > .mat-menu-trigger')
    }
    getServerPassword(){
        return cy.get('#integratioServerPassword')
    }

}
export default IntegrationPage