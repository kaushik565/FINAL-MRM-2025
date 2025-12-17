const logoUrl = 'https://raw.githubusercontent.com/kaushik565/KAushikMRMNEW/master/public/logo.png'

export default function RAClosingSlide({ onHomeClick }) {
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
        color: '#1d4ed8',
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
        backgroundColor: '#1d4ed8',
        marginBottom: '48px',
        borderRadius: '2px'
      }}></div>

      {/* Team attribution */}
      <div style={{
        fontSize: '1.4em',
        fontWeight: '800',
        color: '#1d4ed8'
      }}>
        Team RA
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
            background: '#3b82f6',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2563eb';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#3b82f6';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
          }}
          aria-label="Back to Home"
        >
          ×
        </button>
      )}
    </section>
  )
}
