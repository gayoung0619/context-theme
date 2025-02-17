import {useContext, useEffect} from "react";
import { TimeContext } from "../context/TimeContext";

const Timer = () => {
  const timeContext = useContext(TimeContext);
  const { currentTime, updateTime } = timeContext;

  if (!timeContext) {
    return (
      <div>Error: Please wrap Content with ThemeProvider and TimeProvider.</div>
    );
  }

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  return <span>{currentTime}</span>;
};

export default Timer;
