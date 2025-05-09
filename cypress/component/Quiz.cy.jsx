import React from "react";
import  Quiz  from "../../client/src/components/Quiz";

describe("Quiz Component", () => {
   it("should display the start button", () => {
      cy.mount(<Quiz />);
      cy.get("button").contains("Start Quiz").should("exist");
   });
   
   it("should display card containing quiz question", () => {
      cy.mount(<Quiz />);
      cy.get("button").contains("Start Quiz").should("exist").click();
      cy.get('.card').should('be.visible');
   });


   it("Should display the quiz question", () => {
      cy.mount(<Quiz />);
      cy.get("button").contains("Start Quiz").should("exist").click();
      cy.get("h2").should("not.be.empty");
   });


   it("should display the quiz options", () => {
      cy.mount(<Quiz />);
      cy.get("button").contains("Start Quiz").should("exist").click();
      cy.get(".btn").should("have.length", 4);
   });


   it("should display the quiz results", () => {
      cy.mount(<Quiz />);
      cy.get("button").contains("Start Quiz").should("exist").click();
      for ( let i = 0; i < 10; i++ ) {
         cy.get( "button" ).contains( "1" ).click();
      }
      cy.get( ".alert" ).contains( "Your score:" ); 
   });
})
