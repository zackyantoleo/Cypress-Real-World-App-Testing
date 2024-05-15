describe("API Testing for Login", () => {
  const loginEndpoint = "http://localhost:3001/login";
  const userData = {
    Type: "LOGIN",
    username: "Heath93",
    password: "s3cret",
  };

  it("Successful API Login", () => {
    cy.request("POST", loginEndpoint, userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("user");
    });
  });

  it("Failed API Login with wrong credentials", () => {
    const wrongUserData = { ...userData, password: "BBBB" };
    cy.request({
      method: "POST",
      url: loginEndpoint,
      body: wrongUserData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it("Failed API Login with missing credentials", () => {
    cy.request({
      method: "POST",
      url: loginEndpoint,
      body: { username: userData.username },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it("Failed API Login with wrong HTTP Method", () => {
    cy.request({
      method: "PUT",
      url: loginEndpoint,
      body: { userData },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
