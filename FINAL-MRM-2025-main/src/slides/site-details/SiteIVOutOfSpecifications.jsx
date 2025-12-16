import { Bar } from 'react-chartjs-2'

export default function SiteIVOutOfSpecifications() {
  // Site IV OOS Data
  // Apr-June 2025: 1 OOS, Avg Closure: 28 days
  // July-Nov: 0 OOS
  
  const period = 'Apr-Jun 2025'
  const totalOOS = 1
  const avgClosure = 28
  const julNovOOS = 0

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Key Performance Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #dc2626',
          boxShadow: '0 4px 12px rgba(220, 38, 38, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#991b1b', fontWeight: '600', marginBottom: '8px' }}>Total OOS</div>
          <div style={{ fontSize: '2em', fontWeight: '800', color: '#dc2626' }}>{totalOOS}</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>{period}</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #3b82f6',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#1e40af', fontWeight: '600', marginBottom: '8px' }}>Avg Closure Days</div>
          <div style={{ fontSize: '2em', fontWeight: '800', color: '#3b82f6' }}>{avgClosure}</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>Per OOS investigation</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #10b981',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#065f46', fontWeight: '600', marginBottom: '8px' }}>Jul-Nov Status</div>
          <div style={{ fontSize: '1.8em', fontWeight: '800', color: '#10b981' }}>Zero OOS</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>Excellent quality control</div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        {/* OOS Volume by Period */}
        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          height: '300px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#0f172a', fontWeight: '700', fontSize: '1em' }}>
            📊 OOS Volume by Period
          </h4>
          <div style={{ height: '240px', width: '100%' }}>
            <Bar
              data={{
                labels: ['Apr-Jun', 'Jul-Nov'],
                datasets: [
                  {
                    label: 'Number of OOS',
                    data: [totalOOS, julNovOOS],
                    backgroundColor: ['rgba(220, 38, 38, 0.85)', 'rgba(16, 185, 129, 0.85)'],
                    borderColor: ['#dc2626', '#10b981'],
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

        {/* Closure Time */}
        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          height: '300px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#0f172a', fontWeight: '700', fontSize: '1em' }}>
            ⏱️ Average Closure Time
          </h4>
          <div style={{ height: '240px', width: '100%' }}>
            <Bar
              data={{
                labels: ['Apr-Jun'],
                datasets: [
                  {
                    label: 'Avg Closure Days',
                    data: [avgClosure],
                    backgroundColor: 'rgba(59, 130, 246, 0.85)',
                    borderColor: '#3b82f6',
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
                  y: { beginAtZero: true, ticks: { color: '#64748b', font: { size: 11 } }, grid: { color: '#f1f5f9' } },
                  x: { ticks: { color: '#64748b', font: { size: 11 } }, grid: { display: false } }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Detailed Status Table */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e7eb'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#0f172a', fontWeight: '700', fontSize: '1.1em' }}>
          📋 Period-wise Breakdown
        </h4>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
              <th style={{ padding: '14px 16px', textAlign: 'left', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Period</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Total OOS</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Avg Closure Days</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '14px 16px', color: '#334155', fontWeight: '600', fontSize: '0.9em' }}>Apr-Jun 2025</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.95em' }}>{totalOOS}</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#3b82f6', fontWeight: '700', fontSize: '0.95em' }}>{avgClosure} days</td>
              <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8em',
                  fontWeight: '600',
                  background: '#dbeafe',
                  color: '#1e40af'
                }}>
                  ✅ Resolved
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '14px 16px', color: '#334155', fontWeight: '600', fontSize: '0.9em' }}>Jul-Nov 2025</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.95em' }}>{julNovOOS}</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#64748b', fontWeight: '600', fontSize: '0.9em' }}>N/A</td>
              <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8em',
                  fontWeight: '600',
                  background: '#dcfce7',
                  color: '#065f46'
                }}>
                  ⭐ Zero OOS
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Insights */}
      <div style={{
        marginTop: '24px',
        padding: '20px',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        borderRadius: '12px',
        border: '2px solid #86efac',
        boxShadow: '0 4px 12px rgba(34, 197, 94, 0.15)'
      }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#065f46', fontWeight: '700', fontSize: '1em' }}>
          💡 Key Insights
        </h4>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#064e3b', fontSize: '0.9em', lineHeight: '1.8' }}>
          <li>Only <strong>1 OOS</strong> incident in Apr-June 2025</li>
          <li>Average closure time of <strong>{avgClosure} days</strong> within acceptable limits</li>
          <li><strong>Zero OOS</strong> in Jul-Nov period demonstrates excellent quality control</li>
          <li>Significant improvement in maintaining specifications compliance</li>
          <li>Proactive quality measures preventing OOS occurrences</li>
          <li>Strong performance indicating effective process controls</li>
        </ul>
      </div>

      {/* Achievement Badge */}
      <div style={{
        marginTop: '16px',
        padding: '16px',
        background: 'linear-gradient(135deg, #dcfce7 0%, #86efac 100%)',
        borderRadius: '8px',
        border: '2px solid #22c55e',
        fontSize: '0.9em',
        color: '#065f46',
        textAlign: 'center',
        fontWeight: '700'
      }}>
        🏆 Outstanding Achievement: Zero OOS in Jul-Nov 2025
      </div>
    </div>
  )
}
