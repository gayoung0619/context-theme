import {
  createContext,
  useState,
  ReactNode,
} from "react";

interface messageContextType {
  message: string;
}

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageContext = createContext<messageContextType | undefined>(
    undefined
);

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [message, setMessage] = useState<string>("시간이 너무 빨리간다!!!!");

  return (
      <MessageContext.Provider value={message}>
        {children}
      </MessageContext.Provider>
  );
};
