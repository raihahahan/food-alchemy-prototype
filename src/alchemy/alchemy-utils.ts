import { compareArr } from "../common/utils";
import { alchemyData, alchemyItems } from "./alchemy-data";

export function mix(items: string[]): string | null {
  if (items.length < 2) return null;

  for (let item of items) {
    if (!alchemyItems.includes(item) || !alchemyData[item].isMixable)
      return null;
  }

  const toCompare = alchemyData[items[0]].mixWith.filter((i) =>
    compareArr([items[0], ...i.item], items)
  );

  if (toCompare && toCompare.length > 0) {
    return toCompare[0].makes;
  }

  return null;
}
