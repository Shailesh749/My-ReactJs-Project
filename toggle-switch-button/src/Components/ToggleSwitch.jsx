import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
   const [isOn, setIsOn] = useState(false);

   const handleToggleSwitch = () => {
      setIsOn(!isOn);
   };
    // this is second one for
   const checkIsOn = isOn ? "on" : "off";
   const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };
   return (
   // <div 
   // className="toggle-switch"
   // style={{backgroundColor: isOn ? "#4caf50" : "#f44336"}}
   // onClick={handleToggleSwitch}>
   //   <div className={`switch ${isOn ? "on" : "off"}`}>
   //    <span className="switch-state">{isOn ? "on" : "off"}</span>
   //   </div>
   // </div>


   <div 
   className="toggle-switch"
   style={toggleBGColor}
   onClick={handleToggleSwitch}>
     <div className={`switch ${checkIsOn}`}>
      <span className="switch-state">{checkIsOn}</span>
     </div>
   </div>
   )
}