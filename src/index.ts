import { alchemyData } from "./alchemy/alchemy-data";
import { mix } from "./alchemy/alchemy-utils";

function main() {
  if (process.argv.length == 4) {
    const item1: string = process.argv[2];
    const item2: string = process.argv[3];
    const mixed = mix([item1, item2]);
    if (mixed != null) {
      console.log(
        `${alchemyData[item1].prettyPrint} and ${alchemyData[item2].prettyPrint} makes ${alchemyData[mixed].prettyPrint}.`
      );
    } else {
      console.log("No such mixture.");
    }
  }
}
main();
