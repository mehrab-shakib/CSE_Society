import React from 'react'
import { useEffect , useState} from 'react';
import DashboardNav from '../components/DashboardNav'
import DashboardFooter from '../components/DashboardFooter'
import SuperAdminNav from "../components/SuperAdminNav";


const SuperAdminLayout = ({children}) => {
  const [user, setUser] = useState(null);

   useEffect(() => {
      // Fetch user data (from localStorage or API)
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);
  return (
    <div className="flex flex-col min-h-screen">
            <SuperAdminNav  user = {user}/>
            <main className="flex-grow">{children}</main>
            <DashboardFooter />
        </div>
  )
}

export default SuperAdminLayout