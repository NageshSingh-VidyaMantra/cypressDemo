import { URL } from "../support/e2e";

describe('home page', () => {
    beforeEach(()=> {
        cy.clock();
        cy.viewport(1080, 1080);
        cy.visit(URL);
    })
  
    it('time elapsed', () => {
        // spend 5 min on home-page
        cy.tick(1000*60*60)
        cy.getByData("realTime");
    })

})