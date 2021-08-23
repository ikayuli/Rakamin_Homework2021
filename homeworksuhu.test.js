const Convert = require("./konversi");

test("test celcius to reamur", () => {
  const transform = new Convert();
  expect(transform.fromCelcius('reamur',123)).toBe(98.4);
});

test("test reamur to celcius", () => {
    const transform = new Convert();
    expect(transform.fromReamur('celcius',234)).toBe(292.5);
  });

test("test farenheit to reamur", () => {
    const transform = new Convert();
    expect(transform.fromFarenheit('reamur',6)).toBe(-11.555555555555555);
  });