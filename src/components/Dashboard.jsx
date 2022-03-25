import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { sidebarFooter, sidebarHeader, sidebar, TopBarNotifIcon, TopBarAvatar, SidebarWidths } from "./SidebarData";


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
          <div className="mt-[32px] mb-[32px] mx-auto">
               <span className="flex ml-[15px] mr-[15px]"><img src={sidebarHeader.icon} alt={sidebarHeader.text} />
               <span className="ml-[7px] leading-tight my-auto" id="XsqfpxwvVb">{sidebarHeader.text}</span></span>
          </div>
          <ul className="list-none mr-[20px] mb-[30px]">
               <div id="x1SdxwmZsQqqpm">{sidebar.map((e) => {
                    return <Link to={e.link}><li className="flex pl-[20px] h-[45px]" key={e.text}>
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
          <span className="fixed right-20 top-1 cursor-pointer">
               <img src={TopBarAvatar.icon} alt={TopBarAvatar.text} className="float-left mr-[15px]" />
               <span className="text-sm mr-2 relative font-semibold">{TopBarAvatar.text}</span>
          </span>
          <span className="my-auto fixed right-4 top-4 cursor-pointer">
               <img src={TopBarNotifIcon.icon} alt={TopBarNotifIcon.text} width={"22px"} height={"28px"} className="mr-[15px]" />
          </span>
     </div>
}

TopBar.propTypes = {
     title: PropTypes.string.isRequired,
}
export default function Dashboard (props) {
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
