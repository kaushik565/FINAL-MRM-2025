import React, { useState } from 'react'

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

const additionalKPIs = [
  { id: 1, title: 'Monitor Rejection Rates', desc: 'Monitor rejection rates at all levels (IQC/IPQC/FQC)' },
  { id: 2, title: 'Supplier Process Control', desc: 'Develop additional supplier process control procedures' },
  { id: 3, title: 'Vendor Selection Support', desc: 'Support the purchase department in vendor selection based on performance' },
  { id: 4, title: 'Supplier Audits', desc: 'Involve in the supplier audit' },
  { id: 5, title: 'Audit Checklist', desc: 'Implement product/process audit checklist as a part of supplier audit' },
  { id: 6, title: 'Auditor Competency', desc: 'Develop in-house auditor competency by 25%' },
  { id: 7, title: 'OOT Implementation', desc: 'Implement OOT to identify the potential product quality issues' },
  { id: 8, title: 'Process Improvement', desc: 'Do the process improvement at least one in a month' },
  { id: 9, title: 'Quality Objectives', desc: 'Support in the fulfillment of quality objectives' },
  { id: 10, title: 'Potential Issues', desc: 'Implement OOT to identify the potential product quality issues' }
]

export default function LabQARoles() {
  const [expandedKPI, setExpandedKPI] = useState(null)

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
        height: '100%'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '20px', paddingX: '20px' }}>
        <h2 style={{ fontSize: '2.6em', fontWeight: 900, color: '#111827', marginBottom: '0px', marginTop: 0 }}>
          🔬 Lab QA: Key Roles & Responsibilities
        </h2>
        <p style={{ fontSize: '1.3rem', color: '#64748b', marginTop: '4px', marginBottom: '0px' }}>
          QC Department Oversight & Compliance Excellence
        </p>
      </div>

      {/* Main Grid - Responsibilities Left, KPIs Right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '12px', paddingX: '20px', marginBottom: '14px' }}>
        {/* Left: Lab QA Responsibilities */}
        <div style={{
          background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
          border: '3px solid #0ea5e940',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 8px rgba(14,165,233,0.05)',
          overflowY: 'auto',
          maxHeight: '70vh'
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

        {/* Right: Additional KPIs - Expandable Cards */}
        <div style={{
          background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
          border: '3px solid #f59e0b40',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 8px rgba(245,158,11,0.05)',
          overflowY: 'auto',
          maxHeight: '70vh'
        }}>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#92400e', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
            🎯 Additional KPIs
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            {additionalKPIs.map((kpi) => (
              <div
                key={kpi.id}
                onClick={() => setExpandedKPI(expandedKPI === kpi.id ? null : kpi.id)}
                style={{
                  background: '#ffffff',
                  padding: '16px',
                  borderRadius: '10px',
                  border: '3px solid #fcd34d',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 2px 6px rgba(245,158,11,0.1)',
                  transform: expandedKPI === kpi.id ? 'scale(1.02)' : 'scale(1)',
                  minHeight: expandedKPI === kpi.id ? 'auto' : '100px',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(245,158,11,0.2)'
                  e.currentTarget.style.borderColor = '#f59e0b'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(245,158,11,0.1)'
                  e.currentTarget.style.borderColor = '#fcd34d'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: expandedKPI === kpi.id ? 12 : 0
                }}>
                  <div style={{
                    fontSize: '1.6rem',
                    fontWeight: 900,
                    color: '#92400e',
                    flex: 1
                  }}>
                    {kpi.id}. {kpi.title}
                  </div>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    color: '#f59e0b',
                    transition: 'transform 0.3s',
                    transform: expandedKPI === kpi.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    marginLeft: 8
                  }}>
                    ▼
                  </div>
                </div>

                {expandedKPI === kpi.id && (
                  <div style={{
                    fontSize: '1.3rem',
                    color: '#64748b',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    paddingTop: 12,
                    borderTop: '2px solid #fecaca',
                    animation: 'fadeIn 0.3s ease-in'
                  }}>
                    {kpi.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ fontSize: '1.2rem', color: '#92400e', fontWeight: 700, marginTop: 12, textAlign: 'center' }}>
            💡 Click cards to expand details
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
