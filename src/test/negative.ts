import { createSDKInstance, INVALID_CHAIN_ID } from "./utils";

const { assert } = require("chai");

describe("Negative case", () => {
  const client = createSDKInstance(INVALID_CHAIN_ID);

  it("1. Try to fetch unsupported chainId contract address", async () => {
    console.log(client.getContractAddress);

    assert.throws(client.getContractAddress, Error, "Unsupported chainId");
  });

  it("2. Try to create unsupported chainId contract", async () => {
    assert.throws(client.getContract, Error, "Unsupported chainId");
  });

  //   it("3. Unsupported chainId swap", async () => {
  //     assert.throws(
  //       await client.swap(getRequest(), getAccount()),
  //       Error,
  //       "Unsupported chainId"
  //     );
  //   });
});
