import './compC.scss';

const CompC = () => {
  return (
    <div className="comp-c">
      <div className="comp flex flex-row m-auto items-center justify-between">
        {[1, 1, 1].map((_, i) => {
          return <div key={i} className={`cursor-pointer comp-c${i}`} />;
        })}
      </div>
    </div>
  );
};

export default CompC;
