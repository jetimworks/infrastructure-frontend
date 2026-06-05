export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      paddingBlock: 'var(--sp-7)',
      background: 'var(--surface)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'var(--text-sm)',
          color: 'var(--text-h)',
        }}>
          jetimworks
        </span>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} Jetimworks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
