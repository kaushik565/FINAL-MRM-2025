import React, { useMemo } from 'react'
import {
  extractionComplaints,
  pcrComplaints,
  complaintsData,
  buildMetrics,
  palette,
  formatPercent,
  buildPieStyle
} from '../slides/CustomerComplaintsOverview'

const glass = {
  background: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
  backdropFilter: 'blur(14px)',
  borderRadius: '18px'
}

const cardTitle = {
  fontSize: '1rem',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: '#cbd5e1',
  fontWeight: 800,
  marginBottom: 6
}

const numberStyle = {
  color: '#e0f2fe',
  fontSize: '2.6rem',
  fontWeight: 900,
  letterSpacing: '-0.02em'
}

const Bar = ({ label, value, max, color }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <div style={{ color: '#e2e8f0', fontWeight: 800 }}>{label}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 12, background: 'rgba(255,255,255,0.08)', borderRadius: 999, overflow: 'hidden' }}>
        <div style={{ width: `${max ? (value / max) * 100 : 0}%`, height: '100%', background: color, borderRadius: 999 }} />
      </div>
      <div style={{ minWidth: 46, textAlign: 'right', color: color, fontWeight: 900 }}>{value}</div>
    </div>
  </div>
)

const SectionBlock = ({ title, metrics, color }) => {
  const issues = metrics.topIssues
  const maxIssue = Math.max(...issues.map(([, c]) => c), 0)
  const rootEntries = Object.entries(metrics.rootCauseTypes).sort((a, b) => b[1] - a[1])
  const rootTotal = rootEntries.reduce((acc, [, c]) => acc + c, 0)

  return (
    <div style={{ ...glass, padding: '20px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 18, borderColor: `${color}55` }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ color: color, fontSize: '1.4rem', fontWeight: 900 }}>{title}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={cardTitle}>Top Issues (count)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {issues.map((issue, idx) => (
              <Bar key={idx} label={issue[0]} value={issue[1]} max={maxIssue} color={palette[idx % palette.length]} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ ...glass, padding: '16px', borderColor: `${color}55` }}>
        <div style={{ ...cardTitle, marginBottom: 10 }}>Root Causes</div>
        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', alignItems: 'center', gap: 12 }}>
          <div
            style={{ width: 110, height: 110, borderRadius: '50%', background: buildPieStyle(rootEntries), border: '3px solid rgba(255,255,255,0.16)' }}
            title={rootEntries.map((entry, rIdx) => `${entry[0]}: ${entry[1]} (${formatPercent(entry[1], rootTotal)}%)`).join(' | ')}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {rootEntries.map((entry, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '8px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 3, background: palette[idx % palette.length] }} />
                  <span style={{ color: '#e5e7eb', fontWeight: 800 }}>{entry[0]}</span>
                </div>
                <div style={{ color: color, fontWeight: 900 }}>{entry[1]} ({formatPercent(entry[1], rootTotal)}%)</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ComponentBlock = ({ label, entries, color }) => (
  <div style={{ ...glass, padding: '16px', borderColor: `${color}55` }}>
    <div style={{ color: color, fontSize: '1.1rem', fontWeight: 900, marginBottom: 10 }}>{label}</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
      {entries.map((item, idx) => (
        <div key={idx} style={{ padding: '12px', borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ color: '#e2e8f0', fontWeight: 800, marginBottom: 6 }}>{item[0]}</div>
          <div style={{ color: color, fontWeight: 900, fontSize: '1.4rem' }}>{item[1]}</div>
        </div>
      ))}
    </div>
  </div>
)

export default function ComplaintsShowcase() {
  const metricsOverall = useMemo(() => buildMetrics(complaintsData), [])
  const metricsExtraction = useMemo(() => buildMetrics(extractionComplaints), [])
  const metricsPCR = useMemo(() => buildMetrics(pcrComplaints), [])

  const componentExtraction = useMemo(
    () => Object.entries(metricsExtraction.componentIssues).sort((a, b) => b[1] - a[1]),
    [metricsExtraction]
  )
  const componentPCR = useMemo(
    () => Object.entries(metricsPCR.componentIssues).sort((a, b) => b[1] - a[1]),
    [metricsPCR]
  )

  const idDistribution = Object.entries(metricsOverall.complaintIdDist).sort((a, b) => b[1] - a[1])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.2), transparent 30%), radial-gradient(circle at 80% 0%, rgba(168,85,247,0.2), transparent 28%), linear-gradient(135deg, #0b1224, #0f172a 40%, #0b1224)',
      color: '#e2e8f0',
      padding: '32px 24px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 30%)' }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 22 }}>
        {/* Hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 18, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(255,255,255,0.06)', borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)', width: 'fit-content' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 0 6px rgba(34,211,238,0.15)' }} />
              <span style={{ fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#cbd5e1' }}>Liveboard • Customer Complaints</span>
            </div>
            <h1 style={{ margin: 0, fontSize: '3rem', letterSpacing: '-0.03em', color: '#f8fafc' }}>Assembly vs PCR — Fullscreen Experience</h1>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: '1.1rem', maxWidth: 760 }}>
              Deep-dive into complaint patterns across Assembly of Extraction Device and Two/Four Bay PCR. Visual cards, bars, and pies tuned for a single-screen executive read.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[{ label: 'Overall', value: metricsOverall.total, color: '#22d3ee' }, { label: 'Assembly', value: metricsExtraction.total, color: '#38bdf8' }, { label: 'PCR', value: metricsPCR.total, color: '#a855f7' }].map((pill, idx) => (
                <div key={idx} style={{ padding: '10px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: pill.color, fontWeight: 900 }}>
                  {pill.label}: {pill.value}
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...glass, padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
            {[{ label: 'Unique Complaint IDs', value: metricsOverall.uniqueComplaints }, { label: 'Unique Devices', value: metricsOverall.uniqueDevices }, { label: 'Segments', value: 2 }].map((stat, idx) => (
              <div key={idx} style={{ padding: '12px', borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={cardTitle}>{stat.label}</div>
                <div style={numberStyle}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Metric cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          {[{
            title: 'Overall Coverage',
            value: `${metricsOverall.total} Complaints`,
            detail: `${metricsOverall.uniqueComplaints} IDs • ${metricsOverall.uniqueDevices} devices`,
            color: '#22d3ee'
          }, {
            title: 'Assembly Focus',
            value: `${metricsExtraction.total} Cases`,
            detail: `${metricsExtraction.uniqueComplaints} IDs • ${metricsExtraction.uniqueDevices} devices`,
            color: '#38bdf8'
          }, {
            title: 'PCR Focus',
            value: `${metricsPCR.total} Cases`,
            detail: `${metricsPCR.uniqueComplaints} IDs • ${metricsPCR.uniqueDevices} devices`,
            color: '#a855f7'
          }].map((item, idx) => (
            <div key={idx} style={{ ...glass, padding: '16px', borderColor: `${item.color}55` }}>
              <div style={cardTitle}>{item.title}</div>
              <div style={{ color: item.color, fontSize: '2rem', fontWeight: 900 }}>{item.value}</div>
              <div style={{ color: '#cbd5e1', fontWeight: 700 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        {/* Sections sequential */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionBlock title="Assembly of Extraction Device" metrics={metricsExtraction} color="#38bdf8" />
          <SectionBlock title="Two Bay & Four Bay PCR" metrics={metricsPCR} color="#a855f7" />
        </div>

        {/* Components / Parts */}
        <div style={{ ...glass, padding: '18px', borderColor: '#22d3ee55', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ ...cardTitle, fontSize: '1.2rem', color: '#e2e8f0' }}>Components / Parts — Impact</div>
          <ComponentBlock label="Assembly of Extraction Device" entries={componentExtraction} color="#38bdf8" />
          <ComponentBlock label="Two/Four Bay PCR" entries={componentPCR} color="#a855f7" />
        </div>

        {/* Complaint IDs */}
        <div style={{ ...glass, padding: '18px', borderColor: '#a855f755', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ ...cardTitle, fontSize: '1.2rem', color: '#e2e8f0' }}>Complaint IDs Distribution</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
            {idDistribution.map((row, idx) => (
              <div key={idx} style={{ padding: '12px', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                <div style={{ color: '#cbd5e1', fontWeight: 800, marginBottom: 6 }}>{row[0]}</div>
                <div style={{ color: '#a855f7', fontWeight: 900, fontSize: '1.8rem' }}>{row[1]}</div>
                <div style={{ color: '#94a3b8', fontWeight: 700 }}>{formatPercent(row[1], metricsOverall.total)}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
