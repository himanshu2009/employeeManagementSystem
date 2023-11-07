import React, { useState } from 'react'

import { useEffect } from 'react'

import './Home.css'
import empService from '../Service/EmpService';
import { Link } from 'react-router-dom';

function Home() {

  const [empList, setEmpList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();

  }, [])


  function init() {
    empService.getAllEmp()
      .then((res) => {
        setEmpList(res.data);
        console.log(res.data)


      })
      .catch((e) => {
        console.log(e)

      })

  }
  const deleteEmp = (id) => {
    // console.log(id)

    empService.deleteEmp(id)
      .then((res) => {
        setMsg("emp delete successfully");
        init();

      })
      .catch((error) => {
        setMsg(error.message);
      })
  }


  return (
    <div className='container'>
      <h1>List of All Employees</h1>


      <div className="msg">
        {
          msg && <p> {msg} </p>
        }

      </div>


      <table className='employee-table'>
        <thead>
          <tr className='table-header-row'>
            <th>Sr. No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((e, num) => (


            <tr className='table-row'>
              <td>{num + 1}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>{e.salary}</td>


              <td>
                <Link to={"editEmp/" + e.id} className='action-button'>Edit</Link>
                <button onClick={() => deleteEmp(e.id)} className='action-button'>Delete</button>
              </td>
            </tr>
          ))}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>

  )
}

export default Home