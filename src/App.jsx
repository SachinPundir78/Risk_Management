import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupForm from "./components/auth/SignupForm";
import MainDashboard from "./components/main/MainDashboard";
import EmployeeDashboard from "./components/main/EmployeeDashboard"; // Import EmployeeDashboard
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/login" element={<SignupForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/dashboard"
            element={
              //<PrivateRoute>
                <MainDashboard />
              //</PrivateRoute>
            }
          />
          {/* New route for Employee Risk Assessment */}
          <Route
            path="/risk-assessment/:employeeId?"
            element={
              //<PrivateRoute>
                <EmployeeDashboard />
              //</PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;