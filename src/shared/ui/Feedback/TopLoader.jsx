import React, { useEffect, useState, useRef } from "react";

const TopLoader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      if (!visible) {
        setVisible(true);
        setProgress(10);
      }

      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) return 90;
            const increment = prev < 50 ? 15 : prev < 75 ? 5 : 2;
            return prev + increment;
          });
        }, 200);
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      setProgress(100);
      const timer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 400);

      return () => clearTimeout(timer);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isLoading, visible]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 w-full bg-transparent overflow-hidden">
      <div
        className="h-full bg-blue-600 transition-all duration-300 ease-out shadow-[0_0_10px_#2563eb]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default TopLoader;
