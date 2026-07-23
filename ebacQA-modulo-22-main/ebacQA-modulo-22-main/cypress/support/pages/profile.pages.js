/// <reference types="cypress" />

export const profilePage = {
    customerEmail: () => {return cy.get('[data-testid="CustomerEmail"]')},
}