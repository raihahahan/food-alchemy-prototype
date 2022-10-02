import Alchemy from "./alchemy/Alchemy";
import { primitives } from "./alchemy/alchemy-data";

const mix = Alchemy.mix;

function main() {
  const args = process.argv;
  if (args.length >= 4) {
    const arr = [];
    for (let i = 2; i < args.length; i++) {
      arr.push(args[i]);
    }
    const mixed = mix(arr);
    console.log(primitives);
    console.log(primitives.length);
    if (mixed.length > 0) {
      console.log(`${arr} makes ${mixed}`);
    } else {
      console.log("No such mixture.");
    }
  }
}
main();
