describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[type=text');

    it('just to make sure', () => {
        expect(1 + 2).to.equal(3);
    })

    describe('inputted information', () => {
        it('lets check the name', () => {
            nameInput()
                .should('have.value', '')
                .type('Joshua')
                .should('have.value', 'Joshua')
    })
    
    })

})