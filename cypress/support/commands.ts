/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		searchQuery(query: string): Chainable<void>;
	}
}

Cypress.Commands.add('searchQuery', (query: string) => {
	cy.visit('/');

	cy.get('input[name=q]').type(query).parent('form').submit();
});
