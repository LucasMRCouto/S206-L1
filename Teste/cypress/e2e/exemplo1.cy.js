/// <reference types="cypress"/>

describe("Criando cenario de teste para o site globalsqa", ()=> {
  
  it.skip("Caso de teste: Registrando um usuario no site com sucesso", ()=> {
    
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Lucas")
    cy.get('#Text1').type("Couto")
    cy.get('#username').type("Lucas")
    cy.get('#password').type("inatel")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
  })

  it.skip("Caso de teste: Registrando um usuario com falha (faltando senha)", ()=> {
    
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/register")
    cy.get('#firstName').type("Lucas")
    cy.get('#Text1').type("Couto")
    cy.get('#username').type("Lucas")
    cy.get('#password').type("inatel")
    cy.get('#password').clear()
    cy.get(".has-error > .help-block").should("have.text", "Password is required")
    cy.get('.btn-primary').should("be.disabled")
  })

  it("Caso de teste: Registrando login com sucesso", ()=> {
    
    let info = criarUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", info[0])
  })

})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let user = horas + minutos + seg + "Id"
  let senha = horas + minutos + seg + "senha"
  let userInfo = [user, senha]

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")

  return userInfo
}