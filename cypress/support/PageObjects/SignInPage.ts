class SignInPage {
    getEmailLabel() {
        return cy.get('label[for=\'Email\']');
    }
    getEmail(){
        return cy.get('input[name=\'Email\']');
    }
    getEmailValidation(){
        return cy.get('.container > :nth-child(1) > :nth-child(3) > .text-danger');
    }
    getPasswordLabel(){
        return cy.get('label[for=\'psw\'] b');
    }
    getPassword(){
        return cy.get('input[type=\'password\']');
    }
    getPasswordValidation(){
        return cy.get('.form-group > :nth-child(3) > .text-danger');
    }
    getRememberMeText(){
        return cy.get("span[class='mat-checkbox-label'] label");
    }
    getRememberMeCheckBox(){
        return cy.get('input[type=\'checkbox\']');
    }
    getForgotPassword(){
        return cy.get('a[class=\'resetpass\']');
    }
    getForgotPasswordLabel(){
        return cy.get('a[class=\'resetpass\'] b');
    }
    getSignInButton() {
        return cy.get('.SignInbtn');
    }
}


export default SignInPage