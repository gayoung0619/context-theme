import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

interface TimeContextType {
  currentTime: string;
  message: string;
}

interface TimeProviderProps {
  children: ReactNode;
}

export const TimeContext = createContext<TimeContextType | undefined>(
  undefined
);

export const TimeProvider = ({ children }: TimeProviderProps) => {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );

  const [message, setMessage] = useState<string>("시간이 너무 빨리간다!!!!");

  const memo = useMemo(() => {
    return {currentTime, message}
  }, [currentTime, message]);

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <TimeContext.Provider value={memo}>
      {children}
    </TimeContext.Provider>
  );
};
