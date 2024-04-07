/* eslint-disable react/no-unescaped-entities */
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
      q: "What is TREES PROTOCOL?",
      a: "TREES PROTOCOL, which aims to provide users with the ability to launch projects, pledge assets, lend and borrow, bridge across chains and provide special asset liquidity. The protocol will use a combination of smart contracts and decentralized autonomous organizations (TREES DAO) to enable secure, efficient and transparent financial services, creating more value and opportunities for users.",
      h: 164,
    },
    {
      q: "What are the components of TREES PROTOCOL?",
      a: (
        <div>
          We propose Trees Protocol, a comprehensive DeFi protocol that includes
          the following core features:
          <p>
            1. Launch projects: Users can easily launch projects through our
            platform without complicated processes and procedures.
          </p>
          <p>
            2. Pledge Assets: Users can pledge their assets on our platform to
            get corresponding rewards and income.
          </p>
          <p>
            3. Borrowing and lending: Users can borrow and lend on our platform
            with low interest rate and easy operation.
          </p>
          <p>
            4. Cross-chain bridging: We provide cross-chain bridging service,
            users can freely transfer assets between different blockchains.
          </p>
          <p>
            5. Liquidity Provision: We provide liquidity for special assets,
            providing users with more trading opportunities.
          </p>
        </div>
      ),
      h: 267,
    },
    {
      q: "What is unique about Trees Protocol compared to other DEFI systems?",
      a: (
        <div>
          Our DeFi protocol has the following advantages:
          <p>
            1.Complete ecosystem to meet different financial needs of users.
          </p>
          <p>
            2. High security, safeguarding user assets through smart contracts
            and DAO.
          </p>
          <p>
            3. Low interest rate lending and borrowing, reducing users' cost of
            use.
          </p>
          <p>
            4. Convenient cross-chain operation, providing one-stop service.
          </p>
          <p>
            5. Design choices: One way to design an order book is as a separate
            chain of applications, although atomic composability needs to be
            weighed. Doing so enables customisability through the Solana Virtual
            Machine (SVM), without compromising Solana's speed and low cost.
          </p>
          <p>
            6. Scalability: Jump Crypto's second validator client, Firedancer,
            will be available on Solana, which will be interesting to watch as
            it may further increase Solana's performance by 10x or more. with 1
            million+ TPS in the test environment, Firedancer opens up new
            high-frequency trading and derivatives trading possibilities on the
            chain. Firedancer
          </p>
          <p>
            7.New Markets: New applications and asset classes can be used to
            create markets, such as specialised digital assets, and the
            opportunities are endless.
          </p>
        </div>
      ),
      h: 456,
    },
    {
      q: "What is Trees Protocol's token distribution model?",
      a: (
        <div>
          Total amount of tokens 1 billion The token distribution plan is as
          follows Pledge Mining (25%): 250,000,000 tokens Halve every 4 years,
          adjust mining rate according to the number of Genesis NFT pledges,
          decreasing mining rewards to incentivise early participation and
          Long-term holding. Team (10%): 90,000,000 tokens After 1 year of
          lock-up, 12 months linear release to ensure the team's long-term
          commitment and continuous contribution to the project. Liquidity
          Provision (LP) (10%): 100,000,000 tokens Supports the project's
          initial liquidity by injecting significant DEX and CEX liquidity pools
          in phases to facilitate trading and stabilise the token price.
          Marketing (20%): 100,000,000 tokens Used for marketing, KOL
          cooperation, social media activities, advertising and PR, etc. to
          drive project awareness and participation. Community Building and
          Governance (5%): 100,000,000 tokens Incentives for community
          participation, voting governance, proposal rewards, etc., to support
          the construction of an active and highly engaged community. Airdrop
          (2%): 20,000,000 tokens Airdrops to early community contributors to
          encourage and reward early community support. Funding (8%): 80,000,000
          tokens Locked up for 1 year followed by a 12 month linear release to
          ensure long term commitment and continued contribution to the project.
          Public Private Placement (20%): 200,000,000 tokens
        </div>
      ),
      h: 481,
    },
  ];

  const tables = [
    ["Points ranking", "1", "2", "3", "4-10", "11-20", "21-100", "100-500"],
    [
      "Get rewarded",
      "100000",
      "60000",
      "40000",
      "30000",
      "20000",
      "10000",
      "6000",
    ],
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
        <Image
          src="/images/m-img.png"
          quality={100}
          alt=""
          className="m-img"
          width={260}
          height={252}
          priority
        />
        <div className="l-c">
          <div className="inn"></div>
          <div className="l-d">
            <div className="d-inn"></div>
          </div>
        </div>
      </div>
      <div className="op-c">
        {/* <CircleG /> */}
        <p className="t">Trees Protocol</p>
        <p className="m">Powered by Solana</p>
        <p className="b">SEED Genesis NFT</p>
        <p className="op flex flex-row">
          <Button size="small">Mint</Button>
          <Button size="small">Get Reward</Button>
        </p>
      </div>
      <div className="info">
        <p className="t">Trees Protocol</p>
        <p className="m">
          which aims to provide users with the ability to launch projects,
          pledge assets, lend and borrow, bridge across chains and provide
          special asset liquidity. The protocol will use a combination of smart
          contracts and decentralized autonomous organizations (TREES DAO) to
          enable secure, efficient and transparent financial services, creating
          more value and opportunities for users.
        </p>
        <div className="map"></div>
        <Button size="small" className="text-3xl">
          Read Whitepaper
        </Button>
      </div>
      <div className="mint">
        {/* <div className="mint-info"></div> */}
        {/* <Image
          src="/images/rulers-a.png"
          quality={100}
          alt="g-icon"
          className="mint-info"
          width={322}
          height={866}
          priority
        /> */}
        <div className="mint-rulers">
          <Image
            src="/images/h-h.png"
            quality={100}
            alt="g-icon"
            width={322}
            height={170}
            priority
          />
          <p className="tt">MINT Rules</p>
          <p className="st">SEED Genesis NFT Public Chain: Solana</p>
          <p className="st">Genesis NFT Name: Seed</p>
          <p className="st">
            Total number of Genesis NFT: 2100(1,000 whitelisted, 1,000 public
            offerings, 100 team reservations)
          </p>
          <p className="st">Single sheet: 2000 tokens</p>
          <p className="st">
            Single Mint fee: 0.8 sol+sol real-time gas fee(WL)
          </p>
          <p className="st">Single Mint fee: 1sol+sol real-time gas fee(PS)</p>
        </div>
        <div className="mint-rulers mint-rulers-b">
          <p className="tt">Invite Reward:</p>
          <p className="st">
            Each successful invitation to a new user can earn 1 point.Obtain
            different levels of Trees token rewards based on the total
            pointsearned
          </p>
          <div className="tables flex felx-row ">
            {tables.map((table, i) => {
              return (
                <div className="line flex-1" key={i}>
                  {table.map((item, index) => {
                    return (
                      <p
                        key={item}
                        className="line-i flex items-center justify-center"
                      >
                        {i > 0 && index > 0 && <i></i>}
                        {item}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <CircleG />
        <CircleG />
      </div>
      <div className="qa">
        <div className="h flex flex-row items-center justify-center text-[#00FF0A]">
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
              <div className={`qa-a qa-a-${i} pt-24px ${isActive ? "open" : "closed"}`}>
                {e.a}
              </div>
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
