import { URL } from "../support/e2e";

describe('home page', () => {
  
    beforeEach(()=> {
        cy.clock()
        cy.viewport(1080, 1080);
        cy.visit(URL);
    })
  
    it('time elapsed', () => {
        // spend 5 min on home-page
        cy.tick(1000*60*5);
        cy.getByData("sale").should("have.text","Sale ends in 11:55:00");

        // visit shopping card C
        cy.getByData("shoppingCard").eq(2).find('a').click();
        cy.getByData("A").click();
        cy.getByData("C").click();
        cy.getByData("logo").click();

        // spend 5 min on home-page
        cy.tick(1000*60*5);
        cy.getByData("sale").should("have.text","Sale ends in 11:50:00");
        

        cy.getByData("shoppingCard").eq(4).find('a').click();
        cy.getByData("clearAll").click();
        cy.getByData("B").click();
        cy.getByData("D").click();
        cy.getByData("logo").click();
    })
})