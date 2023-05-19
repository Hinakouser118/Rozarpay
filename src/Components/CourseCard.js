import React from 'react'
import displayRazorpay from '../utils/paymentGateway';
export default function CourseCard() {
  return (
    <div>
      <br></br>
      <h1 style={{textAlign:'center'}}>Louis Vuitton</h1>
      <br></br>
      <div className="container text-center">
  <div className="row">
    <div className="col-md-4">
    <div className="card" style={{width: "18rem"}}>
  <img src="https://tse1.mm.bing.net/th?id=OIP.JbBQYCEhxzxzkG_qMeQ9WwHaHa&pid=Api&P=0&h=180" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">HandBag</h5>
    <h5 className="card-title">₹5000</h5>
    <button type="button" onClick={()=>displayRazorpay({amt:500000,currency:"INR",name:"HandBag"})} className='course-payment-button'> Buy Course</button>
  </div>
</div>
    </div>
    <div className="col-md-4">
    <div className="card" style={{width: "18rem"}}>
  <img src="https://tse3.mm.bing.net/th?id=OIP.vjIgy89sUXhnxGyIFJjFHQAAAA&pid=Api&P=0&h=180" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Watch</h5>
    <h5 className="card-title">₹2500</h5>
    <button type="button" onClick={()=>displayRazorpay({amt:250000,currency:"INR",name:"Watch"})} className='course-payment-button'> Buy Course</button>
  </div>
</div>
    </div>
    <div className="col-md-4">
    <div className="card" style={{width: "18rem"}}>
  <img src="https://tse4.mm.bing.net/th?id=OIP.4kiVNGkEUetEDZ7xXyIaTQHaGl&pid=Api&P=0&h=180" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Slipers</h5>
    <h5 className='card-title'>₹2000</h5>
    <button type="button" onClick={()=>displayRazorpay({amt:20000,currency:"INR",name:"Slipers"})} className='course-payment-button'> Buy Course</button>
   </div>
</div>
    </div>
  </div>
</div>
      {/* <button type="button" onClick={displayRazorpay} className='course-payment-button'> Buy Course</button> */}
    </div>
  )
}
