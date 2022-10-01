import { expect, test } from "@jest/globals";
import { mix } from "../alchemy-utils";

test("banana and iceCream makes bananaSplit.", () => {
  expect(mix(["banana", "iceCream"])).toBe("bananaSplit");
});

test("iceCream and banana makes bananaSplit.", () => {
  expect(mix(["iceCream", "banana"])).toBe("bananaSplit");
});

test("milk and whippingCream makes iceCream.", () => {
  expect(mix(["milk", "whippingCream"])).toBe("iceCream");
});

test("whippingCream and milk makes iceCream.", () => {
  expect(mix(["whippingCream", "milk"])).toBe("iceCream");
});

test("banana and milk makes nothing.", () => {
  expect(mix(["banana", "milk"])).toBe(null);
});

test("ham and bread makes nothing.", () => {
  expect(mix(["ham, bread"])).toBe(null);
});

test("ham, cheese, bread makes sandwich.", () => {
  expect(mix(["ham", "cheese", "bread"])).toBe("sandwich");
});

test("cheese, ham, bread makes sandwich.", () => {
  expect(mix(["cheese", "ham", "bread"])).toBe("sandwich");
});

test("flour, yeast, water makes bread.", () => {
  expect(mix(["flour", "yeast", "water"])).toBe("bread");
});

test("cocoa, milk, butter, sugar, water makes chocolate.", () => {
  expect(mix(["milk", "butter", "sugar", "water", "cocoa"])).toBe("chocolate");
});

test("milk, chocolate makes chocolateMilk.", () => {
  expect(mix(["milk", "chocolate"])).toBe("chocolateMilk");
});

test("grains, water makes rice.", () => {
  expect(mix(["grains", "water"])).toBe("rice");
});
