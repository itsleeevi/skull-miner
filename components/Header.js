import React, { useState, useContext } from "react";
import Image from "next/image";

import { SkullContext } from "../contexts/SkullContext";

function Header() {
  const { connectMetaMask, connected, disconnectMetaMask } =
    useContext(SkullContext);

  return (
    <header className="fixed top-0 right-0 z-30 pt-10 pb-10 px-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}

          {/* Header: Right side */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6 ">
              {connected ? (
                <>
                  <button
                    className="bg-black hover:bg-purple text-white font-bold font-mystery hover:text-white py-4 px-8 border-8 border-purple hover:border-transparent rounded-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      disconnectMetaMask();
                    }}
                  >
                    <h1 className="text-2xl">Disconnect</h1>
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-black hover:bg-purple text-white font-bold font-mystery hover:text-white py-4 px-8 border-8 border-purple hover:border-transparent rounded-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      connectMetaMask();
                    }}
                  >
                    <h1 className="text-2xl">Connect</h1>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
