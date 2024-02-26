class LinkInformation{
    getBackButton(){
        return cy.get('.col-xl-2 > span > .fa')
    }
    getLinkInfoLabel(){
        return cy.get(':nth-child(1) > .card > .card-body > h5 > b')
    }
    getDeviceTypeLabel(){
        return cy.get(':nth-child(1) > :nth-child(1) > .control-label > b')
    }
    getDeviceTypeValue(){
        return cy.get(':nth-child(1) > :nth-child(2) > .control-label')
    }
    getDeviceIdLabel(){
        return cy.get(':nth-child(2) > :nth-child(1) > .control-label > b')
    }
    getDeviceIdValue(){

        return cy.get(':nth-child(2) > :nth-child(2) > .control-label')
    }
    getMacAddressLabel(){
        return cy.get(':nth-child(2) > :nth-child(3) > .control-label > b')
    }
    getMacAddressValue(){
        return cy.get(':nth-child(2) > :nth-child(4) > .control-label')
    }
    getDeviceNameLabel(){
        return cy.get(':nth-child(1) > :nth-child(3) > .control-label > b')
    }
    getDeviceNameValue(){
        return cy.get(':nth-child(1) > :nth-child(4) > .control-label')
    }
    getDeviceNameEditButton(){
        return cy.get('.fa-edit')
    }
    getDeviceNameInput(){
        return cy.get('#deviceName')
    }
    getDeviceNameSaveButton(){
        return cy.get('.fa-save')
    }
    getDeviceNameEditButtonTooltip(){
        return cy.get('span[class^=\'mat-tooltip-trigger\']')
    }
    getStatusLabel(){
        return cy.get('.container-fluid > :nth-child(3) > :nth-child(1) > .col-form-label > b')
    }
    getStatusTooltip(){
        return cy.get(':nth-child(3) > :nth-child(1) > .col-form-label > .mat-menu-trigger')
    }
    getStatusValue(){
        return cy.get(':nth-child(3) > :nth-child(2) > .control-label')
    }
    getFirmwareUpdateLabel(){
        return cy.get(':nth-child(3) > :nth-child(3) > .col-form-label > b')
    }
    getFirmwareUpdateTooltip(){
        return cy.get(':nth-child(3) > :nth-child(3) > .col-form-label > .mat-menu-trigger')
    }
    getFirmwareUpdateValue(){
        return cy.get(':nth-child(3) > :nth-child(4) > .control-label')
    }
    getConfigurationTab() {
        return cy.get('.mat-tab-label').contains('Configuration');
    }
    getConfigurationTabTooltip() {
        return cy.get('.mat-tab-label').contains('Configuration').find('.mat-tooltip-trigger');
    }
    getIntegrationsTab() {
        return cy.get('.mat-tab-label').contains('Integrations');
    }
    getIntegrationsTabTooltip() {
        return cy.get('.mat-tab-label').contains('Integrations').find('.mat-tooltip-trigger');
    }
    getConnectedDevicesTab() {
        return cy.get('.mat-tab-label').contains('Connected Devices');
    }
    getConnectedDevicesTabTooltip() {
        return cy.get('.mat-tab-label').contains('Connected Devices').find('.mat-tooltip-trigger');
    }
    getNetworkTypeLabel(){
        return cy.get('.mt-1 > :nth-child(1) > .col-form-label > b')
    }
    getNetworkTypeTooltip(){
        return cy.get(':nth-child(1) > .form-group > .col-form-label > .mat-menu-trigger')
    }
    getNetworkTypeList(){
        return cy.get('#configid > .ng-select-searchable > .ng-select-container')
    }
    selectNetworkType(option:string){
        return cy.get('ng-dropdown-panel').contains(option)
    }
    getSSIDLabel(){
        return cy.get('form.ng-untouched > :nth-child(2) > :nth-child(1) > .row > :nth-child(1) > .col-form-label > b')
    }
    getSSIDTooltip(){
        return cy.get(':nth-child(1) > .row > :nth-child(1) > .mat-menu-trigger')
    }
    getSSIDInput(){
        return cy.get('input[placeholder*=\'SSID\']')
    }
    getPasswordLabel(){
        return cy.get(':nth-child(2) > :nth-child(2) > .row > :nth-child(1) > .col-form-label > b')
    }
    getPasswordTooltip() {
        return cy.get(':nth-child(2) > .row > :nth-child(1) > .mat-menu-trigger')
    }
        getPasswordInput() {
            return cy.get('input[placeholder=\'Enter Password\']')
        }
    getRetailDotReadingsLabel(){
        return cy.get('.col-lg-3 > .col-form-label > b')
    }
    getRetainDotReadingTooltip(){
        return cy.get(':nth-child(2) > :nth-child(3) > .col-form-label > .mat-menu-trigger')
    }
    getRetainDotReadingsInput(){
        return cy.get('#dataRetainPeriod')
    }
    getSendHealthDataLabel(){
        return cy.get('.col-lg-3 > .col-form-label > b')
    }
    getSendHealthDataTooltip(){
        return cy.get(':nth-child(5) > .col-form-label > .mat-menu-trigger')
    }
    getSendHealthDataInput(){
        return cy.get('#dataRetainPeriod')
    }
    getFirmwareVersionLabel(){
        return cy.get(':nth-child(5) > .col-form-label > b')
    }
    getFirmwareVersionTooltip(){
        return cy.get(':nth-child(7) > .col-form-label > .mat-menu-trigger')
    }
    getFirmwareVersionValue(){
        return cy.get('.upgradeversion')
    }
    gerFirmwareUpdateButton(){
        return cy.get('.input-group-append')
    }
    getSaveButton(){
        return cy.get('.row.justify-content-end > .d-flex > :nth-child(1)')
    }
    getCancelButton(){
        return cy.get('.row.justify-content-end > .d-flex > :nth-child(2)')
    }
}
export default LinkInformation