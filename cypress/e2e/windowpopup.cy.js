var knot
describe("login successfully",()=>{
  before("windowpopup",()=>{
    cy.visit("/")
    cy.fixture("windowpop").then((holder)=>{
     knot=holder 
    })
    Cypress.on("uncaught:exception",()=> {
      return false
    })
  })

it("user should click windowpop",()=>{
  cy.get(knot.alertmodelbtn1).click()
  cy.get(knot.windowpopbtn).click()
  cy.get(knot.twitterbtn).click()
  cy.get(knot.twitterbtn).type("moghaluhope@gmail.com")
  cy.get(knot.followallbtn).click()


})


})