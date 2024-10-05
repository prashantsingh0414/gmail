import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";


const Body = () => {
  const navigate =useNavigate();
  const {user} = useSelector(store =>store.app);
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  })
  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
        </div>
  )
}

export default Body