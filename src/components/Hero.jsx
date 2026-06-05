import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section style={{ paddingTop: 160, paddingBottom: 'var(--section-py)' }}>
      <div className="container">
        <motion.p
          className="eyebrow"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Infrastructure for SaaS
        </motion.p>

        <motion.h1
          className="display"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            marginTop: 'var(--sp-4)',
            marginBottom: 'var(--sp-5)',
            maxWidth: 14 + 'em',
            fontWeight: 600,
            letterSpacing: '-0.03em',
          }}
        >
          Your infrastructure, handled properly.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text)',
            maxWidth: 52 + 'ch',
            marginBottom: 'var(--sp-7)',
            lineHeight: 1.6,
          }}
        >
          We set up and manage your servers, databases, and production environment
          so you can focus on building your product.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}
        >
          <a
            href="https://calendly.com/jetimworks/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Schedule a call
          </a>
          <a href="mailto:info@jetimworks.com" className="btn btn-ghost">
            Send an email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
