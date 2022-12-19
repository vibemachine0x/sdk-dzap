import { Base } from "./base";
import { Endpoints } from "./endpoints/index";
import { applyMixins } from "./utils/index";

class Typicode extends Base {}
interface Typicode extends Endpoints {}

applyMixins(Typicode, [Endpoints]);

export default Typicode;
