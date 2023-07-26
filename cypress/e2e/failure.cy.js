import { URL } from "../support/e2e";

describe("home page", () => {
  beforeEach(() => {
    cy.viewport(1080, 1080);
    cy.visit(URL);
  });

  it("Should perform different actions based on element existence", () => {
   
    cy.log('...logging');
    cy
    .get('body')
    .then(function($body) {
      cy.log()
      if ($body.find('#element_does_not_exist').length) {
        cy.log('Element found.') // cy.log is used to log on cypress console NOT on browser console
      } else {
        cy.log('Element NOT found.')
      }
    })

  });
});
