import Image from "next/image";
import "./index.scss";
import { Button } from "antd-mobile";

const Header = ({
  showRModal,
  setShowRModal,
  showCModal,
  setShowCModal,
}: any) => {
  return (
    <div className="header fixed flex flex-row items-center justify-between">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={77}
        height={19}
        priority
      />
      <div className="flex flex-row items-center">
        <Button
          size="small"
          onClick={() => {
            setShowCModal(!showCModal);
            setShowRModal(false);
          }}
        >
          Wallet
        </Button>
        <div
          className="menu"
          onClick={() => {
            setShowRModal(!showRModal);
            setShowCModal(false);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
