// import "./App.css";
// import SideBar from "./components/Sidebar/SideBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import  Analysis from "./pages/Analysis";
// import   Store from "./pages/Store";
// import  User from "./pages/User";
// import  ContactUS from "./pages/ContactUS";
// import  Documentation from "./pages/Documentation";
// import  ActivityComm from "./pages/ActivityComm";
// function App() {
//   return (
//     <Router>
//       <SideBar>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/analysis" element={<Analysis/>} />
//           <Route path="/store" element={<Store />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/activity" element={<ActivityComm />} />
//           <Route path="/documentation" element={<Documentation />} />
//           <Route path="/contactus" element={<ContactUS/>} />
         
//         </Routes>
//       </SideBar>
//     </Router>
//   );
// }

// export default App;


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

