import { Line, Bar } from 'react-chartjs-2'

export default function SiteIVCorrectiveActions() {
  // Site IV Corrective Action Data
  // Jan-June: 7 CA, Avg: 94.75 days
  // July-Nov: 3 CA, Avg: 76 days
  
  const periods = ['Jan-Jun', 'Jul-Nov']
  const avgDays = [95, 76]
  const counts = [7, 3]

  const totalCA = counts.reduce((a, b) => a + b, 0)
  const weightedAvg = counts.reduce((acc, c, i) => acc + c * avgDays[i], 0) / totalCA
  const improvementPct = Math.round(((avgDays[0] - avgDays[1]) / avgDays[0]) * 100)

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Key Performance Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #f3e8ff 0%, #fae8ff 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #8b5cf6',
          boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#6d28d9', fontWeight: '600', marginBottom: '8px' }}>Total CA Records</div>
          <div style={{ fontSize: '2em', fontWeight: '800', color: '#6d28d9' }}>{totalCA}</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>Jan-Nov 2025</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #ecfdf3 0%, #d1fae5 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #10b981',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#065f46', fontWeight: '600', marginBottom: '8px' }}>Closure Time Improvement</div>
          <div style={{ fontSize: '1.8em', fontWeight: '800', color: '#10b981' }}>{improvementPct}% ↓</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>95 → 76 days</div>
          <div style={{ fontSize: '0.7em', color: '#0f172a', marginTop: '2px', paddingTop: '6px', borderTop: '1px solid #d1fae5' }}>
            Jan-Jun: 95 | Jul-Nov: 76
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #3b82f6',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#1e40af', fontWeight: '600', marginBottom: '8px' }}>Weighted Average Days</div>
          <div style={{ fontSize: '2em', fontWeight: '800', color: '#3b82f6' }}>{weightedAvg.toFixed(1)}</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>Across all CA</div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        {/* Average Days Trend */}
        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          height: '300px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#0f172a', fontWeight: '700', fontSize: '1em' }}>
            📉 Average Days Trend (CA)
          </h4>
          <div style={{ height: '240px', width: '100%' }}>
            <Line
              data={{
                labels: periods,
                datasets: [
                  {
                    label: 'Avg Days to Close',
                    data: avgDays,
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.12)',
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 8,
                    pointBackgroundColor: '#8b5cf6',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    fill: true
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

        {/* CA Volume by Period */}
        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          height: '300px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#0f172a', fontWeight: '700', fontSize: '1em' }}>
            📊 CA Volume by Period
          </h4>
          <div style={{ height: '240px', width: '100%' }}>
            <Bar
              data={{
                labels: periods,
                datasets: [
                  {
                    label: 'Number of CAs',
                    data: counts,
                    backgroundColor: 'rgba(139, 92, 246, 0.85)',
                    borderColor: '#8b5cf6',
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
      </div>

      {/* Detailed Comparison Table */}
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
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Total CAs</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Avg Days to Close</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Improvement</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '14px 16px', color: '#334155', fontWeight: '600', fontSize: '0.9em' }}>Jan-Jun</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.95em' }}>{counts[0]}</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#8b5cf6', fontWeight: '700', fontSize: '0.95em' }}>{avgDays[0]} days</td>
              <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8em',
                  fontWeight: '600',
                  background: '#fef3c7',
                  color: '#92400e'
                }}>
                  Baseline
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '14px 16px', color: '#334155', fontWeight: '600', fontSize: '0.9em' }}>Jul-Nov</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.95em' }}>{counts[1]}</td>
              <td style={{ padding: '14px 16px', textAlign: 'center', color: '#8b5cf6', fontWeight: '700', fontSize: '0.95em' }}>{avgDays[1]} days</td>
              <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8em',
                  fontWeight: '600',
                  background: '#dbeafe',
                  color: '#1e40af'
                }}>
                  ↓ {improvementPct}% Better
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
          <li><strong>{improvementPct}%</strong> improvement in closure time from Jan-Jun to Jul-Nov</li>
          <li>Average closure time reduced from <strong>{avgDays[0]} days</strong> to <strong>{avgDays[1]} days</strong></li>
          <li>Total of <strong>{totalCA} CA</strong> records across both periods</li>
          <li>Higher CA volume in Jan-Jun period (<strong>{counts[0]} CAs</strong>) indicates proactive approach</li>
          <li>Closure efficiency improved despite maintaining quality standards</li>
        </ul>
      </div>
    </div>
  )
}
