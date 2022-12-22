import {
  createSDKInstance,
  getAccount,
  getContract,
  getContractAddress,
  getRequest,
  VALID_CHAIN_ID,
} from "./utils";

const { expect } = require("chai");

describe("Positive case", () => {
  const client = createSDKInstance(VALID_CHAIN_ID);
  const request = getRequest();

  it("1. Verifiy contract address", async () => {
    expect(client.getContractAddress()).equal(getContractAddress());
  });

  it("2. Verifiy contract", async () => {
    expect(client.getContract().address).equal(getContract().address);
  });

  it("3. Test Get qoute rate api", async () => {
    const result = await client.getQuoteRate(request);
    expect(result.length).to.equal(request.length);
  }).timeout(100000);

  it("4. Test Swap params api", async () => {
    const result = await client.getSwapParams(request);
    expect(result.ercSwapDetails.length).to.equal(request.length);
  }).timeout(100000);

  it("5. Test swap method", async () => {
    const result = await client.swap(request, getAccount());
    expect(result).to.equal(result);
  }).timeout(100000);
  
});
