var screw
var driver
describe("login successfully", () => {
  before("Data pickers", () => {
    cy.visit('/')
    cy.fixture("selectors").then((folder) => {
      driver = folder
    })
    cy.fixture("bootstraps").then((files) => {
      screw = files
    })
     
    Cypress.on("uncaught:exception", () => {
      return false
    })

  })



  it("user can fill details", () => {
    cy.get(':nth-child(1) > :nth-child(2) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
    cy.get('.input-group-addon > .glyphicon').click()
    cy.get('tbody > :nth-child(1) > :nth-child(5)').click()
    //cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click()
    //cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(8)').click()
    cy.get('#sandbox-container1 > .input-group > .form-control').click()
    cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click()
    cy.get('.datepicker-months > .table-condensed > tbody > tr > td > .focused').click()
    cy.get('tbody > :nth-child(1) > .today').click()
    cy.get('[placeholder="Start date"]').click()
    cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click()
    cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(8)').click()
    cy.get('tbody > :nth-child(3) > :nth-child(3)').click()




  })


  it("user can click tabe", () => {
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
    cy.get(':nth-child(4) > .page_link').click()
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
    cy.get('#task-table-filter').type("Landing Page", "{enter}")
    //cy.get('#task-table > tbody > :nth-child(2) > :nth-child(2)').type("Landing Page","{enter}")
    cy.get('.btn').click()
    cy.get('.filters > :nth-child(2) > .form-control').type("chrisford", "{enter}")
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(4) > a').click()
    cy.get('input').type("javascript developer", "{enter}")
    cy.get('#example_next').click()
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(5) > a').click()
  })


  it("user should be able to click alertmodelbtn", () => {
    cy.get(driver.alertmodelbtn).click()
    cy.get(driver.bootbtn).click()
    //cy.get(driver.alertmodelbtn1).click()
    //cy.get(driver.bootstpbtn).click()

  })

  it.only("user can click bootstpbtn", () => {
    cy.get(screw.alertmodelbtn1).click()
    cy.get(screw.bootstpbtn).click()
    cy.get(screw.launchbtn).click()
    cy.get(screw.savechangesbtn).click()
  })







})


