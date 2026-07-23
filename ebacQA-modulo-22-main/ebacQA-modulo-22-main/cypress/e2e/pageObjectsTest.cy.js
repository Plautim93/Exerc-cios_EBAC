/// <reference types="cypress" />


const {email, senha} = require('../fixtures/data.json')
const {profilePage} = require('../support/pages/profile.pages')

describe('Teste de Autenticação', () => {

  it('Deve fazer login com sucesso', () => {
    cy.login(email,senha)
    profilePage.customerEmail().should('contain', 'cliente@ebac.art.br')
  })
})