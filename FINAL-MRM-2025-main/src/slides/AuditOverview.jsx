import { useState } from 'react';
import { createPortal } from 'react-dom';

const auditData = {
  siteI: {
    name: 'Site I',
    color: '#f59e0b',
    firstAudit: { NC: 0, MNC: 7, PI: 7 },
    secondAudit: { NC: 1, MNC: 2, PI: 3 },
    findings: {
      NC: [
        "Uncontrolled Disposal: The shredding machine was found to contain evidence of the following documents without having any documented evidence of shredding in the logbook (Flat/QA/195): Released documents (been label), Sample labels, Controlled documents. Document controlled copy distribution list form was verified, wherein it was observed that document ID: SOP/PK/001 and many other documents entry were made as destroyed but entries of the same were found missing in the Log of shredder machine (FM/QA/195)",
        "Document controlled copy distribution list form was reviewed, wherein it is observed that new controlled copies were issued to the user department without retrieving the obsolete copy."
      ],
      MNC: [
        "Sampling Log entry (FM/QA/178) was accessed using the QA mail ID, and it was observed that the entire log was editable. The QA department had editing access to all the columns controlled under this format. This deviates from point no. 3.4 under SOP/QA/029 that restricts QA from editing the columns controlled by the user department."
      ],
      PI: [
        "Line clearance and Verification of Manufacturing and Packing do not mandate verification of SAP transactions, which is critical in batch manufacturing activity. The checklist of line clearance does not mention verification of Calculation used for batches, making it an optional verification step.",
        "SGP/QA/039 Point no. 1.2 mentions that Along with the URS, user need to fill the GxP Assessment (which shall be dully filled and reviewed by the concerned stakeholders) as per format layout FM/QA/168. In the same SOP it is defined that URS is a basic document that outlines the User specific requirement only, based on which the Purchase team arranges for Quotation from the relevant Vendors. The user is not aware of the Make, brand, software requirements or any other details of the equipment at the time of making the URS. However, while making the GxP, it is important to know all the details pertaining to the equipment, including the Software requirements, its criticality, validation requirements, etc. Making the GxP at the time of URS means that the user is assuming the details and filling the GxP without having any technical knowledge about the equipment to be procured. This may lead to having the wrong GxP assessment done, impacting the decision-making of the DI-VL team. This contradiction is defined in the SOP/QA/039.",
        "During the review of the BD controlled copy distribution list logbook, instances of overwriting were observed, which is not in line with GDP requirements. During the review of the MR controlled-copy distribution list logbook, one of the columns was found to have a missing entry."
      ]
    }
  },
  siteIII: {
    name: 'Site III',
    color: '#8b5cf6',
    firstAudit: { NC: 1, MNC: 2, PI: 6 },
    secondAudit: { NC: 0, MNC: 2, PI: 1 },
    findings: {
      MNC: [
        "In document and Record Control SOP/QA/007-08 in the procedure section, point number A1.1 company name is mentioned as Molbio Diagnostics Private Limited, and old revision Molbio Logo is present in the procedure section, But in the Amendment details section, it is mentioned as company name and logo updated wherever applicable",
        "Assembly of Extraction Device Master File ID: DMF/AE/22/07 effective date: 21/07/2025 in List of Bill of materials, instead of part number, part name was mentioned for the following materials motor mounting screw, valve motor plate, battery 7.4V, 9.6Ah to 10.05 Ah. Approved bill of materials document not available for assembly of Extraction Device Master File ID: DMF/AE/22/07"
      ],
      PI: [
        "There is no procedure to control the part drawings. During the audit the part drawings were shown in google drive."
      ]
    }
  },
  siteV: {
    name: 'Site V',
    color: '#0ea5e9',
    firstAudit: { NC: 1, MNC: 1, PI: 2 },
    secondAudit: { NC: 0, MNC: 4, PI: 1 },
    findings: {
      MNC: [
        "During the shop-floor IPQA visit, the ZPM calendar was checked for calibration status. It was noted that the M/5/0003/TS-01 sealing machine in Assembly Room 2 had calibration due on 16/11/2025. The machine was calibrated, but the corresponding calibration order was not yet closed in SAP at the time of verification.",
        "During the shop-floor IPQA visit FM/QA/007-02 (Issuance of Authorized Copy) dated 24/11/25 was verified, wherein it was observed that Format number FM/HR/010, rev. no. 01, copy no. 01 was issued with the evidence of issuance by signature, but on said format issued to entries are missing. Moreover, the concerned person failed to show the format if the same was not issued.",
        "A. During shop-floor IPQA visit: Training attendance sheet, which was issued on 24/11/25 (01 Copy) was found without executing, even-though IPQA team was having additional two copies of same format issued on 18/11/25 and 22/11/25. Need to have proper control on issuance of additional copies and destruction of copies post 7 days of usage limit B. During shop-floor IPQA visit: Advice for the material/Product was found initiated by the store department on 05/11/25 without any received by traceability and reason for delay in case of any quality event. Team is advised to incorporate procedural control, for the same is sampling is not initiated after a set time frame. C. During the shop-floor IPQA visit Two copies of Format no. FM/HR/027-01 was found without any issue by sign and date. However, the stamp was available on the same. D. During shop-floor IPQA visit one copy of Format no. FM/HR/010-01 was found issued on 23/10/25 without any issued by sign. E. During shop-floor IPQA visit Format no. FM/QA/207 was verified, wherein following noncompliances were observed. Multiple entries were found wherein the returned by and date traceability is missing; moreover, traceability of the received by is available. Many equipment was calibrated and received but returned and received by data was missing",
        "A. Calibration labels from a third-party vendor for equipment W/EQID/-00516, M/EQID/-00517, and W/EQID/-00518 (All three digital hygrometers used in Truenat sections) were found in the rack used by IPQA. The calibration was done on 23/10/2025. The equipment bearing the IDs was verified. It was found that the equipment had the calibration labels from the same 3rd party vendor dated 24/10/2025. It was noted that the vendor made a mistake while writing dates and hence duplicated the labels with correct dates; however, the wrong ones were not retrieved or destroyed by the IPQA and were maintained with them. The incident reports unauthorized duplication of data leading to confusion in calibration details. B. Calibration labels for Weighing balance with serial numbers 14247174, 2102415346A5000416 were found in the rack used by IPQA. The calibration was completed in May 2025; however, labels were not pasted on the equipment. It was noted that the labels arrived late from the vendor, and hence the label was internally made and put on the equipment. There is no defined process/timeline to use/discard these labels, leading to misuse by the unauthorized personnel."
      ],
      PI: [
        "The format for identification and traceability of labels was verified. The format containing all the labels controlled under the QA department is referred to by IPQA before printing the labels. It is noted that the list does not control the revision number of the format or labels, potentially leading to printing an obsolete revision of the label. Further investigation revealed that there is no controlled process to delete the older revisions from all the IPQA PCs once the new revision is mastered."
      ]
    }
  }
};

export default function AuditOverview() {
  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fullscreenSite, setFullscreenSite] = useState(null);

  const sites = [auditData.siteI, auditData.siteIII, auditData.siteV];

  // Calculate totals and improvements
  const calculateTotals = () => {
    const firstTotal = { NC: 0, MNC: 0, PI: 0 };
    const secondTotal = { NC: 0, MNC: 0, PI: 0 };
    
    sites.forEach(site => {
      firstTotal.NC += site.firstAudit.NC;
      firstTotal.MNC += site.firstAudit.MNC;
      firstTotal.PI += site.firstAudit.PI;
      secondTotal.NC += site.secondAudit.NC;
      secondTotal.MNC += site.secondAudit.MNC;
      secondTotal.PI += site.secondAudit.PI;
    });

    const improvement = {
      NC: firstTotal.NC - secondTotal.NC,
      MNC: firstTotal.MNC - secondTotal.MNC,
      PI: firstTotal.PI - secondTotal.PI,
      NCPercent: firstTotal.NC > 0 ? Math.round(((firstTotal.NC - secondTotal.NC) / firstTotal.NC) * 100) : 0,
      MNCPercent: firstTotal.MNC > 0 ? Math.round(((firstTotal.MNC - secondTotal.MNC) / firstTotal.MNC) * 100) : 0,
      PIPercent: firstTotal.PI > 0 ? Math.round(((firstTotal.PI - secondTotal.PI) / firstTotal.PI) * 100) : 0
    };

    return { firstTotal, secondTotal, improvement };
  };

  const { firstTotal, secondTotal, improvement } = calculateTotals();
  const totalIssuesFirst = firstTotal.NC + firstTotal.MNC + firstTotal.PI;
  const totalIssuesSecond = secondTotal.NC + secondTotal.MNC + secondTotal.PI;
  const overallImprovement = totalIssuesFirst > 0 
    ? Math.round(((totalIssuesFirst - totalIssuesSecond) / totalIssuesFirst) * 100)
    : 0;

  return (
    <>
    {fullscreenSite && createPortal(
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
        zIndex: 9999,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Fullscreen Header */}
        <div style={{
          padding: '12px 20px',
          background: `linear-gradient(135deg, ${fullscreenSite.color} 0%, ${fullscreenSite.color}dd 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <h2 style={{
            fontSize: '2.4rem',
            fontWeight: 900,
            color: '#ffffff',
            margin: 0
          }}>
            {fullscreenSite.name} - Audit Details
          </h2>
          <button
            onClick={() => {
              setFullscreenSite(null);
              setSelectedCategory(null);
            }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              border: 'none',
              background: 'rgba(255,255,255,0.25)',
              color: '#ffffff',
              fontSize: '1.4rem',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transition: 'all 0.2s',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Fullscreen Content */}
        <div style={{ padding: '16px 20px', flex: 1 }}>
          {/* Findings Section */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '16px',
            border: '2px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
          }}>
            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: 900,
              color: fullscreenSite.color,
              marginBottom: '14px',
              textAlign: 'center'
            }}>
              📋 Audit Findings
            </h3>

            {/* Category Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NC', 'MNC', 'PI'].map(cat => {
                const findings = fullscreenSite.findings[cat] || [];
                if (findings.length === 0) return null;
                
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    style={{
                      padding: '8px 14px',
                      background: selectedCategory === cat 
                        ? (cat === 'NC' ? '#dc2626' : cat === 'MNC' ? '#f59e0b' : '#3b82f6')
                        : '#ffffff',
                      color: selectedCategory === cat ? '#ffffff' : '#64748b',
                      border: `2px solid ${cat === 'NC' ? '#dc2626' : cat === 'MNC' ? '#f59e0b' : '#3b82f6'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      transition: 'all 0.2s',
                      boxShadow: selectedCategory === cat ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
                    }}
                  >
                    {cat} ({findings.length})
                  </button>
                );
              })}
            </div>

            {/* Findings List */}
            {selectedCategory && (
              <div style={{ marginTop: '14px' }}>
                {(fullscreenSite.findings[selectedCategory] || []).map((finding, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      marginBottom: '10px',
                      fontSize: '1.4rem',
                      lineHeight: '1.5',
                      color: '#334155'
                    }}
                  >
                    <span style={{ fontWeight: 900, color: fullscreenSite.color, fontSize: '1.6rem' }}>{idx + 1}. </span>
                    {finding}
                  </div>
                ))}
              </div>
            )}

            {!selectedCategory && (
              <div style={{
                padding: '30px',
                textAlign: 'center',
                color: '#94a3b8',
                fontSize: '1.6rem',
                fontWeight: 600
              }}>
                👆 Select a category above to view findings
              </div>
            )}
          </div>
        </div>
      </div>,
      document.body
    )}
    <section data-background-color="#f8fafc" style={{ padding: 0, margin: 0 }}>
      <div style={{
        width: '100%',
        minHeight: '100vh',
        padding: '0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
      }}>
        
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
          padding: '12px 0',
          borderRadius: '0',
          margin: '0 0 8px 0',
          boxShadow: 'none'
        }}>
          <h1 style={{
            fontSize: '2.6rem',
            fontWeight: 900,
            color: '#ffffff',
            margin: 0,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1.25px'
          }}>
            📊 Audit Overview
          </h1>
        </div>

        {/* Overall Summary Cards - Projector Friendly */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
            border: '4px solid #ef4444',
            borderRadius: '14px',
            padding: '8px',
            textAlign: 'center',
            boxShadow: '0 6px 16px rgba(239, 68, 68, 0.25)'
          }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#991b1b', marginBottom: '6px' }}>
              Total Issues (1st Audit)
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#dc2626', letterSpacing: '1px' }}>
              {totalIssuesFirst}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
            border: '4px solid #10b981',
            borderRadius: '14px',
            padding: '8px',
            textAlign: 'center',
            boxShadow: '0 6px 16px rgba(16, 185, 129, 0.25)'
          }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#065f46', marginBottom: '6px' }}>
              Total Issues (2nd Audit)
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#059669', letterSpacing: '1px' }}>
              {totalIssuesSecond}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          
          {/* Left: Site Comparison */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '12px',
            border: '2px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <h3 style={{
              fontSize: '2.4rem',
              fontWeight: 900,
              color: '#0ea5e9',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              📍 Site-wise Performance
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(360px, 1fr))',
              gap: '10px',
              paddingRight: '8px',
              paddingBottom: '8px'
            }}>
              {sites.map((site, idx) => {
                const siteTotal1 = site.firstAudit.NC + site.firstAudit.MNC + site.firstAudit.PI;
                const siteTotal2 = site.secondAudit.NC + site.secondAudit.MNC + site.secondAudit.PI;
                const siteImprovement = siteTotal1 > 0 
                  ? Math.round(((siteTotal1 - siteTotal2) / siteTotal1) * 100)
                  : 0;

                return (
                  <div
                    key={idx}
                    onClick={() => setFullscreenSite(site)}
                    style={{
                      position: 'relative',
                      marginBottom: 0,
                      padding: '10px',
                      background: selectedSite === site.name 
                        ? `linear-gradient(135deg, ${site.color}25 0%, ${site.color}12 100%)`
                        : `linear-gradient(135deg, ${site.color}15 0%, ${site.color}08 100%)`,
                      border: `2px solid ${selectedSite === site.name ? site.color : '#e2e8f0'}`,
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: selectedSite === site.name 
                        ? `0 4px 12px ${site.color}30`
                        : '0 2px 6px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div style={{
                      fontSize: '2.8rem',
                      fontWeight: 900,
                      color: site.color,
                      marginBottom: '10px'
                    }}>
                      {site.name}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', alignItems: 'start', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ fontSize: '2rem', color: '#64748b', fontWeight: 800, marginBottom: '4px' }}>
                          🔴 1st Audit
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '2.2rem', fontWeight: 900 }}>
                          <span style={{ color: '#dc2626', background: '#fee2e2', padding: '6px 10px', borderRadius: '8px' }}>NC: {site.firstAudit.NC}</span>
                          <span style={{ color: '#f59e0b', background: '#fef3c7', padding: '6px 10px', borderRadius: '8px' }}>MNC: {site.firstAudit.MNC}</span>
                          <span style={{ color: '#3b82f6', background: '#eff6ff', padding: '6px 10px', borderRadius: '8px' }}>PI: {site.firstAudit.PI}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '2px dashed #e2e8f0', paddingLeft: '8px' }}>
                        <div style={{ fontSize: '2rem', color: '#64748b', fontWeight: 800, marginBottom: '4px' }}>
                          🟢 2nd Audit
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '2.2rem', fontWeight: 900 }}>
                          <span style={{ color: '#10b981', background: '#dcfce7', padding: '6px 10px', borderRadius: '8px' }}>NC: {site.secondAudit.NC}</span>
                          <span style={{ color: '#f59e0b', background: '#fef3c7', padding: '6px 10px', borderRadius: '8px' }}>MNC: {site.secondAudit.MNC}</span>
                          <span style={{ color: '#3b82f6', background: '#eff6ff', padding: '6px 10px', borderRadius: '8px' }}>PI: {site.secondAudit.PI}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      padding: '6px 10px',
                      borderRadius: '9999px',
                      background: siteImprovement >= 0 ? '#dcfce7' : '#fee2e2',
                      color: siteImprovement >= 0 ? '#059669' : '#dc2626',
                      fontWeight: 900,
                      fontSize: '2.2rem'
                    }}>
                      📈 {siteImprovement}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comparative Analysis - Full Width */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '12px',
            border: '2px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
              <h3 style={{
                fontSize: '2.4rem',
                fontWeight: 900,
                color: '#0ea5e9',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                📊 Comparative Analysis
              </h3>
              {/* Comparison Bar Charts */}
              <div style={{ marginBottom: '0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {/* NC Comparison */}
                <div style={{
                  padding: '16px',
                  background: '#fef2f2',
                  borderRadius: '10px',
                  border: '3px solid #dc2626'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#991b1b', marginBottom: '10px', textAlign: 'center' }}>
                    Non-Conformities (NC)
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '200px', marginBottom: '8px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '50px',
                        height: `${(firstTotal.NC / Math.max(firstTotal.NC, secondTotal.NC, 1)) * 150}px`,
                        background: '#dc2626',
                        borderRadius: '6px 6px 0 0',
                        margin: '0 auto'
                      }}></div>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: '#991b1b', marginTop: '6px' }}>
                        1st: {firstTotal.NC}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '50px',
                        height: `${(secondTotal.NC / Math.max(firstTotal.NC, secondTotal.NC, 1)) * 150}px`,
                        background: '#10b981',
                        borderRadius: '6px 6px 0 0',
                        margin: '0 auto'
                      }}></div>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: '#065f46', marginTop: '6px' }}>
                        2nd: {secondTotal.NC}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    padding: '6px',
                    background: improvement.NC > 0 ? '#dcfce7' : '#fef3c7',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      color: improvement.NC > 0 ? '#059669' : '#d97706'
                    }}>
                      {improvement.NC > 0 ? '↓' : '↑'} {Math.abs(improvement.NCPercent)}%
                    </span>
                  </div>
                </div>

                {/* MNC Comparison */}
                <div style={{
                  padding: '16px',
                  background: '#fffbeb',
                  borderRadius: '10px',
                  border: '3px solid #f59e0b'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#92400e', marginBottom: '10px', textAlign: 'center' }}>
                    Minor NC (MNC)
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '200px', marginBottom: '8px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '50px',
                        height: `${(firstTotal.MNC / Math.max(firstTotal.MNC, secondTotal.MNC, 1)) * 150}px`,
                        background: '#f59e0b',
                        borderRadius: '6px 6px 0 0',
                        margin: '0 auto'
                      }}></div>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: '#92400e', marginTop: '6px' }}>
                        1st: {firstTotal.MNC}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '50px',
                        height: `${(secondTotal.MNC / Math.max(firstTotal.MNC, secondTotal.MNC, 1)) * 150}px`,
                        background: '#10b981',
                        borderRadius: '6px 6px 0 0',
                        margin: '0 auto'
                      }}></div>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: '#065f46', marginTop: '6px' }}>
                        2nd: {secondTotal.MNC}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    padding: '6px',
                    background: improvement.MNC > 0 ? '#dcfce7' : '#fef3c7',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      color: improvement.MNC > 0 ? '#059669' : '#d97706'
                    }}>
                      {improvement.MNC > 0 ? '↓' : '↑'} {Math.abs(improvement.MNCPercent)}%
                    </span>
                  </div>
                </div>

                {/* PI Comparison */}
                <div style={{
                  padding: '16px',
                  background: '#eff6ff',
                  borderRadius: '10px',
                  border: '3px solid #3b82f6'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af', marginBottom: '10px', textAlign: 'center' }}>
                    Process Improvements (PI)
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '200px', marginBottom: '8px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '50px',
                        height: `${(firstTotal.PI / Math.max(firstTotal.PI, secondTotal.PI, 1)) * 150}px`,
                        background: '#3b82f6',
                        borderRadius: '6px 6px 0 0',
                        margin: '0 auto'
                      }}></div>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: '#1e40af', marginTop: '6px' }}>
                        1st: {firstTotal.PI}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '50px',
                        height: `${(secondTotal.PI / Math.max(firstTotal.PI, secondTotal.PI, 1)) * 150}px`,
                        background: '#10b981',
                        borderRadius: '6px 6px 0 0',
                        margin: '0 auto'
                      }}></div>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: '#065f46', marginTop: '6px' }}>
                        2nd: {secondTotal.PI}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    padding: '6px',
                    background: improvement.PI > 0 ? '#dcfce7' : '#fef3c7',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      color: improvement.PI > 0 ? '#059669' : '#d97706'
                    }}>
                      {improvement.PI > 0 ? '↓' : '↑'} {Math.abs(improvement.PIPercent)}%
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}
