import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useContext, useEffect } from "react";
import { Box, Grommet, Stack, TextInput, Text } from "grommet";

import { InputNumber, Input } from "rsuite";
import discord from "../public/image/discord.png";
import twitter from "../public/image/twitter.png";
import skull1 from "../public/image/skull1.png";
import skull2 from "../public/image/skull2.png";
import Particles from "../components/Particles";
import Header from "../components/Header";
import customTheme from "../config/customTheme";

import { SkullContext } from "../contexts/SkullContext";

export default function Home() {
  const {
    connectMetaMask,
    connected,
    disconnectMetaMask,
    isApproved,
    approve,
    stake,
    getMaxStaking,
    totalStaked,
    yourBalance,
    yourStakedBalance,
    apr,
    dailyReturn,
    yourReward,
    unstake,
    unstakeAll,
    amount,
    amountReward,
    setAmount,
    setAmountReward,
  } = useContext(SkullContext);

  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <title>Skull Miner</title>
        <meta name="description" content="Earn 2% daily staking $pumpkin" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Skull Miner" />
        <meta
          property="og:description"
          content="Earn 2% daily staking $pumpkin"
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Skull Miner" />
        <meta
          property="twitter:description"
          content="Earn 2% daily staking $pumpkin"
        />
        <meta property="twitter:image" content="" />
        <meta property="twitter:site" content="" />
        <meta property="twitter:creator" content="" />
      </Head>
      {/*  */}

      <Particles id="tsparticles" />
      <Header />
      <div className="mt-10 mb-20 top-0">
        <div className="flex justify-center bg-black">
          <div className="z-10 flex flex-col items-center w-full lg:w-1/3 0 gap-6 px-4 lg:px-0">
            <div className="text-8xl font-bold font-mystery text-center text-white space-y-4 bg-black/80 hover:scale-110 transition delay-150 duration-300 ease-in-out cursor-default">
              <p>SKULL</p>
              <p>MINER</p>
            </div>
            <div className="md:hidden flex items-center space-x-6 w-full">
              {connected ? (
                <>
                  <button
                    className="w-full bg-black hover:bg-purple text-white font-bold font-mystery hover:text-white py-4 px-8 border-8 border-purple hover:border-transparent rounded-lg"
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
                    className="w-full bg-black hover:bg-purple text-white font-bold font-mystery hover:text-white py-4 px-8 border-8 border-purple hover:border-transparent rounded-lg"
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
            <h1 className="text-lg text-center font-inter text-white bg-black/80 hover:scale-110 transition delay-150 duration-300 ease-in-out cursor-default">
              Delicious daily return and lowest dev fee.
            </h1>
            <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-6 py-10 w-full gap-6 text-black border-8 border-purple">
              <div className="flex lg:flex-row flex-col justify-between cursor-default">
                <h1 className="text-xl font-inter text-center font-normal ">
                  Contract
                </h1>
                <h1 className="text-xl font-inter font-bold text-center">
                  {nFormatter(totalStaked, 1)}
                  <span className="font-mystery"> PUMPKIN</span>
                </h1>
              </div>
              <div className="flex lg:flex-row flex-col justify-between cursor-default">
                <h1 className="text-xl text-center font-inter font-normal">
                  Your <span className="font-mystery"> PUMPKINS</span>
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  {nFormatter(yourBalance, 1)}{" "}
                  <span className="font-mystery"> PUMPKIN</span>
                </h1>
              </div>
              <div className="flex lg:flex-row flex-col justify-between cursor-default">
                <h1 className="text-xl sm:text-md text-center font-inter font-normal">
                  Your Staked <span className="font-mystery"> PUMPKINS</span>
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  {nFormatter(yourStakedBalance, 1)}{" "}
                  <span className="font-mystery"> PUMPKIN</span>
                </h1>
              </div>
              <div className="inputNum rounded">
                <Box width="full" round="large">
                  <Grommet
                    theme={customTheme}
                    style={{
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                    round="large"
                  >
                    <div className="rounded ">
                      <Stack anchor="right" round="large">
                        <Box round="large">
                          <TextInput
                            round="large"
                            size="medium"
                            value={amount}
                            onChange={(event) => {
                              event.preventDefault();
                              setAmount(event.target.value);
                            }}
                            reverse
                          />
                        </Box>
                        <Box
                          onClick={async () => {
                            setAmount(await getMaxStaking());
                          }}
                          margin={{
                            right: "10px",
                          }}
                        >
                          <Text className="font-bold" size="small">
                            Max
                          </Text>
                        </Box>
                      </Stack>
                    </div>
                  </Grommet>
                </Box>
              </div>
              {connected ? (
                <>
                  {!isApproved ? (
                    <>
                      <button
                        className="bg-dark hover:bg-purple text-white font-bold py-2 px-4 rounded-button"
                        onClick={(e) => {
                          e.preventDefault();
                          approve();
                        }}
                      >
                        <h1 className="text-3xl text-center font-mystery font-bold tracking-widest">
                          APPROVE CONTRACT
                        </h1>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-dark hover:bg-purple text-white font-bold py-2 px-4 rounded-button"
                        onClick={(e) => {
                          e.preventDefault();
                          stake(amount);
                        }}
                      >
                        <h1 className="text-3xl text-center font-mystery font-bold tracking-widest">
                          Mine PUMPKINS
                        </h1>
                      </button>
                    </>
                  )}
                </>
              ) : (
                <>
                  <button
                    className="bg-dark hover:bg-purple text-white font-bold py-2 px-4 rounded-button"
                    disabled
                  >
                    <h1 className="text-3xl text-center font-mystery font-bold tracking-widest">
                      Mine PUMPKINS
                    </h1>
                  </button>
                </>
              )}

              <div className="my-2 w-full border-t border-black" />

              <div className="flex flex-row justify-between cursor-default">
                <h1 className="text-xl text-center font-normal font-inter">
                  Your Rewards
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  {yourReward} <span className="font-mystery"> PUMPKIN</span>
                </h1>
              </div>

              <div className="flex flex-row justify-between gap-4">
                <div className="inputNum rounded">
                  <Box width="full" round="large">
                    <Grommet
                      theme={customTheme}
                      style={{
                        backgroundColor: "#fff",
                        color: "#000",
                      }}
                      round="large"
                    >
                      <div className="rounded ">
                        <Stack anchor="right" round="large">
                          <Box round="large">
                            <TextInput
                              round="large"
                              size="medium"
                              value={amountReward}
                              onChange={(event) => {
                                event.preventDefault();
                                setAmountReward(event.target.value);
                              }}
                              reverse
                            />
                          </Box>
                          <Box
                            onClick={async () => {
                              setAmountReward(yourReward);
                            }}
                            margin={{
                              right: "10px",
                            }}
                          >
                            <Text className="font-bold" size="small">
                              All Rewards
                            </Text>
                          </Box>
                        </Stack>
                      </div>
                    </Grommet>
                  </Box>
                </div>
                <button
                  className="bg-dark hover:bg-purple text-white font-bold py-2 px-4 rounded-button w-1/2"
                  onClick={(e) => {
                    e.preventDefault();
                    unstake(amountReward);
                  }}
                >
                  <h1 className="text-lg text-center font-mystery font-bold tracking-wider">
                    Eat PUMPKINS
                  </h1>
                </button>
              </div>
              <button
                className="bg-dark hover:bg-purple text-white font-bold py-2 px-4 rounded-button"
                onClick={(e) => {
                  e.preventDefault();
                  unstakeAll();
                }}
              >
                <h1 className="text-3xl text-center font-mystery font-bold tracking-widest">
                  Unstake PUMPKIN
                </h1>
              </button>
            </div>
            <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-6 py-10 w-full gap-2 text-black border-8 border-purple">
              <h1 className="text-3xl text-start text-black font-mystery cursor-default">
                Nutrition Facts
              </h1>
              <div className="w-full border-t border-4 border-black" />
              <div className="flex flex-row justify-between cursor-default">
                <h1 className="text-xl text-center font-inter">Daily Return</h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  {dailyReturn}%
                </h1>
              </div>
              <div className="flex flex-row justify-between cursor-default">
                <h1 className="text-xl text-center font-normal font-inter">
                  APR
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">
                  {apr}%
                </h1>
              </div>
              <div className="flex flex-row justify-between cursor-default">
                <h1 className="text-xl text-center font-normal font-inter">
                  Dev Fee
                </h1>
                <h1 className="text-xl text-center font-inter font-bold">0%</h1>
              </div>
            </div>
            {/* 
            <div className="flex flex-col bg-light drop-shadow-xl rounded-lg text-align-center px-6 py-10 w-full gap-6 text-black mb-6 border-8 border-purple">
              <h1 className="text-3xl text-center text-black font-mystery">
                Referral Link
              </h1>
              <Input />
              <p className="text-lg font-normal text-center font-inter font-bold">
                Earn 12% of the FTM used to bake PUMPKINS from anyone who uses
                your referral link
              </p>
            </div>
            */}

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
