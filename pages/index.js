import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { InputNumber, Input } from "rsuite";
import discord from "../public/image/discord.png";
import twitter from "../public/image/twitter.png";

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <div className="mt-10 mb-20">
      <div className="flex justify-center bg-yellow">
        <div className="flex flex-col items-center w-full sm:w-1/4 0 gap-6">
          <div className="text-5xl font-bold text-center text-dark">
            Spaghetti Miner
          </div>
          <h1 className="text-xl text-center text-black">
            The BNB Reward Pool with the most delicious daily return and lowest
            dev fee
          </h1>
          <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-8 py-10 w-full gap-6 text-black">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl text-center font-normal">Contract</h1>
              <h1 className="text-2xl text-center">0 BNB</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl text-center font-normal">Wallet</h1>
              <h1 className="text-2xl text-center">0 BNB</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl text-center font-normal">
                Your Meatballs
              </h1>
              <h1 className="text-2xl text-center">0 Meatballs</h1>
            </div>
            <div className="inputNum">
              <InputNumber
                size="lg"
                min={0}
                postfix={
                  <h1 className="text-xl text-center text-black">BNB</h1>
                }
              />
            </div>

            <button className="bg-dark hover:bg-orange text-white font-bold py-2 px-4 rounded-button">
              <h1 className="text-2xl text-center">Mine Meatballs</h1>
            </button>

            <div className="my-2 w-full border-t border-black" />

            <div className="flex flex-row justify-between">
              <h1 className="text-2xl text-center font-normal">Your Rewards</h1>
              <h1 className="text-2xl text-center">0 BNB</h1>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <button className="bg-dark hover:bg-orange text-white font-bold py-2 px-4 rounded-button w-1/2">
                <h1 className="text-2xl text-center">Recook</h1>
              </button>
              <button className="bg-dark hover:bg-orange text-white font-bold py-2 px-4 rounded-button w-1/2">
                <h1 className="text-2xl text-center">Eat Meatballs</h1>
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-8 py-10 w-full gap-2 text-black">
            <h1 className="text-3xl text-start text-black">Nutrition Facts</h1>
            <div className="w-full border-t border-4 border-black" />
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl text-center font-normal">
                Daily Return 8%
              </h1>
              <h1 className="text-2xl text-center">8%</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl text-center font-normal">APR</h1>
              <h1 className="text-2xl text-center">2,920%</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl text-center font-normal">Dev Fee</h1>
              <h1 className="text-2xl text-center">3%</h1>
            </div>
          </div>
          <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-8 py-10 w-full gap-6 text-black  mb-16 ">
            <h1 className="text-3xl text-center text-black">Referral Link</h1>
            <Input />
            <p className="text-xl font-normal text-center">
              Earn 12% of the BNB used to cook spaghetti from anyone who uses
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
  );
}
