import { alchemyData, alchemyItems } from "./alchemy/alchemy-data";
import { mix } from "./alchemy/alchemy-utils";

function main() {
  const args = process.argv;
  if (args.length > 4) {
    const arr = [];
    for (let i = 2; i < args.length; i++) {
      arr.push(args[i]);
    }
    const mixed = mix(arr);
    console.log("Items: ", alchemyItems.length);
    if (mixed != null) {
      console.log(`${arr} makes ${mixed}`);
    } else {
      console.log("No such mixture.");
    }
  }
}
main();
