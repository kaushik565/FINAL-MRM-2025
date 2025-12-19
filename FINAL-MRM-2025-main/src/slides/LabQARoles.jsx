import React, { useState } from 'react'

const milestone = 'Successfully implemented LAB QA in all the sub divisions of QC (IQC/IPQC/FQC) across all the sites (I, III, V)'

const labQAResponsibilities = [
  'Responsible to investigate all the incident or failures reported in the QC department (SOP/QA/004). Ensure all appropriate correction shall be taken to avoid re-occurrence of the incidents',
  'Ensure continuous improvement and a risk based approach is implemented in all QC procedures/processes',
  'Share the calibration schedule planner and co-ordinate for on-site calibration as well',
  'Shall ensure calibration and validation of all the QC equipment as per schedule',
  'Responsible for effectively monitoring all the activities carried out in QC department as per SOP/STP',
  'Verification of QC documents and stability reports',
  'To ensure GLP is followed strictly',
  'Assisting in all CA/PA and root cause analysis',
  'Logbook authorization and verification',
  'Assisting in the investigation of OOS',
  'Handling of destruction',
  'Compliance to document and record control'
]

const siteIIIItems = [
  'Monitor rejection rates at all levels (IQC/IPQC/FQC).',
  'Develop additional supplier process control procedures.',
  'Support the purchase department in vendor selection based on performance.',
  'Involve in the supplier audit.',
  'Implement product/process audit checklist as a part of supplier audit.',
  'Develop inhouse auditor competency by 25%.',
  'Implement OOT to identify the potential product quality issues.',
  'Do the process improvement at least one in a month.',
  'Support in the fulfillment of quality objectives.',
  'Implement OOT to identify the potential product quality issues.'
]

const siteKPIs = [
  { id: 'siteI', label: 'SITE I', color: '#0ea5e9', items: [] },
  { id: 'siteIII', label: 'SITE III', color: '#f97316', items: siteIIIItems },
  { id: 'siteV', label: 'SITE V', color: '#22c55e', items: [] }
]

export default function LabQARoles() {
  const [expandedSite, setExpandedSite] = useState(null)

  return (
    <section
      className="content-slide"
      data-state="lab-qa-roles"
      style={{
        paddingTop: '14px',
        paddingBottom: '14px',
        background: '#ffffff',
        color: '#0f172a',
        overflowY: 'auto',
        height: '100%',
        width: '100%',
        margin: 0,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}>
        <h2 style={{ fontSize: '1.5em', fontWeight: 900, color: '#111827', marginBottom: '0px', marginTop: 0, whiteSpace: 'nowrap' }}>
          🔬 Monitoring and Measurement of Product - Lab QA
        </h2>
      </div>

      {/* Milestone Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        padding: '24px 40px',
        margin: '0px',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(16,185,129,0.4)',
        borderBottom: '4px solid #047857'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 8 }}>
          <span style={{ fontSize: '2.8rem' }}>🎯</span>
          <span style={{ fontSize: '2.1rem', fontWeight: 900, color: '#ffffff' }}>MILESTONE ACHIEVED</span>
          <span style={{ fontSize: '2.8rem' }}>✨</span>
        </div>
        <div style={{
          fontSize: '1.95rem',
          fontWeight: 700,
          color: '#fff7cc',
          lineHeight: 1.4,
          maxWidth: 'none',
          margin: '0 auto',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          letterSpacing: '0.5px'
        }}>
          {milestone}
        </div>
      </div>

      {/* Main Content - Redesigned as Cards Grid */}
      <div style={{ padding: '0 20px', flex: 1, overflowY: 'auto' }}>
        
        {/* Responsibilities Section with 3-Column Grid */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 900, 
            background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
            <span style={{ WebkitTextFillColor: '#0ea5e9' }}>✅</span>
            Lab QA Core Responsibilities
          </div>
          
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginBottom: '20px'
          }}>
            {labQAResponsibilities.map((resp, idx) => {
              const colors = ['#1e40af', '#475569']
              const borderColors = ['#93c5fd', '#cbd5e1']
              const gradients = [
                'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',  // Blue
                'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'   // Slate
              ]
              
              return (
                <div key={idx} style={{
                  background: gradients[idx % 2],
                  padding: '16px 24px',
                  borderRadius: '12px',
                  border: `3px solid ${borderColors[idx % 2]}`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  {/* Number Badge */}
                  <div style={{
                    width: '55px',
                    height: '55px',
                    background: colors[idx % 2],
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.7rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </div>
                  
                  {/* Icon */}
                  <div style={{
                    fontSize: '3rem',
                    flexShrink: 0
                  }}>
                    {['🔍', '🛡️', '📈', '📋', '🚨', '🔧', '📖', '🧪', '🗑️', '📁', '📅', '⚙️'][idx]}
                  </div>
                  
                  {/* Content */}
                  <div style={{
                    fontSize: '1.55rem',
                    color: '#111827',
                    fontWeight: 700,
                    lineHeight: 1.5,
                    flex: 1
                  }}>
                    {resp}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* KPIs Section with Modern Cards */}
        <div>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 900,
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
            <span style={{ WebkitTextFillColor: '#f59e0b' }}>🎯</span>
            Site-Specific Additional KPIs
          </div>

          <div style={{ display: 'flex', gap: '18px', marginBottom: '16px' }}>
            {siteKPIs.map((site) => {
              const isOpen = expandedSite === site.id
              return (
                <div key={site.id} style={{
                  flex: 1,
                  background: `linear-gradient(135deg, ${site.color}15 0%, ${site.color}25 100%)`,
                  border: `4px solid ${site.color}`,
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: isOpen ? `0 12px 32px ${site.color}40` : `0 4px 12px ${site.color}20`
                }}
                onClick={() => setExpandedSite(isOpen ? null : site.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = `0 16px 40px ${site.color}50`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = isOpen ? `0 12px 32px ${site.color}40` : `0 4px 12px ${site.color}20`
                }}>
                  {/* Header */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: isOpen ? 16 : 0
                  }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: site.color,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        boxShadow: `0 4px 12px ${site.color}40`
                      }}>
                        {site.id === 'siteI' ? '🏭' : site.id === 'siteIII' ? '🏗️' : '🏢'}
                      </div>
                      <div>
                        <div style={{ 
                          fontSize: '1.8rem', 
                          fontWeight: 900, 
                          color: site.color 
                        }}>
                          {site.label}
                        </div>
                        <div style={{
                          fontSize: '1.1rem',
                          color: '#64748b',
                          fontWeight: 600
                        }}>
                          {site.items.length} KPI{site.items.length !== 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '2rem', 
                      fontWeight: 900, 
                      color: site.color,
                      transition: 'transform 0.3s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      ▼
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 12,
                      animation: 'slideDown 0.3s ease-out'
                    }}>
                      {site.items.length === 0 ? (
                        <div style={{
                          background: '#ffffff',
                          border: `3px dashed ${site.color}60`,
                          borderRadius: '12px',
                          padding: '20px',
                          color: '#64748b',
                          fontWeight: 700,
                          fontSize: '1.3rem',
                          textAlign: 'center'
                        }}>
                          📌 No additional KPIs defined yet for {site.label}
                        </div>
                      ) : (
                        site.items.map((text, idx) => (
                          <div key={idx} style={{
                            background: '#ffffff',
                            border: `2px solid ${site.color}60`,
                            borderRadius: '10px',
                            padding: '14px',
                            display: 'flex',
                            gap: 12,
                            alignItems: 'flex-start',
                            boxShadow: `0 2px 8px ${site.color}20`,
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${site.color}10`
                            e.currentTarget.style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff'
                            e.currentTarget.style.transform = 'translateX(0)'
                          }}>
                            <div style={{ 
                              fontSize: '1.4rem', 
                              fontWeight: 900, 
                              color: site.color,
                              minWidth: 30,
                              height: 30,
                              borderRadius: '50%',
                              background: `${site.color}20`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {idx + 1}
                            </div>
                            <div style={{ 
                              fontSize: '1.25rem', 
                              fontWeight: 700, 
                              color: '#111827', 
                              lineHeight: 1.5,
                              flex: 1
                            }}>
                              {text}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div style={{ 
            fontSize: '1.3rem', 
            color: '#64748b', 
            fontWeight: 700, 
            textAlign: 'center',
            padding: '12px',
            background: '#f8fafc',
            borderRadius: '10px',
            border: '2px dashed #cbd5e1'
          }}>
            💡 Click on any site card above to view their specific KPIs
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
