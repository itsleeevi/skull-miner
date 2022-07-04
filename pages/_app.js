import "../styles/globals.css";
import "rsuite/dist/rsuite.min.css";
import "tailwindcss/tailwind.css";

import { SkullContext } from "../contexts/SkullContext";
import { useState, useEffect } from "react";
import { MAX_AMOUNT, Converter } from "@maticnetwork/maticjs";
import Web3 from "web3";
import axios from "axios";

import tokenABI from "../artifacts/Pumpkin.json";
import stakingABI from "../artifacts/Staking.json";

//import CONFIG from "../config/config.json"; // -> for mainnet
import CONFIG from "../config/configRinkeby.json"; // -> for rinkeby

function MyApp({ Component, pageProps }) {
  // web3 hooks
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [web3, setWeb3] = useState(undefined);
  const [stakingContract, setStakingContract] = useState(undefined);
  const [tokenContract, setTokenContract] = useState(undefined);
  const [isApproved, setIsApproved] = useState(false);
  const [web3Http, setWeb3Http] = useState(undefined);
  const [stakingContractHttp, setStakingContractHttp] = useState(undefined);

  const [totalStaked, setTotalStaked] = useState(undefined);
  const [apr, setApr] = useState(undefined);
  const [dailyReturn, setDailyReturn] = useState(undefined);
  const [yourBalance, setYourBalance] = useState(undefined);
  const [yourStakedBalance, setYourStakedBalance] = useState(undefined);
  const [yourReward, setYourReward] = useState(undefined);

  const [amount, setAmount] = useState(undefined);
  const [amountReward, setAmountReward] = useState(undefined);
  const [price, setPrice] = useState(undefined);

  // refresher hooks
  const [refresh, setRefresh] = useState(false);
  const [network, setNetwork] = useState(false);
  const [staked, setStaked] = useState(false);

  const url =
    "https://api.dexscreener.com/latest/dex/pairs/fantom/0xa73d251d37040ade6e3eff71207901621c9c867a";

  useEffect(() => {
    axios.get(url).then((response) => {
      setPrice(response.data.pairs[0].priceUsd);
    });
  }, []);

  const connectMetaMask = async () => {
    if (
      window.ethereum &&
      window.ethereum.networkVersion !== CONFIG.CHAIN_ID_DEC
    ) {
      switchNetwork();
    }
    if (window.ethereum && window.ethereum.isConnected) {
      const accs = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accs);
      if (accs.length > 0) {
        setConnected(true);
      } else setConnected(false);
    } else {
      router.push("https://metamask.io/");
    }
  };

  const disconnectMetaMask = () => {
    setConnected(false);
    setAccounts([]);
  };

  const switchNetwork = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: CONFIG.CHAIN_ID }],
        });
      } catch (error) {
        if (error.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: CONFIG.CHAIN_ID,
                  chainName: CONFIG.CHAIN_NAME,
                  nativeCurrency: {
                    name: CONFIG.CURRENCY_NAME,
                    symbol: CONFIG.CURRENCY_SYMBOL,
                    decimals: 18,
                  },
                  rpcUrls: [CONFIG.RPC],
                  blockExplorerUrls: [CONFIG.BLOCK_EXPLORER],
                  iconUrls: [""],
                },
              ],
            });
          } catch (addError) {
            console.log("Did not add network");
          }
        }
      }
      setNetwork(!network);
    }
  };

  const approve = async () => {
    if (window.ethereum.networkVersion !== CONFIG.CHAIN_ID_DEC) {
      switchNetwork();
    }

    await tokenContract.methods
      .approve(CONFIG.STAKING_ADDRESS, Converter.toHex(MAX_AMOUNT))
      .send({ from: accounts[0] });
    setIsApproved(true);
  };

  const stake = async (amount) => {
    if (window.ethereum.networkVersion !== CONFIG.CHAIN_ID_DEC) {
      switchNetwork();
    }

    await stakingContract.methods
      .Lock(web3.utils.toWei(amount.toString(), "ether"))
      .send({
        from: accounts[0],
      })
      .then(() => {
        setStaked(!staked);
      });
  };

  const claimRewards = async () => {
    if (window.ethereum.networkVersion !== CONFIG.CHAIN_ID_DEC) {
      switchNetwork();
    }
    await stakingContract.methods
      .ClaimRewards()
      .send({
        from: accounts[0],
      })
      .then(() => {
        setStaked(!staked);
      });
  };

  const compound = async () => {
    if (window.ethereum.networkVersion !== CONFIG.CHAIN_ID_DEC) {
      switchNetwork();
    }
    await stakingContract.methods
      .Compound()
      .send({
        from: accounts[0],
      })
      .then(() => {
        setStaked(!staked);
      });
  };

  const getMaxStaking = async () => {
    if (window.ethereum.networkVersion !== CONFIG.CHAIN_ID_DEC) {
      switchNetwork();
    }
    const result = await tokenContract.methods.balanceOf(accounts[0]).call();

    return web3.utils.fromWei(result.toString(), "ether");
  };

  const TotalStaked = async () => {
    const result = await stakingContractHttp.methods.totalLocked().call();

    setTotalStaked(
      Number(web3Http.utils.fromWei(result.toString(), "ether")).toFixed(0)
    );
  };

  const YourBalance = async () => {
    const result = await tokenContract.methods.balanceOf(accounts[0]).call();
    setYourBalance(
      Number(web3.utils.fromWei(result.toString(), "ether")).toFixed(2)
    );
  };

  const YourStakedBalance = async () => {
    let result = await stakingContract.methods
      .GetCurrentLock(accounts[0])
      .call();

    setYourStakedBalance(
      Number(web3.utils.fromWei(result.toString(), "ether")).toFixed(2)
    );
  };

  const YourReward = async () => {
    let reward = await stakingContract.methods
      .GetClaimableRewards(accounts[0])
      .call();

    const result = Number(web3.utils.fromWei(reward.toString(), "ether"));

    setYourReward(result.toFixed(4));
  };

  const APR = async () => {
    const dailyRewardRate = await stakingContractHttp.methods
      .RewardFactor()
      .call();

    setApr(Number((dailyRewardRate / 100) * 365).toFixed(0));
  };

  const DailyReturn = async () => {
    const dailyRewardRate = await stakingContractHttp.methods
      .RewardFactor()
      .call();

    setDailyReturn(Number(dailyRewardRate / 100).toFixed(0));
  };

  useEffect(() => {
    const init = async () => {
      const web3Http = new Web3(CONFIG.RPC);
      const stakingContractHttp = new web3Http.eth.Contract(
        stakingABI,
        CONFIG.STAKING_ADDRESS
      );

      setWeb3Http(web3Http);
      setStakingContractHttp(stakingContractHttp);
    };

    init();
  }, []);

  useEffect(() => {
    if (window.ethereum && window.ethereum.isConnected) {
      const init = async () => {
        const accs = await window.ethereum
          .request({
            method: "eth_accounts",
          })
          .catch((err) => {
            console.error(err);
          });
        const web3 = new Web3(window.ethereum);

        setAccounts(accs);
        setWeb3(web3);

        if (accs.length > 0) {
          setConnected(true);
        } else setConnected(false);
      };

      if (window.ethereum.networkVersion !== CONFIG.CHAIN_ID_DEC) {
        switchNetwork();
      } else {
        init();
      }
    }
  }, [network]);

  useEffect(() => {
    const init = async () => {
      const stakingContract = new web3.eth.Contract(
        stakingABI,
        CONFIG.STAKING_ADDRESS
      );
      const tokenContract = new web3.eth.Contract(
        tokenABI,
        CONFIG.TOKEN_ADDRESS
      );

      setStakingContract(stakingContract);
      setTokenContract(tokenContract);
    };

    if (window.ethereum && web3) {
      init();
    }
  }, [web3]);

  useEffect(() => {
    if (
      window.ethereum &&
      window.ethereum.networkVersion !== CONFIG.CHAIN_ID_DEC
    ) {
      switchNetwork();
    } else {
      setIsApproved(false);

      const isApproved = async () => {
        await tokenContract.methods
          .allowance(accounts[0], CONFIG.STAKING_ADDRESS)
          .call()
          .then((result) => {
            if (Number(result) === 0) {
              setIsApproved(false);
            } else setIsApproved(true);
          });
      };

      if (tokenContract && accounts.length > 0) {
        isApproved();
      }
    }
  }, [tokenContract]);

  useEffect(() => {
    const init = async () => {
      TotalStaked();
      APR();
      DailyReturn();
    };
    if (stakingContractHttp) init();
  }, [stakingContractHttp, refresh, staked]);

  useEffect(() => {
    const init = async () => {
      YourBalance();
      YourStakedBalance();
      YourReward();
    };
    if (accounts.length > 0 && tokenContract && stakingContract) init();
  }, [accounts, tokenContract, staked]);

  useEffect(() => {
    setAmount(0);
    setAmountReward(0);
  }, [staked]);

  return (
    <SkullContext.Provider
      value={{
        connected,
        accounts,
        web3,
        connectMetaMask,
        disconnectMetaMask,
        approve,
        isApproved,
        stake,
        getMaxStaking,
        totalStaked,
        yourBalance,
        yourStakedBalance,
        apr,
        dailyReturn,
        yourReward,
        amount,
        amountReward,
        setAmount,
        setAmountReward,
        claimRewards,
        compound,
        price,
      }}
    >
      <Component {...pageProps} />
    </SkullContext.Provider>
  );
}

export default MyApp;
