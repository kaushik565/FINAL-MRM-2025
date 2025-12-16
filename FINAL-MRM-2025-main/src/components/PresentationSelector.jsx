import { createPortal } from 'react-dom'

const logoUrl = 'https://raw.githubusercontent.com/kaushik565/KAushikMRMNEW/master/public/logo.png'

export default function PresentationSelector({ onSelect }) {
  return createPortal(
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999999
    }}>
      {/* Company Logo */}
      <img 
        src={logoUrl}
        alt="Molbio Diagnostics Limited"
        style={{
          width: '280px',
          height: 'auto',
          marginBottom: '40px',
          objectFit: 'contain',
          filter: 'brightness(0) invert(1)'
        }}
      />

      {/* Title */}
      <h1 style={{
        fontSize: '3.5em',
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: '16px',
        textAlign: 'center',
        letterSpacing: '-0.02em'
      }}>
        Management Review Meeting
      </h1>

      <div style={{
        fontSize: '1.4em',
        color: '#cbd5e1',
        marginBottom: '64px',
        fontWeight: '600'
      }}>
        December 15-16, 2025
      </div>

      {/* Department Selection */}
      <h2 style={{
        fontSize: '1.6em',
        color: '#e2e8f0',
        marginBottom: '32px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        Select Department Presentation
      </h2>

      {/* Button Container */}
      <div style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center'
      }}>
        {/* QA Button */}
        <button
          onClick={() => onSelect('QA')}
          style={{
            padding: '24px 48px',
            fontSize: '1.8em',
            fontWeight: '800',
            color: '#ffffff',
            background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
            border: '3px solid #ffffff',
            borderRadius: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(220, 38, 38, 0.4)',
            minWidth: '280px',
            letterSpacing: '0.05em'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.6)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #b91c1c, #991b1b)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.4)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #dc2626, #b91c1c)';
          }}
        >
          🔬 Quality Assurance
        </button>

        {/* RA Button */}
        <button
          onClick={() => onSelect('RA')}
          style={{
            padding: '24px 48px',
            fontSize: '1.8em',
            fontWeight: '800',
            color: '#ffffff',
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            border: '3px solid #ffffff',
            borderRadius: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(37, 99, 235, 0.4)',
            minWidth: '280px',
            letterSpacing: '0.05em'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.6)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #1d4ed8, #1e40af)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.4)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb, #1d4ed8)';
          }}
        >
          📋 Regulatory Affairs
        </button>
      </div>

      {/* Footer Note */}
      <div style={{
        marginTop: '64px',
        fontSize: '1em',
        color: '#94a3b8',
        fontStyle: 'italic'
      }}>
        Click on your department to begin the presentation
      </div>
    </div>,
    document.body
  )
}
