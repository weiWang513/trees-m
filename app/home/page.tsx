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

const Home = () => {
  const qa = [
    {
      q: "How do Trees work?",
      a: 'Trees is a protocol chain that allows market participants to publish pricing information for others to use. The agreement is a three-party interaction:The data provider submits the pricing information to a Pyth oracle program. Trees provides multiple data providers for each price feed to increase the accuracy and robustness of the system.Trees’ on-chain oracle program on Solana combines provider submission data to produce a single total price and confidence interval.The application reads the price information generated by the oracle. More specifically, Trees allow users to "pull" prices onto the blockchain when needed. These prices are public and available to everyone on the chain.',
    },
    {
      q: 'What is an on-demand or " pull-based" oracle?',
      a: 'Trees is a protocol chain that allows market participants to publish pricing information for others to use. The agreement is a three-party interaction:The data provider submits the pricing information to a Pyth oracle program. Trees provides multiple data providers for each price feed to increase the accuracy and robustness of the system.Trees’ on-chain oracle program on Solana combines provider submission data to produce a single total price and confidence interval.The application reads the price information generated by the oracle. More specifically, Trees allow users to "pull" prices onto the blockchain when needed. These prices are public and available to everyone on the chain.',
    },
    {
      q: "How does Trees use Wormhole?",
      a: 'Trees is a protocol chain that allows market participants to publish pricing information for others to use. The agreement is a three-party interaction:The data provider submits the pricing information to a Pyth oracle program. Trees provides multiple data providers for each price feed to increase the accuracy and robustness of the system.Trees’ on-chain oracle program on Solana combines provider submission data to produce a single total price and confidence interval.The application reads the price information generated by the oracle. More specifically, Trees allow users to "pull" prices onto the blockchain when needed. These prices are public and available to everyone on the chain.',
    },
    {
      q: "What is the cost structure of using Trees Price Feeds?",
      a: 'Trees is a protocol chain that allows market participants to publish pricing information for others to use. The agreement is a three-party interaction:The data provider submits the pricing information to a Pyth oracle program. Trees provides multiple data providers for each price feed to increase the accuracy and robustness of the system.Trees’ on-chain oracle program on Solana combines provider submission data to produce a single total price and confidence interval.The application reads the price information generated by the oracle. More specifically, Trees allow users to "pull" prices onto the blockchain when needed. These prices are public and available to everyone on the chain.',
    },
  ];

  const [activeKeys, setActiveKeys] = useState<number[]>([]);
  const [showRModal, setShowRModal] = useState(false);
  const [showCModal, setShowCModal] = useState(false);

  return (
    <div className="home">
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
      <div className="main-g relative">
        <div className="f-c"></div>
        {/* <div className="m-img"></div> */}
        <Image
          src="/images/m-img.png"
          quality={100}
          alt="g-icon"
          className="m-img"
          width={260}
          height={305}
          priority
        />
        <div className="l-c"></div>
      </div>
      <div className="op-c">
        {/* <CircleG /> */}
        <p className="t">Trees Protocol</p>
        <p className="m">Powered by Solana</p>
        <p className="b">Seed Inscription</p>
        <p className="op flex flex-row">
          <Button size="small">Mint</Button>
          <Button size="small">Get Reward</Button>
        </p>
      </div>
      <div className="info">
        <p className="t">Trees Protocal</p>
        <p className="m">
          Trees aims to create a special digital asset liquidity and transaction
          cost optimization platform based on Solana, providing users with an
          efficient, low-cost, and easy-to-use full chain digital asset
          management and trading environment，By introducing diversified Mint
          mechanisms to change the asset distribution methods of special digital
          asset markets, Trees provides unprecedented flexibility and innovative
          space for deployers of special assets.
        </p>
        <div className="map"></div>
        <Button size="small">Read Whitepaper</Button>
      </div>
      <div className="mint">
        {/* <div className="mint-info"></div> */}
        <Image
          src="/images/rulers-a.png"
          quality={100}
          alt="g-icon"
          className="mint-info"
          width={322}
          height={866}
          priority
        />
        <CircleG />
        <CircleG />
      </div>
      <div className="qa">
        <div className="flex flex-row items-center justify-center text-[#00FF0A]">
          Q
          <Image
            src="/images/g-icon.png"
            alt="g-icon"
            width={21}
            height={36}
            priority
          />
          A
        </div>
        {qa.map((e, i) => {
          const isActive = activeKeys.includes(i);
          return (
            <div
              key={e.q}
              className={`qa-i p-24px mb-48px ${isActive ? "ac" : "deac"}`}
            >
              <p className="qa-q flex flex-row items-center justify-between">
                <span
                  className={`${isActive ? "text-[#00FF0A]" : "text-[#fff]"}`}
                >
                  {e.q}
                </span>
                <Image
                  src={`/images/${!isActive ? "open" : "closed"}.png`}
                  alt=""
                  width={30}
                  height={30}
                  priority
                  className="cursor-pointer"
                  onClick={() => {
                    if (isActive) {
                      setActiveKeys(activeKeys.filter((k) => k !== i));
                    } else {
                      setActiveKeys([...activeKeys, i]);
                    }
                  }}
                />
              </p>
              <p className={`qa-a pt-24px ${isActive ? "open" : "closed"}`}>
                {e.a}
              </p>
            </div>
          );
        })}
      </div>
      <Footer />
      {showRModal && <RModal />}
      {showCModal && <ConnectModal />}
    </div>
  );
};

export default Home;
