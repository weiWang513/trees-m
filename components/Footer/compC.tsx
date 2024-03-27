import './compC.scss';
import Image from "next/image";

const CompC = () => {
  return (
    <div className="comp-c">
      <div className="comp flex flex-row m-auto items-center justify-between">
        {[1, 1, 1].map((_, i) => {
          return <div key={i} className='cursor-pointer comp-i'>
          {/* <div className={`cursor-pointer comp-c${i}`} />; */}
          <Image
            src={`/svg/c${i}.svg`}
            alt="g-icon"
            width={60}
            height={60}
            priority
            className='deactive'
          />
          <Image
            src={`/svg/c${i}-a.svg`}
            alt="g-icon"
            width={60}
            height={60}
            priority
            className='active'
          />
          </div> 
        })}
      </div>
    </div>
  );
};

export default CompC;
