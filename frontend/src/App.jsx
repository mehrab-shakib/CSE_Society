import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SuperadminDashboard from "./pages/SuperadminDashboard";

import EditClub from "./pages/EditClub";

import MainLayout from "./layouts/MainLayout";
import SuperAdminLayout from "./layouts/SuperAdminLayout";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Clubs from "./pages/Clubs";
import JoinClub from "./pages/JoinClub";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";



import React from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route
          path="/clubs"
          element={
            <MainLayout>
              <Clubs />
            </MainLayout>
          }
        />
        <Route
          path="/join-club"
          element={
            <MainLayout>
              <JoinClub />
            </MainLayout>
          }
        />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/superadminDashboard" element={<SuperadminDashboard />} />
        
        
        <Route
          path="/edit-club/:id"
          element={
            <SuperAdminLayout>
              {" "}
              <EditClub />
            </SuperAdminLayout>
          }
        />

        <Route
          path="/announcement"
          element={
            <MainLayout>
              <Announcements />
            </MainLayout>
          }
        />
        <Route
          path="/events"
          element={
            <MainLayout>
              <Events />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
