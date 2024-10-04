/// <reference types="cypress"/>

describe('Teste de compra de produtos - TESTE DE SISTEMA', () => {
    it('Deve adicionar um produto ao carrinho com sucesso', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('contain', 'Products');

        cy.contains('Sauce Labs Backpack').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="cart-list"]').should('contain', "Sauce Labs Backpack");
    });
    it('Deve adicionar mais de um produto no carrinho com sucesso', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('contain', 'Products');
        //Adicionando priemiro produto
        cy.contains('Sauce Labs Backpack').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('[data-test="continue-shopping"]').click();

        //Adicionando o segundo produto        
        cy.contains('Sauce Labs Bike Light').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('[data-test="cart-list"]').should('contain', "Sauce Labs Backpack");
        cy.get('[data-test="cart-list"]').should('contain', "Sauce Labs Bike Light");
    });
});