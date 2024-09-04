import React from "react";
import "./index.scss";

interface Props {
  isToggled: boolean;
  onToggle: () => void;
}

const Toggle = ({ isToggled, onToggle }: Props) => {
  return (
    <div className="toggle-container" onClick={onToggle}>
      <div className={`toggle-switch ${isToggled ? "toggled" : ""}`}>
        <div className="toggle-circle" />
      </div>
      <b>All Users</b>
    </div>
  );
};

export default Toggle;
