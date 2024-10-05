import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";

import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSearchText } from "../redux/appSlice";

const Navbar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.app);

  const logoutHandler = async()=>{
    try{
      const res  =await axios.get("http://localhost:8080/api/v1/user/logout");
      console.log(res.data);
      toast.success(res.data.message)
      dispatch(setAuthUser(null));
      
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(() => {
    dispatch(setSearchText(text));
  }, [text, dispatch]);
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      {user && (
        <>
          <div className="w-[50%] mr-60">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
              <IoSearch size={"24px"} className="text-gray-700" />
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Search Mail"
                className="rounded-full w-full bg-transparent outline-none px-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <CiCircleQuestion size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <IoIosSettings size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <TbGridDots size={"24px"} />
            </div>
            <span  onClick={logoutHandler}className="underline cursor-pointer">Logout</span>
            <Avatar src={user.profilePhoto} size="40" round={true} />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
