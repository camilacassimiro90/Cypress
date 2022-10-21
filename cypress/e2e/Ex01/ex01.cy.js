context('testCalc', () => {
    before(() => {
        cy.visit('https://localhost:44360/CalcSimples.aspx')
    });

    afterEach(() => {
        // cy.get('#btnLimpar').click()
    });

    it('test10+123', () => {

        cy.get('#txtN1').type(10)
        cy.get('#rbFuncao_0')
        cy.get('#txtN2').type(123)
        cy.get('input').contains("Calcular").click()

    });

    it('test35-25', () => {

        cy.get('#txtN1').type(35)
        cy.get('#rbFuncao_1')
        cy.get('#txtN2').type(25)
        cy.get('input').contains("Calcular").click()

    });

    it('test5*55', () => {

        cy.get('#txtN1').type(5)
        cy.get('#rbFuncao_2')
        cy.get('#txtN2').type(55)
        cy.get('input').contains("Calcular").click()

    });

    it('test20/2', () => {

        cy.get('#txtN1').type(20)
        cy.get('#rbFuncao_3')
        cy.get('#txtN2').type(2)
        cy.get('input').contains("Calcular").click()

    });

});