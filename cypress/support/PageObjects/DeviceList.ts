class DeviceList{
    getTooltip(){
        return cy.get('.mat-menu-content > .mat-focus-indicator');
    }
    getDeviceTypeLabel(){
        return cy.get('#devicetypeaccount > label > b')
    }
    getDeviceTypeTooltip(){
        return cy.get('#devicetypeaccount > label > .mat-menu-trigger')
    }
    getDeviceTypeFilter(){
        return cy.get('#devicetypeaccount > ngx-atlas-select > .ng-select-searchable > .ng-select-container')
    }
    getFilterOption(option:string){
        return cy.get('ng-dropdown-panel').find('.ng-option-label').contains(option)
    }
    getDotTypeLabel(){
        return cy.get('#dottypedevice > label > b')
    }
    getDotTypeTooltip(){
        return cy.get('#dottypedevice > label > .mat-menu-trigger')
    }
    getDotTypeFilter(){
        return cy.get('#dottypedevice > ngx-atlas-select > .ng-select-searchable > .ng-select-container')
    }
    getSearchField(){
        return cy.get('input[class*=\'search-radius\']')
    }
    getSearchButton(){
        return cy.get('.searchbtn')
    }
    getIsActiveFilter(){
        return cy.get('#listactiveinactive > ngx-atlas-select > .selected > .ng-select-container')
    }
    getExportDevicesButton(){
        return cy.get('#exportdevinfo')
    }
    getExportDevicesButtonTooltip(){
        return cy.get('#exportdevinfo').find('.mat-tooltip-trigger')
    }
    getImportDevicesButton(){
        return cy.get('button[data-target=\'#importDeviceModalPopup\']')
    }
    getImportDevicesButtonTooltip(){
        return cy.get('button[data-target=\'#importDeviceModalPopup\']').find('.mat-tooltip-trigger')
    }
    getPageSize(){
        return cy.get('#pageSize > ngx-atlas-select > .selected > .ng-select-container > .ng-value-container > .ng-input')
    }
    getPreviousPageButton(){
        return cy.get('.pagination-previous > .ng-star-inserted')
    }
    getNextPageButton(){
        return cy.get('.pagination-next > .ng-star-inserted')
    }
    getPageNumber(page:string){
        return cy.get('tbody > :nth-child(${page})')
    }
    getTableRow(row:number){
        return cy.get('tbody >').eq(row)
    }
}

export default DeviceList