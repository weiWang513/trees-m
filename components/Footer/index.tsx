import Image from "next/image";
import "./index.scss";
import CompC from './compC'
export default function Footer({ inner }: any) {
  
  return (
    <div className="footer">
      {inner ? <></> : <CompC />}
      <div className="foot m-auto flex items-center justify-center">
        {inner ? (
          <CompC />
        ) : (
          <div className="logo"></div>
        )}
      </div>
    </div>
  );
}
