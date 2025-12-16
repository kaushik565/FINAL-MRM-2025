// IPQA Improvements Modals - All sites using FullscreenShell
import { createPortal } from 'react-dom';
import { FullscreenShell } from '../../utils/modalHelpers';

/**
 * Site I IPQA Improvements Modal
 */
export function SiteIImprovementsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const improvements = [
    { icon: '🔬', title: 'MG Coat Dispensing', desc: 'Added inprocess checks while MG coat dispensing to ensure quality and consistency.' },
    { icon: '🧪', title: 'Mastermix Dispensing', desc: 'Added inprocess checks while Mastermix dispensing to validate accuracy and reduce errors.' },
    { icon: '📋', title: 'Material Checklist Verification', desc: 'Added more checkpoints in Checklist and calculation sheet of incoming/new material to ensure completeness.' },
    { icon: '⚙️', title: 'Chip Processing', desc: 'Added inprocess checks for Chip arrangement and chip washing to maintain proper configuration and cleanliness.' }
  ];

  return createPortal(
    <FullscreenShell
      onClose={onClose}
      title="Site I IPQA - Process Improvements"
      accentColor="#dc2626"
    >
      <div style={{padding: '32px'}}>
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
      </div>
    </FullscreenShell>,
    document.body
  );
}

/**
 * Site III IPQA Improvements Modal
 */
export function Site3ImprovementsModal({ isOpen, onClose, onMilestonesClick, onParticleCountClick }) {
  if (!isOpen) return null;

  const completedInitiatives = [
    { icon: '🤝', title: 'Monthly huddles with MG, QC & MN', desc: 'Review rejections/challenges with actions locked each month.', isClickable: true },
    { icon: '👀', title: 'Shopfloor observation loop', desc: 'Every 15 days: on-floor walks to surface issues early.', highlight: 'Reduced Process incidents from 34 to 21 (Nos).' },
    { icon: '📄', title: 'On-floor work instructions', desc: 'Live, visual SOPs at point-of-use to reduce ambiguity.' },
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
            <div style={{fontSize: '3em', fontWeight: '900', color: '#059669', marginBottom: '4px'}}>7</div>
            <div style={{fontSize: '0.95em', fontWeight: '700', color: '#047857', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Completed</div>
            <div style={{fontSize: '0.8em', color: '#065f46', marginTop: '4px', fontWeight: '500'}}>Successfully Implemented</div>
          </div>
          <div style={{background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', borderRadius: '16px', padding: '20px', border: '2px solid #3b82f6'}}>
            <div style={{fontSize: '3em', fontWeight: '900', color: '#2563eb', marginBottom: '4px'}}>3</div>
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
              { icon: '📊', title: 'Defect Rate Setting', completion: 65, desc: 'Aligning limits to recent defect learnings.' },
              { icon: '📋', title: 'Limit Sample Register', completion: 45, desc: 'Digital log to tighten sampling traceability.' },
              { icon: '📱', title: 'QR Scanning Software', completion: 50, desc: 'App build to reduce manual QR errors.' }
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
                  
                  <div style={{fontSize: '0.85em', fontWeight: '700', color: '#2563eb', background: '#eff6ff', padding: '4px 8px', borderRadius: '6px', display: 'inline-block'}}>{item.completion}% Complete</div>
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
    { icon: '🧪', title: 'QA-controlled primer probe sampling', desc: 'Sampling moved fully under QA oversight to tighten control.' },
    { icon: '🛡️', title: 'Stronger incoming gate', desc: 'Stringent incoming sampling now catches non-conformance at chip entry.' },
    { icon: '⚡', title: 'Flashwriting device learnings', desc: 'Repeated incidents surfaced weak pogo pins; verification now flags them early.' },
    { icon: '📦', title: 'Pouching mix-up prevention', desc: 'Tighter IPQA verification reduced pouch/chip mixups during pouching.' },
    { icon: '🏷️', title: 'Label verification at sleeves', desc: 'Checks added at chip insertion to stop misprints and mixed labels from user dept.' },
    { icon: '🛡️', title: 'Foil protection on trays', desc: 'Aluminium foil now shields trays from activated filter tip contamination.' },
    { icon: '✅', title: 'Broader in-process checks', desc: 'Covers arrangement, washing, volume checks (BSA/secondary coat), tube sorting, and MM filling.' }
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
