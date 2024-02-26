class DotInformation{
    getDotInfoLabel(){
        return cy.get(':nth-child(1) > .card > .card-body > h5 > b')
    }
    getDeviceTypeLabel(){
        return cy.get(':nth-child(1) > :nth-child(1) > .control-label > b')
    }
    getDeviceTypeValue(){
        return cy.get(':nth-child(1) > :nth-child(2) > .control-label')
    }
    getDotTypeLabel(){
        return cy.get(':nth-child(1) > :nth-child(3) > .control-label > b')
    }
    getDotTypeValue(){
        return cy.get(':nth-child(1) > :nth-child(4) > .control-label')
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
        return cy.get(':nth-child(3) > :nth-child(1) > .control-label > b')
    }
    getDeviceNameValue(){
        return cy.get(':nth-child(1) > :nth-child(4) > .control-label')
    }
    getDeviceNameEditButton(){
        return cy.get('.fa-edit')
    }
    getDeviceNameEditButtonTooltip(){
        return cy.get('span[class^=\'mat-tooltip-trigger\']')
    }
    getDeviceNameInput(){
        return cy.get('#deviceName')
    }
    getDeviceNameSaveButton(){
        return cy.get('.fa-save')
    }
    getBatteryLevelLabel(){
        return cy.get(':nth-child(4) > :nth-child(3) > .control-label > b')
    }
    getBatteryLevelTooltip(){
        return cy.get(':nth-child(4) > :nth-child(3) > .control-label > .mat-menu-trigger')
    }
    getBatteryLevelValue(){
        return cy.get(':nth-child(4) > :nth-child(3) > .control-label')
    }
    getFIllLevelLabel(){
        return cy.get(':nth-child(5) > :nth-child(1) > .control-label > b')
    }
    getFillLevelTooltip(){
        return cy.get(':nth-child(5) > :nth-child(1) > .control-label > .mat-menu-trigger')
    }
    getFillLevelValue(){
        return cy.get(':nth-child(5) > :nth-child(2) > .control-label')
    }
    getLastReadingLabel(){
        return cy.get(':nth-child(5) > :nth-child(3) > .control-label > b')
    }
    getLastReadingTooltip(){
        return cy.get(':nth-child(5) > :nth-child(3) > .control-label > .mat-menu-trigger')
    }
    getLastReadingValue(){
        return cy.get(':nth-child(5) > :nth-child(4) > .control-label')
    }
    getStatusLabel(){
        return cy.get(':nth-child(6) > :nth-child(1) > .control-label > b')
    }
    getStatusTooltip(){
        return cy.get(':nth-child(6) > :nth-child(1) > .control-label > .mat-menu-trigger')
    }
    getStatusValue(){
        return cy.get(':nth-child(6) > :nth-child(1) > .control-label')
    }
    getLastSeenLabel(){
        return cy.get(':nth-child(6) > :nth-child(3) > .control-label > b')
    }
    getLastSeenTooltip(){
        return cy.get(':nth-child(6) > :nth-child(3) > .control-label > .mat-menu-trigger')
    }
    getLastSeenValue(){
        return cy.get(':nth-child(6) > :nth-child(4) > .control-label')
    }
    getBatteryChangeLabel(){
        return cy.get(':nth-child(7) > :nth-child(1) > .control-label > b')
    }
    getBatteryChangeTooltip(){
        return cy.get(':nth-child(7) > :nth-child(1) > .control-label > .mat-menu-trigger')
    }
    getFirmwareUpdateLabel(){
        return cy.get(':nth-child(6) > :nth-child(3) > .control-label > b')
    }
    getFirmwareUpdateTooltip(){
        return cy.get(':nth-child(7) > :nth-child(3) > .control-label > .mat-menu-trigger')
    }
    getFirmwareUpdateValue(){
        return cy.get(':nth-child(6) > :nth-child(4) > .control-label')
    }
    getDotConfigurationLabel(){
        return cy.get('.mt-30 > .card > .card-body > h5 > b')
    }
    getAssignLinkLabel(){
        return cy.get('.container-fluid > form.ng-untouched > :nth-child(1) > :nth-child(1) > .col-form-label > b')
    }
    getAssignLinkTooltip(){
        return cy.get('label[for=\'linkId\'] .mat-menu-trigger')
    }
    getAssignLinkList(){
        return cy.get('#configid > .ng-select-searchable > .ng-select-container')
    }
    getAssignLinkOptions(option:string){
        return cy.get('ng-dropdown-panel').contains(option)
    }
    getSendReadingLabel(){
        return cy.get(':nth-child(3) > .col-form-label > b')
    }
    getSendReadingTooltip(){
        return cy.get(':nth-child(3) > .col-form-label > .mat-menu-trigger')
    }
    getSendReadingInput(){
        return cy.get('#timeIntervalReading')
    }
    getSendHealthInfoLabel(){
        return cy.get(':nth-child(5) > .col-form-label > b')
    }
    getSendHealthInfoTooltip(){
        return cy.get(':nth-child(5) > .col-form-label > .mat-menu-trigger')
    }
    getSendHealthInfoInput(){
        return cy.get('#healthGranularity')
    }
    getFirmwareVersionLabel(){
        return cy.get(':nth-child(7) > .col-form-label > b')
    }
    getFirmwareVersionTooltip(){
        return cy.get('label[for=\'latestFirmwareVersion\'] i[class$=\'fa-info-circle\']')
    }
    getFirmwareVersionValue(){
        return cy.get('.upgradeversion')
    }
    gerFirmwareUpdateButton(){
        return cy.get('.input-group-append')
    }
    getSaveButton(){
        return cy.get('.pb-3 > .col-lg-12 > :nth-child(1)')
    }
    getCancelButton(){
        return cy.get('.ml-2')
    }
    getBackButton(){
        return cy.get('.col-xl-2 > span > .fa')
    }
    getCalibrationTopLabel(){
        return cy.get('label.control-label b').contains('b', 'Calibration Top (in mm):')
    }
}
export default DotInformation