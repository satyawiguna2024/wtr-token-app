import { AutoConnect, useConnect } from "thirdweb/react";
import { client } from "../client";
import { createWallet } from "thirdweb/wallets";

export default function ConnectWallet() {
  const { connect, isConnecting } = useConnect();

  return (
    <>
      <AutoConnect client={client} />
      <button
        onClick={() =>
          connect(async () => {
            const metamask = createWallet("io.metamask");
            await metamask.connect({ client: client });
            return metamask;
          })
        }
        type="button"
        disabled={isConnecting}
        className={`w-full py-2 text-white my-3 rounded-lg ${
          isConnecting
            ? "bg-gray-500 cursor-not-allowed animate-pulse"
            : "bg-blue-400 hover:bg-blue-500 cursor-pointer"
        }`}
      >
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </button>
    </>
  );
}
