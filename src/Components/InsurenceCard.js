import React from 'react'

function InsurenceCard({Name, Desc, Img,Address}) {
  return (
    <div className="card my-4" style={{width: "18rem"}}>
            {/* <h3>Insurence Cards</h3> */}
          <img className="card-img-top" src={Img} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{Name}</h5>
            <p className="card-text">{Desc}</p>
            <p>{Address}</p>
            <button className="InsurenceBtn btn-primary">Apply  </button>
           
          </div>
        </div>
  )
}

export default InsurenceCard