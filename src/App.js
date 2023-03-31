import React from "react";
import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./Checkbox";

export default function App(props) {
  return (
    <div className="App">
      <Input />
      <Radio value="India" groupName="Country" defaultChecked={true} />
      <Radio value="US" groupName="Country" />
      <Radio value="Canada" groupName="Country" />
      <Radio value="Brazil" groupName="Country" />
      <Checkbox></Checkbox>
    </div>
  );
}
