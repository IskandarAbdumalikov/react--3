import "./cardModule.scss";

const CardModule = ({ children ,close,bool}) => {
  return (
    <>
      <div onClick={() => close(false)} className={bool ? "overlay" : ""}></div>
      <div className={bool ? "card__module show__card__module" : ""}>
        <h1 className="close__module" onClick={() => close(false)}>
          X
        </h1>
        {children}
      </div>
    </>
  );
};

export default CardModule;
