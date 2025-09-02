import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import ABI from "./abi/ABI.json";

if(!import.meta.env.VITE_THIRDWEB_CLIENT_ID) {
  throw new Error("ClientID not found!");
}

export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID
});

const chain = defineChain(sepolia);
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS


export const CONTRACT = getContract({
  client,
  chain,
  address: contractAddress,
  abi: ABI
});