import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="contact"
      style={{
        paddingBlock: 'var(--section-py)',
      }}
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 48 + 'ch' }}
        >
          <p className="eyebrow" style={{ marginBottom: 'var(--sp-4)' }}>Get in touch</p>
          <h2 className="display" style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 'var(--sp-4)' }}>
            Ready to offload your infrastructure?
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text)', lineHeight: 1.7, marginBottom: 'var(--sp-7)' }}>
            Send us a message or schedule a call. We'll figure out together what you need.
          </p>

          <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
            <a
              href="https://calendly.com/jetimworks/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Schedule a call
            </a>
            <a
              href="mailto:info@jetimworks.com"
              className="btn btn-ghost"
            >
              Send an email
            </a>
          </div>

          <p style={{ marginTop: 'var(--sp-7)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            Or email us directly at{' '}
            <a href="mailto:info@jetimworks.com" style={{ color: 'var(--accent)', fontWeight: 500 }}>
              info@jetimworks.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
