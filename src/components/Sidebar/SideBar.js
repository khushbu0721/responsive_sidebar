
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