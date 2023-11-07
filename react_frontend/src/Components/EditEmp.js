import React, { useEffect } from 'react'
import { useState } from 'react';


import empService from '../Service/EmpService'
import { useNavigate, useParams } from 'react-router-dom';

function EditEmp() {

    const [formData, setformData] = useState({
        id:'',
        firstName: '',
        lastName: '',
        address: '',
        salary: '',
        email: ''

    });
   
    const navigate=useNavigate();

    const [msg, setMsg] = useState("");




    function updateEmp(e){
        e.preventDefault();//why
        empService.updateEmp(formData.id,formData).then((res)=>{
            console.log(res.data);
    

            navigate("/")
        //   setformData({
        //     firstName: '',
        //     lastName: '',
        //     address: '',
        //     salary: '',
        //     email: ''
        // });
    
        }).catch((error)=>{
          setMsg("Failed to update employee. Error: " + error.message);
          console.log(error)
    
        })
      
    
      }

   
//useparam ye url se id nikalne ke liye use kiya hai taki jaise edit ka button dabega vaise os id ke person ka form data sahit khul jayega 
    const data=useParams(); //useparams give you key-value pairs
    //console.log(data.id)
    useEffect(()=>{
        empService.getEmpById(data.id)
        .then((res)=>{
            setformData(res.data);
            console.log(res.data.id)

        })
        .catch((error)=>{
            console.log(error)
        })
    },[]);
    
    

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
         <h1>Edit emp</h1>

            <div className="msg">
                {msg && <p className="" >{msg}</p>}
            </div>


            <form onSubmit={(e) => updateEmp(e)} >



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

export default EditEmp