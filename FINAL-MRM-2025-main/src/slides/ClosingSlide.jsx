const logoUrl = 'https://raw.githubusercontent.com/kaushik565/KAushikMRMNEW/master/public/logo.png'

export default function ClosingSlide({ onHomeClick }) {
  return (
    <section className="closing-slide" data-state="closing-slide" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
    }}>
      {/* Company Logo */}
      <img 
        src={logoUrl}
        alt="Company Logo"
        style={{
          width: '280px',
          height: 'auto',
          marginBottom: '48px',
          objectFit: 'contain'
        }}
      />

      {/* Main Thank You Message */}
      <h1 style={{
        fontSize: '4em',
        fontWeight: '800',
        marginBottom: '24px',
        color: '#b91c1c',
        letterSpacing: '-0.02em'
      }}>
        Thank You
      </h1>

      {/* Subheading */}
      <h2 style={{
        fontSize: '1.8em',
        fontWeight: '600',
        marginBottom: '48px',
        color: '#475569'
      }}>
        for your attention & engagement
      </h2>

      {/* Decorative line */}
      <div style={{
        width: '120px',
        height: '4px',
        backgroundColor: '#b91c1c',
        marginBottom: '48px',
        borderRadius: '2px'
      }}></div>

      {/* Team attribution */}
      <div style={{
        fontSize: '1.4em',
        fontWeight: '800',
        color: '#b91c1c'
      }}>
        Team QA
      </div>

      {/* Home Button - Small X in top right */}
      {onHomeClick && (
        <button
          onClick={onHomeClick}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: '#ffffff',
            background: '#ef4444',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#dc2626';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ef4444';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(239, 68, 68, 0.3)';
          }}
          aria-label="Back to Home"
        >
          ×
        </button>
      )}
    </section>
  )
}
