import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = ['Petracore', 'Reccur', 'Lena', 'Jetimworks', 'Antlar'];

const projectData = {
  Petracore: {
    counters: [
      { label: 'Projects Managed', value: '2', sub: 'Active: 2', accent: false },
      { label: 'Status', value: 'Live', sub: '2/2', accent: true },
      { label: 'Inquiries', value: '1', sub: '', accent: false },
    ],
    services: [
      { name: 'Backend Server', status: 'Healthy', detail: '2 vCPU, 4GB RAM' },
      { name: 'SQL Database', status: 'Healthy', detail: 'PostgreSQL 16' },
      { name: 'Redis Cache', status: 'Healthy', detail: '256MB allocated' },
      { name: 'Storage / Backups', status: 'Healthy', detail: '50GB, weekly snapshots' },
      { name: 'Monitoring', status: 'Active', detail: 'Uptime checks every 60s' },
      { name: 'Network / Firewall', status: 'Protected', detail: 'Basic DDoS protection' },
    ],
    resources: [
      { type: 'Compute', allocated: '4 cores', used: '1.8 cores', pct: 45 },
      { type: 'Memory', allocated: '8 GB', used: '3.2 GB', pct: 40 },
      { type: 'Storage', allocated: '100 GB', used: '42 GB', pct: 42 },
      { type: 'Network', allocated: '1 Gbps', used: '180 Mbps', pct: 18 },
    ],
    uptime: '99.8%',
    response: '62ms',
    alerts: '0',
    capacity: '2 / 2 instances',
  },
  Reccur: {
    counters: [
      { label: 'Projects Managed', value: '1', sub: 'Active: 1', accent: false },
      { label: 'Status', value: 'Live', sub: '1/1', accent: true },
      { label: 'Inquiries', value: '3', sub: '', accent: false },
    ],
    services: [
      { name: 'Backend Server', status: 'Healthy', detail: '4 vCPU, 8GB RAM' },
      { name: 'SQL Database', status: 'Healthy', detail: 'PostgreSQL 16' },
      { name: 'Redis Cache', status: 'Healthy', detail: '512MB allocated' },
      { name: 'Storage / Backups', status: 'Healthy', detail: '100GB, daily snapshots' },
      { name: 'Monitoring', status: 'Active', detail: 'Uptime checks every 30s' },
      { name: 'Network / Firewall', status: 'Protected', detail: 'Advanced DDoS protection' },
    ],
    resources: [
      { type: 'Compute', allocated: '8 cores', used: '4.2 cores', pct: 53 },
      { type: 'Memory', allocated: '16 GB', used: '9.8 GB', pct: 61 },
      { type: 'Storage', allocated: '200 GB', used: '87 GB', pct: 44 },
      { type: 'Network', allocated: '1 Gbps', used: '420 Mbps', pct: 42 },
    ],
    uptime: '99.9%',
    response: '38ms',
    alerts: '0',
    capacity: '1 / 1 instance',
  },
  Lena: {
    counters: [
      { label: 'Projects Managed', value: '3', sub: 'Active: 2', accent: false },
      { label: 'Status', value: 'Live', sub: '3/4', accent: true },
      { label: 'Inquiries', value: '0', sub: '', accent: false },
    ],
    services: [
      { name: 'Backend Server', status: 'Healthy', detail: '8 vCPU, 16GB RAM' },
      { name: 'SQL Database', status: 'Healthy', detail: 'PostgreSQL 16' },
      { name: 'Redis Cache', status: 'Healthy', detail: '1GB allocated' },
      { name: 'Storage / Backups', status: 'Healthy', detail: '200GB, daily snapshots' },
      { name: 'Monitoring', status: 'Active', detail: 'Uptime checks every 15s' },
      { name: 'Network / Firewall', status: 'Protected', detail: 'Enterprise DDoS protection' },
    ],
    resources: [
      { type: 'Compute', allocated: '16 cores', used: '10.4 cores', pct: 65 },
      { type: 'Memory', allocated: '32 GB', used: '18.2 GB', pct: 57 },
      { type: 'Storage', allocated: '500 GB', used: '220 GB', pct: 44 },
      { type: 'Network', allocated: '1 Gbps', used: '680 Mbps', pct: 68 },
    ],
    uptime: '99.9%',
    response: '31ms',
    alerts: '0',
    capacity: '3 / 4 instances',
  },
  Jetimworks: {
    counters: [
      { label: 'Projects Managed', value: '4', sub: 'Active: 3', accent: false },
      { label: 'Status', value: 'Live', sub: '4/4', accent: true },
      { label: 'Inquiries', value: '0', sub: '', accent: false },
    ],
    services: [
      { name: 'Backend Server', status: 'Healthy', detail: '2 vCPU, 4GB RAM' },
      { name: 'SQL Database', status: 'Healthy', detail: 'PostgreSQL 16' },
      { name: 'Redis Cache', status: 'Healthy', detail: '256MB allocated' },
      { name: 'Storage / Backups', status: 'Healthy', detail: '50GB, daily snapshots' },
      { name: 'Monitoring', status: 'Active', detail: 'Uptime checks every 30s' },
      { name: 'Network / Firewall', status: 'Protected', detail: 'DDoS mitigation on' },
    ],
    resources: [
      { type: 'Compute', allocated: '4 cores', used: '2.4 cores', pct: 60 },
      { type: 'Memory', allocated: '16 GB', used: '8.2 GB', pct: 51 },
      { type: 'Storage', allocated: '200 GB', used: '87 GB', pct: 44 },
      { type: 'Network', allocated: '1 Gbps', used: '340 Mbps', pct: 34 },
    ],
    uptime: '99.9%',
    response: '45ms',
    alerts: '0',
    capacity: '4 / 4 instances',
  },
  Antlar: {
    counters: [
      { label: 'Projects Managed', value: '1', sub: 'Active: 1', accent: false },
      { label: 'Status', value: 'Live', sub: '1/1', accent: true },
      { label: 'Inquiries', value: '2', sub: '', accent: false },
    ],
    services: [
      { name: 'Backend Server', status: 'Healthy', detail: '2 vCPU, 4GB RAM' },
      { name: 'SQL Database', status: 'Healthy', detail: 'PostgreSQL 16' },
      { name: 'Redis Cache', status: 'Healthy', detail: '256MB allocated' },
      { name: 'Storage / Backups', status: 'Healthy', detail: '80GB, daily snapshots' },
      { name: 'Monitoring', status: 'Active', detail: 'Uptime checks every 30s' },
      { name: 'Network / Firewall', status: 'Protected', detail: 'DDoS mitigation on' },
    ],
    resources: [
      { type: 'Compute', allocated: '4 cores', used: '1.6 cores', pct: 40 },
      { type: 'Memory', allocated: '8 GB', used: '4.1 GB', pct: 51 },
      { type: 'Storage', allocated: '160 GB', used: '55 GB', pct: 34 },
      { type: 'Network', allocated: '1 Gbps', used: '210 Mbps', pct: 21 },
    ],
    uptime: '99.7%',
    response: '55ms',
    alerts: '0',
    capacity: '1 / 1 instance',
  },
};

const activityData = {
  Petracore: [
    { time: '5 min ago', action: 'Health check passed', detail: 'All 6 services responding within 62ms' },
    { time: '1 hour ago', action: 'Backup completed', detail: 'Weekly snapshot saved' },
    { time: '3 hours ago', action: 'SSL certificate renewed', detail: 'Auto-renewal successful' },
  ],
  Reccur: [
    { time: '2 min ago', action: 'Health check passed', detail: 'All 6 services responding within 38ms' },
    { time: '30 min ago', action: 'Auto-scaling triggered', detail: 'Scaled from 1 to 2 instances for peak load' },
    { time: '4 hours ago', action: 'Security scan complete', detail: 'No vulnerabilities detected' },
  ],
  Lena: [
    { time: '1 min ago', action: 'Health check passed', detail: 'All 6 services responding within 31ms' },
    { time: '15 min ago', action: 'Auto-scaling triggered', detail: 'Scaled from 3 to 4 instances for peak load' },
    { time: '2 hours ago', action: 'Backup completed', detail: 'Daily snapshot saved to redundant storage' },
    { time: '6 hours ago', action: 'SSL certificate renewed', detail: 'Auto-renewal successful' },
  ],
  Jetimworks: [
    { time: '2 min ago', action: 'Backup completed', detail: 'Daily snapshot saved to redundant storage' },
    { time: '18 min ago', action: 'Health check passed', detail: 'All 6 services responding within 45ms' },
    { time: '2 hours ago', action: 'Auto-scaling triggered', detail: 'Scaled from 2 to 3 instances for peak load' },
    { time: '5 hours ago', action: 'Security scan complete', detail: 'No vulnerabilities detected' },
    { time: '1 day ago', action: 'SSL certificate renewed', detail: 'Let\'s Encrypt auto-renewal successful' },
  ],
  Antlar: [
    { time: '8 min ago', action: 'Health check passed', detail: 'All 6 services responding within 55ms' },
    { time: '2 hours ago', action: 'Backup completed', detail: 'Daily snapshot saved' },
    { time: '5 hours ago', action: 'SSL certificate renewed', detail: 'Auto-renewal successful' },
  ],
};

function StatCard({ label, value, sub, accent, delay }) {
  return (
    <motion.div
      className={`stat-card ${accent ? 'stat-card-accent' : ''}`}
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

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState('Jetimworks');

  const data = projectData[selectedProject];
  const activity = activityData[selectedProject];

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
            <h1 className="dashboard-title">Infrastructure Overview</h1>
            <p className="dashboard-subtitle">Your managed infrastructure at a glance</p>
          </div>
        </div>
        <div className="managed-badge">
          <span className="badge-dot" />
          <span>Fully Managed</span>
        </div>
      </motion.div>

      {/* Counters */}
      <div className="counters-grid">
        {data.counters.map((c, i) => (
          <StatCard key={c.label} {...c} delay={i * 0.08} />
        ))}
      </div>

      {/* Main grid */}
      <div className="dashboard-grid">

        {/* Infrastructure Overview */}
        <SectionCard title="Infrastructure Architecture" delay={0.24}>
          <div className="infra-diagram">
            <div className="infra-zone">
              <span className="zone-label">Your Dedicated Resources</span>
              <div className="infra-nodes">
                <div className="node">
                  <div className="node-icon">◇</div>
                  <span className="node-name">Application</span>
                  <span className="node-detail">Node.js / React</span>
                </div>
                <div className="node-connector">—</div>
                <div className="node">
                  <div className="node-icon">▢</div>
                  <span className="node-name">Database</span>
                  <span className="node-detail">PostgreSQL 16</span>
                </div>
                <div className="node-connector">—</div>
                <div className="node">
                  <div className="node-icon">◈</div>
                  <span className="node-name">Cache</span>
                  <span className="node-detail">Redis</span>
                </div>
              </div>
            </div>
            <div className="infra-zone infra-zone-managed">
              <span className="zone-label">Fully Managed Infrastructure</span>
              <p className="zone-desc">Server, networking, backups, monitoring, and security — all handled by our team.</p>
            </div>
          </div>
          <div className="infra-features">
            <span className="feature-tag">Dedicated Resources</span>
            <span className="feature-tag">24/7 Monitoring</span>
            <span className="feature-tag">Automated Backups</span>
            <span className="feature-tag">DDoS Protection</span>
            <span className="feature-tag">SSL Management</span>
            <span className="feature-tag">Scaling Support</span>
          </div>
        </SectionCard>

        {/* Service Health */}
        <SectionCard title="Service Health" delay={0.32}>
          <div className="services-list">
            {data.services.map(s => (
              <div key={s.name} className="service-row">
                <div className="service-info">
                  <span className="service-name">{s.name}</span>
                  <span className="service-detail">{s.detail}</span>
                </div>
                <div className="service-status">
                  <span className="status-dot" />
                  <span>{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Resource Allocation */}
        <SectionCard title="Resource Allocation" delay={0.40}>
          <p className="section-desc">Your dedicated resources within the shared infrastructure</p>
          <div className="resources-list">
            {data.resources.map(r => (
              <div key={r.type} className="resource-row">
                <div className="resource-info">
                  <span className="resource-type">{r.type}</span>
                  <span className="resource-used">{r.used} of {r.allocated}</span>
                </div>
                <div className="resource-bar">
                  <div className="resource-fill" style={{ width: `${r.pct}%` }} />
                </div>
                <span className="resource-pct">{r.pct}%</span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Security Posture */}
        <SectionCard title="Security Status" delay={0.48}>
          <div className="security-grid-mini">
            <div className="security-item-row">
              <span className="security-label">Firewall</span>
              <span className="security-value-ok">✓ Active</span>
            </div>
            <div className="security-item-row">
              <span className="security-label">SSL Certificates</span>
              <span className="security-value-ok">✓ Valid (3)</span>
            </div>
            <div className="security-item-row">
              <span className="security-label">Automated Backups</span>
              <span className="security-value-ok">✓ Daily</span>
            </div>
            <div className="security-item-row">
              <span className="security-label">DDoS Protection</span>
              <span className="security-value-ok">✓ Enabled</span>
            </div>
            <div className="security-item-row">
              <span className="security-label">Intrusion Detection</span>
              <span className="security-value-ok">✓ Monitoring</span>
            </div>
            <div className="security-item-row">
              <span className="security-label">Last Audit</span>
              <span className="security-value-ok">✓ Jun 5, 2026</span>
            </div>
          </div>
          <p className="security-note">Security is prioritized — firewall rules, intrusion detection, and DDoS mitigation are always active.</p>
        </SectionCard>

        {/* Monitoring & Performance */}
        <SectionCard title="Monitoring & Performance" delay={0.56}>
          <div className="monitoring-stats">
            <div className="monitor-stat">
              <span className="monitor-value">{data.uptime}</span>
              <span className="monitor-label">Uptime (30 days)</span>
            </div>
            <div className="monitor-stat">
              <span className="monitor-value">{data.response}</span>
              <span className="monitor-label">Avg Response</span>
            </div>
            <div className="monitor-stat">
              <span className="monitor-value">{data.alerts}</span>
              <span className="monitor-label">Active Alerts</span>
            </div>
          </div>
          <p className="monitoring-note">Continuous monitoring with automated alerts. Our team responds to incidents within 15 minutes.</p>
        </SectionCard>

        {/* Scalability */}
        <SectionCard title="Scalability Status" delay={0.64}>
          <div className="scale-status">
            <div className="scale-header">
              <span className="scale-title">Current Capacity</span>
              <span className="scale-value">{data.capacity}</span>
            </div>
            <p className="scale-desc">Your infrastructure can scale on demand. When demand increases, we add instances automatically — no action needed from you.</p>
            <div className="scale-indicator">
              <span className="scale-dot" />
              <span>Auto-scaling active</span>
            </div>
          </div>
        </SectionCard>

        {/* Migration & Portability */}
        <SectionCard title="Migration & Portability" delay={0.72}>
          <div className="migration-content">
            <div className="migration-item">
              <span className="migration-icon">⊞</span>
              <div>
                <span className="migration-title">Your Data, Your Ownership</span>
                <span className="migration-desc">All your data can be exported at any time. Full database backups, file storage, and configuration available on request.</span>
              </div>
            </div>
            <div className="migration-item">
              <span className="migration-icon">⊡</span>
              <div>
                <span className="migration-title">Infrastructure as Code</span>
                <span className="migration-desc">Your infrastructure is documented and version-controlled. In the future, if you want to migrate to your own DigitalOcean or AWS, we provide complete documentation and handover support.</span>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Recent Activity */}
        <SectionCard title="Recent Activity" delay={0.80}>
          <div className="activity-list">
            {activity.map((a, i) => (
              <div key={i} className="activity-row">
                <span className="activity-time">{a.time}</span>
                <div className="activity-info">
                  <span className="activity-action">{a.action}</span>
                  <span className="activity-detail">{a.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

      </div>
    </div>
  );
}