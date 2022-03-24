import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// SVG IMPORTS
import dashboard from "../svg/dashboard.svg";
import header from "../svg/header.svg";
import message from "../svg/message.svg";
import products from "../svg/products.svg";
import settings from "../svg/settings.svg";
import split_expand from "../svg/split-expand.svg";
import analytics from "../svg/analytics.svg"

export function Sidebar () {

     let sidebarRef = useRef()

     let w = {
          min: '80px',
          max: '213px',
     }

     let sidebarHeader = {
          text: 'Shopping',
          icon: header,
     }

     let sidebar = [
          {
               icon: dashboard,
               text: 'Dashboard',
               link: '/',
          },{
               icon: analytics,
               text: 'Analytics',
               link: '/Analytics',
          },{
               icon: products,
               text: 'Product',
               link: '/Prods',
          },{
               icon: message,
               text: 'Messages',
               link: '/Messages',
          },{
               icon: settings,
               text: 'Settings',
               link: '/Settings',
          }
     ]

     let sidebarFooter = {
          icon: split_expand,
          text: 'sidebarFootersplit_expand'
     }

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

     return <div className={`overflow-hidden cursor-pointer shadow-md bg-white sm:hidden md:hidden xl:block lg:block`} ref={sidebarRef}>
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
     </div>
}

export function AppContent (props) {
     return <div className="w-full h-full p-4"> {props.children} </div>
}

export default function Dashboard (props) {
     return <div className="flex bg-gray-200 dashboard-app">
          <Sidebar />
          <div className="flex flex-col w-full h-full">
               <TopBar title={props.AppTitle} />
               <AppContent>
                    {props.pageElement}
               </AppContent>
          </div>
     </div>
}
