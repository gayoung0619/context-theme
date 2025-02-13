import { useContext } from "react";
import { TimeContext } from "../context/TimeContext";

const Message = () => {
  const messageContext = useContext(TimeContext);
  const { message } = messageContext;

  return <div>{message}</div>;
};

export default Message;
