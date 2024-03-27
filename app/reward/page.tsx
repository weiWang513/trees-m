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

const Reward = () => {
  const [showRModal, setShowRModal] = useState(false);
  const [showCModal, setShowCModal] = useState(false);

  const [acInfo, setAcInfo] = useState(0);
  const [acTab, setAcTab] = useState(0);

  return (
    <div className="reward">
      <Header
        showRModal={showRModal}
        setShowRModal={setShowRModal}
        showCModal={showCModal}
        setShowCModal={setShowCModal}
      />
      <div className="h">
        <CircleG />
      </div>
      <div className="main-g relative">
        <p className="text-center">SEED Inscription</p>
        <p className="text-center">Invitation Reward</p>
      </div>

      <div className="op-c">
        <div className="border-c m-t flex flex-col relative">
          <p className="t flex-1">My trees</p>
          <p className="b flex-1">1000</p>
          <i className="r-i"></i>
        </div>
        <CircleG />
        {/* <CircleG /> */}
        <p className="m">Invite friends to earn more Trees XP</p>
        <p className="op flex flex-row">
          <Button size="small">
            <Image
              src="/svg/t.svg"
              alt="g-icon"
              width={18}
              height={18}
              priority
            />
            Twitter
          </Button>
          <Button size="small">
            <Image
              src="/svg/x.svg"
              alt="g-icon"
              width={18}
              height={18}
              priority
            />
            Telegram
          </Button>
        </p>
      </div>
      <div className="info">
        <p className="t flex items-center justify-center">
          invitation code: 4234234234 <i className="copy"></i>
        </p>
        <CircleG />
      </div>
      <div className="tables">
        <CircleG />
        <div className="h flex flex-row">
          {["Terms of participation", "Reward System"].map((item, index) => {
            return (
              <p
                key={item}
                className={`flex-1 ${acInfo === index ? "ac-info" : ""}`}
                onClick={() => setAcInfo(index)}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="border-c infos">
          <p>
            1. Each user is only allowed to use one address account to
            participate in the inviter mechanism.
          </p>
          <p>
            2. The Trees Protocol will verify the authenticity of the invitation
            activity and any attempt to use improper means The behavior of
            obtaining rewards (such as bulk use of address invitations, mutual
            brushing of address invitations, etc.), Trees Protocol has the right
            to obtain reward eligibility for all consumer related addresses.
          </p>
          <p>
            3. If the points are the same, the ranking will be based on the
            timestamp when the corresponding points are reached.
          </p>
          <p>
            4. All invitation rewards will be airdropped to the recipient within
            3 working days after verifying the validity of the invitation The
            Sol address for the reward.
          </p>
          <p>
            5. As an invitation reward, there are a total of 1035 Seed airdrops,
            and if the ranking does not reach 500 people, Seeds that have not
            been airdropped will be permanently destroyed by entering a black
            hole address at the end of the airdrop.
          </p>
        </div>
        <div className="h flex flex-row">
          {["My invitation", "Leaderboard"].map((item, index) => {
            return (
              <p
                key={item}
                className={`flex-1 ${acTab === index ? "ac-info" : ""}`}
                onClick={() => setAcTab(index)}
              >
                {item}
              </p>
            );
          })}
        </div>

        <div className="border-c tabs">
          <div className="flex flex-row">
            {(acTab === 0
              ? ["user", "time"]
              : ["Rank", "User", "Invite", "XP"]
            ).map((e, i) => {
              return (
                <div key={i} className="flex-1 line">
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, id) => {
                    return (
                      <p key={id} className="text-2xl text-center line-i">
                        {e}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <p className="more text-center text-2xl">MORE ……</p>
        </div>
      </div>
      <Footer />
      {showRModal && <RModal />}
      {showCModal && <ConnectModal />}
    </div>
  );
};

export default Reward;
