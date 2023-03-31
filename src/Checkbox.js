import React from "react";
import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";
import "./checkbox.css";
export default function Checkbox(props) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label className="checkbox-container">
        {props.label}
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
