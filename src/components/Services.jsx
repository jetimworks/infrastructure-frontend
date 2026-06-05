import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    name: 'VPS & Backend Server',
    desc: 'Provisioning and configuring your virtual private server, ready for production from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    name: 'SQL Database',
    desc: 'Relational database setup with proper schema design, backups, and access controls.',
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
    name: 'Redis & Memory Cache',
    desc: 'In-memory data store configured for caching and session management.',
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
    name: 'Storage & Backups',
    desc: 'Reliable backup strategy and storage solutions so your data stays safe.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <path d="M3.29 7 12 12l8.71-5"/>
        <path d="M12 22V12"/>
      </svg>
    ),
  },
  {
    name: 'Monitoring',
    desc: 'Uptime tracking and system health monitoring with alerts when something needs attention.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    name: 'Production Environment',
    desc: 'CI/CD pipelines, environment configuration, and deployment automation handled end to end.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M14.83 9.17a4 4 0 0 1 0 5.66M9.17 9.17a4 4 0 0 0 0 5.66"/>
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              style={{
                background: 'var(--bg)',
                padding: 'var(--sp-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--sp-3)',
                transition: 'background var(--dur-fast)',
              }}
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
