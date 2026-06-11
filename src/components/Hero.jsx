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
          Stop managing servers. Start shipping code.
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
          Dedicated, managed infrastructure (VPS, Postgres, Redis) for growing SaaS teams.
          Get the reliability of an in-house DevOps engineer for a flat monthly fee—without the vendor lock-in.
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
            Get a Free Infrastructure Audit
          </a>
          <a href="#pricing" className="btn btn-ghost">
            View Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
