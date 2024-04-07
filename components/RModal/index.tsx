import React, { useEffect, useState } from "react";
import "./index.scss";
import Link from "next/link";
import CompC from "@/components/Footer/compC";

const RModal: React.FC = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Reward", path: "/reward" },
    { name: "Seed Mint", path: "/seedMint" },
    // { name: "Whitepaper", path: "/whitepaper" },
  ];
  const [currentRoute, setCurrentRoute] = useState("");
  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, []);

  return (
    <div className="rmodal-container">
      <div className="routes flex flex-col items-center justify-center">
        {routes?.map((route) => {
          return (
            <Link key={route.name} href={route.path}>
              <p
                className={`${
                  currentRoute === route.path
                    ? "text-[#00FF0A]"
                    : "text-[#ffffff]"
                }`}
              >
                {route.name}
              </p>
            </Link>
          );
        })}
        <p
          className="text-[#fff]"
          onClick={() =>
            window.open("https://trees-protocol.gitbook.io/trees/")
          }
        >
          Docs
        </p>
      </div>
      <CompC />
    </div>
  );
};

export default RModal;
