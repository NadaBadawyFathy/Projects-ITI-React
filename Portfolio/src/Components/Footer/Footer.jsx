import React from 'react'

export default function Footer() {
  return (
 <>
 <div className="container-fluid row m-auto bg-dark text-light align-items-center">
 <div className="col-4">
    <h3>Get in touch</h3>
    <p>nadabadawy60@gmail.com</p>
    <p>01151727517</p>
 </div>
 <div className="col-4 text-center">
<button className="btn btn-outline-danger"> contact</button>

 </div>
    <div className="col-4  text-center">
        <div className='d-flex  text-center m-auto justify-content-center'>

    <i class="fa-brands fa-facebook-f"></i>
    <i class="fa-brands fa-twitter mx-4"></i>
    <i class="fa-brands fa-linkedin"></i>
        </div>
    <br />
    <p className="">copy right @ 2019</p>
    </div>
    


 </div>
 
 </>
  )
}
