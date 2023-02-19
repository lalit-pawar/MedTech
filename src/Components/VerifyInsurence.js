import { ethers } from 'ethers';
import React, { useState } from 'react'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../Constants/Constants';
import '../CSS/Insurence.css'
function VerifyInsurence({open}) {
    const [userAddress, setUserAddress]= useState()
    if(!open){
        return null;
    }

    else{
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const getPatientDetails = async() => {
            const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
            let isUserValid = contractInstance.isPatientRegistered(userAddress)

            if(isUserValid){
                alert("User is verified!!, Only Authorised persons can access all the users data")
            }
            else{
                alert("User is not verified!")
            }
        }

        const getUserAddress = (e) => {
            setUserAddress(e.target.value)
          }

        return (
            <div>
                <h3 className=' my-4'>Verify User details</h3>
                <input className='UserAddressInput' onChange={getUserAddress} type="text" placeholder='Enter User Address to get Details ' />
                <button onClick={getPatientDetails} className="VerifyPatienBtn btn-primary">Verify Patient</button>
            </div>
        )
    }

}

export default VerifyInsurence