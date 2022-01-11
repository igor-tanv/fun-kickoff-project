const request = require("supertest")("http://localhost:3001/");
const expect = require("chai").expect;

describe("GET main controller", function () {
  it("pings main /", async function () {
    const response = await request.get("");
    expect(response.status).to.eql(200);
    expect(response.text).to.eql('API is running');
  });
});

describe("POST logout controller", function () {
  it("pings logout controller", async function () {
    const response = await request.post("auth/logout");
    expect(response.status).to.eql(200);
    expect(response.text).to.eql('You have successfully logged out');
  });
});
