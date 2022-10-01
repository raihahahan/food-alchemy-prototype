import { expect, test } from "@jest/globals";
import { mix } from "../alchemy-utils";

test("banana and iceCream makes bananaSplit.", () => {
  expect(mix(["banana", "iceCream"])).toBe("bananaSplit");
});

test("iceCream and banana makes bananaSplit.", () => {
  expect(mix(["iceCream", "banana"])).toBe("bananaSplit");
});
