import { classNames } from "./classNames";

describe("classNames", () => {
  test("Only one class", () => {
    expect(classNames("someClass")).toBe(classNames("someClass"));
  });
  test("class width additionals", () => {
    const expected = "someClass opacityClass sizeClass";
    expect(classNames("someClass", {}, ["opacityClass", "sizeClass"])).toBe(
      expected
    );
  });
  test("class width mods", () => {
    const expected = "someClass opacityClass header";
    expect(classNames("someClass", { header: true }, ["opacityClass"])).toBe(
      expected
    );
  });
  test("class width undefined mods", () => {
    const expected = "someClass opacityClass footer";
    expect(
      classNames("someClass", { header: undefined, footer: true }, [
        "opacityClass",
      ])
    ).toBe(expected);
  });
  test("class width false mods", () => {
    const expected = "someClass footer";
    expect(classNames("someClass", { header: false, footer: true }, [])).toBe(
      expected
    );
  });
  test("false classNames", () => {
    const expected = "header footer nav";
    expect(classNames("footer", { header: true }, ["nav"])).not.toBe(expected);
  });
});
