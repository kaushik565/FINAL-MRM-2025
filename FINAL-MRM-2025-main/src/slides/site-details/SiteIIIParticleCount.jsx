import { createPortal } from 'react-dom'
import { FullscreenShell } from '../../utils/modalHelpers'

export default function SiteIIIParticleCount({ onClose }) {
  const areas = [
    { name: 'Cartridge Floor', status: 'PASS', statusColor: '#10b981', statusBg: '#ecfdf3' },
    { name: 'Device Floor', status: 'PASS', statusColor: '#10b981', statusBg: '#ecfdf3' },
    { name: 'IQC', status: 'FAIL', statusColor: '#ef4444', statusBg: '#fee2e2' }
  ]

  return createPortal(
    <FullscreenShell 
      onClose={onClose} 
      title="As per clean room classification (ISO-8)" 
      accentColor="#8b5cf6"
    >
      <div style={{ padding: '24px', background: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Introduction */}
          <div style={{
            background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '32px',
            border: '2px solid #a78bfa',
            boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
          }}>
            <div style={{
              fontSize: '1.05em',
              color: '#6b21a8',
              lineHeight: '1.6',
              fontWeight: '500'
            }}>
              <strong>Particle Count Checks:</strong> Routine counts to keep contamination tightly controlled across all manufacturing areas as per ISO-8 clean room classification standards.
            </div>
          </div>

          {/* Areas Status Section */}
          <div style={{
            fontSize: '1.3em',
            fontWeight: '900',
            color: '#0f172a',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span>🧪</span> Areas Status
          </div>

          {/* Status Cards */}
          <div style={{ display: 'grid', gap: '16px' }}>
            {areas.map((area, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: `2px solid ${area.statusColor}30`,
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = 'translateY(-4px)'; 
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 23, 42, 0.12)'; 
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 23, 42, 0.08)'; 
              }}>
                {/* Left: Area Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    fontSize: '2em',
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: area.statusBg,
                    border: `2px solid ${area.statusColor}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {area.status === 'PASS' ? '✅' : '❌'}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.2em',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '4px'
                    }}>
                      {area.name}
                    </div>
                    <div style={{
                      fontSize: '0.85em',
                      color: '#64748b',
                      fontWeight: '500'
                    }}>
                      ISO-8 Clean Room
                    </div>
                  </div>
                </div>

                {/* Right: Status Badge */}
                <div style={{
                  fontSize: '1.1em',
                  fontWeight: '900',
                  color: area.statusColor,
                  background: area.statusBg,
                  border: `2px solid ${area.statusColor}`,
                  padding: '12px 32px',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: `0 4px 12px ${area.statusColor}40`
                }}>
                  {area.status}
                </div>
              </div>
            ))}
          </div>

          {/* Legend/Note */}
          <div style={{
            marginTop: '32px',
            padding: '20px',
            background: '#ffffff',
            borderRadius: '16px',
            border: '2px solid #e2e8f0',
            fontSize: '0.9em',
            color: '#475569',
            lineHeight: '1.6'
          }}>
            <div style={{ fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              📋 Note:
            </div>
            <div>
              <strong>PASS:</strong> Particle count within acceptable ISO-8 limits.<br />
              <strong>FAIL:</strong> Particle count exceeds ISO-8 thresholds; corrective actions required.
            </div>
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  )
}
