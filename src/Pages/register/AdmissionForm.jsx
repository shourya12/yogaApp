import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  {useNavigate } from 'react-router-dom'


function AdmissionForm() {
  const [adult,setAdult]= useState(true);
  const navigate = useNavigate();
  const [userExist,setUserExist]=useState(false);
  const [data, setData] = useState({

    name: '',
    email: '',
    age: '',
    gender: '',
    password:''
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const submitForm = async (event) => {


    event.preventDefault();

    const age = parseInt(data.age, 10);
    if (isNaN(age) || (age < 18 || age > 65)) {
      setAdult(false)
      console.log('Age must be a number greater than 18');
      return;
    }
    // Make an HTTP POST request using Axios
    await axios.post('https://yogabackend-production-8d16.up.railway.app/api/register', data)
    .then(function (response) {
      console.log(response);

      if(!response.data.user){
        setUserExist(false)
        navigate('/yoga');
      }
      else{
        setUserExist(true)
      }
     
    })
    .catch(function (error) {
    console.log(error);
    });
    console.log(data.email)
    let newUser={email:data.email,name:data.name,batch:"8Am-9AM"}

    // dispatch(addUser(newUser))
    
  };
  return (
    <>
    
        <div>
            <h2>YOGA Admission Form</h2>
        </div>
        <div>
            <form onSubmit={submitForm}>
                {/* name */}
                <div style={{marginBottom:"20px"}}>
                    <label style={{marginRight:"10px"}} htmlFor="name" className="form-label">
                    Enter Name
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter here"
                    onChange={(e) => handleChange(e, 'name')}
                    value={data.name}
                    />
                </div>

                {/* email */}
                <div style={{marginBottom:"20px"}} className="mb-3">
                    <label style={{marginRight:"10px"}} htmlFor="email" className="form-label">
                    Enter Email
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter here"
                    onChange={(e) => handleChange(e, 'email')}
                    value={data.email}
                    />
                </div>

                {/* age */}
                <div style={{marginBottom:"20px"}} className="mb-3">
                    <label style={{marginRight:"10px"}} htmlFor="age" className="form-label">
                    Enter Age
                    </label>
                    <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Enter here"
                    onChange={(e) => handleChange(e, 'age')}
                    value={data.age}
                    />
                </div>

                {/* Batch */}
                <div style={{marginBottom:"20px"}}>
                <label style={{marginRight:"10px"}} htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter here"
                    onChange={(e) => handleChange(e, 'password')}
                    value={data.password}
                    />
                </div>

                {/* Gender */}
                <div style={{marginBottom:"20px"}}>
                    <label style={{marginRight:"10px"}} htmlFor="gender" className="form-label">
                    Gender
                    </label>
                    <select
                    className="form-control"
                    id="gender"
                    onChange={(e) => handleChange(e, 'gender')}
                    value={data.gender}
                    >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                    </select>
                </div>
                {userExist && <div style={{ color: 'red' }}>User Already exist</div>}
                {!adult && <div style={{color:"red"}}>Age must be a number greater than 18</div>}
                
                    <button type="submit" onClick={submitForm}>
                      Register
                    </button>
            </form>
        </div>        
    </>
  );
}

export default AdmissionForm;