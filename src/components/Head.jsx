import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const togglemenuHandler=()=>{
    dispatch(toggleMenu());
  };                           
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img 
        onClick={()=> togglemenuHandler()}
        className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
        />
        <img
        className="h-8 mx-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 relative top-1.5"><img className="h-6 mx-4 pt-1 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIHcWSp0-wssziSeabC656cEbQRawhzPjag&usqp=CAU" alt="search"/></button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/552/552721.png"/>
      </div>
    </div>
  );
};
export default Head;
