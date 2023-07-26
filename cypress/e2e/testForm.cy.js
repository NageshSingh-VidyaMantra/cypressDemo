import { URL } from "../support/e2e";

describe('Test form', () => {
  
    beforeEach(()=> {
        cy.viewport(1080, 1080);
        cy.visit(`${URL}newsletter`);
    })
  
    it('allow user to submit a form', () => {
      cy.getByData("form");
    }) 

    it('user submit incorrect email', () => {
        cy.getByData("form");
        cy.getByData("name").type('Nagesh');
        cy.getByData("email").type('nst321gmailcom');
        cy.getByData("success").should("not.exist"); // should NOT exist in DOM, even if it is hidden then this assertion is going to fail.
    })
    
    it('user submit empty form', () => {
        cy.getByData("form");
        cy.getByData("submit").click();
        cy.getByData("error").should('exist').contains('**All fields are required.');

        cy.get('ul').find('li').eq(2).find('input').click(); // To find some thing
        cy.location("pathname").should("eq", "/newsletter");
    })

})