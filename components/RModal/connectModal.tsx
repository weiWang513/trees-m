/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./connectModal.scss";
import Link from "next/link";
import CompC from "@/components/Footer/compC";
import Image from "next/image";

const RModal: React.FC = () => {
  const wallets = [
    {
      img: "/images/Metamask.png",
      name: "Metamask",
    },
    {
      img: "/images/TrustWallet.png",
      name: "Install TrustWallet",
    },
    {
      img: "/images/Binance.png",
      name: "Binance Web3 Wallet",
    },
    {
      img: "/images/Block.png",
      name: "Install Block Wallet",
    },
    {
      img: "/images/Gnosis.png",
      name: "Gnosis Safe App",
    },
    {
      img: "/images/Coinbase.png",
      name: "Coinbase Wallet",
    },
    {
      img: "/images/WalletConnect.png",
      name: "WalletConnect",
    },
    {
      img: "/images/ZenGo.png",
      name: "ZenGo",
    },
    {
      img: "/images/Venly.png",
      name: "Venly",
    },
    {
      img: "/images/Bitget.png",
      name: "Install Bitget Wallet",
    },
    {
      img: "/images/Crypto.png",
      name: "Install Crypto.com Wallet",
    },
    {
      img: "/images/Unstoppable.png",
      name: "Unstoppable Domains",
    },
  ];
  return (
    <div className="c-modal-container">
      <p className="text-center t">Connect Wallet</p>
      <p className="st">
        Connecting your wallet is like "logging in" on Web3. Select your wallet
        from the options to get started.nstalled MetaMask but can't connect? Go
        to the extension manager in your browser and on non-primarywallets, such
        as Phantom or Brave, click set the site access to 'on click
      </p>
      <div className="flex flex-row items-center justify-center flex-wrap walls">
        {wallets.map((e, i) => {
          return (
            <div key={i} className="walls-i flex flex-col items-center">
              <div className="img flex items-center justify-center">
                <Image
                  src={e.img}
                  alt=""
                  className="cursor-pointer img-i"
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <p className="text-center text-[#fff]">{e.name}</p>
            </div>
          );
        })}
      </div>
      <div className="link flex justify-center">
        <p>New to Polygon?</p>
        <p>Learn about Wallets ↗</p>
      </div>
    </div>
  );
};

export default RModal;
