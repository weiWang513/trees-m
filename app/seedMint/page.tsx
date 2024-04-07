"use client";
import "./index.scss";
import Header from "@/components/header";
import Image from "next/image";
import CircleG from "@/components/CircleG";
import { Button } from "antd-mobile";
import { useState } from "react";
import Footer from "@/components/Footer";
import RModal from "@/components/RModal";
import ConnectModal from "@/components/RModal/connectModal";

const SeedMint = () => {
  const [showRModal, setShowRModal] = useState(false);
  const [showCModal, setShowCModal] = useState(false);

  return (
    <div className="seed-mint">
      <Header
        showRModal={showRModal}
        setShowRModal={setShowRModal}
        showCModal={showCModal}
        setShowCModal={setShowCModal}
      />
      <div className="h">
        <CircleG />
      </div>
      {/* <CircleG /> */}
      <div className="mint-h"></div>
      <div className="op-c">
        {/* <CircleG /> */}
        <p className="t">SEED</p>
        <p className="m">Total supply：2100</p>
        <p className="b">
          The SEED Genesis NFT is a passport to the TREES PROTOCOL ecosystem,
          and possession of the SEED Genesis NFT will unlock all TREES PROTOCOL
          entitlements and airdrops.
        </p>
        <i className="mint-m"></i>
        <div className="op flex flex-col items-center justify-center">
          <p>MINT PRICE: TBA</p>
          <Button size="small">Connect wallet</Button>
        </div>
      </div>

      <Footer />
      {showRModal && <RModal />}
      {showCModal && <ConnectModal />}
    </div>
  );
};

export default SeedMint;
