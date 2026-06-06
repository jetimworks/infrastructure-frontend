import { useState } from 'react';
import { motion } from 'framer-motion';

const settingsData = {
  notifications: {
    emailAlerts: true,
    slackAlerts: true,
    smsAlerts: false,
    thresholds: { bandwidthPct: 80, memoryPct: 70, uptimeThreshold: 99 },
  },
  users: [
    { name: 'Admin User', email: 'admin@jetimworks.com', role: 'Owner', mfa: true, lastActive: 'Online' },
    { name: 'Dev Lead', email: 'dev@jetimworks.com', role: 'Developer', mfa: true, lastActive: '2 hours ago' },
    { name: 'Support', email: 'support@jetimworks.com', role: 'Viewer', mfa: false, lastActive: 'Yesterday' },
  ],
  apiKeys: [
    { name: 'Production API', key: 'jwm_a1b2c3d4...f8d2e1', created: 'Jan 15, 2026', lastUsed: 'Today' },
    { name: 'Staging API', key: 'jws_c3d4e5f6...a3c1b2', created: 'Feb 1, 2026', lastUsed: 'Yesterday' },
    { name: 'CI/CD Pipeline', key: 'jwc_e5f6a7b8...c9d1e2', created: 'Mar 10, 2026', lastUsed: '3 days ago' },
  ],
  backupSchedule: { frequency: 'Daily', time: '2:00 AM UTC', retention: '30 days', destination: 'Redundant Storage', status: 'Healthy' },
  security: { twoFactor: true, sessionTimeout: '24h', ipWhitelist: ['1.2.3.4/32', '5.6.7.8/32'], loginAlerts: true },
  auditLogs: [
    { time: '5 min ago', action: 'API key created', user: 'admin@jetimworks.com', ip: '1.2.3.4' },
    { time: '1 hour ago', action: 'User invited', user: 'admin@jetimworks.com', ip: '1.2.3.4' },
    { time: '3 hours ago', action: 'Settings updated', user: 'admin@jetimworks.com', ip: '1.2.3.4' },
    { time: '1 day ago', action: 'Login from new IP', user: 'dev@jetimworks.com', ip: '5.6.7.8' },
    { time: '2 days ago', action: 'API key revoked', user: 'admin@jetimworks.com', ip: '1.2.3.4' },
  ],
};

function StatCard({ label, value, sub, delay }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
      {sub && <span className="stat-sub">{sub}</span>}
    </motion.div>
  );
}

function SectionCard({ title, children, delay = 0 }) {
  return (
    <motion.div
      className="section-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {title && <h3 className="section-title">{title}</h3>}
      {children}
    </motion.div>
  );
}

function Toggle({ checked, onChange, label, desc }) {
  return (
    <div className="settings-toggle-row">
      <div>
        <div className="settings-toggle-label">{label}</div>
        {desc && <div className="settings-toggle-desc">{desc}</div>}
      </div>
      <label className="toggle-switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="toggle-slider" />
      </label>
    </div>
  );
}

export default function Settings() {
  const [notifications, setNotifications] = useState(settingsData.notifications);
  const [security, setSecurity] = useState(settingsData.security);

  return (
    <div className="dashboard dashboard-full">
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="dashboard-header-left">
          <div>
            <h1 className="dashboard-title">Settings</h1>
            <p className="dashboard-subtitle">Manage notifications, users, and security</p>
          </div>
        </div>
        <div className="managed-badge">
          <span className="badge-dot" />
          <span>Settings Configured</span>
        </div>
      </motion.div>

      {/* Counters */}
      <div className="counters-grid">
        <StatCard label="Active Users" value={settingsData.users.length} sub="3 roles" delay={0} />
        <StatCard label="API Keys" value={settingsData.apiKeys.length} sub="Production ready" delay={0.08} />
        <StatCard label="Last Backup" value="Today" sub="2:00 AM UTC" delay={0.16} />
      </div>

      {/* Main grid */}
      <div className="dashboard-grid">
        {/* Notification Preferences */}
        <SectionCard title="Notification Preferences" delay={0.24}>
          <Toggle
            label="Email Alerts"
            desc="Receive incident alerts via email"
            checked={notifications.emailAlerts}
            onChange={(e) => setNotifications(n => ({ ...n, emailAlerts: e.target.checked }))}
          />
          <Toggle
            label="Slack Alerts"
            desc="Post alerts to #incidents channel"
            checked={notifications.slackAlerts}
            onChange={(e) => setNotifications(n => ({ ...n, slackAlerts: e.target.checked }))}
          />
          <Toggle
            label="SMS Alerts"
            desc="Critical alerts via SMS for on-call"
            checked={notifications.smsAlerts}
            onChange={(e) => setNotifications(n => ({ ...n, smsAlerts: e.target.checked }))}
          />
        </SectionCard>

        {/* User Management */}
        <SectionCard title="User Management" delay={0.32}>
          <button className="btn btn-ghost invite-btn">+ Invite User</button>
          <div className="user-table">
            <div className="user-table-header">
              <span>User</span>
              <span>Role</span>
              <span>MFA</span>
              <span>Last Active</span>
            </div>
            {settingsData.users.map((u, i) => (
              <div key={i} className="user-row">
                <div>
                  <div className="user-name">{u.name}</div>
                  <div className="user-email">{u.email}</div>
                </div>
                <span className={`role-badge ${u.role === 'Owner' ? 'role-badge-owner' : ''}`}>{u.role}</span>
                <span className={u.mfa ? 'mfa-enabled' : 'mfa-disabled'}>{u.mfa ? '✓ Enabled' : 'Disabled'}</span>
                <span className="user-last-active">{u.lastActive}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* API Keys */}
        <SectionCard title="API Keys" delay={0.40}>
          <button className="btn btn-ghost invite-btn">+ Create Key</button>
          <div className="api-key-list">
            {settingsData.apiKeys.map((k, i) => (
              <div key={i} className="api-key-row">
                <div className="api-key-info">
                  <div className="api-key-name">{k.name}</div>
                  <div className="api-key-meta">
                    <span className="key-masked">{k.key}</span>
                    <span style={{ margin: '0 8px' }}>·</span>
                    <span>Created {k.created}</span>
                    <span style={{ margin: '0 8px' }}>·</span>
                    <span>Last used {k.lastUsed}</span>
                  </div>
                </div>
                <button className="btn btn-ghost btn-ghost-sm">Revoke</button>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Backup Schedules */}
        <SectionCard title="Backup Schedules" delay={0.48}>
          <div className="settings-info-list">
            <div className="settings-info-row">
              <span className="settings-info-label">Frequency</span>
              <span className="settings-info-value">{settingsData.backupSchedule.frequency}</span>
            </div>
            <div className="settings-info-row">
              <span className="settings-info-label">Time</span>
              <span className="settings-info-value">{settingsData.backupSchedule.time}</span>
            </div>
            <div className="settings-info-row">
              <span className="settings-info-label">Retention</span>
              <span className="settings-info-value">{settingsData.backupSchedule.retention}</span>
            </div>
            <div className="settings-info-row">
              <span className="settings-info-label">Destination</span>
              <span className="settings-info-value">{settingsData.backupSchedule.destination}</span>
            </div>
            <div className="settings-info-row">
              <span className="settings-info-label">Status</span>
              <span className="settings-info-value" style={{ color: '#22c55e' }}>{settingsData.backupSchedule.status}</span>
            </div>
          </div>
          <button className="btn btn-ghost" style={{ marginTop: 'var(--sp-4)' }}>Run Backup Now</button>
        </SectionCard>

        {/* Security Settings */}
        <SectionCard title="Security Settings" delay={0.56}>
          <Toggle
            label="Two-Factor Authentication"
            desc="Require 2FA for all admin users"
            checked={security.twoFactor}
            onChange={(e) => setSecurity(s => ({ ...s, twoFactor: e.target.checked }))}
          />
          <Toggle
            label="Login Alerts"
            desc="Notify on login from new IP"
            checked={security.loginAlerts}
            onChange={(e) => setSecurity(s => ({ ...s, loginAlerts: e.target.checked }))}
          />
          <div className="settings-info-row" style={{ marginTop: 'var(--sp-3)' }}>
            <span className="settings-info-label">Session Timeout</span>
            <span className="settings-info-value">{security.sessionTimeout}</span>
          </div>
          <div style={{ marginTop: 'var(--sp-3)' }}>
            <div className="settings-info-label" style={{ marginBottom: 'var(--sp-2)' }}>IP Whitelist</div>
            <div className="ip-whitelist">
              {security.ipWhitelist.map((ip, i) => (
                <span key={i} className="ip-tag">{ip}</span>
              ))}
            </div>
          </div>
        </SectionCard>

        {/* Audit Logs */}
        <SectionCard title="Audit Logs" delay={0.64}>
          <div className="audit-list">
            {settingsData.auditLogs.map((log, i) => (
              <div key={i} className="audit-row">
                <span className="audit-time">{log.time}</span>
                <span className="audit-action">{log.action}</span>
                <span className="audit-user">{log.user}</span>
                <span className="audit-ip">{log.ip}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
