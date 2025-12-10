"use client";

import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-center px-4">
      
      {/* Animated Ring */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
        
        {/* Glow Ball */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Urdu Text */}
      <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 animate-bounce">
        دُرود پاک پڑھ لیجئے
      </h2>

      {/* Durood Sharif */}
      <p className="mt-4 text-xl text-gray-800 dark:text-gray-200 leading-relaxed animate-pulse">
        صلّو عَلَی الحبیب  
        <br />
        <span className="text-2xl font-semibold text-green-700 dark:text-green-400">
          صلَّی اللہُ تعالیٰ عَلٰی محمد ﷺ
        </span>
      </p>

    </div>
  );
};

export default Loader;
