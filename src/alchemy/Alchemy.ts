import { compareArr } from "../common/utils";
import { alchemyExtractionsData, alchemyMixturesData } from "./alchemy-data";

class Alchemy {
  public static readonly mixtures = alchemyMixturesData;
  public static readonly extractions = alchemyExtractionsData;

  public static mix(items: string[]): string[] {
    if (items.length < 2) return [];
    const toFind = alchemyMixturesData.filter((i) =>
      compareArr(i.mixture, items)
    );

    return toFind.length != 1 ? [] : toFind[0].makes;
  }

  public static extract(toExtract: string): string[] {
    const toFind = alchemyExtractionsData.filter((i) => i.from == toExtract);
    return toFind.length != 1 ? [] : toFind[0].to;
  }
}

export default Alchemy;
