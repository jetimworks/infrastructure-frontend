import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'oklch(98% 0.005 240 / 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid oklch(87% 0.012 240)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="/logo_transparent.jpg"
            alt="Jetimworks"
            style={{ height: 34, width: 'auto', objectFit: 'contain' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--text-base)',
              color: 'var(--text-h)',
              letterSpacing: '-0.02em',
            }}
          >
            jetimworks
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a
            href="https://jetimworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow"
            style={{
              color: 'var(--text-muted)',
              transition: 'color var(--dur-fast) var(--ease-out)',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text-h)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            Home
          </a>
          <a
            href="#contact"
            className="eyebrow"
            style={{
              color: 'var(--text-muted)',
              transition: 'color var(--dur-fast) var(--ease-out)',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text-h)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
