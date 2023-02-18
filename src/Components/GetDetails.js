import { ethers } from 'ethers';
import React, { useState } from 'react'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../Constants/Constants';
import "../CSS/GetDetails.css"

function GetDetails() {
    
    const [getUserAdd, setUserAdd] = useState()
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    

    const displayPatientDetails = async () => {
        
        // PatiendDetailMap
        const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)

        let getDetails = await contractInstance.PatiendDetailMap(getUserAdd)
        
    }


    const getUserAddress = (e) => {
        setUserAdd(e.target.value)
      }



    return (
    <div>
        
        <h3>Get Patient Details</h3>
        <p>Only Whitlisted Doctors are allwed</p>

        <p> 
            1. Scan Patient QR <br />
            2. NFC <br />
            3. Enter user Address <br />


        </p>


        <div>

        <input className='UserAddressInput' onChange={getUserAddress} type="text" placeholder='Enter Patient Address to get Details ' />
        <button className='getDetailsBtn btn-primary mx-4'>Get Details</button>
        </div>

        <div>
            <button className=' getDetailsBtn btn-primary my-5'>Scan QR</button>
        </div>
    </div>
  )
}

export default GetDetails