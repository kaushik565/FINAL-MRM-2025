import { createPortal } from 'react-dom'
import { FullscreenShell } from '../../utils/modalHelpers'

export default function SiteIIIPQAMilestones({ onClose }) {
  const kpiMetrics = [
    {
      title: '💰 Cost Savings',
      value: '≈ XXX',
      displayMode: 'multiplier',
      unit: 'Savings Multiple vs Rework Cost',
      period: 'Compared with (Jun24-Jul25)',
      color: '#f59e0b',
      bgColor: '#fff7ed',
      icon: '💰',
      target: 'Rework Procedure + Transport Optimization',
      actualAmount: 'Annual savings achieved through optimized rework & transport'
    },
    {
      title: '📉 IN-Process Defect Rate',
      value: '2.5%',
      unit: 'Achieved vs Target',
      from: '4.5% (Aug24-Jun25)',
      to: '2.5%',
      target: '≤ 4%',
      color: '#10b981',
      bgColor: '#ecfdf3',
      icon: '📉',
      period: 'Apr-Nov-25'
    },
    {
      title: '🧪 FQC Defect Rate',
      value: '1.5%',
      unit: 'Current vs Target',
      from: '1.7%',
      to: '1.5%',
      target: '≤ 1.0%',
      color: '#6366f1',
      bgColor: '#eef2ff',
      icon: '🧪',
      period: 'Apr-Nov',
      toColor: '#f59e0b'
    },
    {
      title: '🔧 Missing Defect Rate (VI-01)',
      value: '20%',
      unit: 'Current vs Target',
      from: '35% (Aug24-Jun25)',
      to: '20%',
      target: '≤ 10%',
      color: '#3b82f6',
      bgColor: '#eff6ff',
      icon: '🔧',
      period: 'Apr-Nov-25',
      toColor: '#f59e0b'
    }
  ]

  const milestonesData = {
    cartridgeManufacturing: [
      {
        title: 'Inprocess - Reduced rejection from 4.5% to 2.5%',
        details: 'Defined defect rates at all levels in cartridge production. Defect rate on (Aug24-Jun25) at Inprocess was 4.5% with Target ≤ 4%. We reduced to 2.5% from 4.5%.',
        status: 'Completed',
        statusColor: '#10b981',
        statusBg: '#ecfdf3',
        target: 'Target ≤ 4% (Achieved 2.5%)',
        outcome: 'Reduced from 4.5% to 2.5%',
        icon: '✅'
      },
      {
        title: 'FQC - Achieved 1.5% rejection for July-Nov',
        details: 'Defect rate (Apr-July) at FQC was 1.7%. Target is ≤ 1.0%. We achieved 1.5% for July-Nov. Our target is <1.0% but presently we achieved 1.5%, still undergoing process.',
        status: 'Under Progress',
        statusColor: '#f59e0b',
        statusBg: '#fff7ed',
        target: 'Target ≤ 1.0% (Current 1.5%)',
        outcome: 'Achieved 1.5% from 1.7%',
        outcomeColor: '#f59e0b',
        icon: '🚧'
      },
      {
        title: 'Missing Defect Rate - VI-01 (Welding Inspection)',
        details: 'Missing defect rate at VI-01 (welding inspection) was 35%. Target is to reduce to ≤ 10%. Presently we achieved 20% for July-Nov, still in process.',
        status: 'Under Progress',
        statusColor: '#3b82f6',
        statusBg: '#eff6ff',
        target: 'Target ≤ 10% (Current 20%)',
        outcome: 'Reduced from 35% to 20%',
        outcomeColor: '#3b82f6',
        icon: '🔧'
      }
    ],
    deviceManufacturing: [
      {
        title: 'Rework Procedure & Transport Optimization - Significant Cost Recovery',
        details: 'For defected units, we implemented a new rework procedure instead of destroying them. Defined rework procedure for Duo and Quatro casing (Completed) and optimized transportation method from warehouse to IST (Completed). Outcome: Achieved substantial savings compared to previous year rejection costs (Jun24-July25), demonstrating measurable ROI through operational efficiency.',
        status: 'Completed',
        statusColor: '#10b981',
        statusBg: '#ecfdf3',
        target: 'Maximize cost recovery from rework vs scrap approach',
        outcome: 'Significant annual savings achieved (Jun24-Jul25)',
        icon: '💰'
      },
      {
        title: 'Defect rate setting at all levels',
        details: 'Establishing standardized defect rate measurements across all device manufacturing levels to ensure consistent quality monitoring.',
        status: 'Under Progress',
        statusColor: '#f59e0b',
        statusBg: '#fff7ed',
        target: 'Define and implement defect tracking at all levels',
        icon: '📊'
      },
      {
        title: 'Critical and non-critical identification of components for RCA',
        details: 'Identifying critical and non-critical components to conduct Root Cause Analysis (RCA) of high defect rates and prioritize improvement efforts.',
        status: 'Under Progress',
        statusColor: '#3b82f6',
        statusBg: '#eff6ff',
        target: 'Complete component classification for RCA',
        icon: '🔍'
      }
    ]
  }

  const MilestoneCard = ({ milestone, index }) => (
    <div style={{
      background: '#ffffff',
      border: `2px solid ${milestone.statusColor}30`,
      borderRadius: '16px',
      padding: '24px',
      marginBottom: '16px',
      boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)',
      transition: 'all 0.3s ease',
      display: 'grid',
      gridTemplateColumns: '60px 1fr',
      gap: '20px',
      alignItems: 'start'
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 23, 42, 0.12)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 23, 42, 0.08)'; }}>
      {/* Left: Icon + Status */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <div style={{
          fontSize: '2.2em',
          background: milestone.statusBg,
          borderRadius: '14px',
          padding: '16px',
          border: `2px solid ${milestone.statusColor}40`,
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {milestone.icon}
        </div>
        <div style={{
          fontSize: '0.75em',
          fontWeight: '800',
          color: milestone.statusColor,
          background: milestone.statusBg,
          border: `1px solid ${milestone.statusColor}50`,
          padding: '6px 12px',
          borderRadius: '12px',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase'
        }}>
          {milestone.status}
        </div>
      </div>

      {/* Right: Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <div style={{
            fontSize: '1.1em',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '8px',
            lineHeight: '1.4'
          }}>
            {milestone.title}
          </div>
          <div style={{
            fontSize: '0.95em',
            color: '#475569',
            lineHeight: '1.6'
          }}>
            {milestone.details}
          </div>
        </div>

        {milestone.target && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9em',
            fontWeight: '700',
            color: '#0f172a',
            background: '#f8fafc',
            padding: '10px 14px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <span style={{ color: '#8b5cf6' }}>🎯</span> {milestone.target}
          </div>
        )}

        {milestone.outcome && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9em',
            fontWeight: '700',
            color: milestone.outcomeColor || '#10b981',
            background: '#ecfdf5',
            padding: '10px 14px',
            borderRadius: '12px',
            border: `1px solid ${milestone.outcomeColor || '#10b981'}40`
          }}>
            <span>🏆</span> {milestone.outcome}
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(
    <FullscreenShell 
      onClose={onClose} 
      title="SITE-III IPQA - Milestones Achieved" 
      accentColor="#8b5cf6"
    >
      <div style={{ padding: '24px', background: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* KPI Cards Section */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              fontSize: '1.3em',
              fontWeight: '900',
              color: '#0f172a',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span>📊</span> Key Performance Indicators
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '32px'
            }}>
              {kpiMetrics.map((metric, idx) => (
                <div key={idx} style={{
                  background: `linear-gradient(135deg, ${metric.bgColor}, ${metric.color}08)`,
                  border: `2px solid ${metric.color}40`,
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 10px 28px rgba(15, 23, 42, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                    <div style={{
                      fontSize: '1.05em',
                      fontWeight: '800',
                      color: '#0f172a',
                      lineHeight: '1.3'
                    }}>
                      {metric.title}
                    </div>
                    <div style={{
                      fontSize: '0.7em',
                      fontWeight: '800',
                      color: metric.color,
                      background: metric.bgColor,
                      border: `1px solid ${metric.color}50`,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap'
                    }}>
                      KPI
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '2.8em',
                      fontWeight: '900',
                      color: metric.color,
                      marginBottom: '4px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '2px'
                    }}>
                      {metric.displayMode === 'multiplier' ? (
                        <>
                          <span style={{ fontSize: '0.5em', fontWeight: '600', color: '#64748b' }}>Approximately</span>
                          <span>{metric.value}</span>
                        </>
                      ) : (
                        metric.value
                      )}
                    </div>
                    <div style={{
                      fontSize: '0.9em',
                      fontWeight: '700',
                      color: '#0f172a',
                      marginBottom: '12px'
                    }}>
                      {metric.unit}
                    </div>
                    {metric.actualAmount && (
                      <div style={{
                        fontSize: '0.85em',
                        fontWeight: '600',
                        color: '#64748b',
                        fontStyle: 'italic',
                        lineHeight: '1.4'
                      }}>
                        📌 {metric.actualAmount}
                      </div>
                    )}
                  </div>
                  <div style={{
                    fontSize: '0.85em',
                    color: '#475569',
                    lineHeight: '1.5',
                    paddingTop: '12px',
                    borderTop: `1px solid ${metric.color}30`
                  }}>
                    {metric.from && <div>From: <strong style={{ color: '#dc2626' }}>{metric.from}</strong></div>}
                    {metric.to && <div>To: <strong style={{ color: metric.toColor || metric.color }}>{metric.to}</strong></div>}
                    {metric.target && <div>Target: <strong style={{ color: '#10b981' }}>{metric.target}</strong></div>}
                    {metric.period && <div>Period: <strong>{metric.period}</strong></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cartridge Manufacturing Section */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              fontSize: '1.3em',
              fontWeight: '900',
              color: '#0f172a',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingBottom: '16px',
              borderBottom: '3px solid #3b82f6'
            }}>
              <span>🔬</span> Cartridge Manufacturing
            </div>

            <div>
              {milestonesData.cartridgeManufacturing.map((milestone, idx) => (
                <MilestoneCard key={idx} milestone={milestone} index={idx} />
              ))}
            </div>
          </div>

          {/* Device Manufacturing Section */}
          <div>
            <div style={{
              fontSize: '1.3em',
              fontWeight: '900',
              color: '#0f172a',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingBottom: '16px',
              borderBottom: '3px solid #10b981'
            }}>
              <span>🖥️</span> Device Manufacturing
            </div>

            <div>
              {milestonesData.deviceManufacturing.map((milestone, idx) => (
                <MilestoneCard key={idx} milestone={milestone} index={idx} />
              ))}
            </div>

            {/* Cost & Efficiency Summary */}
            <div style={{
              marginTop: '24px',
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              borderRadius: '16px',
              padding: '24px',
              border: '2px solid #f59e0b',
              boxShadow: '0 8px 20px rgba(245, 158, 11, 0.15)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ fontSize: '2.4em' }}>💡</div>
                <div>
                  <div style={{
                    fontSize: '1.05em',
                    fontWeight: '900',
                    color: '#92400e',
                    marginBottom: '8px'
                  }}>
                    Major Achievement: Substantial Annual Cost Savings
                  </div>
                  <div style={{
                    fontSize: '0.95em',
                    color: '#92400e',
                    lineHeight: '1.6'
                  }}>
                    Rework instead of scrap plus optimized transport from warehouse to IST cut rejection costs vs last year (Jun24-Jul25), delivering measurable financial benefits and proving the impact of standardized procedures and logistics discipline.
                  </div>
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
