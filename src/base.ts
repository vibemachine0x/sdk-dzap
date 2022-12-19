import fetch from "isomorphic-unfetch";
import { baseUrl } from "./config/app-config";

type Config = {
  clientId: number;
  chainId: number;
  provider: any;
};

export abstract class Base {
  private clientId: number;
  protected chainId: number;
  private provider: any;
  constructor(config: Config) {
    this.clientId = config.clientId;
    this.chainId = config.chainId;
    this.provider = config.provider;
  }

  protected invoke<T>(endpint: string, params: any): Promise<T> {
    console.log(this.clientId, this.chainId, this.provider);

    const url = `${baseUrl}${endpint}`;
    const headers = {
      "Content-Type": "application/json",
    };
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
