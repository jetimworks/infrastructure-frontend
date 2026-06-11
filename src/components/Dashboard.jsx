import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const features = [
  {
    name: 'Live Metrics',
    desc: 'Monitor RAM, CPU, Database capacity, and Storage in real-time.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    name: 'Uptime Tracking',
    desc: 'View API ping success rates and response times.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    name: 'Instant Alerts',
    desc: 'Receive instant alerts and detailed weekly reports when attention is needed.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
  },
];

export default function Dashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="dashboard"
      style={{
        paddingBlock: 'var(--section-py)',
      }}
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 58 + 'ch', marginBottom: 'var(--sp-8)' }}
        >
          <p className="eyebrow" style={{ marginBottom: 'var(--sp-4)' }}>The Dashboard</p>
          <h2 className="display" style={{ fontSize: 'var(--text-xl)', fontWeight: 400, color: 'var(--text-h)', lineHeight: 1.5, letterSpacing: '-0.015em', marginBottom: 'var(--sp-5)' }}>
            Total Transparency. Total Control.
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text)', lineHeight: 1.75 }}>
            Don't just pay for black-box hosting. Get a real-time customer dashboard that shows you exactly what's happening under the hood.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--sp-5)',
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: 'var(--sp-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--sp-3)',
              }}
            >
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{f.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                color: 'var(--text-h)',
                letterSpacing: '-0.01em',
              }}>
                {f.name}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text)', lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
