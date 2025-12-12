import React from 'react';
import { createPortal } from 'react-dom';
import { FullscreenShell } from '../../utils/modalHelpers';

// SITE-III KPI details in a full-screen view
export function Site3KPIInfoModal({ kpiInfo, onClose }) {
  if (!kpiInfo) return null;

  const kpiDetails = {
    'Overall IPQA Approval': {
      title: 'Overall IPQA Approval Rate',
      calculation: '15,534 approved / 15,627 total operations x 100 = 99.2%',
      details: [
        'Total Operations: 15,627',
        'Approved: 15,534',
        'Not Approved/Observations: 93',
        'Improvement: +0.3% from previous period'
      ]
    },
    'Incident Investigation Speed': {
      title: 'Incident Investigation Speed',
      calculation: 'Average investigation time reduced from 25 days to 4 days',
      details: [
        'Previous Average: 25 days',
        'Current Average: 4 days',
        'Reduction: 21 days (84% improvement)',
        'Calculation: ((25-4)/25) x 100 = 84% reduction'
      ]
    },
    'Rejection Rate': {
      title: 'Rejection Rate',
      calculation: 'Rejection rate decreased from 4.0% to 2.5%',
      details: [
        'Previous Rate: 4.0%',
        'Current Rate: 2.5%',
        'Improvement: 1.5 percentage points',
        'Target: <2% (moving towards target)',
        'Formula: (Not Approved / Total Operations) x 100'
      ]
    },
    'Sampling Coverage': {
      title: 'Sampling Coverage',
      calculation: '98.5% of lots sampled with 99% pass rate',
      details: [
        'Total Lots Sampled: 1,400+',
        'Coverage Rate: 98.5%',
        'Pass Rate: 99%',
        'Critical Defects: Zero',
        'Quality Indicator: Excellent'
      ]
    }
  };

  const details = kpiDetails[kpiInfo];
  if (!details) return null;

  return createPortal(
    <FullscreenShell onClose={onClose} title={details.title} accentColor="#8b5cf6">
      <div style={{ padding: '28px', background: '#f8fafc' }}>
        <div style={{
          background: '#f0f9ff',
          borderLeft: '4px solid #8b5cf6',
          padding: '16px',
          borderRadius: '12px',
          marginBottom: '24px'
        }}>
          <div style={{ fontSize: '0.75em', fontWeight: '700', color: '#6d28d9', textTransform: 'uppercase', marginBottom: '8px' }}>Calculation</div>
          <div style={{ fontSize: '1em', fontWeight: '600', color: '#0f172a' }}>{details.calculation}</div>
        </div>

        <div style={{
          background: '#fefce8',
          borderRadius: '12px',
          padding: '16px',
          border: '2px solid #fde047'
        }}>
          <div style={{ fontSize: '0.75em', fontWeight: '700', color: '#854d0e', textTransform: 'uppercase', marginBottom: '12px' }}>Details</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {details.details.map((detail, index) => (
              <div
                key={index}
                style={{
                  fontSize: '0.95em',
                  color: '#422006',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ width: '8px', height: '8px', background: '#8b5cf6', borderRadius: '50%' }}></div>
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  );
}

// Quality score formulas in a full-screen layout
export function QualityScoreInfoModal({ site, onClose }) {
  if (!site) return null;

  const qualityScoreDetails = {
    'SITE-I': {
      title: 'SITE-I Quality Score Calculation',
      color: '#dc2626',
      currentScore: '99.6%',
      previousScore: '99.2%',
      calculation: '(Compliant Operations / Total Operations) x 100',
      details: [
        'Total Operations Reviewed: 12,850',
        'Compliant Operations: 12,799',
        'Non-Compliant: 51',
        'Current Score: (12,799 / 12,850) x 100 = 99.6%',
        'Previous Score: 99.2% (3 months ago)',
        'Improvement: +0.4 percentage points'
      ],
      metrics: [
        'BMR Verification: 99.8% compliance',
        'Line Clearance: 99.5% compliance',
        'Sampling Coverage: 99.4% compliance',
        'Documentation Quality: 99.7% compliance'
      ]
    },
    'SITE-III': {
      title: 'SITE-III Quality Score Calculation',
      color: '#8b5cf6',
      currentScore: '99.2%',
      previousScore: '98.9%',
      calculation: '(Approved IPQA Activities / Total IPQA Activities) x 100',
      details: [
        'Total IPQA Activities: 15,627',
        'Approved Activities: 15,534',
        'Not Approved/Observations: 93',
        'Current Score: (15,534 / 15,627) x 100 = 99.2%',
        'Previous Score: 98.9% (3 months ago)',
        'Improvement: +0.3 percentage points'
      ],
      metrics: [
        'Line Clearance: 99.4% approval',
        'Line Closure: 99.1% approval',
        'Line Verification: 99.0% approval',
        'Line Reverification: 99.3% approval'
      ]
    },
    'SITE-V': {
      title: 'SITE-V Quality Score Calculation',
      color: '#0ea5e9',
      currentScore: '98.8%',
      previousScore: '98.3%',
      calculation: '(Quality-Compliant Lots / Total Lots Processed) x 100',
      details: [
        'Total Lots Processed: 1,450',
        'Quality-Compliant Lots: 1,433',
        'Non-Compliant Lots: 17',
        'Current Score: (1,433 / 1,450) x 100 = 98.8%',
        'Previous Score: 98.3% (3 months ago)',
        'Improvement: +0.5 percentage points'
      ],
      metrics: [
        'Incoming Sampling: 99.1% compliance',
        'In-Process Sampling: 98.7% compliance',
        'BMR Verification: 98.5% compliance',
        'Transfer Note Verification: 99.0% compliance'
      ]
    }
  };

  const details = qualityScoreDetails[site];
  if (!details) return null;

  return createPortal(
    <FullscreenShell onClose={onClose} title={details.title} accentColor={details.color}>
      <div style={{ padding: '28px', background: '#f8fafc' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{
            background: '#f0f9ff',
            borderRadius: '12px',
            padding: '16px',
            border: '2px solid #e2e8f0',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(15,23,42,0.08)'
          }}>
            <div style={{ fontSize: '0.7em', fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', marginBottom: '8px' }}>Previous Score</div>
            <div style={{ fontSize: '2em', fontWeight: '900', color: '#94a3b8' }}>{details.previousScore}</div>
          </div>
          <div style={{
            background: `${details.color}10`,
            borderRadius: '12px',
            padding: '16px',
            border: `2px solid ${details.color}`,
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(15,23,42,0.08)'
          }}>
            <div style={{ fontSize: '0.7em', fontWeight: '700', color: '#1e293b', textTransform: 'uppercase', marginBottom: '8px' }}>Current Score</div>
            <div style={{ fontSize: '2em', fontWeight: '900', color: details.color }}>{details.currentScore}</div>
          </div>
        </div>

        <div style={{
          background: '#f0f9ff',
          borderLeft: `4px solid ${details.color}`,
          padding: '16px',
          borderRadius: '12px',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '0.75em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '8px' }}>Formula</div>
          <div style={{ fontSize: '1em', fontWeight: '700', color: '#0f172a', fontFamily: 'monospace', background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            {details.calculation}
          </div>
        </div>

        <div style={{
          background: '#fefce8',
          borderRadius: '12px',
          padding: '16px',
          border: '2px solid #fde047',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '0.75em', fontWeight: '700', color: '#854d0e', textTransform: 'uppercase', marginBottom: '12px' }}>Calculation Details</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {details.details.map((detail, index) => (
              <div
                key={index}
                style={{
                  fontSize: '0.95em',
                  color: '#422006',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ width: '8px', height: '8px', background: details.color, borderRadius: '50%' }}></div>
                {detail}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: '#f1f5f9',
          borderRadius: '12px',
          padding: '16px',
          border: '2px solid #cbd5e1'
        }}>
          <div style={{ fontSize: '0.75em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '12px' }}>Key Quality Metrics</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {details.metrics.map((metric, index) => (
              <div
                key={index}
                style={{
                  fontSize: '0.95em',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#ffffff',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ fontSize: '1.2em', color: details.color }}>✓</div>
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  );
}
