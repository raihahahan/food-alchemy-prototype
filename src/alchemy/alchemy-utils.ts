import { compareArr } from "../common/utils";
import { alchemyData, alchemyItems } from "./alchemy-data";

export function mix(items: string[]): string | null {
  for (let item of items) {
    if (
      !alchemyItems.includes(item) ||
      !alchemyItems.includes(item) ||
      !alchemyData[item].isMixable
    )
      return null;
  }

  for (let item of items) {
    const toFind = alchemyData[item].mixWith.filter((i) =>
      compareArr([item, ...i.item], items)
    );
    console.log(toFind);
    if (toFind.length == 1) {
      for (let j of toFind[0].item) {
        if (!items.includes(j)) return null;
      }
      return toFind[0].makes;
    }
  }

  return null;
}
