
import {Store, User,BarChart,Contact,FileText,LayoutDashboard,GanttChartSquareIcon} from "lucide-react"
import Sidebar, { SidebarItem } from "./components/Sidebar/SideBar"
export default function App(){

  return(
    <div className="App">
      <Sidebar>
       <SidebarItem 
       icon={<LayoutDashboard size={20}/>}
       text="Dashboard"
       active
    Sidebar/>
       <SidebarItem icon={<BarChart size={20}/>} text="Analysis"   />
       <SidebarItem icon={<Store size={20}/>} text="Store" />
       <SidebarItem icon={<User size={20}/>} text="User" />
       <SidebarItem icon={<GanttChartSquareIcon size={20}/>} text="Active Comm." />
       <SidebarItem icon={<FileText size={20}/>} text="Documentation" />
       <SidebarItem icon={<Contact size={20}/>} text="Contact Us" />
     
      </Sidebar>
    
    </div>
  )
}

