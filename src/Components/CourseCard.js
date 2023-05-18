import React from 'react'
import displayRazorpay from '../utils/paymentGateway';
export default function CourseCard() {
  return (
    <div>
      <br></br>
      <h1 style={{textAlign:'center'}}>Razorpay</h1>
      <br></br>
      <button type="button" onClick={displayRazorpay} className='course-payment-button'> Buy Course</button>
    </div>
  )
}
