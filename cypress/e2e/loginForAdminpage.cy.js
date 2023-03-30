import selectors from "../fixtures/selectors.json";
import loginData from "../fixtures/loginData.json";
describe("Проверка логина в Админ часть", () => {
  loginData.forEach((el) => {
    it(`${el.name}`, () => {
      cy.visit("http://qamid.tmweb.ru/admin/");
      cy.get(selectors.pageSubtitle).should("have.text", "Администраторррская");
      cy.get(selectors.loginInput).type(`${el.verification.login}`, {
        delay: 50,
      });
      cy.get(selectors.passInput).type(`${el.verification.pass}`, {
        delay: 50,
      });
      cy.get(selectors.loginButton).click();
      cy.contains(`${el.verification.containText}`).should("be.visible");
    });
  });
});
