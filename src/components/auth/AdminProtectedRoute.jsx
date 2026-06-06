import { Navigate } from 'react-router-dom';

export default function AdminProtectedRoute({ children }) {
  const token = localStorage.getItem('admin_token');

  if (token !== 'valid') {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
