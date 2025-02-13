import { useEffect } from "react";
import { create } from "zustand";
export const useTimeStore = create((set) => ({
  currentTime: new Date().toLocaleTimeString(),
  message: "시간이 빨리가는구만",
  updateTime: () => {
    set({ currentTime: new Date().toLocaleTimeString() });
  },
}));

// 자동으로 updateTime이 실행되도록 하는 커스텀 훅
export const useTimeUpdater = () => {
  const updateTime = useTimeStore((state) => state.updateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
  }, [updateTime]);
};
