import React, { useState } from "react";
import './AdminHome.css'
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminHome() {
  const [users, setUsers]=useState([])
  const [search, setSearch]=useState('')
  const [refresh, setRefresh]=useState(false);
  const baseImgUrl="http://localhost:5000/uploads/"

  useEffect(()=>{
    (async function(){
        let {data} = await axios.get("/admin/users?search="+search);
        setUsers(data)
        console.log(data)
    })()
  },[search, refresh])
  async function deleteUser(id){
    if(window.confirm("Are you sure delete this user")){
      await axios.post("/admin/delete-user", {id});
      setRefresh(!refresh)
    }
  }
  return (
    <div>
      <AdminNavbar   setSearch={setSearch} search={search}></AdminNavbar>
      <div className="table-main">
        <div className="table-container d-flex justify-content-center">
          <table className="table align-middle mb-0 bg-white mt-3 w-75">
            <thead className="bg-primary text-white">
              <tr className="text-center">
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Proffession</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                  users.map((item, index)=>{
                    return (
                      <tr key={index} className="text-center">
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={baseImgUrl+item.profile}
                            style={{width: "45px", height: "45px"}}
                            className="rounded-circle"
                          />
                        </div>
                      </td>
                      <td>
                      <div className="ms-3">
                            <p className="fw-bold mb-1">{item.name}</p>
                          </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{item.email}</p>
                      </td>
                      <td>{item.proffession}</td>
                      <td>
                        <Link to={"/admin/edit-user/"+item._id}>
                        <button
                          type="button"
                          className="btn btn-primary btn-rounded btn-sm fw-bold me-1"
                          data-mdb-ripple-color="dark"
                          >
                          Edit
                        </button>
                          </Link>
                        <button
                          type="button"
                          onClick={()=>deleteUser(item._id)}
                          className="btn btn-outline-primary btn-rounded btn-sm fw-bold"
                          data-mdb-ripple-color="dark"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    )
                  })
                }
              
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;


