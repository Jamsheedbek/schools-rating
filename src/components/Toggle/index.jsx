import "./style.css";

const Toggle = () => {
  return (
    <div className="toggle">
      <div className="notch" />
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
};

export default Toggle;
