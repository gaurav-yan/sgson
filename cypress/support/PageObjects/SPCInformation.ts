class SPCInformation {
    getBackButton(){
        return cy.get('.col-xl-2 > span > .fa')
    }
    getSPCInfoLabel(){
        return cy.get('.col-xl-4 > h4 > b')
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
    getStatusLabel(){
        return cy.get(':nth-child(3) > :nth-child(1) > .control-label > b')
    }
    getStatusTooltip(){
        return cy.get(':nth-child(3) > :nth-child(1) > .control-label > .mat-menu-trigger')
    }
    getStatusValue(){
        return cy.get(':nth-child(3) > :nth-child(2) > .control-label')
    }
    getFirmwareUpdateLabel(){
        return cy.get(':nth-child(5) > :nth-child(1) > .control-label > b')
    }
    getLastSeenAtLabel(){
        return cy.get(':nth-child(3) > :nth-child(3) > .control-label > b')
    }
    getLastSeenAtTooltip(){
        return cy.get(':nth-child(3) > :nth-child(3) > .control-label > .mat-menu-trigger')
    }
    getLastSeenAtValue(){
        return cy.get(':nth-child(3) > :nth-child(4) > .control-label')
    }
    getLastRebootAtLabel(){
        return cy.get(':nth-child(4) > :nth-child(1) > .control-label > b')
    }
    getLastRebootTooltip(){
        return  cy.get(':nth-child(4) > :nth-child(1) > .control-label > .mat-menu-trigger')
    }
    getLastRebootAtValue(){
        return cy.get(':nth-child(4) > :nth-child(2) > .control-label')
    }
    getLastPingFailureAtLabel(){
        return cy.get(':nth-child(4) > :nth-child(3) > .control-label > b')
    }
    getLastPingFailureAtTooltip(){
        return cy.get(':nth-child(4) > :nth-child(3) > .control-label > .mat-menu-trigger')
    }
    getLastPingFailureAtValue(){
        return cy.get(':nth-child(4) > :nth-child(4) > .control-label')
    }
    getFirmwareUpdateTooltip(){
        return cy.get(':nth-child(5) > :nth-child(1) > .control-label > .mat-menu-trigger')
    }
    getFirmwareUpdateValue(){
        return cy.get(':nth-child(5) > :nth-child(2) > .control-label')
    }

    getPingFrequencyLabel(){
        return cy.get('#formM > :nth-child(1) > :nth-child(1) > .col-form-label > b')
    }
    getPingFrequencyTooltip(){
        return cy.get(':nth-child(1) > :nth-child(1) > .col-form-label > .mat-menu-trigger')
    }
    getPingFrequencyInput(){
        return cy.get('#timeInterval')
    }
    getPingFailureThresholdLabel(){
        return cy.get(':nth-child(3) > .col-form-label > b')
    }
    getPingFailureThresholdTooltip(){
        return cy.get(':nth-child(3) > .col-form-label > .mat-menu-trigger')
    }
    getPingFailureThresholdInput(){
        return cy.get('#frequency')
    }
    getDurationToSkipRebootLabel(){
        return cy.get(':nth-child(5) > .col-form-label > b')
    }
    getDurationToSkipRebootTooltip(){
        return cy.get(':nth-child(5) > .col-form-label > .mat-menu-trigger')
    }
    getDurationToSkipRebootInput(){
        return cy.get('#rebootTime')
    }
    getCaptureHealthLabel(){
        return cy.get(':nth-child(7) > .col-form-label > b')
    }
    getCaptureHealthTooltip(){
        return cy.get(':nth-child(7) > .col-form-label > .mat-menu-trigger')
    }
    getCaptureHealthInput(){
        return cy.get('#SendHealthData')
    }
    getPrimaryIPUrlLabel(){
        return cy.get(':nth-child(9) > .col-form-label > b')
    }
    getPrimaryIPUrlTooltip(){
        return cy.get(':nth-child(9) > .col-form-label > .mat-menu-trigger')
    }
    getPrimaryIPUrlInput(){
        return cy.get('#primaryPublicIP')
    }
    getSecondaryIPUrlLabel(){
        return cy.get(':nth-child(11) > .col-form-label > b')
    }
    getSecondaryIPUrlTooltip(){
        return cy.get(':nth-child(11) > .col-form-label > .mat-menu-trigger')
    }
    getSecondaryIPUrlInput(){
        return cy.get('#secondaryPublicIP')
    }
    getLowerVoltageThresholdLabel(){
        return cy.get(':nth-child(13) > .col-form-label > b')
    }
    getLowerVoltageThresholdTooltip(){
        return cy.get(':nth-child(13) > .col-form-label > .mat-menu-trigger')
    }
    getLowerVoltageThresholdInput(){
        return cy.get('#lowerBucketVoltage')
    }
    getHigherVoltageThresholdLabel(){
        return cy.get(':nth-child(15) > .col-form-label > b')
    }
    getHigherVoltageThresholdTooltip(){
        return cy.get(':nth-child(15) > .col-form-label > .mat-menu-trigger')
    }
    getHigherVoltageThresholdInput(){
        return cy.get('#higherBucketVoltage')
    }
    getCloudUrlLabel(){
        return cy.get(':nth-child(17) > .col-form-label > b')
    }
    getCloudUrlTooltip(){
        return cy.get(':nth-child(17) > .col-form-label > .mat-menu-trigger')
    }
    getCloudUrlInput(){
        return cy.get('#CloudURL')
    }
    getFirmwareVersionLabel(){
        return cy.get(':nth-child(17) > .col-form-label > b')
    }
    getFirmwareVersionTooltip(){
        return cy.get(':nth-child(17) > .col-form-label > .mat-menu-trigger')
    }
    getFirmwareVersionValue(){
        return cy.get('.upgradeversion')
    }
    gerFirmwareUpdateButton(){
        return cy.get('.input-group-append')
    }
    getSaveButton(){
        return cy.get(':nth-child(2) > .col-sm-2 > :nth-child(1)')
    }
    getCancelButton(){
        return cy.get('.col-sm-2 > .ml-2')
    }
    getConfigurationTab() {
        return cy.get('.mat-tab-label').contains('Configuration');
    }
    getConfigurationTabTooltip() {
        return cy.get('.mat-tab-label').contains('Configuration').find('.mat-tooltip-trigger');
    }
    getAnalyticsTab() {
        return cy.get('.mat-tab-label').contains('Analytics');
    }
    getAnalyticsTabTooltip() {
        return cy.get('.mat-tab-label').contains('Analytics').find('.mat-tooltip-trigger');
    }
    getReportsTab() {
        return cy.get('.mat-tab-label').contains('Reports');
    }
    getReportsTabTooltip() {
        return cy.get('.mat-tab-label').contains('Reports').find('.mat-tooltip-trigger');
    }
    getPredictiveReportByLabel(){
        return cy.get('.col-sm-2 > .ml-2')
    }
    getPredictiveReportByTooltip(){
        return cy.get('.col-sm-2-half > label > .mat-menu-trigger')
    }
    getReportTypeFilter(){
        return cy.get('.col-xl-3 > ngx-atlas-select > .ng-select-searchable > .ng-select-container')
    }
    selectReportTypeRebootOption(){
        return cy.get('ng-dropdown-panel').contains('Reboot')
    }
    selectReportTypeFailureOption(){
        return cy.get('ng-dropdown-panel').contains('Failure')
    }
    getAnalyticsApplyButton(){
        return cy.get('button').contains('button', 'Apply')
    }
    getAnalyticsApplyButtonTooltip(){
        return cy.get('button').contains('button', 'Apply')
    }
    getAnalyticsExportButton(){
        return cy.get('.col-xl-1 > .mat-tooltip-trigger')
    }
    getAnalyticsExportButtonTooltip(){
        return cy.get('.col-xl-1 > .mat-tooltip-trigger')
    }
    getDatTypeLabel(){
        return cy.get('.col-sm-2 > .col-form-label > b')
    }
    getDataTypeTooltip(){
        return cy.get('.col-sm-2 > .col-form-label > .mat-menu-trigger')
    }
    getDatTypeFilter(){
        return cy.get('.dropdown-btn')
    }
    selectDataTypeSelectAll(){
        return cy.get('.item1 > .multiselect-item-checkbox')
    }
    selectDataTypeFail(){
        return cy.get('.item2 > :nth-child(1)')
    }
    selectDataTypeVoltage(){
        return cy.get('.item2 > :nth-child(2)')
    }
    selectDataTypeReboot(){
        return cy.get('.item2 > :nth-child(3)')
    }
    selectDataTypeSPCHealthData(){
        return cy.get('.item2 > :nth-child(4)')
    }
    selectDataTypeManualReboot(){
        return cy.get('.item2 > :nth-child(5)')
    }
    searchDataType(){
        return cy.get('.filter-textbox')
    }
    getTimeZoneLabel(){
        return cy.get('.col-lg-3 > .col-form-label > b')
    }
    getTimeZoneTooltip(){
        return cy.get('.col-lg-3 > .col-form-label > .mat-menu-trigger')
    }
    getTimeZoneFilter(){
        return cy.get('#timezonereport > .ng-select-searchable > .ng-select-container')
    }
    getTimeZoneSearch(){
        return cy.get('#timezonereport > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input')
    }
    selectTimeZone(option: string){
        return cy.get('.ng-dropdown-panel-items').contains(option)
    }
    getFromDateLabel(){
        return cy.get('.col-lg-2 > .col-form-label > b')
    }
    getFromDateTooltip(){
        return cy.get('.col-lg-2 > .col-form-label > .mat-menu-trigger')
    }
    getFromDateInput(){
        return cy.get('#fromdate')
    }
    getTodateLabel(){
        return cy.get(':nth-child(4) > .col-form-label > b')
    }
    getToDateTooltip(){
        return cy.get(':nth-child(4) > .col-form-label > .mat-menu-trigger')
    }
    getToDateInput(){
        return cy.get('#todate')
    }
    getApplyButton(){
        return cy.get('.col-md-2 > .mat-tooltip-trigger')
    }
    getApplyButtonTooltip(){
        return cy.get('.col-md-2 > .mat-tooltip-trigger')
    }
    getExportReportButton(){
        return cy.get('.col-xl-1 > .mat-tooltip-trigger')
    }
    getExportReportButtonTooltip(){
        return cy.get('.col-xl-1 > .mat-tooltip-trigger')
    }
    getUseAsPowerStripLabel(){
        return cy.get('.mat-slide-toggle-content > b')
    }
    getUseAsPowerStripTooltip(){
        return cy.get('.col-xl-8 > .mat-menu-trigger')
    }
    getPowerStripToggleButton(){
        return cy.get('#mat-slide-toggle-4 > .mat-slide-toggle-label > .mat-slide-toggle-bar')
    }
    getRebootButton(){
        return cy.get('.col-xl-8 > :nth-child(4)')
    }
    getRebootButtonTooltip(){
        return cy.get('.col-xl-8 > :nth-child(4)').find('.mat-tooltip-trigger');
    }
    getFactoryResetButton(){
        return cy.get('.ml-2')
    }
    getFactoryResetButtonTooltip(){
        return cy.get('.ml-2').find('.mat-tooltip-trigger');
    }
    getDeviceRebootPopUpHeader(){
        return cy.get('#deviceRebootConfirmationModal > .modal-dialog > .modal-content > .modal-header > .modal-title')
    }
    getDeviceRebootPopUpMessage(){
        return cy.get('#deviceRebootConfirmationModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .col-lg-12.mt-3 > .fntsize1')
    }
    getDeviceRebootPopUpInput(){
        return cy.get('#deviceRebootConfirmationModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(2) > .row > .col-xl-10 > .form-control')
    }
    getDeviceRebootPopUpOKButton(){
        return cy.get('#deviceRebootConfirmationModal > .modal-dialog > .modal-content > .modal-footer > .col-lg-12 > :nth-child(1)')
    }
    getDeviceRebootPopUpCancelButton(){
        return cy.get('#deviceRebootConfirmationModal > .modal-dialog > .modal-content > .modal-footer > .col-lg-12 > :nth-child(2)')
    }
    getFactoryResetPopUpHeader(){
        return cy.get('#factoryResetConfirmationModal > .modal-dialog > .modal-content > .modal-header > .modal-title')
    }
    getFactoryResetPopUpMessage(){
        return cy.get('#factoryResetConfirmationModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .mt-3 > .fntsize1')
    }
    getFactoryResetPopUpInput(){
        return cy.get('#factoryResetConfirmationModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(2) > .row > .col-xl-10 > .form-control')
    }
    getFactoryResetPopUpUpOKButton(){
        return cy.get('#factoryResetConfirmationModal > .modal-dialog > .modal-content > .modal-footer > .col-lg-12 > :nth-child(1)')
    }
    getFactoryResetPopUpCancelButton(){
        return cy.get('#factoryResetConfirmationModal > .modal-dialog > .modal-content > .modal-footer > .col-lg-12 > :nth-child(2)')
    }
}
export default SPCInformation