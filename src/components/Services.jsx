import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    name: 'VPS',
    desc: 'Virtual private server setup and configuration, production-ready from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    name: 'SSD Storage',
    desc: 'Fast, reliable solid-state storage with automated backups and redundancy.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <path d="M3.29 7 12 12l8.71-5"/>
        <path d="M12 22V12"/>
      </svg>
    ),
  },
  {
    name: 'Postgres Database',
    desc: 'Relational database setup with schema design, access controls, and reliable backups.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9"/>
        <path d="M3 13v4c0 1.66 4 3 9 3s9-1.34 9-3v-4"/>
      </svg>
    ),
  },
  {
    name: 'Redis Store',
    desc: 'In-memory cache and session store configured for performance and reliability.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 6v6l4 2"/>
        <path d="M18 2l4 4-4 4"/>
        <path d="M22 2l-4 4"/>
      </svg>
    ),
  },
  {
    name: 'Zero-Downtime Deployments',
    desc: 'CI/CD pipelines with smooth, uninterrupted releases and automated rollbacks.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    name: 'Scalable Monitoring',
    desc: 'System health tracking and uptime monitoring with alerts when attention is needed.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M14.83 9.17a4 4 0 0 1 0 5.66M9.17 9.17a4 4 0 0 0 0 5.66"/>
      </svg>
    ),
  },
  {
    name: 'Aggressive Security',
    desc: 'Firewalls, access controls, and security audits to keep your systems protected.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    name: 'Move to Self Managed',
    desc: 'Free consulting to help you migrate to your own AWS or DigitalOcean setup when you are ready.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const row1 = services.slice(0, 4);
  const row2 = services.slice(4);

  const cellStyle = (s) => ({
    background: 'var(--bg)',
    padding: 'var(--sp-6)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--sp-3)',
    transition: 'background var(--dur-fast)',
  });

  return (
    <section
      id="services"
      style={{
        background: 'var(--surface)',
        paddingBlock: 'var(--section-py)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div style={{ marginBottom: 'var(--sp-8)' }}>
          <p className="eyebrow" style={{ marginBottom: 'var(--sp-3)' }}>What we offer</p>
          <h2 className="display" style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, letterSpacing: '-0.025em' }}>
            Complete infrastructure, taken care of.
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          {row1.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              style={cellStyle(s)}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-alt)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
            >
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{s.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                color: 'var(--text-h)',
                letterSpacing: '-0.01em',
              }}>
                {s.name}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text)', lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderTop: 'none',
            borderRadius: '0 0 10px 10px',
            overflow: 'hidden',
          }}
        >
          {row2.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: (i + 4) * 0.07 }}
              style={cellStyle(s)}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-alt)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
            >
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{s.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                color: 'var(--text-h)',
                letterSpacing: '-0.01em',
              }}>
                {s.name}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text)', lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
