var sniper
describe("login successful", ()=>{
  before("Dynamic Data",()=>{
  cy.visit("/")  
  cy.fixture("Dynamic").then((shoot)=>{
   sniper=shoot
  })
  Cypress.on("uncaught:exception",()=>{
    return false
  })
  })



  it("user can click Dynamic data",()=>{
    cy.get(sniper.othersbtn).click()
    cy.get(sniper.Dynamicbtn).click()
    cy.get(sniper.getuserbtn).click()
    cy.get(sniper.othersbtn).click()
    cy.get(sniper.dragbtn).click()
    //cy.get(sniper.draggablebtn).trigger("#mydropzone",{force: true})
    //cy.get(sniper.dropherebtn).drop()
    const dataTransfer = new DataTransfer();
    cy.get("#todrag > :nth-child(2)").trigger("dragstart","#mydropzone")



    

  })
})