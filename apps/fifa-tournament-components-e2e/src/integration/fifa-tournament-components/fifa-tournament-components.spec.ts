describe('fifa-tournament-components: FifaTournamentComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fifatournamentcomponents--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to fifa-tournament-components!');
    });
});
