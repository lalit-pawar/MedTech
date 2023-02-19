import { ethers } from 'ethers'
import {React, useState} from 'react'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../Constants/Constants'

function WhitelistDoctor() {
    const [userAddress, setUserAddress]= useState()

    const getUserAddress = (e) => {
        setUserAddress(e.target.value)
      }

    const WhiteListDoctorFun = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
        let isUserValid = contractInstance.isPatientRegistered(userAddress)
    }
  return (
    
    <div>
                <h3 className=' my-4'>WhiteList Doctor</h3>
                <input className='UserAddressInput' onChange={getUserAddress} type="text" placeholder='Enter Dcotor Details ' />
                <button onClick={WhiteListDoctorFun} className="VerifyPatienBtn btn-primary">Whitelist Doctor</button>
                <br />
                <button  className="VerifyPatienBtn btn-primary my-5">Scan QR</button>
    </div>
  )
}

export default WhitelistDoctor