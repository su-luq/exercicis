const { ethereum } = window;
import React from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers';

export default function Eth() {

  const [cuenta, setCuenta] = React.useState(null);
  const [balance, setBalance] = React.useState(null);

  useEffect(() => { 
    ethereum && ethereum.request({ method: 'eth_requestAccounts' }).then(i => {
      setCuenta(i[0])
      console.log ('compte', i)
      ethereum.on('accountsChanged', (i) => {
        setCuenta(i[0])
        console.log (i)
      })
    });
  }, [])
  
  useEffect(() => {
    if (cuenta) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any" );
      provider.getBalance(cuenta).then(i => {
        console.log(ethers.utils.formatEther(i))
        setBalance(ethers.utils.formatEther(i))
      })
    }
  }, [cuenta]);
    
  return (
    <div>
      {
        cuenta && <div>
          <h2>{cuenta}</h2>
          <h2>{balance}</h2>
        </div>
      }
    </div>
  )
}