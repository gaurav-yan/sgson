export {}
declare global {
    namespace Cypress {
        interface Chainable {
            login(): Chainable<void>;
            loginAdmin(): Chainable<void>;
            loginClientAdmin(): Chainable<void>;
            clickOutside():Chainable<any>;
            tooltip():Chainable<any>;
        }
    }
}