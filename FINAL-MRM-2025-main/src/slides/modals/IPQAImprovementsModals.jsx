// IPQA Improvements Modals - All sites using FullscreenShell
import { createPortal } from 'react-dom';
import React, { useState, useEffect } from 'react';
import { FullscreenShell } from '../../utils/modalHelpers';

/**
 * Site I IPQA Improvements Modal
 */
export function SiteIImprovementsModal({ isOpen, onClose }) {
  const [selectedCard, setSelectedCard] = useState('improvements');
  
  if (!isOpen) return null;

  const improvements = [
    { icon: '🔬', title: 'MG Coat Dispensing', desc: 'Added inprocess checks while MG coat dispensing to ensure quality and consistency.' },
    { icon: '🧪', title: 'Mastermix Dispensing', desc: 'Added inprocess checks while Mastermix dispensing to validate accuracy and reduce errors.' },
    { icon: '📋', title: 'Material Checklist Verification', desc: 'Added more checkpoints in Checklist and calculation sheet of incoming/new material to ensure completeness.' },
    { icon: '⚙️', title: 'Chip Processing', desc: 'Added inprocess checks for Chip arrangement and chip washing to maintain proper configuration and cleanliness.' },
    { icon: '🧬', title: 'UNG Testing & Standard Curve', desc: 'UNG testing, standard curve testing samples are sampled by IPQA, previously done by Production.' },
    { icon: '🤝', title: 'MG Personnel Support', desc: 'Supported MG personnel in effective investigation and proper CA\'s.' },
    { icon: '🎯', title: 'Quality Objective Revision', desc: 'Revised quality objective of MG and added DTF related point.' }
  ];

  // Summary counts
  const completedCount = improvements.length; // 7
  const inProgressCount = 1; // Pending item shown below

  return createPortal(
    <FullscreenShell
      onClose={onClose}
      title="Site I IPQA"
      accentColor="#dc2626"
    >
      <div style={{padding: '32px'}}>
        {/* Selection Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '32px'}}>
          {/* Process Improvements Card */}
          <div
            onClick={() => setSelectedCard('improvements')}
            style={{
              background: selectedCard === 'improvements' ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : 'linear-gradient(135deg, #fee2e2, #fecaca)',
              border: selectedCard === 'improvements' ? '3px solid #991b1b' : '2px solid #fca5a5',
              borderRadius: '16px',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: selectedCard === 'improvements' ? '0 10px 30px rgba(220, 38, 38, 0.3)' : '0 4px 12px rgba(0,0,0,0.08)',
              transform: selectedCard === 'improvements' ? 'scale(1.02)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              if (selectedCard !== 'improvements') {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCard !== 'improvements') {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }
            }}
          >
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3em', marginBottom: '12px'}}>🔧</div>
              <div style={{
                fontSize: '1.4em',
                fontWeight: '900',
                color: selectedCard === 'improvements' ? '#ffffff' : '#991b1b',
                marginBottom: '8px'
              }}>
                Process Improvements
              </div>
              <div style={{
                fontSize: '0.95em',
                color: selectedCard === 'improvements' ? 'rgba(255,255,255,0.9)' : '#dc2626',
                fontWeight: '600'
              }}>
                View all implemented improvements
              </div>
            </div>
          </div>

          {/* Process Incidents Card */}
          <div
            onClick={() => setSelectedCard('incidents')}
            style={{
              background: selectedCard === 'incidents' ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : 'linear-gradient(135deg, #fee2e2, #fecaca)',
              border: selectedCard === 'incidents' ? '3px solid #991b1b' : '2px solid #fca5a5',
              borderRadius: '16px',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: selectedCard === 'incidents' ? '0 10px 30px rgba(220, 38, 38, 0.3)' : '0 4px 12px rgba(0,0,0,0.08)',
              transform: selectedCard === 'incidents' ? 'scale(1.02)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              if (selectedCard !== 'incidents') {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCard !== 'incidents') {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }
            }}
          >
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3em', marginBottom: '12px'}}>📊</div>
              <div style={{
                fontSize: '1.4em',
                fontWeight: '900',
                color: selectedCard === 'incidents' ? '#ffffff' : '#991b1b',
                marginBottom: '8px'
              }}>
                Process Incidents
              </div>
              <div style={{
                fontSize: '0.95em',
                color: selectedCard === 'incidents' ? 'rgba(255,255,255,0.9)' : '#dc2626',
                fontWeight: '600'
              }}>
                View incident statistics
              </div>
            </div>
          </div>
        </div>

        {/* Content based on selection */}
        {selectedCard === 'improvements' ? (
          <div>
            {/* Summary Cards */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px', marginBottom: '16px'}}>
              {/* Completed */}
              <div style={{background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', border: '2px solid #10b981', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '140px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{fontSize: '2.4em'}}>✅</div>
                  <div>
                    <div style={{fontSize: '1.2em', color: '#065f46', fontWeight: 800}}>Completed</div>
                    <div style={{fontSize: '1em', color: '#065f46', opacity: 0.9}}>Successfully Implemented</div>
                  </div>
                </div>
                <div style={{fontSize: '3em', fontWeight: 900, color: '#059669'}}>{completedCount}</div>
              </div>
              {/* In Progress */}
              <div style={{background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: '2px solid #f59e0b', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '140px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{fontSize: '2.4em'}}>⏳</div>
                  <div>
                    <div style={{fontSize: '1.2em', color: '#92400e', fontWeight: 800}}>In Progress</div>
                    <div style={{fontSize: '1em', color: '#92400e', opacity: 0.9}}>Ongoing</div>
                  </div>
                </div>
                <div style={{fontSize: '3em', fontWeight: 900, color: '#d97706'}}>{inProgressCount}</div>
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '16px'}}>
              {improvements.map((item, idx) => (
                <div key={idx} style={{background: '#ffffff', border: '2px solid #fee2e2', borderRadius: '14px', padding: '20px', transition: 'all 0.25s ease', cursor: 'default'}}
                  onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(220, 38, 38, 0.15)'; e.currentTarget.style.borderColor = '#dc2626';}}
                  onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#fee2e2';}}>
                  <div style={{display: 'flex', gap: '14px', alignItems: 'start'}}>
                    <div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #fee2e2, #fecaca)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6em', flexShrink: 0}}>{item.icon}</div>
                    <div style={{flex: 1}}>
                      <div style={{fontSize: '1.1em', fontWeight: '800', color: '#991b1b', marginBottom: '8px'}}>{idx + 1}. {item.title}</div>
                      <div style={{fontSize: '0.95em', color: '#0f172a', lineHeight: '1.6', fontWeight: '500'}}>{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pending Section */}
            <div style={{marginTop: '32px', padding: '20px', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: '2px solid #fbbf24', borderRadius: '14px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
                <div style={{fontSize: '1.8em'}}>⏳</div>
                <div style={{fontSize: '1.15em', fontWeight: '800', color: '#92400e'}}>Pending Implementation</div>
              </div>
              <div style={{fontSize: '0.95em', color: '#0f172a', lineHeight: '1.6', fontWeight: '500', paddingLeft: '50px'}}>
                <strong>SOP/QA/003</strong> Change control is under revision for implementation of Artwork mastering process
              </div>
            </div>
          </div>
        ) : (
          /* Process Incidents View */
          <div style={{padding: '40px'}}>
            <div style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 style={{fontSize: '2em', fontWeight: '900', color: '#991b1b', textAlign: 'center', marginBottom: '40px'}}>Process Incidents - Site I</h2>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px'}}>
                {/* Jan-Jun Period */}
                <div style={{
                  background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                  border: '3px solid #dc2626',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(220, 38, 38, 0.15)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(220, 38, 38, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.15)';
                }}>
                  <div style={{fontSize: '3em', marginBottom: '16px'}}>📅</div>
                  <div style={{fontSize: '1.3em', fontWeight: '700', color: '#991b1b', marginBottom: '20px'}}>January - June</div>
                  <div style={{fontSize: '5em', fontWeight: '900', color: '#dc2626', lineHeight: '1', marginBottom: '12px'}}>16</div>
                  <div style={{fontSize: '1.1em', color: '#7f1d1d', fontWeight: '600'}}>Incidents</div>
                </div>

                {/* July-Nov Period */}
                <div style={{
                  background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                  border: '3px solid #dc2626',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(220, 38, 38, 0.15)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(220, 38, 38, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.15)';
                }}>
                  <div style={{fontSize: '3em', marginBottom: '16px'}}>📅</div>
                  <div style={{fontSize: '1.3em', fontWeight: '700', color: '#991b1b', marginBottom: '20px'}}>July - November</div>
                  <div style={{fontSize: '5em', fontWeight: '900', color: '#dc2626', lineHeight: '1', marginBottom: '12px'}}>19</div>
                  <div style={{fontSize: '1.1em', color: '#7f1d1d', fontWeight: '600'}}>Incidents</div>
                </div>
              </div>

              {/* Total Summary */}
              <div style={{
                marginTop: '40px',
                background: 'linear-gradient(135deg, #991b1b, #7f1d1d)',
                borderRadius: '20px',
                padding: '32px',
                textAlign: 'center',
                color: '#ffffff',
                boxShadow: '0 12px 35px rgba(127, 29, 29, 0.4)'
              }}>
                <div style={{fontSize: '1.2em', fontWeight: '600', marginBottom: '12px', opacity: 0.95}}>Total Incidents (2025)</div>
                <div style={{fontSize: '4.5em', fontWeight: '900', lineHeight: '1'}}>35</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </FullscreenShell>,
    document.body
  );
}

/**
 * Site III IPQA Improvements Modal
 */
export function Site3ImprovementsModal({ isOpen, onClose, onMilestonesClick, onParticleCountClick, onShopfloorObservationClick }) {
  const [showJigDetails, setShowJigDetails] = useState(false);
  
  // Scroll to top when JIG details modal opens - using useLayoutEffect for immediate scroll
  React.useLayoutEffect(() => {
    if (showJigDetails) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [showJigDetails]);
  
  if (!isOpen) return null;
  
  // Show JIG Details Modal if requested
  if (showJigDetails) {
    return createPortal(
      <FullscreenShell
        onClose={() => setShowJigDetails(false)}
        title="🔧 Batch Mix-Up Detection JIG"
        accentColor="#3b82f6"
      >
        <div style={{padding: '32px', maxWidth: '1200px', margin: '0 auto'}}>
          
          {/* Header Card */}
          <div style={{background: 'linear-gradient(135deg, #3b82f6, #2563eb)', padding: '24px', borderRadius: '16px', marginBottom: '24px', color: 'white', textAlign: 'center'}}>
            <div style={{fontSize: '1.1em', fontWeight: '700', marginBottom: '8px'}}>Automated QR Scanning JIG</div>
            <div style={{fontSize: '0.95em', opacity: 0.95}}>Prevents batch & line mix-ups via automatic QR validation</div>
          </div>

          {/* Status & Key Metrics */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px'}}>
            <div style={{background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #10b981'}}>
              <div style={{fontSize: '2em', marginBottom: '8px'}}>✅</div>
              <div style={{fontSize: '1.8em', fontWeight: '900', color: '#059669'}}>100%</div>
              <div style={{fontSize: '0.85em', color: '#065f46', fontWeight: '600'}}>Accuracy</div>
            </div>
            <div style={{background: 'linear-gradient(135deg, #fef3c7, #fde68a)', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #f59e0b'}}>
              <div style={{fontSize: '2em', marginBottom: '8px'}}>📦</div>
              <div style={{fontSize: '1.8em', fontWeight: '900', color: '#d97706'}}>300+</div>
              <div style={{fontSize: '0.85em', color: '#92400e', fontWeight: '600'}}>Cartridges Tested</div>
            </div>
            <div style={{background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #3b82f6'}}>
              <div style={{fontSize: '2em', marginBottom: '8px'}}>⏱️</div>
              <div style={{fontSize: '1.8em', fontWeight: '900', color: '#2563eb'}}>3.15s</div>
              <div style={{fontSize: '0.85em', color: '#1e40af', fontWeight: '600'}}>Cycle Time</div>
            </div>
            <div style={{background: 'linear-gradient(135deg, #fef2f2, #fee2e2)', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #dc2626'}}>
              <div style={{fontSize: '2em', marginBottom: '8px'}}>🚫</div>
              <div style={{fontSize: '1.8em', fontWeight: '900', color: '#dc2626'}}>0</div>
              <div style={{fontSize: '0.85em', color: '#991b1b', fontWeight: '600'}}>False Rejections</div>
            </div>
          </div>

          {/* Current Status */}
          <div style={{background: '#fef3c7', border: '2px solid #fbbf24', borderRadius: '12px', padding: '20px', marginBottom: '24px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
              <div style={{fontSize: '1.5em'}}>⚡</div>
              <div style={{fontSize: '1.1em', fontWeight: '800', color: '#92400e'}}>Current Status</div>
            </div>
            <div style={{fontSize: '0.95em', color: '#78350f', lineHeight: '1.6', marginBottom: '12px'}}>
              <strong>✅ JIG Development Complete:</strong> Prototype validated with 300 cartridges, 100% accuracy achieved
            </div>
            <div style={{fontSize: '0.95em', color: '#78350f', lineHeight: '1.6'}}>
              <strong>⏳ Pending:</strong> System integration with production line (Overall 50% Complete)
            </div>
          </div>

          {/* Key Features Grid */}
          <div style={{marginBottom: '32px'}}>
            <h3 style={{fontSize: '1.2em', fontWeight: '800', color: '#0f172a', marginBottom: '16px'}}>🎯 Key Features</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
              {[
                { icon: '🔍', title: '4-Level Validation', desc: 'Format → Line ID → Batch Range → Duplicate Detection' },
                { icon: '🎛️', title: 'Auto-Routing', desc: 'Automatic PASS/REJECT bin sorting via ACTJ actuators' },
                { icon: '💡', title: 'Visual Indicators', desc: 'LED lights (Green/Yellow/Red) + buzzer alerts' },
                { icon: '📊', title: 'Real-time Display', desc: 'Tkinter UI shows counts, batch info, last scanned QR' },
                { icon: '💾', title: 'Auto-Resume', desc: 'Power-safe: resumes from last scan after interruption' },
                { icon: '🌐', title: 'Web Dashboard', desc: 'Flask dashboard for remote monitoring & CSV reports' }
              ].map((feat, idx) => (
                <div key={idx} style={{background: '#ffffff', border: '2px solid #e5e7eb', borderRadius: '12px', padding: '16px'}}>
                  <div style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                    <div style={{fontSize: '2em', flexShrink: 0}}>{feat.icon}</div>
                    <div>
                      <div style={{fontSize: '0.95em', fontWeight: '800', color: '#0f172a', marginBottom: '4px'}}>{feat.title}</div>
                      <div style={{fontSize: '0.85em', color: '#64748b', lineHeight: '1.5'}}>{feat.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div style={{marginBottom: '32px'}}>
            <h3 style={{fontSize: '1.2em', fontWeight: '800', color: '#0f172a', marginBottom: '16px'}}>⚙️ How It Works</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px'}}>
              {[
                { step: '1', title: 'Scan QR', desc: 'GM65 scanner reads 14-char QR code' },
                { step: '2', title: 'Validate', desc: 'Check Line ID, Batch Range, Format' },
                { step: '3', title: 'Auto-Route', desc: 'ACTJ actuators sort to bins' },
                { step: '4', title: 'Track', desc: 'Log all scans with timestamp' }
              ].map((step, idx) => (
                <div key={idx} style={{background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '2px solid #cbd5e1', borderRadius: '12px', padding: '16px', textAlign: 'center'}}>
                  <div style={{width: '36px', height: '36px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.1em', margin: '0 auto 12px'}}>{step.step}</div>
                  <div style={{fontSize: '0.9em', fontWeight: '800', color: '#0f172a', marginBottom: '6px'}}>{step.title}</div>
                  <div style={{fontSize: '0.8em', color: '#475569', lineHeight: '1.4'}}>{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div style={{marginBottom: '24px'}}>
            <h3 style={{fontSize: '1.2em', fontWeight: '800', color: '#0f172a', marginBottom: '16px'}}>✨ Key Benefits</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px'}}>
              {[
                { icon: '💯', title: 'Zero Mix-Ups', desc: '100% accurate validation' },
                { icon: '💰', title: 'No Investment', desc: 'Uses existing infrastructure' },
                { icon: '📊', title: 'Full Traceability', desc: 'Complete audit trail' }
              ].map((benefit, idx) => (
                <div key={idx} style={{background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', border: '2px solid #86efac', borderRadius: '12px', padding: '16px', textAlign: 'center'}}>
                  <div style={{fontSize: '2em', marginBottom: '8px'}}>{benefit.icon}</div>
                  <div style={{fontSize: '0.95em', fontWeight: '800', color: '#065f46', marginBottom: '4px'}}>{benefit.title}</div>
                  <div style={{fontSize: '0.85em', color: '#047857'}}>{benefit.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Info */}
          <div style={{background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', border: '2px solid #cbd5e1', borderRadius: '12px', padding: '20px', textAlign: 'center'}}>
            <div style={{fontSize: '1em', fontWeight: '800', color: '#0f172a', marginBottom: '8px'}}>👤 Developed By</div>
            <div style={{fontSize: '1.1em', fontWeight: '700', color: '#3b82f6', marginBottom: '4px'}}>P. Lakshmana Sai Kaushik</div>
            <div style={{fontSize: '0.9em', color: '#64748b', fontWeight: '600'}}>QA Supervisor | Molbio Diagnostics Limited</div>
            <div style={{fontSize: '0.85em', color: '#94a3b8', marginTop: '8px'}}>Oct 2025 – Dec 2025 | Champions 2.0 Initiative</div>
          </div>

        </div>
      </FullscreenShell>,
      document.body
    );
  }

  const completedInitiatives = [
    { icon: '🤝', title: 'Monthly huddles with MG, QC & MN', desc: 'Review rejections/challenges with actions locked each month.', isClickable: true },
    { icon: '👀', title: 'Shopfloor observation loop', desc: 'Every 15 days: on-floor walks to surface issues early.', highlight: 'Reduced Process incidents from 34 to 21 (Nos).', isClickable: true, clickType: 'shopfloorObservation' },
    { icon: '♻️', title: 'Line-wise rework bays', desc: 'Dedicated rework space to contain and correct defects.' },
    { icon: '🧪', title: 'Particle count checks', desc: 'Routine counts to keep contamination tightly controlled.', isClickable: true, clickType: 'particleCount' },
    { icon: '🏷️', title: 'QR pasting segregation', desc: 'Separated QR activities to prevent label mix-ups.' },
    { icon: '🖼️', title: 'Pictorial job aids', desc: 'Step visuals at stations for faster, error-proof execution.' }
  ];

  return createPortal(
    <FullscreenShell
      onClose={onClose}
      title="Site III IPQA - Key Improvements & Initiatives"
      accentColor="#8b5cf6"
    >
      <div style={{padding: '32px'}}>
        {/* Stats Overview */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
          <div style={{background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', borderRadius: '16px', padding: '20px', border: '2px solid #10b981'}}>
            <div style={{fontSize: '3em', fontWeight: '900', color: '#059669', marginBottom: '4px'}}>6</div>
            <div style={{fontSize: '0.95em', fontWeight: '700', color: '#047857', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Completed</div>
            <div style={{fontSize: '0.8em', color: '#065f46', marginTop: '4px', fontWeight: '500'}}>Successfully Implemented</div>
          </div>
          <div style={{background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', borderRadius: '16px', padding: '20px', border: '2px solid #3b82f6'}}>
            <div style={{fontSize: '3em', fontWeight: '900', color: '#2563eb', marginBottom: '4px'}}>4</div>
            <div style={{fontSize: '0.95em', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.5px'}}>In Progress</div>
            <div style={{fontSize: '0.8em', color: '#1e40af', marginTop: '4px', fontWeight: '500'}}>Active Development</div>
          </div>
        </div>

        {/* Completed Initiatives */}
        <div style={{marginBottom: '32px'}}>
          <h3 style={{margin: '0 0 20px 0', fontSize: '1.4em', fontWeight: '800', color: '#047857', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2em', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'}}>✓</div>
            Completed Initiatives
          </h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px'}}>
            {completedInitiatives.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => {
                  if (item.isClickable) {
                    if (item.clickType === 'particleCount' && onParticleCountClick) {
                      onParticleCountClick();
                    } else if (item.clickType === 'shopfloorObservation' && onShopfloorObservationClick) {
                      onShopfloorObservationClick();
                    } else if (onMilestonesClick) {
                      onMilestonesClick();
                    }
                  }
                }}
                style={{
                  background: '#ffffff', 
                  border: item.isClickable ? '2px solid #8b5cf6' : '2px solid #d1fae5', 
                  borderRadius: '14px', 
                  padding: '16px', 
                  transition: 'all 0.25s ease',
                  cursor: item.isClickable ? 'pointer' : 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'; 
                  e.currentTarget.style.boxShadow = item.isClickable ? '0 10px 20px rgba(139, 92, 246, 0.25)' : '0 10px 20px rgba(16, 185, 129, 0.15)'; 
                  e.currentTarget.style.borderColor = item.isClickable ? '#8b5cf6' : '#10b981';
                  if (item.isClickable) {
                    e.currentTarget.style.background = '#faf5ff';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = 'none'; 
                  e.currentTarget.style.borderColor = item.isClickable ? '#8b5cf6' : '#d1fae5';
                  e.currentTarget.style.background = '#ffffff';
                }}>
                {item.isClickable && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#8b5cf6',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75em',
                    fontWeight: 'bold',
                    zIndex: 1
                  }}>
                    →
                  </div>
                )}
                <div style={{display: 'flex', gap: '12px'}}>
                  <div style={{width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #ecfdf5, #a7f3d0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4em', flexShrink: 0}}>{item.icon}</div>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '0.98em', fontWeight: '800', color: item.isClickable ? '#6b21a8' : '#065f46', marginBottom: '6px'}}>{item.title}</div>
                    <div style={{fontSize: '0.85em', color: item.isClickable ? '#7c3aed' : '#047857', lineHeight: '1.5'}}>{item.desc}</div>
                    {item.highlight && <div style={{fontSize: '0.8em', color: '#059669', marginTop: '6px', fontWeight: '700', background: '#ecfdf5', padding: '4px 8px', borderRadius: '6px', display: 'inline-block'}}>✨ {item.highlight}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Initiatives */}
        <div>
          <h3 style={{margin: '0 0 20px 0', fontSize: '1.4em', fontWeight: '800', color: '#1d4ed8', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2em', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'}}>→</div>
            In Progress Initiatives
          </h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px'}}>
            {[
              { icon: '📊', title: 'Defect Rate Setting', completion: 65, desc: 'Aligning limits to recent defect learnings.', showButton: false },
              { icon: '📋', title: 'Limit Sample Register', completion: 45, desc: 'Digital log to tighten sampling traceability.', showButton: false },
              { icon: '🔧', title: 'Batch Mix-Up Detection JIG', completion: 50, desc: 'Automated QR validation to prevent batch mix-ups.', showButton: true },
              { icon: '📄', title: 'On-floor work instructions', completion: 20, desc: 'Live, visual SOPs at point-of-use to reduce ambiguity.', showButton: false }
            ].map((item, idx) => (
              <div key={idx} style={{background: '#ffffff', border: '2px solid #dbeafe', borderRadius: '14px', padding: '16px', transition: 'all 0.25s ease'}}
                onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.15)'; e.currentTarget.style.borderColor = '#3b82f6';}}
                onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#dbeafe';}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #eff6ff, #bfdbfe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6em', margin: '0 auto 12px'}}>{item.icon}</div>
                  <div style={{fontSize: '0.95em', fontWeight: '800', color: '#1e40af', marginBottom: '8px'}}>{item.title}</div>
                  <div style={{fontSize: '0.8em', color: '#1d4ed8', lineHeight: '1.5', marginBottom: '10px'}}>{item.desc}</div>
                  
                  {/* Progress Bar */}
                  <div style={{background: '#eff6ff', borderRadius: '12px', padding: '8px', marginBottom: '8px', border: '1px solid #bfdbfe'}}>
                    <div style={{height: '6px', background: '#dbeafe', borderRadius: '10px', overflow: 'hidden'}}>
                      <div style={{height: '100%', background: 'linear-gradient(90deg, #3b82f6, #2563eb)', width: `${item.completion}%`, transition: 'width 0.3s ease'}}></div>
                    </div>
                  </div>
                  
                  <div style={{fontSize: '0.85em', fontWeight: '700', color: '#2563eb', background: '#eff6ff', padding: '4px 8px', borderRadius: '6px', display: 'inline-block', marginBottom: item.showButton ? '10px' : '0'}}>{item.completion}% Complete</div>
                  
                  {/* View Details Button */}
                  {item.showButton && (
                    <button
                      onClick={() => setShowJigDetails(true)}
                      style={{
                        width: '100%',
                        padding: '8px 16px',
                        marginTop: '8px',
                        background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.85em',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
                      }}
                    >
                      📋 View Details
                    </button>
                  )}
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

/**
 * Site V IPQA Improvements Modal
 */
export function SiteVImprovementsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const improvements = [
    { icon: '🧪', title: 'QA-controlled primer probe sampling', desc: 'Sampling of primer probe is taken under QA.' },
    { icon: '🛡️', title: 'Stronger incoming gate', desc: 'Stringent sampling during incoming stage has helped to rule out non conformance at initial stage of chip.' },
    { icon: '⚡', title: 'Flashwriting device learnings', desc: 'Repitittive incident on flashwriting device during flashed chip verification has highlighted the inefficiency of some pogo pins in device.' },
    { icon: '📦', title: 'Pouching mix-up prevention', desc: 'Stringent IPQA verification has reduced mixing of pouches and chips during pouching activity.'},
    { icon: '🏷️', title: 'Label verification at sleeves', desc: 'IPQA label verification is introduced during chip insertion in sleeves becouse the labels were printed wrong by user department, and hence observed mixed up of chips.'},
    { icon: '🛡️', title: 'Foil protection on trays', desc: 'Introduction of aluminim foil on tray has reduced the risk of contamination with activated filter tips during pouching activity.'},
    { icon: '✅', title: 'Broader in-process checks', desc: 'Implementation of inprocess checks during activities like chip arrangement, chip washing,volume verification during  BSA/secondary  Coat filling, tube sorting, MM filing.'}
  ];

  return createPortal(
    <FullscreenShell
      onClose={onClose}
      title="Site V IPQA - Key Improvements & Actions Taken"
      accentColor="#0ea5e9"
    >
      <div style={{padding: '32px'}}>
        <div style={{display: 'grid', gap: '16px'}}>
          {improvements.map((item, idx) => (
            <div key={idx} style={{display: 'flex', gap: '16px', padding: '20px', background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', borderRadius: '12px', border: '2px solid #0ea5e9', transition: 'all 0.25s ease'}}
              onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(14, 165, 233, 0.2)';}}
              onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none';}}>
              <div style={{fontSize: '2.5em', minWidth: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(14, 165, 233, 0.2)', flexShrink: 0}}>
                {item.icon}
              </div>
              <div style={{flex: 1}}>
                <h3 style={{margin: '0 0 8px 0', fontSize: '1.1em', fontWeight: '700', color: '#0369a1'}}>{item.title}</h3>
                <p style={{margin: 0, fontSize: '0.95em', color: '#0c4a6e', lineHeight: '1.6'}}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FullscreenShell>,
    document.body
  );
}
