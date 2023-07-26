import { URL } from "../support/e2e";

describe('Test form', () => {
    beforeEach(()=> {
        cy.viewport(1080, 1080);
        cy.visit(URL);
    })
    it.only('Visited shopping card B, C, F ', () => {
    
        cy.getByData("shoppingCard").eq(1).find('a').click();
        cy.getByData("logo").click();

        cy.getByData("shoppingCard").eq(3).find('a').click();
        cy.getByData("logo").click();

        cy.getByData("shoppingCard").eq(5).find('a').click();
        cy.getByData("logo").click();

        cy.location("pathname").should("eq", "/");
    })
})