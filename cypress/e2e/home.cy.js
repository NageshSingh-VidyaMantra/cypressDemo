import { URL } from "../support/e2e";

describe('home page', () => {
  
  beforeEach(()=> {
    cy.viewport(1080, 1080);
    cy.visit(URL);
  })

  it('is sale tag visible', () => {
    cy.getByData("sale").should("exist");
  })

  it.only('is shoppingCards tag visible', () => {
    cy.getByData("shoppingCard");
  })

  it.only('Click on shopping card B then get back to home page ...', () => {
    cy.getByData("shoppingCard").eq(1).find('a').click();
    cy.location("pathname").should("eq", "/shop");
    cy.getByData("newsletter").click();
    cy.getByData("logo").click();
    cy.location("pathname").should("eq", "/");
  })

  it.only('Click on shopping card D then get back to home page ...', () => {
    cy.getByData("shoppingCard").eq(3).find('a').click();
    cy.location("pathname").should("eq", "/shop");
    cy.getByData("newsletter").click();
    cy.getByData("logo").click();
    cy.location("pathname").should("eq", "/");
  })

  it.only('Click on shopping card F then get back to home page ...', () => {
    cy.getByData("shoppingCard").eq(5).find('a').click();
    cy.location("pathname").should("eq", "/shop");
    cy.getByData("newsletter").click();
    cy.getByData("logo").click();
    cy.location("pathname").should("eq", "/");
  })
})