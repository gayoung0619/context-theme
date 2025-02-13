import { useContext } from "react";
import { TimeContext } from "../context/TimeContext";

const Timer = () => {
  const timeContext = useContext(TimeContext);
  const { currentTime } = timeContext;

  if (!timeContext) {
    return (
      <div>Error: Please wrap Content with ThemeProvider and TimeProvider.</div>
    );
  }
  return <span>{currentTime}</span>;
};

export default Timer;
