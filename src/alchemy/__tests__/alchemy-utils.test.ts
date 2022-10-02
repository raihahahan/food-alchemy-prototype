import { expect, test } from "@jest/globals";
import { compareArr, readFile } from "../../common/utils";
import Alchemy from "../Alchemy";

const mix = Alchemy.mix;

test("Test on alchemy-utils-mix.test.txt. To test all possible mixtures.", () => {
  readFile("src/alchemy/__tests__/alchemy-utils-mix.test.txt", (item) => {
    const mixture = item.split(",");
    const separator = mixture.findIndex((i) => i == "/s/");
    const toMix = mixture.slice(0, separator);
    const expectedRes = mixture.slice(separator + 1);
    const mixed = mix(toMix);
    const check = compareArr(mixed, expectedRes);
    expect(check).toBe(true);
  });
});

test("Test on alchemy-utils-extract.test.txt. To test all possible extractions.", () => {
  readFile("src/alchemy/__tests__/alchemy-utils-extract.test.txt", (item) => {
    const extraction = item.split(",");
    const toExtract = extraction[0];
    const product = extraction.slice(2);
    const result = Alchemy.extract(toExtract);
    const check = compareArr(result, product);
    expect(check).toBe(true);
  });
});
