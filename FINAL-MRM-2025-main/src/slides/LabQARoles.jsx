import React, { useState } from 'react'

const milestone = 'Successfully implemented LAB QA in all the sub divisions of QC (IQC/IPQC/FQC) across all the sites (I, III, V)'

const labQAResponsibilities = [
  'Responsible for effectively monitoring all the activities carried out in QC department as per SOP/STP',
  'To ensure GLP is followed strictly',
  'Ensure continuous improvement and a risk based approach is implemented in all QC procedures/processes',
  'Verification of QC documents and stability reports',
  'Responsible to investigate all the incident or failures reported in the QC department (SOP/QA/004). Ensure all appropriate correction shall be taken to avoid re-occurrence of the incidents',
  'Assisting in all CA/PA and root cause analysis',
  'Logbook authorization and verification',
  'Assisting in the investigation of OOS',
  'Handling of destruction',
  'Compliance to document and record control',
  'Share the calibration schedule planner and co-ordinate for on-site calibration as well',
  'Shall ensure calibration and validation of all the QC equipment as per schedule'
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

      {/* Main Grid - Responsibilities Left, KPIs Right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0px', paddingLeft: '0px', paddingRight: '0px', marginBottom: '0px', marginTop: '20px', flex: 1 }}>
        {/* Left: Lab QA Responsibilities */}
        <div style={{
          background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
          border: '0px solid #0ea5e940',
          borderRadius: '0px',
          padding: '20px',
          boxShadow: 'none',
          overflowY: 'auto',
          maxHeight: 'none',
          height: 'auto',
          flex: 1
        }}>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0369a1', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
            ✅ Lab QA Shall
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {labQAResponsibilities.map((resp, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                padding: '14px 16px',
                borderRadius: '8px',
                border: '2px solid #bae6fd',
                boxShadow: '0 1px 3px rgba(14,165,233,0.1)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f0f9ff'
                e.currentTarget.style.borderColor = '#0ea5e9'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(14,165,233,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff'
                e.currentTarget.style.borderColor = '#bae6fd'
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(14,165,233,0.1)'
              }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    fontSize: '1.85rem',
                    fontWeight: 900,
                    color: '#0ea5e9',
                    minWidth: 32,
                    textAlign: 'center'
                  }}>
                    {idx + 1}.
                  </div>
                  <div style={{
                    fontSize: '1.45rem',
                    color: '#111827',
                    fontWeight: 700,
                    lineHeight: 1.4
                  }}>
                    {resp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Additional KPIs - Site Cards */}
        <div style={{
          background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
          padding: '20px',
          overflowY: 'auto',
          flex: 1
        }}>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#92400e', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
            🎯 Additional KPIs Identified
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {siteKPIs.map((site) => {
              const isOpen = expandedSite === site.id
              return (
                <div key={site.id} style={{
                  background: '#ffffff',
                  border: `4px solid ${site.color}55`,
                  borderRadius: '14px',
                  padding: '18px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  flex: '1 1 30%',
                  minWidth: 260,
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  transform: isOpen ? 'translateY(-2px)' : 'translateY(0)'
                }}
                onClick={() => setExpandedSite(isOpen ? null : site.id)}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 18px rgba(0,0,0,0.12)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: isOpen ? 12 : 0 }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: site.color }}>{site.label}</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#475569', transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</div>
                  </div>

                  {isOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {site.items.length === 0 ? (
                        <div style={{
                          background: '#f8fafc',
                          border: `2px dashed ${site.color}55`,
                          borderRadius: '10px',
                          padding: '12px 14px',
                          color: '#475569',
                          fontWeight: 700,
                          textAlign: 'center'
                        }}>
                          No KPIs added yet for {site.label}.
                        </div>
                      ) : (
                        site.items.map((text, idx) => (
                          <div key={idx} style={{
                            background: '#fefce8',
                            border: `2px solid ${site.color}55`,
                            borderRadius: '10px',
                            padding: '12px 14px',
                            display: 'flex',
                            gap: 10
                          }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: site.color, minWidth: 28, textAlign: 'center' }}>{idx + 1}.</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', lineHeight: 1.4 }}>{text}</div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div style={{ fontSize: '1.2rem', color: '#92400e', fontWeight: 700, marginTop: 12, textAlign: 'center' }}>
            💡 Click a site to expand KPIs
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
      `}</style>
    </section>
  )
}
