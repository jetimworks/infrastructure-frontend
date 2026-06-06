import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = ['Petracore', 'Reccur', 'Lena', 'Jetimworks', 'Antlar'];

// Sample data for reports
const reportData = {
  Petracore: {
    project: 'Petracore',
    generated: 'Jun 6, 2026 at 9:00 AM',
    period: 'June 1 - June 6, 2026',
    infrastructure: {
      servers: [
        { name: 'app-server-1', provider: 'DigitalOcean', region: 'NYC-1', status: 'running', specs: '2 vCPU, 4GB RAM, 80GB SSD' },
        { name: 'app-server-2', provider: 'DigitalOcean', region: 'NYC-1', status: 'running', specs: '2 vCPU, 4GB RAM, 80GB SSD' },
      ],
      database: { type: 'PostgreSQL 16', status: 'Healthy', storage: '50GB', used: '18GB' },
      cache: { type: 'Redis', status: 'Healthy', allocated: '256MB', used: '89MB' },
      storage: { total: '100GB', used: '42GB', backups: 'Daily at 3:00 AM' },
    },
    uptime: { percentage: '99.8%', downtime: '8m 32s', incidents: 0 },
    performance: {
      avgResponse: '62ms',
      p95Response: '145ms',
      p99Response: '210ms',
      requestsPerDay: '142,850',
    },
    security: {
      ssl: { count: 2, allValid: true, expiresSoon: false },
      firewall: { status: 'Active', rules: 12 },
      backups: { lastRun: 'Jun 6, 2026 3:00 AM', nextRun: 'Jun 7, 2026 3:00 AM' },
      ddosProtection: 'Enabled',
    },
    costs: { monthly: '$70.00', overage: '$0.00' },
    contacts: ['ops@petracore.com', 'dev@petracore.com'],
  },
  Reccur: {
    project: 'Reccur',
    generated: 'Jun 6, 2026 at 9:15 AM',
    period: 'June 1 - June 6, 2026',
    infrastructure: {
      servers: [
        { name: 'reccur-app-1', provider: 'DigitalOcean', region: 'SFO-1', status: 'running', specs: '4 vCPU, 8GB RAM, 160GB SSD' },
      ],
      database: { type: 'PostgreSQL 16', status: 'Healthy', storage: '100GB', used: '47GB' },
      cache: { type: 'Redis', status: 'Healthy', allocated: '512MB', used: '312MB' },
      storage: { total: '200GB', used: '87GB', backups: 'Daily at 2:00 AM' },
    },
    uptime: { percentage: '99.9%', downtime: '4m 12s', incidents: 0 },
    performance: {
      avgResponse: '38ms',
      p95Response: '89ms',
      p99Response: '130ms',
      requestsPerDay: '284,320',
    },
    security: {
      ssl: { count: 3, allValid: true, expiresSoon: false },
      firewall: { status: 'Active', rules: 18 },
      backups: { lastRun: 'Jun 6, 2026 2:00 AM', nextRun: 'Jun 7, 2026 2:00 AM' },
      ddosProtection: 'Enabled',
    },
    costs: { monthly: '$150.00', overage: '$12.50' },
    contacts: ['tech@reccur.io', 'sre@reccur.io'],
  },
  Lena: {
    project: 'Lena',
    generated: 'Jun 6, 2026 at 8:45 AM',
    period: 'June 1 - June 6, 2026',
    infrastructure: {
      servers: [
        { name: 'lena-primary', provider: 'DigitalOcean', region: 'AMS-1', status: 'running', specs: '8 vCPU, 16GB RAM, 320GB NVMe' },
        { name: 'lena-worker-1', provider: 'DigitalOcean', region: 'AMS-1', status: 'running', specs: '4 vCPU, 8GB RAM, 160GB SSD' },
        { name: 'lena-worker-2', provider: 'DigitalOcean', region: 'AMS-1', status: 'stopped', specs: '4 vCPU, 8GB RAM, 160GB SSD' },
      ],
      database: { type: 'PostgreSQL 16', status: 'Healthy', storage: '200GB', used: '98GB' },
      cache: { type: 'Redis', status: 'Healthy', allocated: '1GB', used: '680MB' },
      storage: { total: '500GB', used: '220GB', backups: 'Daily at 1:00 AM' },
    },
    uptime: { percentage: '99.9%', downtime: '2m 45s', incidents: 0 },
    performance: {
      avgResponse: '31ms',
      p95Response: '72ms',
      p99Response: '108ms',
      requestsPerDay: '521,400',
    },
    security: {
      ssl: { count: 4, allValid: true, expiresSoon: false },
      firewall: { status: 'Active', rules: 24 },
      backups: { lastRun: 'Jun 6, 2026 1:00 AM', nextRun: 'Jun 7, 2026 1:00 AM' },
      ddosProtection: 'Enterprise',
    },
    costs: { monthly: '$280.00', overage: '$0.00' },
    contacts: ['infrastructure@lena.app', 'oncall@lena.app'],
  },
  Jetimworks: {
    project: 'Jetimworks',
    generated: 'Jun 6, 2026 at 9:30 AM',
    period: 'June 1 - June 6, 2026',
    infrastructure: {
      servers: [
        { name: 'jetim-api-1', provider: 'DigitalOcean', region: 'NYC-1', status: 'running', specs: '2 vCPU, 4GB RAM, 80GB SSD' },
        { name: 'jetim-api-2', provider: 'DigitalOcean', region: 'NYC-1', status: 'running', specs: '2 vCPU, 4GB RAM, 80GB SSD' },
        { name: 'jetim-worker-1', provider: 'DigitalOcean', region: 'NYC-1', status: 'running', specs: '2 vCPU, 4GB RAM, 80GB SSD' },
        { name: 'jetim-worker-2', provider: 'DigitalOcean', region: 'NYC-1', status: 'running', specs: '2 vCPU, 4GB RAM, 80GB SSD' },
      ],
      database: { type: 'PostgreSQL 16', status: 'Healthy', storage: '200GB', used: '87GB' },
      cache: { type: 'Redis', status: 'Healthy', allocated: '256MB', used: '124MB' },
      storage: { total: '200GB', used: '87GB', backups: 'Daily at 3:00 AM' },
    },
    uptime: { percentage: '99.9%', downtime: '1m 58s', incidents: 0 },
    performance: {
      avgResponse: '45ms',
      p95Response: '102ms',
      p99Response: '156ms',
      requestsPerDay: '89,200',
    },
    security: {
      ssl: { count: 3, allValid: true, expiresSoon: false },
      firewall: { status: 'Active', rules: 15 },
      backups: { lastRun: 'Jun 6, 2026 3:00 AM', nextRun: 'Jun 7, 2026 3:00 AM' },
      ddosProtection: 'Enabled',
    },
    costs: { monthly: '$70.00', overage: '$0.00' },
    contacts: ['joshua@jetimworks.com', 'ops@jetimworks.com'],
  },
  Antlar: {
    project: 'Antlar',
    generated: 'Jun 6, 2026 at 9:00 AM',
    period: 'June 1 - June 6, 2026',
    infrastructure: {
      servers: [
        { name: 'antlar-app-1', provider: 'DigitalOcean', region: 'LON-1', status: 'running', specs: '2 vCPU, 4GB RAM, 80GB SSD' },
      ],
      database: { type: 'PostgreSQL 16', status: 'Healthy', storage: '80GB', used: '35GB' },
      cache: { type: 'Redis', status: 'Healthy', allocated: '256MB', used: '78MB' },
      storage: { total: '160GB', used: '55GB', backups: 'Daily at 4:00 AM' },
    },
    uptime: { percentage: '99.7%', downtime: '12m 30s', incidents: 1 },
    performance: {
      avgResponse: '55ms',
      p95Response: '128ms',
      p99Response: '195ms',
      requestsPerDay: '45,600',
    },
    security: {
      ssl: { count: 2, allValid: true, expiresSoon: true },
      firewall: { status: 'Active', rules: 10 },
      backups: { lastRun: 'Jun 6, 2026 4:00 AM', nextRun: 'Jun 7, 2026 4:00 AM' },
      ddosProtection: 'Enabled',
    },
    costs: { monthly: '$70.00', overage: '$0.00' },
    contacts: ['dev@antlar.io'],
  },
};

const schedules = [
  { id: 1, name: 'Weekly Status Report', project: 'Jetimworks', frequency: 'Weekly', nextRun: 'Jun 9, 2026', lastRun: 'Jun 2, 2026', recipients: ['joshua@jetimworks.com', 'ops@jetimworks.com'], enabled: true },
  { id: 2, name: 'Monthly Infrastructure Summary', project: 'Reccur', frequency: 'Monthly', nextRun: 'Jul 1, 2026', lastRun: 'Jun 1, 2026', recipients: ['tech@reccur.io'], enabled: true },
  { id: 3, name: 'Daily Health Check', project: 'Lena', frequency: 'Daily', nextRun: 'Jun 7, 2026 9:00 AM', lastRun: 'Jun 6, 2026 9:00 AM', recipients: ['infrastructure@lena.app'], enabled: true },
  { id: 4, name: 'Security Audit Report', project: 'Petracore', frequency: 'Weekly', nextRun: 'Jun 8, 2026', lastRun: 'Jun 1, 2026', recipients: ['ops@petracore.com'], enabled: false },
];

const recentReports = [
  { name: 'Jetimworks Weekly Report', project: 'Jetimworks', generated: 'Jun 2, 2026', size: '1.2 MB', type: 'PDF' },
  { name: 'Reccur Monthly Summary', project: 'Reccur', generated: 'Jun 1, 2026', size: '890 KB', type: 'PDF' },
  { name: 'Lena Daily Health Check', project: 'Lena', generated: 'Jun 6, 2026', size: '245 KB', type: 'PDF' },
  { name: 'Petracore Project Data', project: 'Petracore', generated: 'Jun 5, 2026', size: '156 KB', type: 'CSV' },
  { name: 'Antlar Weekly Status', project: 'Antlar', generated: 'Jun 2, 2026', size: '980 KB', type: 'PDF' },
];

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

function generatePDF(data) {
  const content = `
INFRASTRUCTURE REPORT
=====================
Project: ${data.project}
Generated: ${data.generated}
Period: ${data.period}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFRASTRUCTURE OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Servers:
${data.infrastructure.servers.map(s => `  • ${s.name} (${s.provider} - ${s.region})
    Status: ${s.status}
    Specs: ${s.specs}`).join('\n')}

Database:
  Type: ${data.infrastructure.database.type}
  Status: ${data.infrastructure.database.status}
  Storage: ${data.infrastructure.database.used} / ${data.infrastructure.database.storage}

Cache:
  Type: ${data.infrastructure.cache.type}
  Status: ${data.infrastructure.cache.status}
  Allocated: ${data.infrastructure.cache.allocated} | Used: ${data.infrastructure.cache.used}

Storage:
  Total: ${data.infrastructure.storage.total} | Used: ${data.infrastructure.storage.used}
  Backups: ${data.infrastructure.storage.backups}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERFORMANCE METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Uptime: ${data.uptime.percentage}
Downtime: ${data.uptime.downtime}
Incidents: ${data.uptime.incidents}

Average Response: ${data.performance.avgResponse}
P95 Response: ${data.performance.p95Response}
P99 Response: ${data.performance.p99Response}
Requests/Day: ${data.performance.requestsPerDay}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECURITY STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SSL Certificates: ${data.security.ssl.count} (${data.security.ssl.allValid ? 'All Valid' : 'Some Expiring'})
Firewall: ${data.security.firewall.status} (${data.security.firewall.rules} rules)
DDoS Protection: ${data.security.ddosProtection}
Last Backup: ${data.security.backups.lastRun}
Next Backup: ${data.security.backups.nextRun}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COST SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Monthly Cost: ${data.costs.monthly}
Overage Charges: ${data.costs.overage}
Total: ${data.costs.monthly}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT RECIPIENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.contacts.join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Report generated by Infra By Jetimworks
For questions, contact: joshua@jetimworks.com
  `.trim();

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.project.toLowerCase()}-infrastructure-report-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function generateCSV(data) {
  const rows = [
    ['Resource', 'Type', 'Status', 'Details'],
    ['Servers', '', '', ''],
    ...data.infrastructure.servers.map(s => [
      s.name, 'Server', s.status, s.specs
    ]),
    ['', '', '', ''],
    ['Database', data.infrastructure.database.type, data.infrastructure.database.status, `${data.infrastructure.database.used} / ${data.infrastructure.database.storage}`],
    ['Cache', data.infrastructure.cache.type, data.infrastructure.cache.status, `${data.infrastructure.cache.used} / ${data.infrastructure.cache.allocated}`],
    ['Storage', 'Block Storage', 'Healthy', `${data.infrastructure.storage.used} / ${data.infrastructure.storage.total}`],
    ['', '', '', ''],
    ['Metric', 'Value'],
    ['Uptime', data.uptime.percentage],
    ['Avg Response', data.performance.avgResponse],
    ['P95 Response', data.performance.p95Response],
    ['P99 Response', data.performance.p99Response],
    ['Requests/Day', data.performance.requestsPerDay],
    ['', '', '', ''],
    ['Security', '', '', ''],
    ['SSL Certificates', data.security.ssl.count, data.security.ssl.allValid ? 'Valid' : 'Expiring', ''],
    ['Firewall Rules', data.security.firewall.rules, data.security.firewall.status, ''],
    ['DDoS Protection', data.security.ddosProtection, '', ''],
    ['Last Backup', data.security.backups.lastRun, '', ''],
    ['', '', '', ''],
    ['Cost', '', '', ''],
    ['Monthly', data.costs.monthly, '', ''],
    ['Overage', data.costs.overage, '', ''],
  ];

  const csv = rows.map(r => r.map(cell => `"${cell}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.project.toLowerCase()}-project-data-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function Reporting() {
  const [selectedProject, setSelectedProject] = useState('Jetimworks');
  const [generating, setGenerating] = useState(false);
  const [scheduleModal, setScheduleModal] = useState(false);

  const data = reportData[selectedProject];

  const handleGeneratePDF = async () => {
    setGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    generatePDF(data);
    setGenerating(false);
  };

  const handleGenerateCSV = async () => {
    setGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    generateCSV(data);
    setGenerating(false);
  };

  return (
    <div className="dashboard dashboard-full">
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="dashboard-header-left">
          <div className="project-selector">
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
          <div>
            <h1 className="dashboard-title">Reporting & Communications</h1>
            <p className="dashboard-subtitle">Generate reports, schedule deliveries, and manage customer communications</p>
          </div>
        </div>
      </motion.div>

      {/* Report Generation */}
      <div className="report-actions">
        <motion.button
          className="report-action-btn report-action-primary"
          onClick={handleGeneratePDF}
          disabled={generating}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="report-action-icon">⬇</span>
          <span>Generate PDF Report</span>
        </motion.button>
        <motion.button
          className="report-action-btn"
          onClick={handleGenerateCSV}
          disabled={generating}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="report-action-icon">▦</span>
          <span>Export Project Data (CSV)</span>
        </motion.button>
        <motion.button
          className="report-action-btn"
          onClick={() => setScheduleModal(true)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="report-action-icon">◫</span>
          <span>Schedule Report</span>
        </motion.button>
      </div>

      {/* Report Preview */}
      <SectionCard title="Report Preview" delay={0.25}>
        <div className="report-preview">
          <div className="report-meta">
            <div className="report-meta-item">
              <span className="report-meta-label">Project</span>
              <span className="report-meta-value">{data.project}</span>
            </div>
            <div className="report-meta-item">
              <span className="report-meta-label">Generated</span>
              <span className="report-meta-value">{data.generated}</span>
            </div>
            <div className="report-meta-item">
              <span className="report-meta-label">Period</span>
              <span className="report-meta-value">{data.period}</span>
            </div>
          </div>

          <div className="report-sections-grid">
            <div className="report-section">
              <h4>Infrastructure Summary</h4>
              <div className="report-section-content">
                <div className="report-row">
                  <span>Servers</span>
                  <span>{data.infrastructure.servers.length} instances</span>
                </div>
                <div className="report-row">
                  <span>Database</span>
                  <span>{data.infrastructure.database.type}</span>
                </div>
                <div className="report-row">
                  <span>Cache</span>
                  <span>{data.infrastructure.cache.type}</span>
                </div>
                <div className="report-row">
                  <span>Storage</span>
                  <span>{data.infrastructure.storage.used} / {data.infrastructure.storage.total}</span>
                </div>
              </div>
            </div>

            <div className="report-section">
              <h4>Performance</h4>
              <div className="report-section-content">
                <div className="report-row">
                  <span>Uptime</span>
                  <span className="report-value-good">{data.uptime.percentage}</span>
                </div>
                <div className="report-row">
                  <span>Avg Response</span>
                  <span>{data.performance.avgResponse}</span>
                </div>
                <div className="report-row">
                  <span>P95 / P99</span>
                  <span>{data.performance.p95Response} / {data.performance.p99Response}</span>
                </div>
                <div className="report-row">
                  <span>Requests/Day</span>
                  <span>{data.performance.requestsPerDay}</span>
                </div>
              </div>
            </div>

            <div className="report-section">
              <h4>Security</h4>
              <div className="report-section-content">
                <div className="report-row">
                  <span>SSL Certificates</span>
                  <span className="report-value-good">{data.security.ssl.count} Valid</span>
                </div>
                <div className="report-row">
                  <span>Firewall</span>
                  <span>{data.security.firewall.rules} rules active</span>
                </div>
                <div className="report-row">
                  <span>DDoS Protection</span>
                  <span className="report-value-good">{data.security.ddosProtection}</span>
                </div>
                <div className="report-row">
                  <span>Last Backup</span>
                  <span>{data.security.backups.lastRun}</span>
                </div>
              </div>
            </div>

            <div className="report-section">
              <h4>Cost Summary</h4>
              <div className="report-section-content">
                <div className="report-row">
                  <span>Monthly</span>
                  <span className="report-value-highlight">{data.costs.monthly}</span>
                </div>
                <div className="report-row">
                  <span>Overage</span>
                  <span>{data.costs.overage}</span>
                </div>
                <div className="report-row">
                  <span>Next Invoice</span>
                  <span>Jul 1, 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="report-contacts">
            <span className="report-contacts-label">Report Recipients:</span>
            {data.contacts.map(c => (
              <span key={c} className="report-contact-chip">{c}</span>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* Scheduled Reports */}
      <SectionCard title="Scheduled Reports" delay={0.35}>
        <div className="scheduled-reports-list">
          {schedules.map(schedule => (
            <div key={schedule.id} className="schedule-row">
              <div className="schedule-info">
                <div className="schedule-header">
                  <span className="schedule-name">{schedule.name}</span>
                  <span className={`schedule-status ${schedule.enabled ? 'active' : 'paused'}`}>
                    {schedule.enabled ? '● Active' : '○ Paused'}
                  </span>
                </div>
                <div className="schedule-meta">
                  <span>{schedule.project}</span>
                  <span>•</span>
                  <span>{schedule.frequency}</span>
                  <span>•</span>
                  <span>Next: {schedule.nextRun}</span>
                </div>
                <div className="schedule-recipients">
                  {schedule.recipients.map(r => (
                    <span key={r} className="schedule-recipient">{r}</span>
                  ))}
                </div>
              </div>
              <div className="schedule-actions">
                <button className="schedule-action-btn">
                  {schedule.enabled ? 'Pause' : 'Resume'}
                </button>
                <button className="schedule-action-btn">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Communication Settings */}
      <div className="reporting-grid">
        <SectionCard title="Notification Preferences" delay={0.45}>
          <div className="notification-settings">
            <div className="notification-item">
              <div className="notification-info">
                <span className="notification-label">Weekly Status Report</span>
                <span className="notification-desc">Summary of infrastructure health, performance, and any incidents</span>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="notification-item">
              <div className="notification-info">
                <span className="notification-label">Incident Alerts</span>
                <span className="notification-desc">Immediate notification when an incident is detected or resolved</span>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="notification-item">
              <div className="notification-info">
                <span className="notification-label">Security Updates</span>
                <span className="notification-desc">SSL certificate renewals, firewall changes, vulnerability alerts</span>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="notification-item">
              <div className="notification-info">
                <span className="notification-label">Billing Reminders</span>
                <span className="notification-desc">7 days before invoice, and on the day of billing</span>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="notification-item">
              <div className="notification-info">
                <span className="notification-label">Monthly Usage Report</span>
                <span className="notification-desc">Resource usage trends, cost analysis, and optimization suggestions</span>
              </div>
              <label className="toggle">
                <input type="checkbox" />
                <span className="toggle-slider" />
              </label>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Delivery Methods" delay={0.55}>
          <div className="delivery-methods">
            <div className="delivery-method">
              <div className="delivery-icon">✉</div>
              <div className="delivery-info">
                <span className="delivery-name">Email</span>
                <span className="delivery-desc">Reports sent directly to project contacts</span>
              </div>
              <span className="delivery-status active">Primary</span>
            </div>
            <div className="delivery-method">
              <div className="delivery-icon">◻</div>
              <div className="delivery-info">
                <span className="delivery-name">Dashboard Portal</span>
                <span className="delivery-desc">Reports available in the admin portal at any time</span>
              </div>
              <span className="delivery-status active">Always On</span>
            </div>
            <div className="delivery-method">
              <div className="delivery-icon">⊞</div>
              <div className="delivery-info">
                <span className="delivery-name">API Access</span>
                <span className="delivery-desc">Programmatic access to reports and metrics</span>
              </div>
              <span className="delivery-status">Available</span>
            </div>
            <div className="delivery-method">
              <div className="delivery-icon">☁</div>
              <div className="delivery-info">
                <span className="delivery-name">Slack Integration</span>
                <span className="delivery-desc">Send reports and alerts to Slack channels</span>
              </div>
              <button className="delivery-connect">Connect</button>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Recent Reports */}
      <SectionCard title="Recent Reports" delay={0.65}>
        <div className="recent-reports-list">
          {recentReports.map((report, i) => (
            <div key={i} className="recent-report-row">
              <div className="recent-report-icon">
                {report.type === 'PDF' ? '⬇' : '▦'}
              </div>
              <div className="recent-report-info">
                <span className="recent-report-name">{report.name}</span>
                <span className="recent-report-meta">{report.project} • {report.generated}</span>
              </div>
              <span className="recent-report-size">{report.size}</span>
              <button className="recent-report-download">Download</button>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Schedule Modal */}
      {scheduleModal && (
        <div className="modal-overlay" onClick={() => setScheduleModal(false)}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <h2 className="modal-title">Schedule New Report</h2>
            <form className="schedule-form">
              <div className="form-group">
                <label>Report Name</label>
                <input type="text" placeholder="Weekly Status Report" />
              </div>
              <div className="form-group">
                <label>Project</label>
                <select className="project-dropdown">
                  {projects.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Frequency</label>
                <select>
                  <option>Daily</option>
                  <option selected>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="form-group">
                <label>Recipients (comma-separated)</label>
                <input type="text" placeholder="email1@domain.com, email2@domain.com" />
              </div>
              <div className="form-group">
                <label>Report Type</label>
                <div className="report-type-options">
                  <label className="report-type-option">
                    <input type="checkbox" defaultChecked />
                    <span>Full PDF Report</span>
                  </label>
                  <label className="report-type-option">
                    <input type="checkbox" defaultChecked />
                    <span>CSV Data Export</span>
                  </label>
                  <label className="report-type-option">
                    <input type="checkbox" />
                    <span>Summary Only</span>
                  </label>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-ghost" onClick={() => setScheduleModal(false)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={() => setScheduleModal(false)}>Create Schedule</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}