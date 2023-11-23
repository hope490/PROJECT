var duplictate
describe("successful login",()=>{
  before("jquery",()=>{
    cy.visit("/")
    cy.fixture("jquerylist").then((folder)=>{
      duplictate=folder
    })
    Cypress.on("uncaught:exception",()=>{
      return false
    })

  })

it("user can click jquery",()=>{
 cy.get(duplictate.listboxbtn).click()
 cy.get(duplictate.jquerylistbtn).click()
 cy.get(duplictate.addallbtn).click()
 cy.get(duplictate.Laurabtn).click()
 //cy.get(duplictate.removebtn).click()
 cy.get(duplictate.removeallbtn).click()
 

 })



})