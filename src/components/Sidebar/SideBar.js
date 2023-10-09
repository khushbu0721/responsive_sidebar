// import { NavLink } from "react-router-dom";
// import { FaBars, FaHome, FaUser } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
// import { TiChartBarOutline} from "react-icons/ti";
// import { VscAccount} from "react-icons/vsc";
// import {  AiTwotoneFileExclamation  } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// const routes = [
//   {
//     path: "/",
//     name: "Dashboard",
//     icon: <FaHome />,
//   },
//   {
//     path: "/analysis",
//     name: "Analysis",
//     icon:<TiChartBarOutline/>,
//   },
//   {
//     path: "/store",
//     name: "Store",
//     icon:<BsCartCheck /> ,
//   },
//   {
//     path: "/user",
//     name: "User",
//     icon:  <FaUser />,
//   },
//   {
//     path: "/activity",
//     name: "Activity Comm.",
//     icon: <AiTwotoneFileExclamation />,
//   },
//   {
//     path: "/documentation",
//     name: "Documentation",
//     icon:  <MdMessage />,
//   },
//   {
//     path: "/contactus",
//     name: "ContactUS",
//     icon: <VscAccount />,
//   },
  
// ];

// const SideBar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const inputAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     show: {
//       width: "140px",
//       padding: "5px 15px",
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   const showAnimation = {
//     hidden: {
//       width: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       opacity: 1,
//       width: "auto",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <>
//       <div className="main-container">
//         <motion.div
//           animate={{
//             width: isOpen ? "200px" : "45px",
//             transition: { duration: 0.5, type: "spring", damping: 10 },
//           }}
//           className={`sidebar `}
//         >
//           <div className="top_section">
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.h1>
//                   <img src={logo} alt="" height={100} width={120}></img>
//                 </motion.h1>
//               )}
//             </AnimatePresence>
//             <div className="bars">
//               <FaBars onClick={toggle} />
//             </div>
//           </div>
          
//           <section className="routes">
//             {routes.map((route, index) => {
//               return (
//                 <NavLink
//                   to={route.path}
//                   key={index}
//                   className="link"
//                   activeClassName="active"
//                 >
//                   <div className="icon">{route.icon}</div>
//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         variants={showAnimation}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                         className="link_text"
//                       >
//                         {route.name}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </NavLink>
//               );
//             })}
//           </section>
//         </motion.div>
      
//         <main>{children}</main>
//       </div>
//       {/* <div className="sideContainer"> Hello</div> */}
//     </>
//   );
// };

// export default SideBar;


// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
// import { useContext, createContext, useState } from "react"
// import logo from  './logo1.jpeg'
// const SidebarContext = createContext()

// export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true)
  
//   return (
//     <>
//       <section className="w-[700px] h-[60px] ml-[340px] mt-[30px] ">
//       <h4 className="text-gray-600 ml-2 font-bold">Dashboard</h4>
//       <h6 className="text-gray-700 ml-2">Good Afternoon, NeoPhyte</h6>
//       </section>
//     <aside className={` h-screen mt-[-60px] bg-white border-r  ${expanded ? "w-72":"w-0"}`}   >
//       <nav className="h-full flex flex-col bg-white-200 border-r shadow-sm" >
//         <div className="p-4 pb-2 flex justify-between items-center">
//           <img
//             src={logo} 
//             className={ `ml-[90px] pr-6 h-[55px] flex  mt-[-25px] overflow-hidden transition-all ${expanded ? "w-30":"w-0"} ` }
//             alt=""
           
//           />
//            <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className=" pt-[40px] "
            
//           >
//             {expanded ? <ChevronFirst /> : <ChevronLast />}
//           </button>
         
//         </div>


//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>
       
//       </nav>
//     </aside>
 
//     </>
//   )
// }

// export function SidebarItem({ icon, text, active, alert }) {
//   const { expanded } = useContext(SidebarContext)
  
//   return (
//     <li
    
//       className={`
//       relative flex items-center py-2 px-3 my-1
//       font-medium rounded-md cursor-pointer 
//       transition-colors group
//         space-x-6
//         ${expanded? "w-60":"w-16"}
//          ${
//           active
//           ? "bg-gradient-to-tr from-emerald-300 to-emerald-200 text-emerald-600 "
//             : "hover:bg-emerald-200 text-gray-600"
//         }
//     `}
//     >
//       {icon}
//       <span
//          className={`overflow-hidden transition-all ${
//           expanded ? "w-52 ml-3" : "w-0"}`}
//         >
//         {text}
        
//       </span>  
//       {alert && (
//         <div
//         className={`absolute right-2 w-2 h-2 rounded bg-emerald-400 ${
//           expanded ? "" : "top-6"
//           }
//           `}
//         />
//       )}
      
//       {!expanded && (
//         <div
//           className={`
//           absolute left-full rounded-md px-2 py-1 ml-4
//           bg-emerald-100 text-emerald-800 text-sm
//           invisible opacity-20 -translate-x-3 transition-all
//           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//           w-30
//       `}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   )
// }




import { MoreVertical, ChevronLast, ChevronFirst, LayoutDashboard } from "lucide-react"
import { useContext, createContext, useState } from "react"
import logo from  './logo1.jpeg'
const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <div className="flex">
    <aside className={` h-screen  bg-white border-r  ${expanded ? "w-72":"w-0"}`} >
      <nav className="h-full flex flex-col bg-white-200 border-r shadow-sm" >
      <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            // ml-[60px] 
            className={`  w-[60px] h-10 ml-2 overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
         <button
            onClick={() => setExpanded((curr) => !curr)}
             className=" pt-[40px] mt-[20px]  "
                     >
          {expanded ? <ChevronFirst /> : <ChevronLast />}
       </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        
      </nav>
    </aside>
<section className={`w-[1000px] h-[570px]  bg-gray-100  ${expanded ? "ml-0":"ml-[75px]"} `}>
  <div className="text-gray-600 ml-[20px] ">
    <h5 className="font-bold ">Dashboard</h5>
    <h6>Good Afternoon, NeoPhyte</h6>
  </div>
</section>
    </div>
  )
}
export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
    
      className={`
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer 
      transition-colors group
        space-x-6
        ${expanded? "w-60":"w-16"}
         ${
          active
          ? "bg-gradient-to-tr from-emerald-300 to-emerald-200 text-emerald-600 "
            : "hover:bg-emerald-200 text-gray-600"
        }
    `}
    >
      {icon}
      <span
         className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"}`}
        >
        {text}
        
      </span>  
      {alert && (
        <div
        className={`absolute right-2 w-2 h-2 rounded bg-emerald-400 ${
          expanded ? "" : "top-6"
          }
          `}
        />
      )}
      
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-4
          bg-emerald-100 text-emerald-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          w-30
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}