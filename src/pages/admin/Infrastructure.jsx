import { motion } from 'framer-motion';
import { useProject } from '../../contexts/ProjectContext';

const infrastructureData = {
  Petracore: {
    servers: [
      { location: 'Frankfurt (EU-1)', type: '2 vCPU, 4GB', status: 'Active', uptime: '99.9%' },
      { location: 'New York (US-1)', type: '2 vCPU, 4GB', status: 'Active', uptime: '99.8%' },
    ],
    instanceTypes: [
      { name: 'Web Server', count: 2, spec: '2 vCPU, 4GB RAM, 80GB SSD' },
      { name: 'Database Server', count: 1, spec: '4 vCPU, 8GB RAM, 200GB SSD' },
      { name: 'Cache Server', count: 1, spec: '2 vCPU, 4GB RAM, 50GB SSD' },
    ],
    network: { zone: 'Private VLAN', cidr: '10.0.0.0/16', vpn: 'Active', firewall: 'Enabled' },
    dns: [
      { record: 'api.petracore.com', type: 'A', value: '10.0.1.50', ttl: '300s' },
      { record: 'app.petracore.com', type: 'CNAME', value: 'lb.petracore.com', ttl: '600s' },
      { record: 'cdn.petracore.com', type: 'CNAME', value: 'cdn.cloudflare.net', ttl: '3600s' },
    ],
    backups: { schedule: 'Daily at 2AM', retention: '30 days', lastRun: 'Today2:00 AM', nextRun: 'Tomorrow 2:00 AM', status: 'Healthy' },
    ssl: [
      { domain: 'petracore.com', issuedBy: "Let's Encrypt", expires: 'Dec 12, 2026', status: 'Valid' },
      { domain: 'api.petracore.com', issuedBy: "Let's Encrypt", expires: 'Nov 28, 2026', status: 'Valid' },
      { domain: 'cdn.petracore.com', issuedBy: 'Cloudflare', expires: 'Jan 5, 2027', status: 'Valid' },
    ],
  },
  Reccur: {
    servers: [
      { location: 'Amsterdam (EU-1)', type: '4 vCPU, 8GB', status: 'Active', uptime: '99.9%' },
      { location: 'Singapore (AP-1)', type: '4 vCPU, 8GB', status: 'Active', uptime: '99.9%' },
    ],
    instanceTypes: [
      { name: 'Web Server', count: 2, spec: '4 vCPU, 8GB RAM, 160GB SSD' },
      { name: 'Database Server', count: 1, spec: '8 vCPU, 16GB RAM, 400GB SSD' },
      { name: 'Cache Server', count: 2, spec: '4 vCPU, 8GB RAM, 100GB SSD' },
    ],
    network: { zone: 'Private VLAN', cidr: '10.1.0.0/16', vpn: 'Active', firewall: 'Enabled' },
    dns: [
      { record: 'api.reccur.io', type: 'A', value: '10.1.1.100', ttl: '300s' },
      { record: 'app.reccur.io', type: 'CNAME', value: 'lb.reccur.io', ttl: '600s' },
    ],
    backups: { schedule: 'Daily at 1AM', retention: '30 days', lastRun: 'Today 1:00 AM', nextRun: 'Tomorrow 1:00 AM', status: 'Healthy' },
    ssl: [
      { domain: 'reccur.io', issuedBy: "Let's Encrypt", expires: 'Oct 15, 2026', status: 'Valid' },
      { domain: 'api.reccur.io', issuedBy: "Let's Encrypt", expires: 'Oct 22, 2026', status: 'Valid' },
    ],
  },
  Lena: {
    servers: [
      { location: 'London (EU-2)', type: '8 vCPU, 16GB', status: 'Active', uptime: '99.9%' },
      { location: 'Tokyo (AP-2)', type: '8 vCPU, 16GB', status: 'Active', uptime: '99.9%' },
      { location: 'US East (US-2)', type: '8 vCPU, 16GB', status: 'Active', uptime: '99.8%' },
    ],
    instanceTypes: [
      { name: 'Web Server', count: 4, spec: '8 vCPU, 16GB RAM, 320GB SSD' },
      { name: 'Database Server', count: 2, spec: '16 vCPU, 32GB RAM, 1TB SSD' },
      { name: 'Cache Server', count: 2, spec: '8 vCPU, 16GB RAM, 200GB SSD' },
      { name: 'Queue Server', count: 1, spec: '4 vCPU, 8GB RAM, 100GB SSD' },
    ],
    network: { zone: 'Private VLAN', cidr: '10.2.0.0/16', vpn: 'Active', firewall: 'Enabled' },
    dns: [
      { record: 'api.lena.app', type: 'A', value: '10.2.1.200', ttl: '300s' },
      { record: 'app.lena.app', type: 'CNAME', value: 'lb.lena.app', ttl: '600s' },
      { record: 'cdn.lena.app', type: 'CNAME', value: 'cdn.cloudflare.net', ttl: '3600s' },
      { record: 'mail.lena.app', type: 'MX', value: 'mail.lena.app', ttl: '3600s' },
    ],
    backups: { schedule: 'Every 6 hours', retention: '90 days', lastRun: '6 hours ago', nextRun: 'In 6 hours', status: 'Healthy' },
    ssl: [
      { domain: 'lena.app', issuedBy: "Let's Encrypt", expires: 'Aug 3, 2026', status: 'Valid' },
      { domain: 'api.lena.app', issuedBy: "Let's Encrypt", expires: 'Aug 10, 2026', status: 'Valid' },
      { domain: 'cdn.lena.app', issuedBy: 'Cloudflare', expires: 'Sep 20, 2026', status: 'Valid' },
    ],
  },
  Jetimworks: {
    servers: [
      { location: 'Frankfurt (EU-1)', type: '2 vCPU, 4GB', status: 'Active', uptime: '99.9%' },
      { location: 'New York (US-1)', type: '2 vCPU, 4GB', status: 'Active', uptime: '99.9%' },
    ],
    instanceTypes: [
      { name: 'Web Server', count: 2, spec: '2 vCPU, 4GB RAM, 80GB SSD' },
      { name: 'Database Server', count: 1, spec: '4 vCPU, 8GB RAM, 200GB SSD' },
      { name: 'Cache Server', count: 1, spec: '2 vCPU, 4GB RAM, 50GB SSD' },
    ],
    network: { zone: 'Private VLAN', cidr: '10.3.0.0/16', vpn: 'Active', firewall: 'Enabled' },
    dns: [
      { record: 'api.jetimworks.com', type: 'A', value: '10.3.1.50', ttl: '300s' },
      { record: 'app.jetimworks.com', type: 'CNAME', value: 'lb.jetimworks.com', ttl: '600s' },
    ],
    backups: { schedule: 'Daily at 2AM', retention: '30 days', lastRun: 'Today 2:00 AM', nextRun: 'Tomorrow 2:00 AM', status: 'Healthy' },
    ssl: [
      { domain: 'jetimworks.com', issuedBy: "Let's Encrypt", expires: 'Nov 12, 2026', status: 'Valid' },
      { domain: 'api.jetimworks.com', issuedBy: "Let's Encrypt", expires: 'Nov 18, 2026', status: 'Valid' },
    ],
  },
  Antlar: {
    servers: [
      { location: 'Sydney (AP-3)', type: '2 vCPU, 4GB', status: 'Active', uptime: '99.7%' },
    ],
    instanceTypes: [
      { name: 'Web Server', count: 1, spec: '2 vCPU, 4GB RAM, 80GB SSD' },
      { name: 'Database Server', count: 1, spec: '2 vCPU, 4GB RAM, 100GB SSD' },
    ],
    network: { zone: 'Private VLAN', cidr: '10.4.0.0/16', vpn: 'Active', firewall: 'Enabled' },
    dns: [
      { record: 'api.antlar.com', type: 'A', value: '10.4.1.30', ttl: '300s' },
      { record: 'app.antlar.com', type: 'CNAME', value: 'lb.antlar.com', ttl: '600s' },
    ],
    backups: { schedule: 'Daily at 3AM', retention: '14 days', lastRun: 'Today 3:00 AM', nextRun: 'Tomorrow 3:00 AM', status: 'Healthy' },
    ssl: [
      { domain: 'antlar.com', issuedBy: "Let's Encrypt", expires: 'Sep 5, 2026', status: 'Valid' },
      { domain: 'api.antlar.com', issuedBy: "Let's Encrypt", expires: 'Sep 12, 2026', status: 'Valid' },
    ],
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

export default function Infrastructure() {
  const { selectedProject } = useProject();
  const data = infrastructureData[selectedProject];

  const serverCount = data.servers.length;
  const instanceCount = data.instanceTypes.reduce((sum, t) => sum + t.count, 0);
  const sslCount = data.ssl.length;

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
            <h1 className="dashboard-title">Infrastructure</h1>
            <p className="dashboard-subtitle">Server, network, and certificate management</p>
          </div>
        </div>
        <div className="managed-badge">
          <span className="badge-dot" />
          <span>Infrastructure Managed</span>
        </div>
      </motion.div>

      {/* Counters */}
      <div className="counters-grid">
<StatCard label="Server Locations" value={serverCount} sub={`${data.servers.filter(s => s.status === 'Active').length} active`} delay={0} />
        <StatCard label="Active Instances" value={instanceCount} sub={`${data.instanceTypes.length} types`} delay={0.08} />
        <StatCard label="SSL Certificates" value={sslCount} sub="All valid" delay={0.16} />
      </div>

      {/* Main grid */}
      <div className="dashboard-grid">
        {/* Server Locations */}
        <SectionCard title="Server Locations" delay={0.24}>
          <div className="infra-servers-list">
            {data.servers.map((s, i) => (
              <div key={i} className="infra-server-row">
                <div>
                  <div className="infra-server-location">{s.location}</div>
                  <div className="infra-server-meta">{s.type}</div>
                </div>
                <div className="infra-server-status">{s.status} · {s.uptime}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Instance Types */}
        <SectionCard title="Instance Types" delay={0.32}>
          <div className="infra-table">
            <div className="infra-table-header">
              <span>Service Name</span>
              <span>Count</span>
              <span>Specification</span>
              <span></span>
            </div>
            {data.instanceTypes.map((t, i) => (
              <div key={i} className="infra-table-row">
                <span className="infra-table-name">{t.name}</span>
                <span className="infra-table-meta">{t.count}</span>
                <span className="infra-table-meta">{t.spec}</span>
                <span></span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Network Topology */}
        <SectionCard title="Network Topology" delay={0.40}>
          <div className="infra-network-grid">
<div className="infra-network-item">
              <div className="infra-network-label">Network Zone</div>
              <div className="infra-network-value">{data.network.zone}</div>
            </div>
            <div className="infra-network-item">
              <div className="infra-network-label">CIDR Block</div>
              <div className="infra-network-value">{data.network.cidr}</div>
            </div>
            <div className="infra-network-item">
              <div className="infra-network-label">VPN Status</div>
              <div className="infra-network-value">{data.network.vpn}</div>
            </div>
            <div className="infra-network-item">
              <div className="infra-network-label">Firewall</div>
              <div className="infra-network-value">{data.network.firewall}</div>
            </div>
          </div>
        </SectionCard>

        {/* DNS Settings */}
        <SectionCard title="DNS Settings" delay={0.48}>
          <div>
            <div className="infra-table-header">
              <span>Record</span>
              <span>Type</span>
              <span>Value</span>
              <span>TTL</span>
            </div>
            {data.dns.map((d, i) => (
              <div key={i} className="dns-record-row">
                <span className="dns-record-name">{d.record}</span>
                <span className="dns-record-type">{d.type}</span>
                <span className="dns-record-value">{d.value}</span>
                <span className="dns-record-ttl">{d.ttl}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Backup Configuration */}
        <SectionCard title="Backup Configuration" delay={0.56}>
          <div className="settings-info-list">
            <div className="settings-info-row">
              <span className="settings-info-label">Schedule</span>
              <span className="settings-info-value">{data.backups.schedule}</span>
            </div>
            <div className="settings-info-row">
              <span className="settings-info-label">Retention</span>
              <span className="settings-info-value">{data.backups.retention}</span>
            </div>
            <div className="settings-info-row">
              <span className="settings-info-label">Last Run</span>
              <span className="settings-info-value">{data.backups.lastRun}</span>
            </div>
            <div className="settings-info-row">
              <span className="settings-info-label">Next Run</span>
              <span className="settings-info-value">{data.backups.nextRun}</span>
            </div>
            <div className="settings-info-row">
              <span className="settings-info-label">Status</span>
              <span className="settings-info-value" style={{ color: '#22c55e' }}>{data.backups.status}</span>
            </div>
          </div>
        </SectionCard>

        {/* SSL Certificates */}
        <SectionCard title="SSL Certificates" delay={0.64}>
          <div>
            <div className="infra-table-header">
              <span>Domain</span>
              <span>Issuer</span>
              <span>Expires</span>
              <span>Status</span>
            </div>
            {data.ssl.map((s, i) => (
              <div key={i} className="infra-table-row">
                <span className="infra-table-name">{s.domain}</span>
                <span className="infra-table-meta">{s.issuedBy}</span>
                <span className="infra-table-meta">{s.expires}</span>
                <span className="ssl-status-valid">{s.status}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
