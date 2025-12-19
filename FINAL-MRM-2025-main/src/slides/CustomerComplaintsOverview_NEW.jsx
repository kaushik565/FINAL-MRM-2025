import React, { useMemo, useState } from 'react'
import {
  extractionComplaints,
  pcrComplaints,
  complaintsData,
  buildMetrics,
  palette,
  formatPercent,
  buildPieStyle
} from './CustomerComplaintsOverview'

export default function CustomerComplaintsOverviewNew() {
  const [activeTab, setActiveTab] = useState('extraction')

  const metricsOverall = useMemo(() => buildMetrics(complaintsData), [])
  const metricsExtraction = useMemo(() => buildMetrics(extractionComplaints), [])
  const metricsPCR = useMemo(() => buildMetrics(pcrComplaints), [])

  const currentMetrics = activeTab === 'extraction' ? metricsExtraction : metricsPCR
  const currentData = activeTab === 'extraction' ? extractionComplaints : pcrComplaints
  const currentColor = activeTab === 'extraction' ? '#0ea5e9' : '#8b5cf6'
  const currentBg = activeTab === 'extraction' ? '#e0f2fe' : '#f3e8ff'

  const rootCauseTotal = Object.values(currentMetrics.rootCauseTypes).reduce((a, b) => a + b, 0)
  const rootCauseEntries = Object.entries(currentMetrics.rootCauseTypes).sort((a, b) => b[1] - a[1])
  const maxIssue = Math.max(...currentMetrics.topIssues.map(([, c]) => c), 0)

  return (
    <section
      className="content-slide"
      data-state="customer-complaints-overview"
      style={{
        paddingTop: '16px',
        paddingBottom: '16px',
        background: '#ffffff',
        color: '#0f172a',
        overflowY: 'auto',
        height: '100%'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '14px', paddingX: '24px' }}>
        <h2 style={{ fontSize: '2.6em', fontWeight: 900, color: '#111827', marginBottom: '2px', marginTop: 0 }}>
          Customer Complaints Intelligence
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#64748b', marginTop: 0, marginBottom: '8px' }}>
          Assembly & PCR segment analysis
        </p>
      </div>

      {/* Key Stats - 3 Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px', paddingX: '24px' }}>
        {[
          { label: '📊 Total', value: metricsOverall.total, color: '#ef4444', bg: '#fef2f2' },
          { label: '🔧 Devices', value: metricsOverall.uniqueDevices, color: '#0ea5e9', bg: '#e0f2fe' },
          { label: '📋 IDs', value: metricsOverall.uniqueComplaints, color: '#8b5cf6', bg: '#f3e8ff' }
        ].map((card, idx) => (
          <div key={idx} style={{
            background: card.bg,
            border: `2px solid ${card.color}30`,
            borderRadius: '10px',
            padding: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
          }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginBottom: 4 }}>{card.label}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 950, color: card.color }}>{card.value}</div>
          </div>
        ))}
      </div>

      {/* Segment Tabs */}
      <div style={{ display: 'flex', gap: 6, marginBottom: '12px', paddingX: '24px' }}>
        {[
          { id: 'extraction', label: '⚙️ Assembly Device', color: '#0ea5e9' },
          { id: 'pcr', label: '🧬 PCR', color: '#8b5cf6' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '8px',
              border: `2px solid ${activeTab === tab.id ? tab.color : '#e5e7eb'}`,
              background: activeTab === tab.id ? `${tab.color}15` : '#ffffff',
              color: activeTab === tab.id ? tab.color : '#64748b',
              fontWeight: activeTab === tab.id ? 900 : 700,
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '0.85rem'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Grid - Issues Left, Components Right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: '10px', marginBottom: '12px', paddingX: '24px' }}>
        {/* Left: Top Issues & Root Causes (stacked) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
          {/* Top Issues */}
          <div style={{
            background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
            border: '2px solid #ef444430',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: '0 3px 10px rgba(239,68,68,0.06)'
          }}>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#991b1b', marginBottom: 8 }}>🔴 Top Issues</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {currentMetrics.topIssues.map((issue, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  border: '1px solid #fecaca',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 700, flex: 1 }}>{issue[0]}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ef4444' }}>{issue[1]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Root Causes */}
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
            border: '2px solid #f59e0b40',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: '0 3px 10px rgba(245,158,11,0.06)'
          }}>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#92400e', marginBottom: 8 }}>🔍 Root Causes</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {rootCauseEntries.map((cause, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  border: '1px solid #fcd34d',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 700, flex: 1 }}>{cause[0]}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#f59e0b' }}>{cause[1]} ({formatPercent(cause[1], rootCauseTotal)}%)</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Pie & Components */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
          {/* Pie */}
          <div style={{
            background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
            border: '2px solid #0ea5e940',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: '0 3px 10px rgba(14,165,233,0.06)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#0369a1', marginBottom: 10 }}>Distribution</div>
            <div style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: buildPieStyle(rootCauseEntries),
              border: '3px solid #bae6fd',
              margin: '0 auto'
            }} />
          </div>

          {/* Components - Compact Grid */}
          <div style={{
            background: 'linear-gradient(135deg, #e9d5ff, #f3e8ff)',
            border: '2px solid #8b5cf640',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: '0 3px 10px rgba(139,92,246,0.06)'
          }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#6b21a8', marginBottom: 8 }}>Components</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
              {Object.entries(currentMetrics.componentIssues)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6)
                .map((comp, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    padding: '8px',
                    borderRadius: '8px',
                    border: '1px solid #d8b4fe',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#111827', fontWeight: 700 }}>{comp[0]}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#8b5cf6' }}>{comp[1]}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Table - Compact */}
      <div style={{
        background: `linear-gradient(135deg, ${currentBg}, ${currentBg}99)`,
        border: `3px solid ${currentColor}40`,
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '12px',
        marginX: '24px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.04)'
      }}>
        <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#0369a1', marginBottom: 8 }}>
          📋 {currentData.length} Complaints
        </div>
        <div style={{ overflowX: 'auto', maxHeight: '350px', overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: currentColor, color: '#fff', position: 'sticky', top: 0 }}>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontWeight: 900, fontSize: '0.8rem' }}>ID</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontWeight: 900, fontSize: '0.8rem' }}>Serial</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontWeight: 900, fontSize: '0.8rem' }}>Issue</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontWeight: 900, fontSize: '0.8rem' }}>Root Cause</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((complaint, idx) => (
                <tr key={idx} style={{
                  background: idx % 2 === 0 ? '#ffffff' : currentBg,
                  borderBottom: '1px solid #bae6fd',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#dbeafe' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = idx % 2 === 0 ? '#ffffff' : currentBg }}>
                  <td style={{ padding: '7px 10px', fontWeight: 700, color: '#0369a1', fontSize: '0.8rem' }}>{complaint.id}</td>
                  <td style={{ padding: '7px 10px', color: '#111827', fontWeight: 600, fontSize: '0.8rem' }}>{complaint.serial}</td>
                  <td style={{ padding: '7px 10px', color: '#111827', fontSize: '0.8rem' }}>{complaint.issue}</td>
                  <td style={{ padding: '7px 10px', color: '#475569', fontSize: '0.75rem' }}>{complaint.rootCause}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}
