// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => { 
    cy.contains('Log in').click();
    cy.get('#mail').type(email);
    cy.get('#pass').type(password);
    cy.contains('Submit').click();
 });

 Cypress.Commands.add('createNewBook', (title, description, authors) => { 
    cy.contains('Add new').click();
    cy.get('#title').type(title);
    cy.get('#description').type(description);
    cy.get('#authors').type(authors);
    cy.contains('Submit').click();
 });

 Cypress.Commands.add('addNewBookToFavoritesDuringCreation', (title, description, authors) => { 
   cy.contains('Add new').click();
   cy.get('#title').type(title);
   cy.get('#description').type(description);
   cy.get('#authors').type(authors);
   cy.get('#favorite').click();
   cy.contains('Submit').click();
});

 Cypress.Commands.add('addToFavorite', (title) => { 
    // ищем родителя книги и добавляем в избранное
    cy.xpath(`//div[./div[./div[contains(text(), "${title}")]]]`).within(() =>{
       cy.contains('Add to favorite').click();
    });
 });

 Cypress.Commands.add('checkThatBookExistsInFavorites', (title) => { 
    // ищем родителя книги и добавляем в избранное
    cy.contains('Favorites').click();
    cy.contains(`${title}`);
});

Cypress.Commands.add('deleteBookFromFavorites', (title, page) => { 
   if (page == "Favorites") {
      cy.contains('Favorites').click();
      cy.xpath(`//div[./div[./div[contains(text(), "${title}")]]]`).within(() => {
      cy.contains('Delete from favorite').click()}); 
   }  
   if (page == "Books list") {
      cy.contains('Books list').click();
      cy.xpath(`//div[./div[./div[contains(text(), "${title}")]]]`).within(() => {
      cy.contains('Delete from favorite').click()}); 
   } 
});


