// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('login', () => {
        cy.session([], () => {
        cy.visit('https://connecttestingweb-lrsb4.ondigitalocean.app/')
        cy.get('input[name=\'Email\']').type('gauravwardhekhar@yanitsolutions.com')
        cy.get('input[type=\'password\']').type('Reset@1234')
        cy.get('.SignInbtn').click()
    }, {
                validate() {
                    cy.get(':nth-child(5) > .btn').should('exist')
                }
        })
})
Cypress.Commands.add('loginAdmin', () => {
    cy.session([], () => {
        cy.visit('https://connecttestingweb-lrsb4.ondigitalocean.app/')
        cy.get('input[name=\'Email\']').type('gauravwardhekhar@yanitsolutions.com')
        cy.get('input[type=\'password\']').type('Reset@1234')
        cy.get('.SignInbtn').click()
    }, {
        validate() {
            cy.get(':nth-child(5) > .btn').should('exist')
        }
    })
})
Cypress.Commands.add('loginClientAdmin', () => {
    cy.session([], () => {
        cy.visit('https://connecttestingweb-lrsb4.ondigitalocean.app/')
        cy.get('input[name=\'Email\']').type('mkt@mailinator.com')
        cy.get('input[type=\'password\']').type('Reset@1234')
        cy.get('.SignInbtn').click()
    }, {
        validate() {
            cy.get('.userhover').should('exist')
        }
    })
})
Cypress.Commands.add('clickOutside', () => {
        return cy.get('body').click(0,0); //0,0 here are the x and y coordinates
})
Cypress.Commands.add('tooltip', () => {
    return cy.get('.mat-menu-content > .mat-focus-indicator');
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })