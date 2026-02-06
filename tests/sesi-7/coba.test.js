import fetch from "node-fetch";
import { expect } from "chai";

describe("Simple API Automation Test", function () {

  it("GET product by id", async function () {
    const response = await fetch("https://dummyjson.com/products/1");

    // assert status code
    expect(response.status).to.equal(200);

    const data = await response.json();

    // assert response body
    expect(data).to.have.property("id");
    expect(data).to.have.property("title");
  });

  it("POST create new user", async function () {
    const payload = {
      firstName: "Vara",
      lastName: "QA",
      age: 21
    };

    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    // assert status code
    expect(response.status).to.equal(201);

    const data = await response.json();

    // assert response body
    expect(data).to.have.property("id");
    expect(data.firstName).to.equal("Vara");
  });

});
