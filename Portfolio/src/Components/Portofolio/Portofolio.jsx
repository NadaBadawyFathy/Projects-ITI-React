import React from 'react'
import "./portfolio.css"
export default function Portofolio() {
  return (
    <div>
      <h5 className='slillH'>Portfolio</h5>  
      <div className="container-fluid">

<div className="row container justify-content-around my-4" >

    <div className=" child col-3 d-flex justify-content-center align-items-center">
<p>Web design</p>
    </div>
     
    <div className=" child col-3 bg-dark d-flex justify-content-center align-items-center">
<p>Web design</p>
    </div>
     
    <div className=" child col-3  d-flex justify-content-center align-items-center">
<p>Web design</p>
    </div>
         
</div>
<div className="row container justify-content-around my-4" >

    <div className=" child2 bg-dark col-3 d-flex justify-content-center align-items-center">
<p>Web design</p>
    </div>
     
    <div className=" child2 col-3   d-flex justify-content-center align-items-center">
<p>Web design</p>
    </div>
     
    <div className=" child2 col-3 bg-dark d-flex justify-content-center align-items-center">
<p>Web design</p>
    </div>
         
</div>


      </div>




    </div>
  )
}
