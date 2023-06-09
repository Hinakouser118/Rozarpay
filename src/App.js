
import './App.css';
import CourseCard from "./Components/CourseCard.js"
import React,{useEffect} from 'react';
function App() {
  const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script = document.createElement('script')
   script.src=src
   script.onload= ()=>{
    resolve(true)
   }
   script.onerror=()=>{
    resolve(false)
   }
   document.body.appendChild(script)
    })
  }
  useEffect(()=>{
loadScript("https://checkout.razorpay.com/v1/checkout.js")
  })
  return (
<section className='cardlist'>
  <CourseCard/>

</section>
  );

}

export default App;
