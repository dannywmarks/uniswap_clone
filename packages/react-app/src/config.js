import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x9ddca0556E541e3d1bd322602A18018eE79E996b"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/H6Ax9q9DGqIh4PYu6Tw1ZUSHKIjYjEyT",
  },
};