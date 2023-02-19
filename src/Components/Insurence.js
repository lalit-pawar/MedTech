import {React, useState} from 'react'
import VerifyInsurence from './VerifyInsurence'
import ApplyInsurence from './ApplyInsurence'
import '../CSS/Insurence.css'

function Insurence() {

    const [openModal , setOpenModal] = useState(false)
    const [openModal2 , setOpenModal2] = useState(false)

  return (
    <div>
        <h2>Verify Insurence</h2>
{/* 
        <button className="VerfiyUserBtn btn-primary">Verify User</button> */}

        <div>
            <button className="VerfiyUserBtn btn-primary" onClick={() =>{
              setOpenModal2(!openModal2)
              setOpenModal(false)
            }}>Apply Insurence</button>
            
          
            <button className="VerfiyUserBtn btn-primary" onClick={() =>{
                
                setOpenModal(!openModal)
                setOpenModal2(false)
            }}>Verify</button>
            <ApplyInsurence open={openModal2}/>
            <VerifyInsurence open={openModal}/>
            
          </div>


    </div>
  )
}

export default Insurence