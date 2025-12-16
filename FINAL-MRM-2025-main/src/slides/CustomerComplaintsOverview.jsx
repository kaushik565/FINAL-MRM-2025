import React, { useMemo } from 'react'

export default function CustomerComplaintsOverview() {
  // Customer Complaint Data
  const complaintsData = [
    { id: 'CU/III/25/002', serial: 'TLQU2124', issue: 'Paint peel off issue on chasis', rootCause: 'Lack of awareness of QC peronnel and improper handly of MD personnel' },
    { id: 'CU/III/25/002', serial: 'TLQU2626', issue: 'Paint peel off issue on chasis', rootCause: 'Lack of awareness of QC peronnel and improper handly of MD personnel' },
    { id: 'CU/III/25/002', serial: 'TLQU2222', issue: 'Paint peel off issue on chasis', rootCause: 'Lack of awareness of QC peronnel and improper handly of MD personnel' },
    { id: 'CU/III/25/002', serial: 'TLQU2743', issue: 'Paint peel off issue on chasis', rootCause: 'Lack of awareness of QC peronnel and improper handly of MD personnel' },
    { id: 'CU/III/25/002', serial: 'TLQU2799', issue: 'Paint peel off issue on chasis', rootCause: 'Lack of awareness of QC peronnel and improper handly of MD personnel' },
    { id: 'CU/III/25/002', serial: 'TLQU6614', issue: 'Chip aborted in Bay 4', rootCause: 'J13 CB to J2 CC cable crimping damage' },
    { id: 'CU/III/25/002', serial: 'TLQU6541', issue: 'Bay 1 red optics ND', rootCause: 'customer end improper mixing of master mox and Buffer solution' },
    { id: 'CU/III/25/002', serial: 'TLQU6599', issue: 'Bay 1 Blue optics starts from 8', rootCause: 'Re FQC' },
    { id: 'CU/III/25/002', serial: 'TLQU6580', issue: 'Screw found inside Bay 1', rootCause: 'Issue not observed' },
    { id: 'CU/III/25/002', serial: 'TLQU6586', issue: 'Brightness sopt on display', rootCause: 'Due to LUX level in the inspection room' },
    { id: 'CU/III/25/002', serial: 'TLQU6588', issue: 'Display flickering and bay 4 not visible', rootCause: 'Issue not obsrved' },
    { id: 'CU/III/25/002', serial: 'TLQU6644', issue: 'Not connecting to WIFI', rootCause: 'RF cable internal damage' },
    { id: 'CU/III/25/002', serial: 'TLQU6647', issue: 'Graphs not proper and bay 1 tray alignment not proper', rootCause: 'Tray alignment was not proper' },
    { id: 'CU/III/25/010', serial: 'TLDU7283', issue: 'Not connected to network', rootCause: 'Due to improper handling' },
    { id: 'CU/III/25/010', serial: 'TLDU7377', issue: 'Paint peel off and screw issue of top cover', rootCause: 'No defined criteria of defects' },
    { id: 'CU/III/25/010', serial: 'TLDU7288', issue: 'AFC test Fail', rootCause: 'Defect not found' },
    { id: 'CU/III/25/010', serial: 'TLDU7436', issue: 'Not able to insert sim card', rootCause: 'Not aware of the activity of the process' },
    { id: 'CU/III/25/010', serial: 'TLDU7442', issue: 'B-2 Chip carrier body jerking', rootCause: 'Due to improper alignment between pinion and chip carrier body' },
    { id: 'CU/III/25/010', serial: 'TLDU7434', issue: 'Not able to remove the screw for optics tuning', rootCause: 'no awareness to site IV' },
    { id: 'CU/III/25/010', serial: 'TLDU7297', issue: 'bay 2 blue optics showing ND', rootCause: 'Not able to identify with bare eyes' },
    { id: 'CU/III/25/010', serial: 'TLDU7431', issue: 'Two USB ports are not working', rootCause: 'due to dry solder' },
    { id: 'CU/III/25/010', serial: 'TLDU7448', issue: 'Bay 2 Blue optics tuning value out of range', rootCause: 'Not identifed' },
    { id: 'CU/III/25/010', serial: 'TLDU7425', issue: 'Not able to remove the screw', rootCause: 'no awareness to site IV' },
    { id: 'CU/III/25/010', serial: 'TLDU7302', issue: 'Not able to remove the screw', rootCause: 'no awareness to site IV' },
    { id: 'CU/III/25/010', serial: 'TLDU7070', issue: 'Gap between top plate and bottom cover', rootCause: 'there is criteria for Gap' },
    { id: 'CU/III/25/010', serial: 'TLDU7497', issue: 'While tuning blue LED has flickering', rootCause: 'Blue LED PCB damage' },
    { id: 'CU/III/25/010', serial: 'TLDU7502', issue: 'Blue optics value not increasing', rootCause: 'no awareness to site IV' },
    { id: 'CU/III/25/010', serial: 'TLDU7574', issue: 'Bay 2 Blue LED is not increasing while tuning', rootCause: 'Blue LED PCB not working' },
    { id: 'CU/III/25/010', serial: 'TLDU7620', issue: 'Bay 1 red LED is not increasing', rootCause: 'LED PCB damage' },
    { id: 'CU/III/25/010', serial: 'TLDU7578', issue: 'Bay 1 Red LED is not increasing', rootCause: 'No point in IQC' },
    { id: 'CU/III/25/010', serial: 'TLDU7524', issue: 'Device turns ON only when charger connected', rootCause: 'Unknown' },
    { id: 'CU/III/25/010', serial: 'TLDU7522', issue: 'Device turns ON only when charger connected', rootCause: 'Lack of awareness' },
    { id: 'CU/III/25/010', serial: 'TLQU6702', issue: 'IMEI number not matching with the Software', rootCause: 'Overlooked' },
    { id: 'CU/III/25/010', serial: 'TLQU6707', issue: 'Screw M3x20 SHCS different from top cover fixing', rootCause: 'No checkpoint in IQC' },
    { id: 'CU/III/25/008', serial: 'TLQU6624', issue: 'Wifi not connecting', rootCause: 'SBC iisue' },
    { id: 'CU/III/25/008', serial: 'TLQU6555', issue: 'Brightness stop on the left sid eof the display', rootCause: 'Defective densitron display' },
    { id: 'CU/III/25/008', serial: 'TLQU6662', issue: 'Display alignment is not proper', rootCause: 'Lack of knowledge on assembly' },
    { id: 'CU/III/25/008', serial: 'TLQU6628', issue: 'Stuck at 4th cycle during AFC run', rootCause: 'SBC expansion PCB 1.1 issue and due to improper PPE' },
    { id: 'CU/III/25/008', serial: 'TLQU2344', issue: 'scratches observed on the chasis', rootCause: 'No criteria for accepting rejecting the devices mentioned in SOP' },
    { id: 'CU/III/25/008', serial: 'TLDU7070', issue: 'Display goes off while running AFC test', rootCause: 'issue with SBC expansion PCB 1.1 materail' },
    { id: 'CU/III/25/008', serial: 'TLDU7092', issue: 'Bay 1 blue optics showing ND', rootCause: 'under deviation, this device went to customer with AFC and dye testing' },
    { id: 'CU/III/25/008', serial: 'TLDU7144', issue: 'Hanging issue', rootCause: 'Improper assembly of cable crimping' }
  ]

  // Metrics & Analysis
  const metrics = useMemo(() => {
    const total = complaintsData.length
    const uniqueComplaints = new Set(complaintsData.map(c => c.id)).size
    const uniqueDevices = new Set(complaintsData.map(c => c.serial)).size
    
    // Issue analysis
    const issueTypes = {}
    complaintsData.forEach(c => {
      issueTypes[c.issue] = (issueTypes[c.issue] || 0) + 1
    })
    const topIssues = Object.entries(issueTypes).sort((a, b) => b[1] - a[1]).slice(0, 5)
    
    // Root cause analysis
    const rootCauseTypes = {}
    complaintsData.forEach(c => {
      const cause = c.rootCause.toLowerCase()
      if (cause.includes('awareness') || cause.includes('aware')) {
        rootCauseTypes['Lack of Awareness/Training'] = (rootCauseTypes['Lack of Awareness/Training'] || 0) + 1
      } else if (cause.includes('pcb') || cause.includes('damage') || cause.includes('defect')) {
        rootCauseTypes['Hardware/Component Defect'] = (rootCauseTypes['Hardware/Component Defect'] || 0) + 1
      } else if (cause.includes('improper') || cause.includes('handling') || cause.includes('assembly')) {
        rootCauseTypes['Improper Handling/Assembly'] = (rootCauseTypes['Improper Handling/Assembly'] || 0) + 1
      } else if (cause.includes('not found') || cause.includes('not observed') || cause.includes('not identif')) {
        rootCauseTypes['Not Identified/Unknown'] = (rootCauseTypes['Not Identified/Unknown'] || 0) + 1
      } else {
        rootCauseTypes['Other'] = (rootCauseTypes['Other'] || 0) + 1
      }
    })
    
    // Complaint ID distribution
    const complaintIdDist = {}
    complaintsData.forEach(c => {
      complaintIdDist[c.id] = (complaintIdDist[c.id] || 0) + 1
    })
    
    // Component/part analysis
    const componentIssues = {}
    complaintsData.forEach(c => {
      if (c.issue.includes('Paint') || c.issue.includes('Brightness') || c.issue.includes('scratches')) {
        componentIssues['Paint/Chassis/Surface'] = (componentIssues['Paint/Chassis/Surface'] || 0) + 1
      } else if (c.issue.includes('optic') || c.issue.includes('LED')) {
        componentIssues['Optics/LED'] = (componentIssues['Optics/LED'] || 0) + 1
      } else if (c.issue.includes('Display') || c.issue.includes('Brightness')) {
        componentIssues['Display'] = (componentIssues['Display'] || 0) + 1
      } else if (c.issue.includes('screw') || c.issue.includes('USB') || c.issue.includes('cable')) {
        componentIssues['Fasteners/Connectors'] = (componentIssues['Fasteners/Connectors'] || 0) + 1
      } else if (c.issue.includes('Bay') || c.issue.includes('chip')) {
        componentIssues['Bay/Chip Carrier'] = (componentIssues['Bay/Chip Carrier'] || 0) + 1
      } else if (c.issue.includes('WIFI') || c.issue.includes('network') || c.issue.includes('SBC')) {
        componentIssues['Electronics/Connectivity'] = (componentIssues['Electronics/Connectivity'] || 0) + 1
      } else {
        componentIssues['Other'] = (componentIssues['Other'] || 0) + 1
      }
    })
    
    return { total, uniqueComplaints, uniqueDevices, topIssues, rootCauseTypes, complaintIdDist, componentIssues }
  }, [])

  return (
    <section
      className="content-slide"
      data-state="customer-complaints-overview"
      style={{
        paddingTop: '30px',
        paddingBottom: '30px',
        background: '#ffffff',
        color: '#0f172a',
        overflowY: 'auto',
        height: '100%'
      }}
    >
      {/* Header Section */}
      <div style={{ marginBottom: '28px', position: 'relative', paddingX: '30px' }}>
        <h2 style={{
          fontSize: '2.8em',
          fontWeight: 900,
          color: '#111827',
          marginBottom: '8px',
          marginTop: 0,
          letterSpacing: '-0.02em'
        }}>
          Customer Complaints Overview
        </h2>
        <div style={{
          height: '6px',
          background: 'linear-gradient(90deg, #059669, #8b5cf6, #0ea5e9)',
          borderRadius: '3px',
          width: '280px',
          marginBottom: '16px'
        }} />
      </div>

      {/* Top Metrics Cards - ENLARGED */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px', marginBottom: '28px', paddingX: '30px' }}>
        {[
          { label: 'Total Complaints', value: metrics.total, color: '#ef4444', bgColor: '#fef2f2' },
          { label: 'Unique Complaint IDs', value: metrics.uniqueComplaints, color: '#f59e0b', bgColor: '#fffbeb' },
          { label: 'Affected Devices', value: metrics.uniqueDevices, color: '#8b5cf6', bgColor: '#faf5ff' },
          { label: 'Issue Types', value: Object.keys(metrics.componentIssues).length, color: '#0ea5e9', bgColor: '#f0f9ff' }
        ].map((card, idx) => (
          <div key={idx} style={{
            background: card.bgColor,
            border: `3px solid ${card.color}40`,
            borderRadius: '16px',
            padding: '22px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#64748b', marginBottom: 8 }}>
              {card.label}
            </div>
            <div style={{ fontSize: '2.8rem', fontWeight: 950, color: card.color, lineHeight: 1 }}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      {/* Analysis Section - Two Columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px', paddingX: '30px' }}>
        {/* Top Issues */}
        <div style={{
          background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
          border: '3px solid #ef444440',
          borderRadius: '18px',
          padding: '22px',
          boxShadow: '0 6px 16px rgba(239,68,68,0.1)'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#991b1b', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🔴 Top Issues (Most Frequent)
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {metrics.topIssues.map((issue, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '2px solid #fecaca',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '1.05rem', color: '#111827', fontWeight: 700, flex: 1 }}>
                  {issue[0]}
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 950, color: '#ef4444', minWidth: '50px', textAlign: 'right' }}>
                  {issue[1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Root Cause Breakdown */}
        <div style={{
          background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
          border: '3px solid #f59e0b40',
          borderRadius: '18px',
          padding: '22px',
          boxShadow: '0 6px 16px rgba(245,158,11,0.1)'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#92400e', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🎯 Root Cause Categories
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {Object.entries(metrics.rootCauseTypes)
              .sort((a, b) => b[1] - a[1])
              .map((cause, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '2px solid #fcd34d',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '1.05rem', color: '#111827', fontWeight: 700, flex: 1 }}>
                    {cause[0]}
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 950, color: '#f59e0b', minWidth: '50px', textAlign: 'right' }}>
                    {cause[1]}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Component/Part Analysis */}
      <div style={{
        background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
        border: '3px solid #0ea5e940',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '28px',
        marginX: '30px',
        boxShadow: '0 6px 16px rgba(14,165,233,0.1)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0369a1', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          🔧 Components/Parts Most Affected
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {Object.entries(metrics.componentIssues)
            .sort((a, b) => b[1] - a[1])
            .map((comp, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                padding: '16px',
                borderRadius: '12px',
                border: '2px solid #7dd3fc',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 800, marginBottom: 6 }}>
                  {comp[0]}
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 950, color: '#0ea5e9' }}>
                  {comp[1]}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Complaint Distribution by ID */}
      <div style={{
        background: 'linear-gradient(135deg, #e9d5ff, #f3e8ff)',
        border: '3px solid #8b5cf640',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '28px',
        marginX: '30px',
        boxShadow: '0 6px 16px rgba(139,92,246,0.1)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#6b21a8', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          📊 Complaints by ID (Source)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {Object.entries(metrics.complaintIdDist)
            .sort((a, b) => b[1] - a[1])
            .map((id, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                padding: '16px',
                borderRadius: '12px',
                border: '2px solid #d8b4fe',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 800, marginBottom: 6, fontFamily: 'monospace' }}>
                  {id[0]}
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 950, color: '#8b5cf6' }}>
                  {id[1]}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#64748b', marginTop: 4, fontWeight: 600 }}>
                  {((id[1] / metrics.total) * 100).toFixed(0)}%
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Detailed Table - ENLARGED */}
      <div style={{
        background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
        border: '4px solid #0ea5e9',
        borderRadius: '20px',
        padding: '22px',
        marginBottom: '28px',
        marginX: '30px',
        boxShadow: '0 8px 24px rgba(14, 165, 233, 0.15)'
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0369a1', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          📋 Complete Complaint Details
        </div>
        <div style={{ overflowX: 'auto', maxHeight: '550px', overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.05rem' }}>
            <thead>
              <tr style={{ background: '#0ea5e9', color: '#fff', position: 'sticky', top: 0 }}>
                <th style={{ padding: '14px', textAlign: 'left', fontWeight: 900, borderRight: '2px solid #0369a1', fontSize: '1.1rem' }}>Complaint ID</th>
                <th style={{ padding: '14px', textAlign: 'left', fontWeight: 900, borderRight: '2px solid #0369a1', fontSize: '1.1rem' }}>Device Serial</th>
                <th style={{ padding: '14px', textAlign: 'left', fontWeight: 900, borderRight: '2px solid #0369a1', fontSize: '1.1rem' }}>Issue</th>
                <th style={{ padding: '14px', textAlign: 'left', fontWeight: 900, fontSize: '1.1rem' }}>Root Cause</th>
              </tr>
            </thead>
            <tbody>
              {complaintsData.map((complaint, idx) => (
                <tr key={idx} style={{
                  background: idx % 2 === 0 ? '#ffffff' : '#f0f9ff',
                  borderBottom: '2px solid #bae6fd',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#dbeafe' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = idx % 2 === 0 ? '#ffffff' : '#f0f9ff' }}>
                  <td style={{ padding: '12px', borderRight: '1px solid #bae6fd', fontWeight: 800, color: '#0369a1', fontSize: '1.05rem' }}>
                    {complaint.id}
                  </td>
                  <td style={{ padding: '12px', borderRight: '1px solid #bae6fd', color: '#111827', fontWeight: 700, fontSize: '1.05rem' }}>
                    {complaint.serial}
                  </td>
                  <td style={{ padding: '12px', borderRight: '1px solid #bae6fd', color: '#111827', fontSize: '1.05rem' }}>
                    {complaint.issue}
                  </td>
                  <td style={{ padding: '12px', color: '#475569', fontSize: '1rem' }}>
                    {complaint.rootCause}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}
