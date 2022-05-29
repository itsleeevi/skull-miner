import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import { InputNumber, Input } from "rsuite";
import discord from "../public/image/discord.png";
import twitter from "../public/image/twitter.png";
import skull1 from "../public/image/skull1.png";
import skull2 from "../public/image/skull2.png";
import Bg from "../components/Bg";

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/*
      <div className="hidden md:block z-1">
        <Bg />
      </div>
  */}

      <div className="mt-10 mb-20">
        <div className="flex justify-center bg-black">
          <div className="flex flex-col items-center w-full sm:w-1/4 0 gap-6 bg-black">
            <div className="text-8xl font-bold font-mystery text-center text-white space-y-4">
              <p>SKULL</p>
              <p>MINER</p>
            </div>
            <h1 className="text-lg text-center font-inter text-white">
              Delicious daily return and lowest dev fee.
            </h1>
            <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-8 py-10 w-full gap-6 text-black">
              <div className="flex flex-row justify-between">
                <h1 className="text-xl font-inter text-center font-normal">
                  Contract
                </h1>
                <h1 className="text-xl font-inter font-bold text-center">
                  0 FTM
                </h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-center font-inter font-normal">
                  Wallet
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  0 FTM
                </h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-center font-inter font-normal">
                  Your PUMPKINS
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  0 PUMPKINS
                </h1>
              </div>
              <div className="inputNum">
                <InputNumber
                  size="lg"
                  min={0}
                  postfix={
                    <h1 className="text-xl text-center text-black font-inter font-bold">
                      FTM
                    </h1>
                  }
                />
              </div>

              <button className="bg-dark hover:bg-orange text-white font-bold py-2 px-4 rounded-button">
                <h1 className="text-3xl text-center font-mystery font-bold tracking-widest">
                  MINE PUMPKINS
                </h1>
              </button>

              <div className="my-2 w-full border-t border-black" />

              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-center font-normal font-inter">
                  Your Rewards
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  0 FTM
                </h1>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <button className="bg-dark hover:bg-orange text-white font-bold py-2 px-4 rounded-button w-1/2">
                  <h1 className="text-lg text-center font-mystery font-bold">
                    Rebake
                  </h1>
                </button>
                <button className="bg-dark hover:bg-orange text-white font-bold py-2 px-4 rounded-button w-1/2">
                  <h1 className="text-lg text-center font-mystery font-bold tracking-wider">
                    Eat PUMPKINS
                  </h1>
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-8 py-10 w-full gap-2 text-black">
              <h1 className="text-3xl text-start text-black font-mystery">
                Nutrition Facts
              </h1>
              <div className="w-full border-t border-4 border-black" />
              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-center font-inter">Daily Return</h1>
                <h1 className="text-xl text-center font-inter font-bold">8%</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-center font-normal font-inter">
                  APR
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  2,920%
                </h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-center font-normal font-inter">
                  Dev Fee
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">3%</h1>
              </div>
            </div>
            <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-8 py-10 w-full gap-6 text-black  mb-16 ">
              <h1 className="text-3xl text-center text-black font-mystery">
                Referral Link
              </h1>
              <Input />
              <p className="text-lg font-normal text-center font-inter font-bold">
                Earn 12% of the FTM used to bake PUMPKINS from anyone who uses
                your referral link
              </p>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <Image src={discord} height={50} width={50} />
              <Image src={twitter} height={50} width={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
