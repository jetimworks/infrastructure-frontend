import { motion } from 'framer-motion';
import { useProject } from '../../contexts/ProjectContext';

const monitoringData = {
  Petracore: {
    uptimeHistory: [
      { period: 'Last 7 days', value: '99.95%', incidents: 0 },
      { period: 'Last 30 days', value: '99.92%', incidents: 1 },
      { period: 'Last 90 days', value: '99.88%', incidents: 2 },
    ],
    responseTime: { avg: '62ms', p95: '145ms', p99: '310ms' },
    bandwidth: [
      { period: 'Today', used: '180 GB', limit: '1 TB', pct: 18 },
      { period: 'This month', used: '4.2 TB', limit: '10 TB', pct: 42 },
    ],
    alerts: [
      { severity: 'warning', title: 'High Memory Usage on DB Server', time: '12 min ago', resolved: false },
      { severity: 'info', title: 'Scheduled Maintenance Window', time: '2 hours ago', resolved: true },
    ],
    incidents: [
      { date: 'Jun 1, 2026', title: 'Database connection spike', duration: '4 min', resolvedIn: '3 min' },
      { date: 'May 18, 2026', title: 'CDN cache miss storm', duration: '8 min', resolvedIn: '6 min' },
      { date: 'Apr 29, 2026', title: 'SSL certificate auto-renewal', duration: '1 min', resolvedIn: '1 min' },
    ],
    mttr: { avg: '4.2 min', lastIncident: 'Jun 1, 2026', trend: 'Improving' },
  },
  Reccur: {
    uptimeHistory: [
      { period: 'Last 7 days', value: '99.99%', incidents: 0 },
      { period: 'Last 30 days', value: '99.98%', incidents: 0 },
      { period: 'Last 90 days', value: '99.97%', incidents: 1 },
    ],
    responseTime: { avg: '38ms', p95: '98ms', p99: '180ms' },
    bandwidth: [
      { period: 'Today', used: '420 GB', limit: '2 TB', pct: 21 },
      { period: 'This month', used: '9.8 TB', limit: '20 TB', pct: 49 },
    ],
    alerts: [
      { severity: 'info', title: 'Auto-scaling triggered', time: '30 min ago', resolved: true },
    ],
    incidents: [
      { date: 'May 28, 2026', title: 'Traffic spike from social media', duration: '6 min', resolvedIn: '5 min' },
      { date: 'Apr 10, 2026', title: 'Scheduled infrastructure upgrade', duration: '2 min', resolvedIn: '2 min' },
    ],
    mttr: { avg: '3.5 min', lastIncident: 'May 28, 2026', trend: 'Improving' },
  },
  Lena: {
    uptimeHistory: [
      { period: 'Last 7 days', value: '99.99%', incidents: 0 },
      { period: 'Last 30 days', value: '99.99%', incidents: 0 },
      { period: 'Last 90 days', value: '99.97%', incidents: 1 },
    ],
    responseTime: { avg: '31ms', p95: '88ms', p99: '155ms' },
    bandwidth: [
      { period: 'Today', used: '890 GB', limit: '5 TB', pct: 18 },
      { period: 'This month', used: '21.4 TB', limit: '50 TB', pct: 43 },
    ],
    alerts: [],
    incidents: [
      { date: 'May 15, 2026', title: 'Disk I/O saturation during backup', duration: '3 min', resolvedIn: '2 min' },
    ],
    mttr: { avg: '2.5 min', lastIncident: 'May 15, 2026', trend: 'Stable' },
  },
  Jetimworks: {
    uptimeHistory: [
      { period: 'Last 7 days', value: '99.95%', incidents: 0 },
      { period: 'Last 30 days', value: '99.92%', incidents: 1 },
      { period: 'Last 90 days', value: '99.90%', incidents: 2 },
    ],
    responseTime: { avg: '45ms', p95: '128ms', p99: '245ms' },
    bandwidth: [
      { period: 'Today', used: '340 GB', limit: '1 TB', pct: 34 },
      { period: 'This month', used: '8.2 TB', limit: '10 TB', pct: 82 },
    ],
    alerts: [
      { severity: 'warning', title: 'High Memory Usage on DB Server', time: '12 min ago', resolved: false },
      { severity: 'info', title: 'Scheduled Maintenance Window', time: '2 hours ago', resolved: true },
    ],
    incidents: [
      { date: 'Jun 1, 2026', title: 'Database connection spike', duration: '4 min', resolvedIn: '3 min' },
      { date: 'May 18, 2026', title: 'CDN cache miss storm', duration: '8 min', resolvedIn: '6 min' },
      { date: 'Apr 29, 2026', title: 'SSL certificate auto-renewal', duration: '1 min', resolvedIn: '1 min' },
    ],
    mttr: { avg: '4.2 min', lastIncident: 'Jun 1, 2026', trend: 'Improving' },
  },
  Antlar: {
    uptimeHistory: [
      { period: 'Last 7 days', value: '99.90%', incidents: 0 },
      { period: 'Last 30 days', value: '99.85%', incidents: 1 },
      { period: 'Last 90 days', value: '99.80%', incidents: 3 },
    ],
    responseTime: { avg: '55ms', p95: '140ms', p99: '280ms' },
    bandwidth: [
      { period: 'Today', used: '90 GB', limit: '500 GB', pct: 18 },
      { period: 'This month', used: '2.1 TB', limit: '5 TB', pct: 42 },
    ],
    alerts: [
      { severity: 'warning', title: 'Disk space above 80%', time: '1 hour ago', resolved: false },
    ],
    incidents: [
      { date: 'Jun 3, 2026', title: 'Database replication lag', duration: '12 min', resolvedIn: '10 min' },
      { date: 'May 22, 2026', title: 'Network latency spike', duration: '5 min', resolvedIn: '4 min' },
      { date: 'May 8, 2026', title: 'API timeout cascade', duration: '15 min', resolvedIn: '12 min' },
    ],
    mttr: { avg: '11 min', lastIncident: 'Jun 3, 2026', trend: 'Stable' },
  },
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

export default function Monitoring() {
  const { selectedProject } = useProject();
  const data = monitoringData[selectedProject];

  const activeAlerts = data.alerts.filter(a => !a.resolved).length;

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
            <h1 className="dashboard-title">Monitoring</h1>
            <p className="dashboard-subtitle">Uptime, performance, and incident tracking</p>
          </div>
        </div>
        <div className="managed-badge">
          <span className="badge-dot" />
          <span>Monitoring Active</span>
        </div>
      </motion.div>

      {/* Counters */}
      <div className="counters-grid">
        <StatCard label="Current Uptime" value={data.uptimeHistory[1].value} sub={`${data.uptimeHistory[1].incidents} incidents (30d)`} delay={0} />
        <StatCard label="Avg Response Time" value={data.responseTime.avg} sub="P95: " sub2={data.responseTime.p95} delay={0.08} />
        <StatCard label="Active Alerts" value={activeAlerts} sub={activeAlerts > 0 ? 'Requires attention' : 'All clear'} delay={0.16} />
      </div>

      {/* Main grid */}
      <div className="dashboard-grid">
        {/* Uptime History */}
        <SectionCard title="Uptime History" delay={0.24}>
          <div className="monitor-uptime-grid">
            {data.uptimeHistory.map((u, i) => (
              <div key={i} className="monitor-uptime-stat">
                <div className="monitor-uptime-value">{u.value}</div>
                <div className="monitor-uptime-label">{u.period}</div>
                <div className="monitor-uptime-incidents">{u.incidents} incident{u.incidents !== 1 ? 's' : ''}</div>
              </div>
            ))}
          </div>
          <p className="monitoring-note" style={{ marginTop: 'var(--sp-4)' }}>SLA commitment: 99.9% uptime. Our team responds to incidents within 15 minutes.</p>
        </SectionCard>

        {/* Response Time */}
        <SectionCard title="Response Time" delay={0.32}>
          <div className="monitor-response-grid">
            <div className="monitor-response-item">
              <div className="monitor-response-value">{data.responseTime.avg}</div>
              <div className="monitor-response-label">Average</div>
              <div className="monitor-response-bar">
                <div className="monitor-response-fill" style={{ width: `${Math.min(parseInt(data.responseTime.avg) / 100 * 100, 100)}%` }} />
              </div>
            </div>
            <div className="monitor-response-item">
              <div className="monitor-response-value">{data.responseTime.p95}</div>
              <div className="monitor-response-label">P95</div>
              <div className="monitor-response-bar">
                <div className="monitor-response-fill" style={{ width: `${Math.min(parseInt(data.responseTime.p95) / 300 * 100, 100)}%` }} />
              </div>
            </div>
            <div className="monitor-response-item">
              <div className="monitor-response-value">{data.responseTime.p99}</div>
              <div className="monitor-response-label">P99</div>
              <div className="monitor-response-bar">
                <div className="monitor-response-fill" style={{ width: `${Math.min(parseInt(data.responseTime.p99) / 500 * 100, 100)}%` }} />
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Bandwidth Usage */}
        <SectionCard title="Bandwidth Usage" delay={0.40}>
          <div className="bandwidth-list">
            {data.bandwidth.map((b, i) => (
              <div key={i} className="bandwidth-item">
                <div className="bandwidth-header">
                  <span className="bandwidth-label">{b.period}</span>
                  <span className="bandwidth-usage">{b.used} of {b.limit}</span>
                </div>
                <div className="bandwidth-bar">
                  <div className={`bandwidth-fill ${b.pct > 75 ? 'bandwidth-fill-warning' : ''}`} style={{ width: `${b.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Active Alerts */}
        <SectionCard title="Active Alerts" delay={0.48}>
          {data.alerts.length === 0 ? (
            <p className="section-desc">No active alerts. All systems operational.</p>
          ) : (
            <div className="alerts-list">
              {data.alerts.map((a, i) => (
                <div key={i} className="alert-row">
                  <div className={`alert-severity severity-${a.severity}`} />
                  <div className="alert-info">
                    <div className="alert-title">{a.title}</div>
                    <div className="alert-meta">{a.time}</div>
                  </div>
                  {a.resolved && <span className="alert-resolved">Resolved</span>}
                </div>
              ))}
            </div>
          )}
        </SectionCard>

        {/* Incident History */}
        <SectionCard title="Incident History" delay={0.56}>
          <div>
            <div className="incident-table-header">
              <span>Date</span>
              <span>Incident</span>
              <span>Duration</span>
              <span>MTTR</span>
            </div>
            {data.incidents.map((inc, i) => (
              <div key={i} className="incident-row">
                <span className="incident-date">{inc.date}</span>
                <span className="incident-title">{inc.title}</span>
                <span className="incident-duration">{inc.duration}</span>
                <span className="incident-mttr">{inc.resolvedIn}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* MTTR Stats */}
        <SectionCard title="MTTR Stats" delay={0.64}>
          <div className="mttr-stat">
            <div className="mttr-value">{data.mttr.avg}</div>
            <div className="mttr-label">Average Mean Time to Resolution</div>
            <div className="mttr-meta">
              <div className="mttr-meta-item">
                <span className="mttr-meta-label">Last Incident</span>
                <span className="mttr-meta-value">{data.mttr.lastIncident}</span>
              </div>
              <div className="mttr-meta-item">
                <span className="mttr-meta-label">Trend</span>
                <span className="mttr-trend">{data.mttr.trend}</span>
              </div>
            </div>
          </div>
          <p className="monitoring-note" style={{ marginTop: 'var(--sp-4)' }}>SLA response time commitment: 15 minutes. MTTR measures actual resolution time.</p>
        </SectionCard>
      </div>
    </div>
  );
}
