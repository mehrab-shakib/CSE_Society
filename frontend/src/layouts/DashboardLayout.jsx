import React from 'react'
import DashboardNav from '../components/DashboardNav'
import DashboardFooter from '../components/DashboardFooter'

const DashboardLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
            <DashboardNav />
            <main className="flex-grow">{children}</main>
            <DashboardFooter />
        </div>
  )
}

export default DashboardLayout