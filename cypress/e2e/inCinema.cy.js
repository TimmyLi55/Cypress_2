import selectors from "../fixtures/selectors.json";
describe("Проверка отображения главной страницы", () => {
  it("На экране отображается 7 дней недели", () => {
    cy.visit("/");
    cy.get(selectors.dayForWeek).should("have.length", 7);
  });
  it("Возможность выбора мест в зале", () => {
    cy.visit("/");
    cy.get(selectors.dayForWeek).eq(6).click();
    cy.get(selectors.movie).eq(0).contains("09:00").click();
    cy.get(selectors.byingMovieTitle).should("be.visible");
  });
});
