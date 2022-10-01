import { expect, test } from "@jest/globals";
import { alchemyData } from "../alchemy-data";

test("All ingredients which are primitive must have empty components.", () => {
  expect(
    Object.values(alchemyData).filter(
      (i) => i.isPrimitive && i.components.length > 0
    ).length
  ).toBe(0);
});

test("All ingredients which are not primitive must not have empty components.", () => {
  expect(
    Object.values(alchemyData).filter(
      (i) => !i.isPrimitive && i.components.length == 0
    ).length
  ).toBe(0);
});

test("All ingredients which are mixable must not have empty mixWith.", () => {
  expect(
    Object.values(alchemyData).filter(
      (i) => i.isMixable && i.mixWith.length == 0
    ).length
  ).toBe(0);
});

test("All ingredients which are not mixable must have empty mixWith.", () => {
  expect(
    Object.values(alchemyData).filter(
      (i) => !i.isMixable && i.mixWith.length > 0
    ).length
  ).toBe(0);
});
