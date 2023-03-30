import selectors from "../fixtures/selectors.json";

it("Бронирование фильма из доступного к просмотру в Админ части", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.contains("Администраторррская").should("be.visible");
  cy.fixture("loginData").then((data) => {
    const accessData = data.find((item) => item.name === "валидные данные");
    cy.get(selectors.loginInput).type(accessData.verification.login);
    cy.get(selectors.passInput).type(accessData.verification.pass);
  });
  cy.get(selectors.loginButton).click();
  cy.get(selectors.targetFilmName)
    .invoke("text")
    .then((nameHall) => {
      cy.visit("/");
      cy.get(selectors.dayForWeek).should("have.length", 7);
      cy.get(selectors.dayForWeek).eq(6).click();
      cy.contains(".movie-seances__hall", nameHall)
        .find(".movie-seances__time")
        .click();
      cy.get(selectors.byingMovieTitle).should("be.visible");
      cy.fixture("seatsForBooking").then((seats) => {
        seats.forEach((element) => {
          cy.get(
            `.buying-scheme__wrapper > :nth-child(${element.row}) > :nth-child(${element.seat})`
          ).click();
        });
        cy.get(selectors.acceptButton).click();
        cy.get(selectors.checkTitle).should("have.text", "Вы выбрали билеты:");
        cy.get(selectors.targetHallName).should("contain.text", nameHall);
      });
    });
});
