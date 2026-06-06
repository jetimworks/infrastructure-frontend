import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Security from './pages/admin/Security';
import Infrastructure from './pages/admin/Infrastructure';
import Monitoring from './pages/admin/Monitoring';
import Settings from './pages/admin/Settings';
import AdminLayout from './components/admin/AdminLayout';

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Pricing />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('admin_auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/admin" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/security"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Security />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/infrastructure"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Infrastructure />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/monitoring"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Monitoring />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Settings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
