import { Base } from "../Base";
import {
  GetPathRequest,
  GetSwapParamsRequest,
  GetSwapParamsResponse,
} from "./types";

export class Endpoints extends Base {
  getPath(request: GetPathRequest): Promise<any> {
    return this.invoke("swap/get-path", {
      chainId: this.chainId,
      requests: request.requests,
    });
  }
  
  getTokens(): Promise<any> {
    return this.invoke("https://api.dzap.io/token/get-all?chainId=137", {});
  }
  getSwapParams(request: GetSwapParamsRequest): Promise<GetSwapParamsResponse> {
    return this.invoke("swap/get-params", {
      chainId: this.chainId,
      swapParams: request.swapParams,
    });
  }
}
