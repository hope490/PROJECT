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
    cy.get(stand.alertmodelbtn1).click()
    cy.get(stand.filedownloadbtn).click()
    cy.get(stand.typefieldbtn).type("i love you")
    cy.get(stand.Generatefilebtn).click()
    cy.get(stand.downloadbtn).click()
  })
})