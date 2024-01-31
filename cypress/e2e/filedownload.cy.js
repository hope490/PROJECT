var stand
describe("login successfully",()=>{
  before("filedownload",()=>{
    cy.visit('/')
    cy.fixture("filedownload").then((Ham)=>{
      stand=Ham
    })
    Cypress.on("uncaught:exception",()=>{
      return false

    })
  })

  it("user can click  filedownload",()=>{
   // cy.get(stand.alertmodelbtn1).should("exist")
    //cy.get(stand.alertmodelbtn1).should("be.visible")
    cy.get(stand.alertmodelbtn1).should("be.visible").click() 
    cy.get(stand.filedownloadbtn).should("exist")
    cy.get(stand.filedownloadbtn).click()
    cy.get(stand.typefieldbtn).type("i love you")
    cy.get(stand.Generatefilebtn).click()
    cy.get(stand.downloadbtn).should("not.be.disabled")
    //.get(stand.downloadbtn).should("be.disabled",{timeout: 10000})
    cy.get(stand.downloadbtn).click()
  })




 
  
  
})