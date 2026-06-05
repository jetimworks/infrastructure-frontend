import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$20',
    period: 'per month',
    desc: 'For early-stage products that need a reliable foundation.',
    features: [
      '1 VPS server',
      '1 SQL database',
      'Redis cache',
      'Storage & backups',
      'Basic monitoring',
      'Email support',
    ],
    cta: 'Get started',
    href: 'mailto:info@jetimworks.com?subject=Starter%20Plan',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$70',
    period: 'per month',
    desc: 'For products scaling up and needing more resources.',
    features: [
      '2 VPS servers',
      '2 SQL databases',
      'Redis cache',
      'Storage & backups',
      'Monitoring + alerts',
      'CI/CD setup',
      'Email & chat support',
    ],
    cta: 'Get started',
    href: 'mailto:info@jetimworks.com?subject=Growth%20Plan',
    featured: true,
  },
  {
    name: 'Business',
    price: 'Contact us',
    period: '',
    desc: 'For teams that need a complete, hands-off infrastructure.',
    features: [
      'Unlimited servers',
      'Unlimited databases',
      'Advanced monitoring',
      'Production environment',
      'CI/CD & automation',
      'Security audits',
      'Dedicated support',
    ],
    cta: 'Get in touch',
    href: 'mailto:info@jetimworks.com?subject=Business%20Plan',
    featured: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="pricing"
      style={{
        paddingBlock: 'var(--section-py)',
      }}
    >
      <div className="container" ref={ref}>
        <div style={{ marginBottom: 'var(--sp-8)' }}>
          <p className="eyebrow" style={{ marginBottom: 'var(--sp-3)' }}>Pricing</p>
          <h2 className="display" style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, letterSpacing: '-0.025em' }}>
            Straightforward pricing.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--sp-5)',
            alignItems: 'start',
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={{
                border: plan.featured ? '2px solid oklch(52% 0.08 248)' : '1px solid var(--border-strong)',
                borderRadius: 10,
                padding: 'var(--sp-6)',
                background: plan.featured ? 'var(--surface)' : 'var(--bg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--sp-5)',
                position: 'relative',
              }}
            >
              {plan.featured && (
                <span style={{
                  position: 'absolute',
                  top: -12,
                  left: 24,
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 500,
                  padding: '2px 10px',
                  borderRadius: 20,
                  letter: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  Most popular
                </span>
              )}

              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--text-h)', marginBottom: 'var(--sp-2)' }}>
                  {plan.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-2)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--text-h)', letterSpacing: '-0.03em' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p style={{ marginTop: 'var(--sp-3)', fontSize: 'var(--text-sm)', color: 'var(--text)', lineHeight: 1.6 }}>
                  {plan.desc}
                </p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-2)', fontSize: 'var(--text-sm)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }}>
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                style={{ justifyContent: 'center', width: '100%' }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
