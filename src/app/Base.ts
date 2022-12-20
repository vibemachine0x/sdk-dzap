import fetch from "isomorphic-unfetch";
import { baseUrl } from "../config";
import { Constructor } from "../types";

export abstract class Base {
  protected clientId: number;
  protected nftId: number;
  protected chainId: number;
  protected provider: any;

  constructor(config: Constructor) {
    this.clientId = config.clientId || 0;
    this.nftId = config.nftId || 0;
    this.chainId = config.chainId;
    this.provider = config.provider;
  }

  protected invoke<T>(endpint: string, params: any): Promise<T> {
    const url = `${baseUrl}${endpint}`;
    const headers = {
      "Content-Type": "application/json",
    };
    console.log(params);
    
    const config = {
      ...params,
      headers,
    };
    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
