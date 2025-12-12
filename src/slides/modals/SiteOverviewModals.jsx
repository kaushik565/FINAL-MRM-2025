import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useModalKeyboardHandler, FullscreenShell, ModalHeader, ModalStat } from '../../utils/modalHelpers';

/**
 * Category Info Modal - Shows detailed metrics for a specific category
 */
export function CategoryInfoModal({ category, categoryColors, siteColors, categoryDetails, onClose }) {
  useModalKeyboardHandler(onClose);
  
  const details = categoryDetails[category];
  const borderColor = categoryColors[category];

  return createPortal(
    <FullscreenShell onClose={onClose} title={details.title} subtitle={details.description} accentColor={borderColor}>
      <div style={{ padding: '28px' }}>
        <ModalStat
          label="Average Improvement Across All Sites"
          value={`${details.avgImprovement}%`}
          color={borderColor}
        />

        <div style={{ background: '#f0f9ff', borderLeft: `4px solid ${borderColor}`, padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
          <div style={{ fontSize: '0.75em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '8px' }}>
            Calculation Formula
          </div>
          <div style={{ fontSize: '0.95em', fontFamily: 'monospace', color: '#1f2937', background: '#fff', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            {details.calculation}
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '1em', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
            📊 Site-wise Breakdown:
          </div>
          {details.sites.map((site, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '12px',
                padding: '14px',
                background: '#f8fafc',
                borderLeft: `4px solid ${siteColors[site.name]}`,
                borderRadius: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ fontSize: '1.1em', fontWeight: '800', color: siteColors[site.name] }}>
                  {site.name}
                </div>
                <div style={{ fontSize: '1.4em', fontWeight: '900', color: siteColors[site.name] }}>
                  {site.improvement}%
                </div>
              </div>
              <div style={{ fontSize: '0.85em', color: '#475569', lineHeight: '1.5' }}>
                <div>Before: {site.from} → After: {site.to}</div>
                <div>Total Items: {site.total}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FullscreenShell>,
    document.body
  );
}

/**
 * Site Info Modal - Shows detailed performance breakdown for a specific site
 */
export function SiteInfoModal({ site, sitesData, categoryColors, siteColors, onClose }) {
  useModalKeyboardHandler(onClose);
  
  const data = sitesData[site];
  const totalItems = data.Incidents.total + data.CA.total + data.PA.total + data.OOS.total + data.CC.total;
  const avgImprovement = Math.round(
    Object.values(data).reduce((sum, m) => sum + m.improvement, 0) / Object.values(data).length
  );

  const metricsBreakdown = [
    { name: 'Incidents', ...data.Incidents, color: categoryColors.Incidents },
    { name: 'Corrective Actions (CA)', ...data.CA, color: categoryColors.CA },
    { name: 'Preventive Actions (PA)', ...data.PA, color: categoryColors.PA },
    { name: 'Out of Specifications (OOS)', ...data.OOS, color: categoryColors.OOS },
    { name: 'Change Controls (CC)', ...data.CC, color: categoryColors.CC },
    { name: 'Investigation Time', ...data.Investigation, color: categoryColors.Investigation }
  ];

  return createPortal(
    <FullscreenShell onClose={onClose} title={`${site} - Performance Breakdown`} accentColor={siteColors[site]}>
      <div style={{ padding: '28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
          <ModalStat
            label="Average Improvement"
            value={`${avgImprovement}%`}
            color={siteColors[site]}
          />
          <ModalStat
            label="Total Items"
            value={totalItems.toLocaleString()}
            color="#1e293b"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.95em', fontWeight: '700', color: '#0f172a', marginBottom: '12px', marginTop: 0 }}>
            📈 Metrics Breakdown:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {metricsBreakdown.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px',
                  background: '#f8fafc',
                  borderLeft: `4px solid ${metric.color}`,
                  borderRadius: '8px'
                }}
              >
                <div style={{ fontSize: '0.85em', fontWeight: '600', color: metric.color, marginBottom: '4px' }}>
                  {metric.name}
                </div>
                <div style={{ fontSize: '0.9em', color: '#475569' }}>
                  <strong>{metric.total.toLocaleString()}</strong> items
                </div>
                <div style={{ fontSize: '0.8em', color: metric.improvement >= 0 ? '#10b981' : '#ef4444' }}>
                  {metric.improvement >= 0 ? '↓' : '↑'} {Math.abs(metric.improvement)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  );
}

