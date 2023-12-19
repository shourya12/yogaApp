import React, { useState, useEffect } from 'react';

function AdmissionForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    age: '',
    select: '',
    gender: ''
  });

  const [error, setError] = useState({
    errors: {},
    isError: false
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <>
    
        <div>
            <h3>YOGA Admission Form</h3>
        </div>
        <div>
            <form onSubmit={submitForm}>
                {/* name */}
                <div>
                    <label htmlFor="name" className="form-label">
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
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
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
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
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
                <div >
                    <label htmlFor="select" className="form-label">
                    Select
                    </label>
                    <select
                    className="form-control"
                    id="select"
                    onChange={(e) => handleChange(e, 'select')}
                    value={data.select}
                    >
                    <option>6AM - 7AM</option>
                    <option>7AM - 8AM</option>
                    <option>8AM - 9AM</option>
                    <option>5PM - 6PM</option>
                    </select>
                </div>

                {/* Gender */}
                <div>
                    <label htmlFor="gender" className="form-label">
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

                <div>
                    <button type="button" onClick={submitForm}>
                    Register
                    </button>
                </div>
            </form>
        </div>        
    </>
  );
}

export default AdmissionForm;