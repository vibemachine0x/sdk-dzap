import { ethers } from "ethers";
import { GAS_MULTIPLIER, STATUS } from "src/constants";
import { getChecksumAddress } from "src/utils";
import { config } from "../../config/config";
import { Endpoints } from "../api/Endpoints";
import { GetSwapParamsRequest } from "../api/types";

export class Contract extends Endpoints {
  getContract(): any {
    const contractAddress = config.contractAddresses[this.chainId];
    return new ethers.Contract(
      getChecksumAddress(contractAddress),
      config.abi,
      this.provider
    );
  }

  async swap(request: GetSwapParamsRequest, recipient: string): Promise<any> {
    try {
      const method = config.methods.batchSwap;
      const contract = this.getContract();
      const { ercSwapDetails, value } = await this.getSwapParams(request);
      const params = [ercSwapDetails, recipient, this.clientId, this.nftId];
      const estimateGas = await contract.estimateGas[method](...params, {
        value,
      });
      const result = await contract[method](...params, {
        gasLimit: estimateGas.mul(GAS_MULTIPLIER).div(10),
        value,
      });
      const res = await result.wait();
      return { status: STATUS.success, data: res };
    } catch (err) {
      return { status: STATUS.error, data: err };
    }
  }
}
