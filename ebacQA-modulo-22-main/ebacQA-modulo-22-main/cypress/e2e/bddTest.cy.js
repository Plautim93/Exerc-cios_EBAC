/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const {profilePage} = require('../support/pages/profile.pages')

Given('que estou na pagina inicial',()=>{
    cy.setCookie('ebacStoreVersion', 'v2',{ domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
})

When('eu faço login com o usuário {string} e  senha {string}', (email, senha)=> {
    cy.login(email,senha)
})

Then('o email do usuário deve aparecer na página do perfil', () => {
        profilePage.customerEmail().should('contain', 'cliente@ebac.art.br')
})
    

