import React, { useEffect, useState } from "react";

const TopLoader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let interval;

    if (isLoading) {
      setVisible(true);
      setProgress(10);

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          const increment = prev < 50 ? 15 : prev < 75 ? 5 : 2;
          return prev + increment;
        });
      }, 200);
    } else {
      setProgress(100);
      interval = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 400);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(interval);
    };
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="h-full bg-blue-600 transition-all duration-300 ease-out shadow-[0_0_10px_#2563eb]"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default TopLoader;
