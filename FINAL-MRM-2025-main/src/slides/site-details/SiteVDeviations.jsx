import React, { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default function SiteVDeviations() {
  const chartRef = useRef(null)

  const janJune = { count: 7, avgClosure: 74, open: 0 }
  const julyNov = { count: 5, avgClosure: 43, open: 0 }

  useEffect(() => {
    const ctx = chartRef.current
    if (!ctx) return
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan–Jun', 'Jul–Nov'],
        datasets: [
          { label: 'Number of Deviations', data: [janJune.count, julyNov.count], backgroundColor: '#0ea5e9' },
          { label: 'Avg Closure Days', data: [janJune.avgClosure, julyNov.avgClosure], backgroundColor: '#10b981' },
          { label: 'Open Deviations', data: [janJune.open, julyNov.open], backgroundColor: '#ef4444' }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { position: 'bottom' } }
      }
    })
    return () => chart.destroy()
  }, [])

  const improvementPct = Math.round(((janJune.avgClosure - julyNov.avgClosure) / janJune.avgClosure) * 100)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
        <div style={{ textAlign: 'center', padding: '16px', background: '#e0f2fe', border: '2px solid #0ea5e9', borderRadius: '12px' }}>
          <div style={{ fontSize: '0.8em', fontWeight: 700, color: '#075985', textTransform: 'uppercase' }}>Jan–Jun</div>
          <div style={{ fontSize: '2em', fontWeight: 900, color: '#0ea5e9' }}>{janJune.count}</div>
          <div style={{ fontSize: '0.85em', color: '#374151' }}>Number of deviations</div>
          <div style={{ marginTop: '8px', fontSize: '0.9em', color: '#374151' }}>Avg closure: {janJune.avgClosure} days</div>
          <div style={{ fontSize: '0.9em', color: '#374151' }}>Open: {janJune.open}</div>
        </div>
        <div style={{ textAlign: 'center', padding: '16px', background: '#ecfdf3', border: '2px solid #10b981', borderRadius: '12px' }}>
          <div style={{ fontSize: '0.8em', fontWeight: 700, color: '#065f46', textTransform: 'uppercase' }}>Jul–Nov</div>
          <div style={{ fontSize: '2em', fontWeight: 900, color: '#10b981' }}>{julyNov.count}</div>
          <div style={{ fontSize: '0.85em', color: '#374151' }}>Number of deviations</div>
          <div style={{ marginTop: '8px', fontSize: '0.9em', color: '#374151' }}>Avg closure: {julyNov.avgClosure} days</div>
          <div style={{ fontSize: '0.9em', color: '#374151' }}>Open: {julyNov.open}</div>
        </div>
        <div style={{ textAlign: 'center', padding: '16px', background: '#fff7ed', border: '2px solid #f97316', borderRadius: '12px' }}>
          <div style={{ fontSize: '0.8em', fontWeight: 700, color: '#9a3412', textTransform: 'uppercase' }}>Improvement</div>
          <div style={{ fontSize: '2em', fontWeight: 900, color: '#f97316' }}>{improvementPct}%</div>
          <div style={{ fontSize: '0.85em', color: '#374151' }}>Avg closure days reduced</div>
        </div>
      </div>

      <div style={{ height: '300px', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '8px' }}>
        <canvas ref={chartRef} />
      </div>

      <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', background: '#f9fafb', fontWeight: 800, padding: '10px', color: '#111827' }}>
          <div>Period</div>
          <div style={{ textAlign: 'center' }}>Number of deviations</div>
          <div style={{ textAlign: 'center' }}>Avg closure / Open</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', padding: '10px', borderTop: '1px solid #e5e7eb' }}>
          <div>Jan–June</div>
          <div style={{ textAlign: 'center' }}>{janJune.count}</div>
          <div style={{ textAlign: 'center' }}>{janJune.avgClosure} days / {janJune.open}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr', padding: '10px', borderTop: '1px solid #e5e7eb' }}>
          <div>Jul–Nov</div>
          <div style={{ textAlign: 'center' }}>{julyNov.count}</div>
          <div style={{ textAlign: 'center' }}>{julyNov.avgClosure} days / {julyNov.open}</div>
        </div>
      </div>
    </div>
  )
}
