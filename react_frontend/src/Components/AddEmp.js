import React from 'react'
import './AddEmp.css'
import { useState } from 'react';


import empService from '../Service/EmpService';

function AddEmp() {
  

  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    salary: '',
    email: ''

  });


  const[ msg,setMsg]=useState("");

  function submitEmp(e){
    e.preventDefault();//why
    empService.saveEmp(formData).then((res)=>{

      setMsg(" Employee Added SuccessFully");
      setformData({
        firstName: '',
        lastName: '',
        address: '',
        salary: '',
        email: ''
    });

    }).catch((error)=>{
      setMsg("Failed to add employee. Error: " + error.message);
      console.log(error)

    })
  

  }  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value })
  }

  function handleSave() {
    // You can handle the "Save" action here, e.g., submit the data to an API or perform any necessary logic.
    console.log('Form data saved:', formData);

  }

  const handleReset = () => {
    setformData({
      firstName: '',
      lastName: '',
      address: '',
      salary: '',
      email: ''
    })
  };


  return (
    <div className='form-container'>

      
      <div className="msg">
        {msg && <p className="" >{msg}</p>}
      </div>


      <form onSubmit={(e)=>submitEmp(e)} >
        
        

        <input type="text" name="firstName" id="firstName"
          value={formData.firstName}
          onChange={handleChange} placeholder='First Name' />

        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange} placeholder='Last Name'
        />

        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder='Address'
        />

        <input
          type="text"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder='Salary'
        />

        
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />

 <button type="submit" className="save-button" >Save</button> 
<button type="button" className="reset-button" onClick={handleReset}>Reset</button>


      </form>







    </div>
  )
}

export default AddEmp