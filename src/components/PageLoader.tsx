// src/components/LoadingScreen.tsx
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 to-mh-pink">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-solid"></div>
    </div>
  );
};

export default LoadingScreen;
