import { CONTRACT } from "../client";


export const addTokenToWallet = async () => {
  try {
    if (!window.ethereum) {
      alert("MetaMask not installed!");
      return;
    }

    const tokenAddress = CONTRACT.address; // alamat token ERC20 kamu
    const tokenSymbol = "WTR";
    const tokenDecimals = 18;
    // const tokenImage = "https://yourdomain.com/wtr.png"; // opsional, bisa logo token kamu

    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
        },
      },
    });

    if (wasAdded) {
      console.log("✅ Token added to MetaMask");
    } else {
      console.log("⚠️ User rejected token add");
    }
  } catch (error) {
    console.error("❌ Failed to add token:", error);
  }
};
