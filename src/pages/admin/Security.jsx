import { motion } from 'framer-motion';

const securitySections = [
  {
    title: 'Encrypted Keys',
    items: [
      { label: 'Database Credentials', value: 'Active', detail: 'AES-256', status: 'ok' },
      { label: 'API Keys', value: 'Active', detail: 'Rotated today', status: 'ok' },
      { label: 'JWT Secrets', value: 'Active', detail: 'Last rotated: Jun 6, 2026', status: 'ok' },
      { label: 'Encryption Key', value: 'Active', detail: 'Last rotated: today', status: 'ok' },
    ],
  },
  {
    title: 'SSL Certificates',
    items: [
      { label: 'Primary Domain', value: 'Valid', detail: 'Expires Dec 12, 2026', status: 'ok' },
      { label: 'API Subdomain', value: 'Valid', detail: 'Expires Nov 28, 2026', status: 'ok' },
      { label: 'Assets CDN', value: 'Valid', detail: 'Expires Jan 5, 2027', status: 'ok' },
    ],
  },
  {
    title: 'Access Control',
    items: [
      { label: 'Admin Console', value: 'Protected', detail: '2-factor auth enabled', status: 'ok' },
      { label: 'Database Access', value: 'Restricted', detail: 'IP whitelist active', status: 'ok' },
      { label: 'API Access', value: 'Rate limited', detail: '1000 req/min', status: 'ok' },
      { label: 'SSH Access', value: 'Key-only', detail: 'No password auth', status: 'ok' },
    ],
  },
  {
    title: 'Login to Console',
    items: [
      { label: 'DigitalOcean Console', value: 'Access', detail: '↗ Open dashboard', link: true },
      { label: 'Database Console', value: 'Access', detail: '↗ Open pgAdmin', link: true },
      { label: 'Redis Console', value: 'Access', detail: '↗ Open RedisInsight', link: true },
    ],
  },
  {
    title: 'Backups',
    items: [
      { label: 'Database Backups', value: 'Daily', detail: 'Last: today, 3:00 AM', status: 'ok' },
      { label: 'File Backups', value: 'Daily', detail: 'Last: today, 4:00 AM', status: 'ok' },
      { label: 'Backup Retention', value: '30 days', detail: 'Stored in redundant storage', status: 'ok' },
      { label: 'Backup Verification', value: 'Passed', detail: 'Last test: Jun 1, 2026', status: 'ok' },
    ],
  },
  {
    title: 'DDoS & Firewall',
    items: [
      { label: 'DDoS Protection', value: 'Active', detail: 'Always-on mitigation', status: 'ok' },
      { label: 'Web Application Firewall', value: 'Active', detail: 'OWASP rules enabled', status: 'ok' },
      { label: 'Intrusion Detection', value: 'Monitoring', detail: 'Alerts on anomalies', status: 'ok' },
      { label: 'Rate Limiting', value: 'Active', detail: 'Per-IP and per-endpoint', status: 'ok' },
    ],
  },
];

function SecurityItem({ item }) {
  return (
    <div className="security-item">
      <div className="security-info">
        <span className="security-label">{item.label}</span>
        {item.detail && <span className="security-detail">{item.detail}</span>}
      </div>
      <div className="security-status">
        {item.status === 'ok' && <span className="status-ok">✓</span>}
        {item.link ? (
          <span className="security-link">{item.value} ↗</span>
        ) : (
          <span className="security-value">{item.value}</span>
        )}
      </div>
    </div>
  );
}

export default function Security() {
  return (
    <div className="dashboard dashboard-full">
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h1 className="dashboard-title">Security & Access</h1>
          <p className="dashboard-subtitle">Manage encryption, certificates, and access controls</p>
        </div>
        <div className="managed-badge">
          <span className="badge-dot" />
          <span>All Systems Secure</span>
        </div>
      </motion.div>

      <div className="security-grid">
        {securitySections.map((section, i) => (
          <motion.div
            key={section.title}
            className="section-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="section-title">{section.title}</h3>
            <div className="security-list">
              {section.items.map(item => (
                <SecurityItem key={item.label} item={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}