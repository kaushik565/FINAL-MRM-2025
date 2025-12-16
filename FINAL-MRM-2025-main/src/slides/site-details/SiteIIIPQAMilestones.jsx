import { createPortal } from 'react-dom'
import { FullscreenShell } from '../../utils/modalHelpers'

export default function SiteIIIPQAMilestones({ onClose }) {
  const milestonesData = {
    cartridgeManufacturing: [
      {
        title: 'Reduced rejection from 4.5% to 2.5%',
        status: 'Completed',
        statusColor: '#10b981',
        statusBg: '#ecfdf5',
        icon: '✅',
        details: 'Successfully reduced cartridge rejection rate by 55% through IPQA process improvements and defect prevention'
      },
      {
        title: 'Defined defect rates at all levels in cartridge production',
        status: 'Completed',
        statusColor: '#10b981',
        statusBg: '#ecfdf5',
        icon: '✅',
        details: 'Established baseline defect metrics for Inprocess and FQC stages with clear acceptance criteria'
      },
      {
        title: 'Defect rate (Aug24-Jun25) at Inprocess 4.5%',
        status: 'In Progress',
        statusColor: '#f59e0b',
        statusBg: '#fffbeb',
        icon: '⏳',
        target: 'Target ≤ 4%',
        details: 'Currently monitoring inprocess defects with corrective actions underway to meet 4% target'
      },
      {
        title: 'Achieved 2.7% rejection for Jun-Nov',
        status: 'Under Progress',
        statusColor: '#f59e0b',
        statusBg: '#fffbeb',
        icon: '⏳',
        details: 'FQC stage rejection rate trending below initial target; continued monitoring and optimization in progress'
      },
      {
        title: 'Defect rate (Apr-July) at FQC 1.7%',
        status: 'Under Progress',
        statusColor: '#f59e0b',
        statusBg: '#fffbeb',
        icon: '⏳',
        target: 'Target ≤ 1.0%',
        details: 'FQC defects tracking well; efforts focus on achieving ≤1.0% target through enhanced inspection protocols'
      },
      {
        title: 'Achieved 1.5% for July-Nov',
        status: 'Under Progress',
        statusColor: '#f59e0b',
        statusBg: '#fffbeb',
        icon: '⏳',
        details: 'Recent period shows 1.5% defect rate; continued focus on reaching 1.0% target'
      }
    ],
    deviceManufacturing: [
      {
        title: 'Defined rework procedure for Duo and Quatro casing',
        status: 'Completed',
        statusColor: '#10b981',
        statusBg: '#ecfdf5',
        icon: '✅',
        details: 'Standardized rework procedures established for both Duo and Quatro device casings with documented SOP'
      },
      {
        title: 'Optimized transportation method from warehouse to IST',
        status: 'Completed',
        statusColor: '#10b981',
        statusBg: '#ecfdf5',
        icon: '✅',
        outcome: 'Saving a cost of 20 lakhs as compared to last year rejections (Jun24-July25)',
        outcomeColor: '#10b981',
        details: 'Logistics optimization resulted in significant cost savings and reduced damage-related rejections'
      },
      {
        title: 'Defect rate setting at all levels',
        status: 'Under Progress',
        statusColor: '#f59e0b',
        statusBg: '#fffbeb',
        icon: '⏳',
        details: 'Establishing baseline defect acceptance criteria across all device manufacturing stages'
      },
      {
        title: 'Critical and non-critical identification of components for RCA of high defect rates',
        status: 'Under Progress',
        statusColor: '#f59e0b',
        statusBg: '#fffbeb',
        icon: '⏳',
        details: 'Root cause analysis framework being developed to identify critical components driving defect rates'
      }
    ]
  }

  const kpiMetrics = [
    {
      title: 'Cartridge Rejection Reduction',
      value: '55%',
      unit: 'Improvement',
      from: '4.5%',
      to: '2.5%',
      color: '#10b981',
      bgColor: '#ecfdf5',
      icon: '📉'
    },
    {
      title: 'FQC Defect Achievement',
      value: '1.5%',
      unit: 'Current Rate',
      target: '1.0%',
      color: '#3b82f6',
      bgColor: '#eff6ff',
      icon: '🎯'
    },
    {
      title: 'Cost Savings',
      value: '20 Lakhs',
      unit: 'Annual Savings',
      period: 'Jun24-Jul25',
      color: '#f59e0b',
      bgColor: '#fffbeb',
      icon: '💰'
    },
    {
      title: 'Inprocess Target',
      value: '4.5%',
      unit: 'Current Rate',
      target: '≤ 4%',
      color: '#8b5cf6',
      bgColor: '#faf5ff',
      icon: '📊'
    }
  ]

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
      alignItems: 'start',
      ':hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)' }
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
                      fontSize: '2.2em'
                    }}>
                      {metric.icon}
                    </div>
                    <div style={{
                      fontSize: '0.7em',
                      fontWeight: '800',
                      color: metric.color,
                      background: metric.bgColor,
                      border: `1px solid ${metric.color}50`,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      textTransform: 'uppercase'
                    }}>
                      KPI
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '2.8em',
                      fontWeight: '900',
                      color: metric.color,
                      marginBottom: '4px'
                    }}>
                      {metric.value}
                    </div>
                    <div style={{
                      fontSize: '0.9em',
                      fontWeight: '700',
                      color: '#0f172a',
                      marginBottom: '12px'
                    }}>
                      {metric.unit}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.85em',
                    color: '#475569',
                    lineHeight: '1.5',
                    paddingTop: '12px',
                    borderTop: `1px solid ${metric.color}30`
                  }}>
                    {metric.from && <div>From: <strong style={{ color: '#dc2626' }}>{metric.from}</strong></div>}
                    {metric.to && <div>To: <strong style={{ color: metric.color }}>{metric.to}</strong></div>}
                    {metric.target && <div>Target: <strong style={{ color: metric.color }}>{metric.target}</strong></div>}
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

            {/* Cartridge Progress Indicators */}
            <div style={{
              marginTop: '24px',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)'
            }}>
              <div style={{
                fontSize: '1em',
                fontWeight: '800',
                color: '#0f172a',
                marginBottom: '20px'
              }}>
                📈 Defect Rate Progress
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px'
              }}>
                {[
                  { stage: 'Inprocess (Aug24-Jun25)', current: '4.5%', target: '≤ 4%', progress: 89 },
                  { stage: 'FQC (Apr-Jul)', current: '1.7%', target: '≤ 1.0%', progress: 59 },
                  { stage: 'FQC (Jul-Nov)', current: '1.5%', target: '≤ 1.0%', progress: 67 }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    padding: '16px',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      fontSize: '0.85em',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '8px'
                    }}>
                      {item.stage}
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px'
                    }}>
                      <span style={{ fontSize: '0.9em', fontWeight: '700', color: '#3b82f6' }}>
                        Current: {item.current}
                      </span>
                      <span style={{ fontSize: '0.9em', fontWeight: '700', color: '#10b981' }}>
                        Target: {item.target}
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: '#e2e8f0',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${item.progress}%`,
                        background: `linear-gradient(90deg, #3b82f6, #0ea5e9)`,
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
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
                    Major Achievement: 20 Lakhs Annual Savings
                  </div>
                  <div style={{
                    fontSize: '0.95em',
                    color: '#92400e',
                    lineHeight: '1.6'
                  }}>
                    Transportation optimization from warehouse to IST reduced rejection costs compared to previous year (Jun24-Jul25). This efficiency gain demonstrates the value of standardized procedures and optimized logistics.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Summary */}
          <div style={{
            marginTop: '48px',
            padding: '24px',
            background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
            borderRadius: '16px',
            border: '2px solid #6366f1',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '1.1em',
              fontWeight: '900',
              color: '#4338ca',
              marginBottom: '12px'
            }}>
              🎯 Continuous Excellence
            </div>
            <div style={{
              fontSize: '0.95em',
              color: '#4338ca',
              lineHeight: '1.6'
            }}>
              Through structured IPQA processes, monthly management huddles, and continuous defect analysis, SITE-III is driving measurable improvements across both cartridge and device manufacturing with clear targets and documented outcomes.
            </div>
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  )
}
