import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import {Bell, Check} from "tabler-icons-react"
import { sidebarFooter, sidebarHeader, sidebar, SidebarWidths } from "./SidebarData";
import { Avatar, Divider } from "@mantine/core";
import UserOptionsDrawer from "./UserOptionsDrawer";
import { showNotification } from '@mantine/notifications';
import { userContext } from "../context/userContext";


export function Sidebar () {

     let sidebarRef = useRef()
     let w = SidebarWidths;
     let [actualWidth, setActualWidth] = useState(w.max);
     useEffect(() => {
          sidebarRef.current.style.width = actualWidth;
     });

     const handleClick = useCallback(() => {
          setActualWidth(actualWidth === w.max ? w.min : w.max);
          sidebarRef.current.style.width = actualWidth;
          if (actualWidth === w.max) {
               document.querySelectorAll('#x1SdxwmZsQqqpm a li span').forEach((e) => {
                    e.classList.add('hidden')
               });
               document.querySelector('#XsqfpxwvVb').classList.add('hidden');
          }else{
               document.querySelectorAll('#x1SdxwmZsQqqpm a li span').forEach((e) => {
                    e.classList.remove('hidden')
               });
               document.querySelector('#XsqfpxwvVb').classList.remove('hidden');
          }
     }, [actualWidth, w.max, w.min]);

     return <div className={`overflow-hidden cursor-pointer shadow-md bg-white xs:hidden sm:hidden md:block xl:block lg:block`} ref={sidebarRef}>
          <div className="mt-[17px] mb-[5px] mx-auto">
               <span className="flex ml-[15px] mb-3 mr-[15px]"><img src={sidebarHeader.icon} height={"30px"} width={"25px"} alt={sidebarHeader.text} />
               <span className="ml-[7px] mb-1 leading-tight my-auto" id="XsqfpxwvVb">{sidebarHeader.text}</span></span>
          </div>
          <Divider size="xs" />
          <ul className="list-none mr-[20px] mb-[30px]">
               <div id="x1SdxwmZsQqqpm">{sidebar.map((e) => {
                    return <Link to={e.link} key={e.link}><li className="flex pl-[20px] h-[45px]" key={e.text}>
                         <img src={e.icon} alt={e.text} width={"22px"} height={"28px"} className="mr-[15px]" />
                         <span className="my-auto">{e.text}</span>
                    </li></Link>
               })}</div>
          </ul>
          <div className="bottom-0 mt-[10px] mb-[10px] right-0 ml-[22px]">
               <img src={sidebarFooter.icon} alt={sidebarFooter.text} onClick={handleClick} width={"28px"} height={"28px"} className="mr-[30px]" />
          </div>
     </div>
}

export function TopBar (props) {
     return <div className="flex h-14 shadow-sm bg-white border-l-2"> 
          <span className="text-xl text-black font-bold ml-[25px] my-auto">{props.title}</span>
          <span className="fixed right-10 top-2 cursor-pointer mr-6">
               <UserOptionsDrawer control={<Avatar />}  />
          </span>
          <span className="my-auto fixed right-4 top-3 cursor-pointer">
               <Bell  size={30} color="blue" />
          </span>
     <Divider size="xs" />
     </div>
}

TopBar.propTypes = {
     title: PropTypes.string.isRequired,
}
export default function Dashboard (props) {
     showNotification({
          id: 'hello-there',
          disallowClose: true,
          autoClose: 7000,
          title: "Welcome",
          message: 'Welcome to your dashboard',
          color: 'green',
          icon: <Check color="green" />,
          loading: false,
     });

     // Constraint user to login for him to see the dashboard because Dashboard component is wrapper for all page inside user Dashboard
     const {user} = useContext(userContext);
     if (user === null || user?.user === null) {
         return <Navigate to={'/SignIn'} replace={true} />
     }

     return <div className="flex bg-gray-200 dashboard-app">
          <Sidebar />
          <div className="flex flex-col w-full h-full">
               <TopBar title={props.AppTitle} />
               <div className="w-full h-full p-4">  {props.pageElement} </div>
          </div>
     </div>
}

Dashboard.propTypes = {
     pageElement: PropTypes.object.isRequired,
     AppTitle: PropTypes.string.isRequired,
}
