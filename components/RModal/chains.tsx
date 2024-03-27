import React, { useEffect, useState } from "react";
import "./index.scss";
import Link from "next/link";
import CompC from "@/components/Footer/compC";

const Chains: React.FC = () => {
  const routes = [
    { name: "Home", path: "/home" },
    { name: "Reward", path: "/reward" },
    { name: "Seed Mint", path: "/seedMint" },
    { name: "Whitepaper", path: "/whitepaper" },
  ];
  const [currentRoute, setCurrentRoute] = useState("");
  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, []);
  
  return (
    <div className="chains">
      
    </div>
  );
};

export default Chains;
