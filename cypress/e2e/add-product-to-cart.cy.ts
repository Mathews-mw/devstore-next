describe('Add product to cart', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Shoud be able to navigate to the product page and add it to the cart', () => {
		// Comando get para uma url
		// Informamos que estamos procurando por um elemento HTML 'a' que possua no seu href o path /product
		// o first() junto do click() informa para clicar no primeiro elemento 'a' que encontrar com essas referências
		cy.get('a[href^="/product"]').first().click();

		// O should será uma assertion para validar um teste
		// Nesse caso, usamos o location('pathname') para indicar que estamos validando se no path da url contém o endereço '/product'
		cy.location('pathname').should('include', '/product');

		// O Cypress irá procurar por algum elemente em tela com o texto 'Adicionar ao carrinho' para então clicar nele
		cy.contains('Adicionar ao carrinho').click();

		// O Cypress irá validar com o 'should('exist') se existe um elemento em tela escrito 'Cart (1)'
		// Mais uma assertion aqui
		cy.contains('Cart (1)').should('exist');
	});

	// Basicamente, o que muda aqui, é que agora irá ter dois cliques no botão de compra da página
	// Mas a validação é para que ainda exista apenas 1 item no carrinho apesar dos 2 cliques
	it('Shoud not be count duplicated products on cart', () => {
		cy.get('a[href^="/product"]').first().click();

		cy.location('pathname').should('include', '/product');

		cy.contains('Adicionar ao carrinho').click();
		cy.contains('Adicionar ao carrinho').click();

		cy.contains('Cart (1)').should('exist');
	});

	it('Shoud be able to search for a product and add it to the cart', () => {
		// Procura por um elemento input em tela que tenha o nome 'q'
		// Função type() é para digitar algo nesse input, no caso, 'moletom'
		// Após isso, seleciona o pai do input, que no caso é o form, é dá a instrução de submit() para ele
		// Isso fará com que o seja feito um fetch de busca na rota da API
		cy.get('input[name=q]').type('moletom').parent('form').submit();

		cy.get('a[href^="/product"]').first().click();
		cy.location('pathname').should('include', '/product');

		cy.contains('Adicionar ao carrinho').click();
		cy.contains('Cart (1)').should('exist');
	});
});
