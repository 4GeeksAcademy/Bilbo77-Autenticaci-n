import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const Profile = () => {
  const { store } = useContext(Context)

  return (
    <div>
      {store.isLogin ?
        <div className="container">
          <p className="text-success">Name : {store.user.first_name}</p>
          <p className="text-success">Last Name : {store.user.last_name}</p>
          <p className="text-success">Email : {store.user.email}</p>
        </div>
        :
        <div className="text-center">
        <p>Session expired</p>
          <Link to="/login"><button className="btn btn-dark ms-2">Login</button></Link>
        </div>
      }
    </div>
  )
}