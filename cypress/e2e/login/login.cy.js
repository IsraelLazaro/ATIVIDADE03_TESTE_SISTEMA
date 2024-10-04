/// <reference types="cypress"/>


describe('Teste Funcional de Login - TESTE DE SISTEMA', () =>{
    it('Deve realizar login com sucesso', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('contain', 'Products');

    });
    it('Deve dar erro caso o login esteja incorreto', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type("standard_user1");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', "Epic sadface: Username and password do not match any user in this service");
        

    });

    it('Deve dar erro caso a senha esteja incorreta', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce1");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', "Epic sadface: Username and password do not match any user in this service");
        

    });
})