import { Line, Bar } from 'react-chartjs-2'

export default function SiteIVIncidents() {
  // Site IV Incident Report Data
  // Jan: 1 IR, Avg Closure: 30 days
  // Feb-Mar: 2 IRs, Avg Closure: 30 days
  // Apr-June: 4 IRs, Avg Closure: 27 days
  // July-Nov: 3 IRs, Avg Closure: 19.5 days
  
  const periods = ['Jan', 'Feb-Mar', 'Apr-Jun', 'Jul-Nov']
  const avgClosure = [30, 30, 27, 20]
  const counts = [1, 2, 4, 3]

  const totalIRs = counts.reduce((a, b) => a + b, 0)
  const weightedClosure = counts.reduce((acc, c, i) => acc + c * avgClosure[i], 0) / totalIRs
  const bestClosure = Math.min(...avgClosure)
  const improvementPct = Math.round(((avgClosure[2] - bestClosure) / avgClosure[2]) * 100)

  // Jan-June vs July-Nov comparison
  const janJunAvgClosure = 27
  const janJunIRs = 1 + 2 + 4 // 7 IRs
  const julNovAvgClosure = 20
  const julNovIRs = 3

  const closureImprovement = 28

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
          <div style={{ fontSize: '0.85em', color: '#991b1b', fontWeight: '600', marginBottom: '8px' }}>Total IRs Initiated</div>
          <div style={{ fontSize: '2em', fontWeight: '800', color: '#dc2626' }}>{totalIRs}</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>Jan - Nov 2025</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #10b981',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#065f46', fontWeight: '600', marginBottom: '8px' }}>Closure Time Improvement</div>
          <div style={{ fontSize: '1.8em', fontWeight: '800', color: '#10b981' }}>{closureImprovement}% ↓</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>27 → 20 days</div>
          <div style={{ fontSize: '0.7em', color: '#0f172a', marginTop: '2px', paddingTop: '6px', borderTop: '1px solid #d1fae5' }}>
            Jan-Jun: 27 | Jul-Nov: 20
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid #3b82f6',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{ fontSize: '0.85em', color: '#1e40af', fontWeight: '600', marginBottom: '8px' }}>Weighted Average Closure</div>
          <div style={{ fontSize: '1.8em', fontWeight: '800', color: '#3b82f6' }}>{weightedClosure.toFixed(1)} days</div>
          <div style={{ fontSize: '0.75em', color: '#0f172a', marginTop: '4px' }}>Across all periods</div>
          <div style={{ fontSize: '0.7em', color: '#0f172a', marginTop: '2px', paddingTop: '6px', borderTop: '1px solid #dbeafe' }}>
            Best: {bestClosure} days ({improvementPct}% improvement)
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        {/* Closure Trend */}
        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          height: '300px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#0f172a', fontWeight: '700', fontSize: '1em' }}>
            📉 Closure Days Trend
          </h4>
          <div style={{ height: '240px', width: '100%' }}>
            <Line
              data={{
                labels: periods,
                datasets: [
                  {
                    label: 'Avg Closure Days',
                    data: avgClosure,
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.12)',
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 6,
                    pointBackgroundColor: '#dc2626',
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

        {/* IR Volume by Period */}
        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e5e7eb',
          height: '300px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#0f172a', fontWeight: '700', fontSize: '1em' }}>
            📊 IR Volume by Period
          </h4>
          <div style={{ height: '240px', width: '100%' }}>
            <Bar
              data={{
                labels: periods,
                datasets: [
                  {
                    label: 'Number of IRs',
                    data: counts,
                    backgroundColor: 'rgba(220, 38, 38, 0.85)',
                    borderColor: '#dc2626',
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
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Total IRs</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Avg Closure Days</th>
              <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.9em', borderBottom: '2px solid #e5e7eb' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {periods.map((period, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '14px 16px', color: '#334155', fontWeight: '600', fontSize: '0.9em' }}>{period}</td>
                <td style={{ padding: '14px 16px', textAlign: 'center', color: '#0f172a', fontWeight: '700', fontSize: '0.95em' }}>{counts[i]}</td>
                <td style={{ padding: '14px 16px', textAlign: 'center', color: '#dc2626', fontWeight: '700', fontSize: '0.95em' }}>{avgClosure[i]} days</td>
                <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    background: avgClosure[i] === bestClosure ? '#dcfce7' : avgClosure[i] < 25 ? '#dbeafe' : '#fef3c7',
                    color: avgClosure[i] === bestClosure ? '#065f46' : avgClosure[i] < 25 ? '#1e40af' : '#92400e'
                  }}>
                    {avgClosure[i] === bestClosure ? '⭐ Best' : avgClosure[i] < 25 ? '✅ Good' : '⚠️ Needs Improvement'}
                  </span>
                </td>
              </tr>
            ))}
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
          <li><strong>{closureImprovement}%</strong> improvement in closure time from Jan-Jun to Jul-Nov</li>
          <li>Average closure time reduced from <strong>{janJunAvgClosure} days</strong> to <strong>{julNovAvgClosure} days</strong></li>
          <li>Total of <strong>{totalIRs} IRs</strong> initiated across all periods</li>
          <li>Best performance in <strong>Jul-Nov period</strong> with {bestClosure} days average closure</li>
          <li>Consistent trend showing <strong>continuous improvement</strong> in closure efficiency</li>
        </ul>
      </div>
    </div>
  )
}
