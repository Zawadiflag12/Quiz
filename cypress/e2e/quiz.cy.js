describe( "Quiz", () => {
   it( "should display the start quiz button", () => {
      cy.visit( "http://localhost:3001" );
      cy.get( "button" ).contains( "Start Quiz" );
   } );
   it( "should display card containing quiz question", () => {
      cy.visit( "http://localhost:3001" );
      cy.get( "button" ).contains( "Start Quiz" ).click();
      cy.get( ".card" ).should( "be.visible" );
   });
   
   it( "should display the quiz question", () => {
      cy.visit( "http://localhost:3001" );
      cy.get( "button" ).contains( "Start Quiz" ).click();
      cy.get( "h2" ).should( "not.be.empty" );
   } );
   
   it( "should display the quiz options", () => {
      cy.visit( "http://localhost:3001" );
      cy.get( "button" ).contains( "Start Quiz" ).click();
      cy.get( "button" ).should( "have.length", 4 );
   } );

   it( "should display the quiz results", () => {
   cy.visit( "http://localhost:3001" );
      cy.get( "button" ).contains( "Start Quiz" ).click();
      for ( let i = 0; i < 10; i++ ) {
         cy.get( "button" ).contains( "1" ).click();
      }
      cy.get( ".alert" ).contains( "Your score:" ); 
   } );
} )