import {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface TimeContextType {
  currentTime: string;
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


  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  }

  return (
    <TimeContext.Provider value={{currentTime, updateTime}}>
      {children}
    </TimeContext.Provider>
  );
};
