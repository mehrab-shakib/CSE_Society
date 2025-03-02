import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Clubs from "./pages/Clubs";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/clubs" element={<DashboardLayout><Clubs /></DashboardLayout>} />
        <Route path="/users" element={<DashboardLayout><Users /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
