export type Request = {
  amount: string;
  fromTokenAddress: string;
  toTokenAddress: string;
  slippage: number;
};

export interface GetPathRequest {
  requests: Request[];
}

export interface GetSwapParamsRequest {
  swapParams: Request[];
}
export interface GetSwapParamsResponse {
  value: string;
  ercSwapDetails: {
    executor: string;
    desc: {
      srcToken: string;
      dstToken: string;
      srcReceiver: string;
      dstReceiver: string;
      amount: string;
      minReturnAmount: string;
      flags: number;
      permit: string;
    };
    routeData: string;
    permit: string;
    minReturnAmount: number;
  }[];
}
