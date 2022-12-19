import { Base } from "../base";

export class Endpoints extends Base {
  apiGetSwapPath(request: any): Promise<any> {
    return this.invoke("/get-path", request);
  }
  apiGetAllTokens(): Promise<any> {
    return this.invoke(`/token/get-all?chainId=${this.chainId}`, {});
  }
}
