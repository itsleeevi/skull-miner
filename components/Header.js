import React, { useState, useContext } from "react";
import pumpkin from "../public/image/pumpkin.png";
import Image from "next/image";

import { SkullContext } from "../contexts/SkullContext";

function Header() {
  const { connectMetaMask, connected, disconnectMetaMask, price } =
    useContext(SkullContext);

  return (
    <header className="fixed top-0 right-0 z-30 pt-10 pb-10 px-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30 -mb-px">
          {/* Header: Left side */}

          {/* Header: Right side */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6 ">
              {connected ? (
                <>
                  <div className="flex flex-col gap-2">
                    <button
                      className="bg-black hover:bg-purple text-white font-bold font-mystery hover:text-white py-4 px-8 border-8 border-purple hover:border-transparent rounded-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        disconnectMetaMask();
                      }}
                    >
                      <h1 className="text-2xl">Disconnect</h1>
                    </button>

                    <div className="bg-black hover:bg-purple text-white font-mystery font-bold align-center hover:text-white py-4 px-8 border-8 border-purple hover:border-transparent rounded-lg gap-2">
                      <a
                        className="hover:no-underline hover:text-black flex flex-row gap-2"
                        href="https://spooky.fi/#/swap?outputCurrency=0xad522217e64ec347601015797dd39050a2a69694"
                      >
                        <span className="lg:text-2xl xs:text-sm no-underline">
                          BUY
                        </span>
                        <Image
                          src={pumpkin}
                          layout="fixed"
                          width={30}
                          height={30}
                        />
                        <p className="lg:text-2xl xs:text-sm no-underline">
                          ${price}
                        </p>
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-2">
                    <button
                      className="bg-black hover:bg-purple text-white font-bold font-mystery hover:text-white py-4 px-8 border-8 border-purple hover:border-transparent rounded-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        connectMetaMask();
                      }}
                    >
                      <h1 className="text-2xl">Connect</h1>
                    </button>
                    <div className="bg-black hover:bg-purple text-white font-mystery font-bold align-center hover:text-white py-4 px-8 border-8 border-purple hover:border-transparent rounded-lg gap-2">
                      <a
                        className="hover:no-underline hover:text-black flex flex-row gap-2"
                        href="https://spooky.fi/#/swap?outputCurrency=0xad522217e64ec347601015797dd39050a2a69694"
                      >
                        <span className="lg:text-2xl xs:text-sm no-underline">
                          BUY
                        </span>
                        <Image
                          src={pumpkin}
                          layout="fixed"
                          width={30}
                          height={30}
                        />
                        <p className="lg:text-2xl xs:text-sm no-underline">
                          ${price}
                        </p>
                      </a>
                    </div>
                  </div>
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
