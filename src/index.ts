import { ethers } from "ethers";
import { Endpoints } from "./app/api/Endpoints";
import { Base } from "./app/Base";
import { applyMixins } from "./utils/index";

class Typicode extends Base {}
interface Typicode extends Endpoints {}
// interface Typicode extends Contract {}

applyMixins(Typicode, [Endpoints]);

export default Typicode;

// console.log("start");

// const provider = new ethers.providers.JsonRpcProvider("");

// const client = new Typicode({
//   chainId: 137,
//   provider: provider,
// });

// const request = {
//   requests: [
//     {
//       amount: "1000000000000000000",
//       fromTokenAddress: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
//       slippage: 1,
//       toTokenAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
//     },
//   ],
// };

// client.getPath(request).then((res) => {
//   console.log(res);
// });
