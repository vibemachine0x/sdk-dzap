import { ethers } from "ethers";
import { config } from "../../config/config";
import { GAS_MULTIPLIER } from "../../constants";
import { getChecksumAddress } from "../../utils";
import { Endpoints } from "../api/Endpoints";
import { Request } from "../api/types";

export class Contract extends Endpoints {
  getContractAddress(): any {
    try {
      const contractAddress = config.contractAddresses[this.chainId];
      return getChecksumAddress(contractAddress);
    } catch (error) {
      throw new Error("Unsupported chainId");
    }
  }
  getContract(): any {
    return new ethers.Contract(
      this.getContractAddress(),
      config.abi,
      this.provider
    );
  }
  async swap(request: Request[], recipient: string): Promise<any> {
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
      return res;
    } catch (err) {
      return err;
    }
  }
}
