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

        cy.get('#lbFormulaCalculo').invoke('text').then(formula => {
            expect(formula).to.equal('10 + 123')
        })

        cy.get('#lbResultado').invoke('text').then(result => {
            expect(result).to.equal('133')
        })

        cy.get('input').contains('Limpar').click()

    });

    it('test35-25', () => {

        cy.get('#txtN1').type(35)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(25)
        cy.get('input').contains("Calcular").click()

        cy.get('#lbFormulaCalculo').invoke('text').then(formula => {
            expect(formula).to.equal('35 - 25')
        })

        cy.get('#lbResultado').invoke('text').then(result => {
            expect(result).to.equal('10')
        })

        cy.get('input').contains('Limpar').click()

    });

    it('test5*55', () => {

        cy.get('#txtN1').type(5)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(55)
        cy.get('input').contains("Calcular").click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula => {
            expect(formula).to.equal('5 * 55')
        })

        cy.get('#lbResultado').invoke('text').then(result => {
            expect(result).to.equal('275')
        })

        cy.get('input').contains('Limpar').click()

    });

    it('test20/2', () => {

        cy.get('#txtN1').type(20)
        cy.get('#rbFuncao_3').click()
        cy.get('#txtN2').type(2)
        cy.get('input').contains("Calcular").click()

        cy.get('#lbFormulaCalculo').invoke('text').then(formula => {
            expect(formula).to.equal('20 / 2')
        })

        cy.get('#lbResultado').invoke('text').then(result => {
            expect(result).to.equal('10')
        })

        cy.get('input').contains('Limpar').click()

    });

    it('calc-45-70', () => {
        cy.get('#txtN1').type(-45)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(70)

        cy.get('input').contains('Calcular').click()

        cy.get('#lbFormulaCalculo').invoke('text').then(formula => {
            expect(formula).to.equal('-45 - 70')
        })

        cy.get('#lbResultado').invoke('text').then(result => {
            expect(result).to.equal('-115')
        })
        cy.get('input').contains('Limpar').click()
    });

    
});