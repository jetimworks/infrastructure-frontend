import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const plans = [
  {
    name: 'StartUp',
    price: '$70',
    period: 'per month',
    desc: 'For products scaling up with more demanding workloads.',
    features: [
      '1000 concurrent connections guaranteed',
      '99.9% Uptime SLA',
      '24-hour support response time',
      'Monitoring& alerts',
      'Reliable backups',
      'Frequent security audits',
      'Free scaling up',
      'Free consulting to move to self-managed AWS or Digital Ocean',
    ],
    cta: 'Get started',
    href: 'mailto:info@jetimworks.com?subject=StartUp%20Plan',
    featured: true,
  },
  {
    name: 'Production',
    price: '$150',
    period: 'per month',
    desc: 'For products with high traffic and reliability requirements.',
    features: [
      '100,000 concurrent connections guaranteed',
      '99.99% Uptime SLA',
      '1-hour critical support response time',
      'Monitoring & alerts',
      'Reliable backups',
      'Frequent security audits',
      'Free scaling up',
      'Free consulting to move to self-managed AWS or Digital Ocean',
      'Weekly performance reports',
    ],
    cta: 'Get started',
    href: 'mailto:info@jetimworks.com?subject=Production%20Plan',
    featured: false,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    period: '',
    desc: 'For teams that need a complete, hands-off infrastructure.',
    features: [
      'Unlimited connections',
      'Advanced monitoring & alerts',
      'Daily backups with instant restore',
      'Continuous security audits',
      'Auto-scaling infrastructure',
      'White-glove migration support',
      'Dedicated infrastructure engineer',
    ],
    cta: 'Get in touch',
    href: 'mailto:info@jetimworks.com?subject=Enterprise%20Plan',
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
            Flat-rate, all-inclusive pricing.
          </h2>
          <p style={{ marginTop: 'var(--sp-3)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', maxWidth: 600, lineHeight: 1.6 }}>
            *We absorb all underlying cloud costs. We use AWS/DigitalOcean under the hood. If your app scales and needs more resources, we provision and pay for the extra instances. Your bill never changes unless you upgrade your plan.
          </p>
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
