
/// <reference types="cypress" />

describe('template spec', () => {
  it('global use case', () => {
    cy.visit('/')

    cy.get('[data-cy="show-filters-button"]').click()

    cy.get('[data-cy="search-input"]').type("CRS-6")

    cy.get('[data-cy="submit-filters-button"]').click();

    cy.get('[data-cy="show-filters-button"]').click()

    cy.get('[data-cy="reset-filters-button"]').click();

    cy.get('[data-cy="launch-link"]').first().click();

    cy.get('[data-cy="edit-launch-link"]').click();

    cy.url().should('include', '/edit');

    const newName = "Super Rocket";

    cy.get('[data-cy="edit-launch-name-input"]').clear().type(newName);

    cy.get('[data-cy="edit-launch-name-submit"]').click();

    cy.contains(newName);
  })
})
