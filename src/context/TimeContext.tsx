import { createContext, useState, useEffect, ReactNode } from "react";
interface TimeContextType {
  currentTime: string;
}

interface TimeProviderProps {
  children: ReactNode;
}

export const TimeContext = createContext<TimeContextType | undefined>(undefined)
export const TimeProvider = ({children}: TimeProviderProps) => {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  return (
      <TimeContext.Provider value={{ currentTime }}>
        {children}
      </TimeContext.Provider>
  )
}