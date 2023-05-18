export default async function displayRazorpay(){
// const data = await fetch("http://localhost:5000/rozarpay",{
//     method:'POST'
// }).then((t)=>t.json())
// console.log(data)

const options = {
key:"rzp_test_BDAtyJxf1DyqOb",
currency:"INR",
amount:1000,
// currency:data.currency,
// amount:data.amount,
description:'wallet Tranformation',
// image:'https://localhost:5000/logo.jpg',
order_id:112,
handle: function (response){
    alert("PAYMENT ID:"+ response.razorpay_payment_id)
    alert("ORDER ID:"+ response.razorpay_order_id)
},
prefill:{
    name:"HINAKOUSER",
    email:"hina123@gmail.com",
    contact:"*********"
}
};
const paymentObject= new window.Razorpay(options)
paymentObject.open()
}