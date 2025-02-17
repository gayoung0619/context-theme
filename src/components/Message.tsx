import React, { useContext } from "react";
import {MessageContext} from "../context/MessageContext.tsx";

const Message = () => {
  const messageContext = useContext(MessageContext);
  const message = messageContext;

  return <div>{message}</div>;
};

export default Message
