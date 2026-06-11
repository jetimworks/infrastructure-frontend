import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="about"
      style={{
        background: 'var(--surface)',
        paddingBlock: 'var(--section-py)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 58 + 'ch' }}
        >
          <p className="eyebrow" style={{ marginBottom: 'var(--sp-4)' }}>How we work</p>
          <p className="display" style={{ fontSize: 'var(--text-xl)', fontWeight: 400, color: 'var(--text-h)', lineHeight: 1.5, letterSpacing: '-0.015em', marginBottom: 'var(--sp-5)' }}>
            We handle the infrastructure so you don't have to think about it.
          </p>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text)', lineHeight: 1.75 }}>
            Most small SaaS teams end up spending time they don't have configuring servers
            and wrestling with databases. We take that off your plate using automated CI/CD,
            standardized security audits, and proactive monitoring. You ship your product,
            and our systems (and our engineers) make sure the infrastructure underneath it stays solid.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
