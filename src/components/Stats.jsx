import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      style={{
        paddingBlock: 'clamp(56px, 7vw, 88px)',
      }}
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ textAlign: 'center', maxWidth: 48 + 'ch', marginInline: 'auto' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 600,
              color: 'var(--text-h)',
              letterSpacing: '-0.025em',
              lineHeight: 1.3,
              marginBottom: 'var(--sp-4)',
            }}
          >
            Enter the future of no sweat server management.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}
          >
            Use dashboards and simple clicks to properly manage your infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
