import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  {useNavigate } from 'react-router-dom'
//import { useSelector } from 'react-redux';



function Deshboard() {
    const navigate = useNavigate();
    //const user=useSelector((state)=>state.user)

    const [message, setMessage] = useState('Amount : Rs 500');
    const [paymentDone, setPaymentDone] = useState(false);

    const [userPresent,setUserPresent]=useState(true);
    const [alreadyPayment,setAlreadyPayment]=useState(false);


    const [yogadata, setYogaData] = useState({ 
      email: '',
      batch:'6AM-7AM',
      year:'2023',
      month:'1'

    });


    const handleChange = (event, property) => {
        setYogaData({ ...yogadata, [property]: event.target.value });
      };

     
      const submitForm = async (event) => {
        event.preventDefault();
    
        // Make an HTTP POST request using Axios
        await axios.post('https://yogabackend-production-8d16.up.railway.app/api/pay',yogadata)
        .then(function (response) {
            if(!response.data.user){
                setUserPresent(false);
                setMessage("Invalid User")
                setPaymentDone(false)
            }
            else{
                setUserPresent(true);
                if(response.data.check){
                    setMessage("Already taken this batch")
                    setPaymentDone(false)
                }
                else{
                    setMessage("Thank You, you have done your Payment")
                    setPaymentDone(true)
                }
            }
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
            setMessage("Something went wrong , Payment Failed")
            setPaymentDone(false)
        });
       
      };


  return (
    <div>
        {/* <h1>{user.name}</h1> */}
        <h1 style={{marginBottom:"10px"}}>Welcome to Yoga Classes</h1>
        <h2>Registration for Yoga Classes</h2>
        <form onSubmit={submitForm}>
                
                {/* email */}
                <div style={{marginBottom:"10px"}} className="mb-3">
                    <label style={{marginRight:"10px"}} htmlFor="email" className="form-label">
                    Enter Email
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter here"
                    onChange={(e) => handleChange(e, 'email')}
                    value={yogadata.email}
                    />
                </div>

               
                {/* Batch */}
                <div style={{marginBottom:"10px"}}>
                    <label style={{marginRight:"10px"}}  htmlFor="batch" className="form-label">
                    Batch
                    </label>
                    <select
                    className="form-control"
                    id="batch"
                    onChange={(e) => handleChange(e, 'batch')}
                    value={yogadata.batch}
                    >
                    <option>6AM-7AM</option>
                    <option>7AM-8AM</option>
                    <option>8AM-9AM</option>
                    <option>5PM-6PM</option>
                    </select>
                </div>
                {/* Year */}
                <div style={{marginBottom:"10px"}}>
                    <label style={{marginRight:"10px"}}  htmlFor="year" className="form-label">
                    Year
                    </label>
                    <select
                    className="form-control"
                    id="year"
                    onChange={(e) => handleChange(e, 'year')}
                    value={yogadata.year}
                    >
                    <option>2023</option>
                    <option>2024</option>
                    <option>2024</option>
                    </select>
                </div>
                {/* Month */}
                <div style={{marginBottom:"10px"}}>
                    <label style={{marginRight:"10px"}}  htmlFor="month" className="form-label">
                    Month
                    </label>
                    <select
                    className="form-control"
                    id="month"
                    onChange={(e) => handleChange(e, 'month')}
                    value={yogadata.month}
                    >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    </select>
                </div>
                <h4>{message}</h4>
                
                
                {/* Conditionally render the button based on paymentDone state */}
                {paymentDone === false ? (
                <button type='click' onClick={submitForm}>
                    Make Payment
                </button>
                ) : null}
            </form>
    </div>
  )
}

export default Deshboard