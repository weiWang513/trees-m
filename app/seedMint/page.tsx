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
        <p className="m">Total supply：40000</p>
        <p className="b">
          Trees Protocol Inscription is an introduction that covers all
          developments within the ecosystem. Introducing Introducing, providing
          exclusive access to cutting-edge data and tools, ensuring.
        </p>
        <i className="mint-m"></i>
        <div className="op flex flex-col items-center justify-center">
          <p>MINT FEE: 0.1SOL+GAS</p>
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
