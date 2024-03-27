import Image from "next/image";
import "./index.scss";
import { Button } from "antd-mobile";
import Logo from '@/public/svg/logo.svg';

const Header = ({
  showRModal,
  setShowRModal,
  showCModal,
  setShowCModal,
}: any) => {
  return (
    <div className="header fixed flex flex-row items-center justify-between">
      <Image
        src="/svg/logo.svg"
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
        <Image
          src="/svg/menu.svg"
          alt="Logo"
          width={24}
          height={24}
          priority
          className="menu"
          onClick={() => {
            setShowRModal(!showRModal);
            setShowCModal(false);
          }}
        />
        {/* <div
          className="menu"
          onClick={() => {
            setShowRModal(!showRModal);
            setShowCModal(false);
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Header;
