import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate auth delay
    await new Promise(resolve => setTimeout(resolve, 800));

    localStorage.setItem('admin_auth', 'true');
    setLoading(false);
    navigate('/admin/dashboard');
  };

  return (
    <div className="admin-login">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="login-header">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="oklch(52% 0.08 248)" />
            <path d="M8 16h16M16 8v16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h1>Infrastructure Portal</h1>
        </div>

        <p className="login-subtitle">Sign in to manage your infrastructure</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
            {loading ? (
              <span className="loading-dots">
                <span />
                <span />
                <span />
              </span>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        <p className="login-hint">Contact support if you need access</p>
      </motion.div>
    </div>
  );
}