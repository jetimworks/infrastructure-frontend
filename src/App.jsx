import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import Reporting from './pages/admin/Reporting';
import Settings from './pages/admin/Settings';
import AdminLayout from './components/admin/AdminLayout';
import { ProjectProvider } from './contexts/ProjectContext';

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
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <ProjectProvider>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </ProjectProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/security"
          element={
            <ProtectedRoute>
              <ProjectProvider>
                <AdminLayout>
                  <Security />
                </AdminLayout>
              </ProjectProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/infrastructure"
          element={
            <ProtectedRoute>
              <ProjectProvider>
                <AdminLayout>
                  <Infrastructure />
                </AdminLayout>
              </ProjectProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/monitoring"
          element={
            <ProtectedRoute>
              <ProjectProvider>
                <AdminLayout>
                  <Monitoring />
                </AdminLayout>
              </ProjectProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reporting"
          element={
            <ProtectedRoute>
              <ProjectProvider>
                <AdminLayout>
                  <Reporting />
                </AdminLayout>
              </ProjectProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <ProjectProvider>
                <AdminLayout>
                  <Settings />
                </AdminLayout>
              </ProjectProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}
