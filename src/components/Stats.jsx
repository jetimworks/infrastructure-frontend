import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '4', label: 'Customers' },
  { value: '15', label: 'Instances provisioned' },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      style={{
        paddingBlock: 'clamp(56px, 7vw, 88px)',
        position: 'relative',
      }}
    >
      {/* Vertical divider */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1,
          height: '60%',
          background: 'var(--border)',
        }}
      />

      <div className="container" ref={ref}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--sp-8)',
            maxWidth: 480,
            marginInline: 'auto',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
              style={{ textAlign: 'center' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                  fontWeight: 800,
                  color: 'var(--text-h)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  // Thin top accent line
                  borderTop: '2px solid var(--accent)',
                  display: 'inline-block',
                  paddingTop: 'var(--sp-3)',
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  marginTop: 'var(--sp-3)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}