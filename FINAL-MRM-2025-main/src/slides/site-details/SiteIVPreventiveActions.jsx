import { Bar } from 'react-chartjs-2'

export default function SiteIVPreventiveActions() {
  // Site IV Preventive Action Data
  // Apr-June 2025: 1 PA initiated
  // No improvement data available yet (need comparison period)
  
  const period = 'Apr-Jun 2025'
  const totalPA = 1
  const avgProcessingTime = 0 // No data available

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Key Performance Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #f59e0b',
          boxShadow: '0 4px 12px rgba(245, 158, 11, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#92400e', fontWeight: '600', marginBottom: '8px' }}>Total PA Records</div>
          <div style={{ fontSize: '2em', fontWeight: '800', color: '#f59e0b' }}>{totalPA}</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>{period}</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #3b82f6',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#1e40af', fontWeight: '600', marginBottom: '8px' }}>Processing Status</div>
          <div style={{ fontSize: '1.5em', fontWeight: '800', color: '#3b82f6' }}>Monitoring</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>Collecting baseline data</div>
        </div>
      </div>

      {/* PA Volume Chart */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e7eb',
        height: '320px',
        marginBottom: '32px'
      }}>
        <h4 style={{ margin: '0 0 16px 0', color: '#0f172a', fontWeight: '700', fontSize: '1em' }}>
          📊 Preventive Action Volume
        </h4>
        <div style={{ height: '240px', width: '100%' }}>
          <Bar
            data={{
              labels: [period],
              datasets: [
                {
                  label: 'Number of PAs',
                  data: [totalPA],
                  backgroundColor: 'rgba(245, 158, 11, 0.85)',
                  borderColor: '#f59e0b',
                  borderWidth: 2,
                  borderRadius: 6
                }
              ]
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: true, position: 'bottom', labels: { color: '#0f172a', font: { size: 11, weight: '600' } } },
                tooltip: { backgroundColor: 'rgba(15, 23, 42, 0.95)', padding: 12, titleFont: { size: 13, weight: '600' }, bodyFont: { size: 12 } }
              },
              scales: {
                y: { beginAtZero: true, ticks: { color: '#64748b', font: { size: 11 }, stepSize: 1 }, grid: { color: '#f1f5f9' } },
                x: { ticks: { color: '#64748b', font: { size: 11 } }, grid: { display: false } }
              }
            }}
          />
        </div>
      </div>

      {/* Current Status Table */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e7eb'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#0f172a', fontWeight: '700', fontSize: '1.1em' }}>
          📋 Current Status
        </h4>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
              <th style={{ padding: '14px 16px', textAlign: 'left', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Period</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Total PAs</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '14px 16px', color: '#334155', fontWeight: '600', fontSize: '0.9em' }}>{period}</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.95em' }}>{totalPA}</td>
              <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8em',
                  fontWeight: '600',
                  background: '#dbeafe',
                  color: '#1e40af'
                }}>
                  📊 Baseline Period
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Information Notice */}
      <div style={{
        marginTop: '24px',
        padding: '20px',
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        borderRadius: '12px',
        border: '2px solid #93c5fd',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)'
      }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#1e40af', fontWeight: '700', fontSize: '1em' }}>
          📌 Current Status
        </h4>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#1e3a8a', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li><strong>1 Preventive Action</strong> initiated in Apr-June 2025</li>
          <li>Baseline data collection phase - establishing performance metrics</li>
          <li>Processing time data will be available after completion of comparison period</li>
          <li>Improvement trends will be calculated once Jul-Nov data is available</li>
          <li>Proactive approach to prevent recurrence of quality issues</li>
        </ul>
      </div>

      {/* Note about data */}
      <div style={{
        marginTop: '16px',
        padding: '16px',
        background: '#fef3c7',
        borderRadius: '8px',
        border: '1px solid #fde047',
        fontSize: '0.85em',
        color: '#713f12',
        textAlign: 'center',
        fontWeight: '600'
      }}>
        ⏳ Improvement metrics will be calculated after the next reporting period
      </div>
    </div>
  )
}
