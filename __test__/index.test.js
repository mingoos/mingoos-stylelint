const config = require("..");
const fs = require("fs");
const stylelint = require("stylelint");

const validSCSS = fs.readFileSync("./__test__/scss/valid.scss", "utf-8");

describe("Valid scss linting", () => {
  let linting = null;

  beforeEach(() => {
    linting = stylelint.lint({
      code: validSCSS,
      config,
    });
  });

  it("Without errors", async () => {
    const data = await linting;

    return expect(data.errored).toBeFalsy();
  });

  it("Without wanings", async () => {
    const data = await linting;

    return expect(data.results[0].warnings).toHaveLength(0);
  });
});

const invalidSCSS = fs.readFileSync("./__test__/scss/invalid.scss", "utf-8");

describe("Invalid scss linting ", () => {
  let linting = null;

  beforeEach(() => {
    linting = stylelint.lint({
      code: invalidSCSS,
      config,
    });
  });
  it("With warningg", async () => {
    const data = await linting;

    return expect(data.results[0].warnings).toHaveLength(2);
  });
});
