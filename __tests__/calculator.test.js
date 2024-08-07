const request = require("supertest");
const express = require("express");
const app = require("../src/index"); // Asegúrate de exportar `app` desde `src/index.js`

describe("Calculator API", () => {
  test("should add two numbers", async () => {
    const response = await request(app).get("/sum?a=1&b=2");
    expect(response.body.result).toBe(3);
  });

  test("should subtract two numbers", async () => {
    const response = await request(app).get("/subtract?a=5&b=3");
    expect(response.body.result).toBe(2);
  });

  test("should multiply two numbers", async () => {
    const response = await request(app).get("/multiply?a=3&b=4");
    expect(response.body.result).toBe(12);
  });

  test("should divide two numbers", async () => {
    const response = await request(app).get("/divide?a=10&b=2");
    expect(response.body.result).toBe(5);
  });
});
