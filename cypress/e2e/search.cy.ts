describe('Search products', () => {
	it('Shoud be able to search for products', () => {
		cy.searchQuery('moletom');

		cy.location('pathname').should('include', '/search');
		cy.location('search').should('include', 'q=moletom');

		cy.get('a[href^="/product"]').should('exist');
	});

	it('Should not be able to visit search page without a search query ', () => {
		// Informa para o Cypress que caso ele encotre alguma exceção durante essa operação, ele a ignore
		cy.on('uncaught:exception', () => {
			return false;
		});

		cy.visit('/search');

		cy.location('pathname').should('equal', '/');
	});
});
