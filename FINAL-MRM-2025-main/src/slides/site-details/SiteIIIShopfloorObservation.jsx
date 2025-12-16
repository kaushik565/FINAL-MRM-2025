import { createPortal } from 'react-dom'
import { FullscreenShell } from '../../utils/modalHelpers'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

export default function SiteIIIShopfloorObservation({ onClose }) {
  // Data showing the reduction from 34 to 21 - comparing first half and second half of year
  const incidentData = [
    { period: 'JAN-JUN', incidents: 34, fill: '#ef4444' },
    { period: 'JULY-NOV', incidents: 21, fill: '#10b981' }
  ]

  const totalReduction = ((34 - 21) / 34 * 100).toFixed(1)

  return createPortal(
    <FullscreenShell 
      onClose={onClose} 
      title="Shopfloor Observation Loop - Process Incidents Tracking" 
      accentColor="#8b5cf6"
    >
      <div style={{ padding: '24px', background: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Overview Stats */}
          <div style={{
            background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '32px',
            border: '2px solid #a78bfa',
            boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{
                fontSize: '3.5em',
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
              }}>
                👀
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '1.1em',
                  fontWeight: '900',
                  color: '#6b21a8',
                  marginBottom: '8px'
                }}>
                  Every 15 Days: On-floor Walks to Surface Issues Early
                </div>
                <div style={{
                  fontSize: '0.95em',
                  color: '#7c3aed',
                  lineHeight: '1.6'
                }}>
                  Regular shopfloor observations help identify and address process incidents proactively, leading to continuous improvement in manufacturing quality.
                </div>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #fee2e2, #fecaca)',
              borderRadius: '16px',
              padding: '24px',
              border: '2px solid #ef4444',
              boxShadow: '0 8px 20px rgba(239, 68, 68, 0.15)'
            }}>
              <div style={{ fontSize: '0.85em', fontWeight: '700', color: '#991b1b', marginBottom: '8px', textTransform: 'uppercase' }}>
                Initial Incidents
              </div>
              <div style={{ fontSize: '3em', fontWeight: '900', color: '#dc2626', marginBottom: '4px' }}>34</div>
              <div style={{ fontSize: '0.9em', color: '#991b1b', fontWeight: '500' }}>Baseline</div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
              borderRadius: '16px',
              padding: '24px',
              border: '2px solid #10b981',
              boxShadow: '0 8px 20px rgba(16, 185, 129, 0.15)'
            }}>
              <div style={{ fontSize: '0.85em', fontWeight: '700', color: '#065f46', marginBottom: '8px', textTransform: 'uppercase' }}>
                Current Incidents
              </div>
              <div style={{ fontSize: '3em', fontWeight: '900', color: '#059669', marginBottom: '4px' }}>21</div>
              <div style={{ fontSize: '0.9em', color: '#065f46', fontWeight: '500' }}>Improved</div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              borderRadius: '16px',
              padding: '24px',
              border: '2px solid #f59e0b',
              boxShadow: '0 8px 20px rgba(245, 158, 11, 0.15)'
            }}>
              <div style={{ fontSize: '0.85em', fontWeight: '700', color: '#92400e', marginBottom: '8px', textTransform: 'uppercase' }}>
                Reduction
              </div>
              <div style={{ fontSize: '3em', fontWeight: '900', color: '#d97706', marginBottom: '4px' }}>{totalReduction}%</div>
              <div style={{ fontSize: '0.9em', color: '#92400e', fontWeight: '500' }}>13 Incidents ↓</div>
            </div>
          </div>

          {/* Trend Chart */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '28px',
            marginBottom: '24px',
            border: '2px solid #e2e8f0',
            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)'
          }}>
            <div style={{
              fontSize: '1.2em',
              fontWeight: '900',
              color: '#0f172a',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span>📉</span> Process Incidents Trend
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={incidentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="period" 
                  tick={{ fill: '#64748b', fontSize: 14, fontWeight: 600 }}
                  stroke="#cbd5e1"
                />
                <YAxis 
                  tick={{ fill: '#64748b', fontSize: 14, fontWeight: 600 }}
                  stroke="#cbd5e1"
                  domain={[0, 40]}
                />
                <Tooltip 
                  contentStyle={{
                    background: '#ffffff',
                    border: '2px solid #8b5cf6',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)'
                  }}
                  labelStyle={{ fontWeight: 700, color: '#0f172a' }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                />
                <Bar 
                  dataKey="incidents" 
                  name="Incidents"
                  radius={[8, 8, 0, 0]}
                  label={{ position: 'top', fill: '#0f172a', fontWeight: 700, fontSize: 16 }}
                >
                  {incidentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Key Achievements */}
          <div style={{
            marginTop: '24px',
            background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
            borderRadius: '16px',
            padding: '24px',
            border: '2px solid #10b981',
            boxShadow: '0 8px 20px rgba(16, 185, 129, 0.15)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{ fontSize: '2.5em' }}>✨</div>
              <div>
                <div style={{
                  fontSize: '1.1em',
                  fontWeight: '900',
                  color: '#065f46',
                  marginBottom: '8px'
                }}>
                  Key Achievement
                </div>
                <div style={{
                  fontSize: '0.95em',
                  color: '#047857',
                  lineHeight: '1.6',
                  fontWeight: '500'
                }}>
                  Through regular 15-day shopfloor observation loops, process incidents were reduced from <strong>34 to 21 incidents</strong>, achieving a <strong>{totalReduction}% reduction</strong>. This proactive approach enables early identification and resolution of issues before they escalate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  )
}
