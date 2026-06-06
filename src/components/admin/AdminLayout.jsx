import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProject } from '../../contexts/ProjectContext';

const navItems = [
  { label: 'Dashboard', icon: '◈', path: '/admin/dashboard', isPage: true },
  { label: 'Infrastructure', icon: '◉', path: '/admin/infrastructure', isPage: true },
  { label: 'Monitoring', icon: '◎', path: '/admin/monitoring', isPage: true },
  { label: 'Security', icon: '◐', path: '/admin/security', isPage: true },
  { label: 'Reporting', icon: '◫', path: '/admin/reporting', isPage: true },
  { label: 'Settings', icon: '◑', path: '/admin/settings', isPage: true },
];

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const { selectedProject, setSelectedProject, projects } = useProject();

  const handleSignOut = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin');
  };

  const handleNavClick = (item) => {
    if (item.isPage) {
      navigate(item.path);
    } else {
      // Refresh dashboard
      if (window.location.hash !== '#/admin/dashboard') {
        navigate('/admin/dashboard');
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <a href="/" className="sidebar-logo-link">
            <img
              src="/logo_transparent.jpg"
              alt="Jetimworks"
              className="sidebar-logo-img"
            />
          </a>
          <div className="sidebar-brand">
            <span className="brand-name">Infra</span>
            <a href="/" className="brand-badge brand-link">By Jetimworks</a>
          </div>
        </div>

        <div className="sidebar-project-selector">
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="project-dropdown"
          >
            {projects.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <span className="dropdown-arrow">▾</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, i) => (
            <motion.button
              key={item.label}
              className={`nav-item ${window.location.hash === '#' + item.path ? 'active' : ''}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 + 0.2 }}
              onClick={() => handleNavClick(item)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="sign-out-btn" onClick={handleSignOut}>
            <span>←</span>
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      <main className="admin-main admin-main-full">
        {children}
      </main>
    </div>
  );
}