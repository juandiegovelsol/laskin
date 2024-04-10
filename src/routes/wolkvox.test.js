const request = require("supertest");
const { app } = require("../../src/app");

/* afterEach((done) => {
  done();
}); */

describe("API test", () => {
  it("Deberia checkear la salud del sistema", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("server is ok");
  });
});
