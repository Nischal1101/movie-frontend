import { useState } from "react";
import context from "./Context";

const TokenState = (props) => {
  const [istoken, setIstoken] = useState(false);
  return (
    <context.Provider value={{ istoken, setIstoken }}>
      {props.children}
    </context.Provider>
  );
};

export default TokenState;
