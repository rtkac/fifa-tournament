describe('fifa-tournament-components: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&knob-title=Test title'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Test title');
    });
});
