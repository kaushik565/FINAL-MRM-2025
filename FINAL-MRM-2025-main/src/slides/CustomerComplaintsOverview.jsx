import React, { useMemo } from 'react'

export const extractionComplaints = [
    { id: 'CU/III/24/001', serial: 'TPV22939B', issue: 'Cartridge error (elution) motor 2 rotates automatically', rootCause: 'ASED controller issue', activity: 'Mechanism' },
    { id: 'CU/III/24/001', serial: 'TPV23592B', issue: 'Device not turning ON without charger', rootCause: 'No RC identified', activity: 'Bottom cover, battery issue' },
    { id: 'CU/III/24/001', serial: 'TPV24156B', issue: 'Pressure drop fail on both side', rootCause: 'SOP needs to be revised', activity: 'Bottom cover, Mechanical lab' },
    { id: 'CU/III/24/001', serial: 'TPV24544B', issue: 'Reset card read error', rootCause: 'No RC identified', activity: 'Mechanism' },
    { id: 'CU/III/24/001', serial: 'TPV24539B', issue: 'Device not turning on during post QC dispense test', rootCause: 'Device kept without charging for a long time', activity: 'NA' },
    { id: 'CU/III/24/001', serial: 'TPV24596B', issue: 'No pressure drop at left and right nozzle', rootCause: 'SOP needs to be revised', activity: 'Mechanical sub assembly' },
    { id: 'CU/III/24/001', serial: 'TPV24605B', issue: 'Reset card read error', rootCause: 'No RC identified', activity: 'Mechanism' },
    { id: 'CU/III/24/001', serial: 'TPV24628B', issue: 'Wash A dispensing less output', rootCause: 'Air lock in the pump', activity: 'Manifold' },
    { id: 'CU/III/25/001', serial: 'TPV25076B', issue: 'Cartridge sensing error', rootCause: 'Limit switch PCB issue', activity: 'Mechanism' },
    { id: 'CU/III/25/001', serial: 'TPV25093B', issue: 'Screw present inside device', rootCause: 'Cable tie found inside the device', activity: 'Case closing' },
    { id: 'CU/III/25/001', serial: 'TPV24989B', issue: 'Reset card read error', rootCause: 'QR cable issue', activity: 'Bottom cover / Mechanism' },
    { id: 'CU/III/25/001', serial: 'TPV25033B', issue: 'Cartridge sensing error', rootCause: 'No RC identified', activity: 'Mechanism' },
    { id: 'CU/III/25/001', serial: 'TPV25036B', issue: 'Cartridge sensing error', rootCause: 'No RC identified', activity: 'Mechanism' },
    { id: 'CU/III/25/001', serial: 'TPV25040B', issue: 'Cartridge sensing error', rootCause: 'Limit switch PCB issue', activity: 'Mechanism' },
    { id: 'CU/III/25/001', serial: 'TPV25030B', issue: 'Reset card read error', rootCause: 'QR cable issue', activity: 'Bottom cover / Mechanism' },
    { id: 'CU/III/25/001', serial: 'TPV25067B', issue: 'Cartridge sensing error', rootCause: 'Limit switch PCB issue', activity: 'Mechanism' },
    { id: 'CU/III/25/005', serial: 'TPV24995B', issue: 'Device not turning ON without charger', rootCause: 'Battery issue', activity: 'Bottom cover' },
    { id: 'CU/III/25/005', serial: 'TPV23592B', issue: 'Device not turning ON without charger', rootCause: 'Battery issue', activity: 'Bottom cover' },
    { id: 'CU/III/25/005', serial: 'TPV24787B', issue: 'Device not turning ON without charger', rootCause: 'Battery issue', activity: 'Bottom cover' },
    { id: 'CU/III/25/006', serial: 'TPV25215B', issue: 'Loose screw present', rootCause: 'MD and QC personnel failed to verify screws tightened', activity: 'Mechanism' },
    { id: 'CU/III/25/006', serial: 'TPV25241B', issue: 'Door getting jammed', rootCause: 'Improper routing/ securing cable obstructing door movement', activity: 'Case closing' },
    { id: 'CU/III/25/006', serial: 'TPV25251B', issue: 'Cartridge not loading', rootCause: 'Limit switch pin improperly adjusted', activity: 'Mechanism' },
    { id: 'CU/III/25/006', serial: 'TPV25254B', issue: 'Cartridge not loading', rootCause: 'Limit switch pin improperly adjusted', activity: 'Mechanism' },
    { id: 'CU/III/25/006', serial: 'TPV25278B', issue: 'Line observed on display', rootCause: 'Improper crimping leading to bad pin contact', activity: 'Bottom cover' },
    { id: 'CU/III/25/006', serial: 'TPV25279B', issue: 'Spillage tray holder damaged', rootCause: 'Incorrect procedure / mishandled', activity: 'Case closing' },
    { id: 'CU/III/25/011', serial: 'TPV25180B', issue: 'Cartridge is not getting sensed', rootCause: 'Limit switch PCB misaligned due to play', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25175B', issue: 'Cartridge is not getting sensed', rootCause: 'Limit switch PCB misaligned due to play', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25115B', issue: 'Not dispensing any liquid', rootCause: 'L6 component damaged in ASED controller PCB 2.1', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25166B', issue: 'Not dispensing any liquid', rootCause: 'L6 component damaged in ASED controller PCB 2.1', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25339B', issue: 'Return not taking place during dispense test', rootCause: 'Air lock', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25150B', issue: 'Return not taking place during dispense test', rootCause: 'Air lock', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25119B', issue: 'Device turning off during extraction', rootCause: 'Faulty hybrid batteries', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25109B', issue: 'Vacuum test fail at right nozzle', rootCause: 'Vacuum leak at right filter', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25113B', issue: 'Lines seen on display when device turned on', rootCause: 'Display faulty', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26443B', issue: 'SBC not responding', rootCause: 'Image file corrupted in SD card', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26410B', issue: 'Dark spot on display sticker', rootCause: 'Spot on front panel sticker surface', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26288B', issue: 'Device door not locking', rootCause: 'No root cause identified', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26248B', issue: 'Device door not locking', rootCause: 'No root cause identified', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26322B', issue: 'Device door not locking', rootCause: 'No root cause identified', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26348B', issue: 'Device door not locking', rootCause: 'No root cause identified', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26365B', issue: 'Device door not locking', rootCause: 'No root cause identified', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25168B', issue: 'RTD-E Error', rootCause: 'No root cause identified', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25106B', issue: 'Cartridge valve error', rootCause: 'Valve motor 2 faulty', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25468B', issue: 'Play and eject button sensitive', rootCause: 'Embossing issue', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV25454B', issue: 'Play and eject button sensitive', rootCause: 'Issue not found', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26435B', issue: 'Play and eject button sensitive', rootCause: 'Embossing issue', activity: '' },
    { id: 'CU/III/25/011', serial: 'TPV26428B', issue: 'Door not locking and switch sensitive', rootCause: 'Embossing issue', activity: '' }
  ]

export const pcrComplaints = [
    { id: 'CU/III/25/002', serial: 'TLQU2124', issue: 'Paint peel off issue on chassis', rootCause: 'Lack of awareness of QC personnel and improper handling by MD personnel', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU2626', issue: 'Paint peel off issue on chassis', rootCause: 'Lack of awareness of QC personnel and improper handling by MD personnel', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU2222', issue: 'Paint peel off issue on chassis', rootCause: 'Lack of awareness of QC personnel and improper handling by MD personnel', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU2743', issue: 'Paint peel off issue on chassis', rootCause: 'Lack of awareness of QC personnel and improper handling by MD personnel', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU2799', issue: 'Paint peel off issue on chassis', rootCause: 'Lack of awareness of QC personnel and improper handling by MD personnel', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU6614', issue: 'Chip aborted in Bay 4', rootCause: 'J13 CB to J2 CC cable crimping damage', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU6541', issue: 'Bay 1 red optics ND', rootCause: 'Customer improper mixing of master mix and buffer solution', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU6599', issue: 'Bay 1 Blue optics starts from 8', rootCause: 'Re FQC', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU6580', issue: 'Screw found inside Bay 1', rootCause: 'Issue not observed', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU6586', issue: 'Brightness spot on display', rootCause: 'LUX level in inspection room', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU6588', issue: 'Display flickering and bay 4 not visible', rootCause: 'Issue not observed', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU6644', issue: 'Not connecting to WIFI', rootCause: 'RF cable internal damage', activity: '' },
    { id: 'CU/III/25/002', serial: 'TLQU6647', issue: 'Graphs not proper and bay 1 tray alignment not proper', rootCause: 'Tray alignment not proper', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7283', issue: 'Not connected to network', rootCause: 'Improper handling', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7377', issue: 'Paint peel off and screw issue of top cover', rootCause: 'No defined criteria of defects', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7288', issue: 'AFC test fail', rootCause: 'Defect not found', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7436', issue: 'Not able to insert sim card', rootCause: 'Not aware of the activity of the process', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7442', issue: 'B-2 Chip carrier body jerking', rootCause: 'Improper alignment between pinion and chip carrier body', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7434', issue: 'Not able to remove the screw for optics tuning', rootCause: 'No awareness to site IV', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7297', issue: 'Bay 2 blue optics showing ND', rootCause: 'Not able to identify with bare eyes', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7431', issue: 'Two USB ports are not working', rootCause: 'Dry solder', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7448', issue: 'Bay 2 Blue optics tuning value out of range', rootCause: 'Not identified', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7425', issue: 'Not able to remove the screw', rootCause: 'No awareness to site IV', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7302', issue: 'Not able to remove the screw', rootCause: 'No awareness to site IV', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7070', issue: 'Gap between top plate and bottom cover', rootCause: 'No criteria for gap', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7497', issue: 'Blue LED flickering during tuning', rootCause: 'Blue LED PCB damage', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7502', issue: 'Blue optics value not increasing', rootCause: 'No awareness to site IV', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7574', issue: 'Bay 2 Blue LED not increasing while tuning', rootCause: 'Blue LED PCB not working', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7620', issue: 'Bay 1 red LED not increasing', rootCause: 'LED PCB damage', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7578', issue: 'Bay 1 Red LED not increasing', rootCause: 'No point in IQC', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7524', issue: 'Device turns ON only when charger connected', rootCause: 'Unknown', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLDU7522', issue: 'Device turns ON only when charger connected', rootCause: 'Lack of awareness', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLQU6702', issue: 'IMEI number not matching with the Software (359869071003345)', rootCause: 'Overlooked', activity: '' },
    { id: 'CU/III/25/010', serial: 'TLQU6707', issue: 'Screw M3x20 SHCS different from top cover fixing', rootCause: 'No checkpoint in IQC', activity: '' },
    { id: 'CU/III/25/008', serial: 'TLQU6624', issue: 'Wifi not connecting', rootCause: 'SBC issue', activity: '' },
    { id: 'CU/III/25/008', serial: 'TLQU6555', issue: 'Brightness spot on the left side of the display', rootCause: 'Defective densitron display', activity: '' },
    { id: 'CU/III/25/008', serial: 'TLQU6662', issue: 'Display alignment not proper', rootCause: 'Lack of knowledge on assembly', activity: '' },
    { id: 'CU/III/25/008', serial: 'TLQU6628', issue: 'Stuck at 4th cycle during AFC run', rootCause: 'SBC expansion PCB 1.1 issue and improper PPE', activity: '' },
    { id: 'CU/III/25/008', serial: 'TLQU2344', issue: 'Scratches observed on the chassis', rootCause: 'No criteria in SOP', activity: '' },
    { id: 'CU/III/25/008', serial: 'TLDU7070', issue: 'Display goes off while running AFC test', rootCause: 'Issue with SBC expansion PCB 1.1 material', activity: '' },
    { id: 'CU/III/25/008', serial: 'TLDU7092', issue: 'Bay 1 blue optics showing ND', rootCause: 'Under deviation; device went to customer with AFC and dye testing', activity: '' },
    { id: 'CU/III/25/008', serial: 'TLDU7144', issue: 'Hanging issue', rootCause: 'Improper assembly of cable crimping', activity: '' }
  ]

export const complaintsData = [...extractionComplaints, ...pcrComplaints]

// Metrics & Analysis
export const buildMetrics = (data) => {
    const total = data.length
    const uniqueComplaints = new Set(data.map(c => c.id)).size
    const uniqueDevices = new Set(data.map(c => c.serial)).size

    const issueTypes = {}
    data.forEach(c => { issueTypes[c.issue] = (issueTypes[c.issue] || 0) + 1 })
    const topIssues = Object.entries(issueTypes).sort((a, b) => b[1] - a[1]).slice(0, 5)

    const rootCauseTypes = {}
    const otherRootCauses = {}
    data.forEach(c => {
      const causeOriginal = (c.rootCause || '').trim()
      const cause = causeOriginal.toLowerCase()
      if (cause.includes('awareness') || cause.includes('aware')) {
        rootCauseTypes['Awareness / Training'] = (rootCauseTypes['Awareness / Training'] || 0) + 1
      } else if (cause.includes('pcb') || cause.includes('damage') || cause.includes('defect') || cause.includes('faulty')) {
        rootCauseTypes['Hardware / Component'] = (rootCauseTypes['Hardware / Component'] || 0) + 1
      } else if (cause.includes('improper') || cause.includes('handling') || cause.includes('assembly') || cause.includes('routing')) {
        rootCauseTypes['Handling / Assembly'] = (rootCauseTypes['Handling / Assembly'] || 0) + 1
      } else if (cause.includes('not found') || cause.includes('not observed') || cause.includes('not identif') || cause.includes('no rc')) {
        rootCauseTypes['Not Identified'] = (rootCauseTypes['Not Identified'] || 0) + 1
      } else {
        rootCauseTypes['Other'] = (rootCauseTypes['Other'] || 0) + 1
        const key = causeOriginal || 'Not specified'
        otherRootCauses[key] = (otherRootCauses[key] || 0) + 1
      }
    })

    const complaintIdDist = {}
    data.forEach(c => { complaintIdDist[c.id] = (complaintIdDist[c.id] || 0) + 1 })

    const componentIssues = {}
    data.forEach(c => {
      const issue = c.issue.toLowerCase()
      if (issue.includes('paint') || issue.includes('scratch')) componentIssues['Paint/Chassis'] = (componentIssues['Paint/Chassis'] || 0) + 1
      else if (issue.includes('optic') || issue.includes('led')) componentIssues['Optics/LED'] = (componentIssues['Optics/LED'] || 0) + 1
      else if (issue.includes('display')) componentIssues['Display'] = (componentIssues['Display'] || 0) + 1
      else if (issue.includes('screw') || issue.includes('usb') || issue.includes('cable')) componentIssues['Fasteners/Connectors'] = (componentIssues['Fasteners/Connectors'] || 0) + 1
      else if (issue.includes('bay') || issue.includes('chip')) componentIssues['Bay/Carrier'] = (componentIssues['Bay/Carrier'] || 0) + 1
      else if (issue.includes('wifi') || issue.includes('network') || issue.includes('sbc')) componentIssues['Electronics/Connectivity'] = (componentIssues['Electronics/Connectivity'] || 0) + 1
      else componentIssues['Other'] = (componentIssues['Other'] || 0) + 1
    })

    return { total, uniqueComplaints, uniqueDevices, topIssues, rootCauseTypes, complaintIdDist, componentIssues, otherRootCauses }
  }

export const palette = ['#0ea5e9', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981', '#6366f1']
export const formatPercent = (count, total) => ((total ? (count / total) * 100 : 0).toFixed(0))

export const buildPieStyle = (entries, colors = palette) => {
  const total = entries.reduce((acc, [, count]) => acc + count, 0) || 1
  let current = 0
  const gradients = entries.map(([_, count], idx) => {
    const start = (current / total) * 100
    const end = ((current + count) / total) * 100
    current += count
    return `${colors[idx % colors.length]} ${start}% ${end}%`
  })
  return `conic-gradient(${gradients.join(', ')})`
}

const BarRow = ({ label, value, max, color }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <div style={{ fontWeight: 800, color: '#0f172a' }}>{label}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, height: '16px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
        <div style={{ width: `${max ? (value / max) * 100 : 0}%`, height: '100%', background: color, borderRadius: '999px' }} />
      </div>
      <div style={{ minWidth: 42, textAlign: 'right', fontWeight: 900, color: color }}>{value}</div>
    </div>
  </div>
)

export default function CustomerComplaintsOverview() {
  const [activeTab, setActiveTab] = React.useState('extraction')
  const [showOtherDetails, setShowOtherDetails] = React.useState(false)

  const metricsOverall = useMemo(() => buildMetrics(complaintsData), [])
  const metricsExtraction = useMemo(() => buildMetrics(extractionComplaints), [])
  const metricsPCR = useMemo(() => buildMetrics(pcrComplaints), [])

  const currentMetrics = activeTab === 'extraction' ? metricsExtraction : metricsPCR
  const currentData = activeTab === 'extraction' ? extractionComplaints : pcrComplaints
  const currentColor = activeTab === 'extraction' ? '#0ea5e9' : '#8b5cf6'
  const currentBg = activeTab === 'extraction' ? '#e0f2fe' : '#f3e8ff'

  const rootCauseTotal = Object.values(currentMetrics.rootCauseTypes).reduce((a, b) => a + b, 0)
  const rootCauseEntries = Object.entries(currentMetrics.rootCauseTypes).sort((a, b) => b[1] - a[1])
  const otherDetails = Object.entries(currentMetrics.otherRootCauses || {}).sort((a, b) => b[1] - a[1])

  return (
    <section
      className="content-slide"
      data-state="customer-complaints-overview"
      style={{
        paddingTop: '14px',
        paddingBottom: '14px',
        background: '#ffffff',
        color: '#0f172a',
        overflowY: 'auto',
        height: '100%'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '20px', paddingX: '20px' }}>
        <h2 style={{ fontSize: '2em', fontWeight: 900, color: '#111827', marginBottom: '0px', marginTop: 0 }}>
          Customer Complaints Overview
        </h2>
      </div>

      {/* Key Stats - 2 Large Cards (IPQA Style) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px', paddingX: '20px' }}>
        {[
          { label: '🔧 Devices Affected', value: metricsOverall.uniqueDevices, sub: `Unique serial numbers`, color: '#ef4444', bg: '#fef2f2', icon: '⚙️' },
          { label: '📋 Total Complaints', value: 12, sub: `Total complaint records`, color: '#8b5cf6', bg: '#f3e8ff', icon: '📝' }
        ].map((card, idx) => (
          <div key={idx} style={{
            background: card.bg,
            border: `5px solid ${card.color}`,
            borderRadius: '18px',
            padding: '40px 28px',
            textAlign: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>{card.icon}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#64748b', marginBottom: 10 }}>{card.label}</div>
            <div style={{ fontSize: '4.6rem', fontWeight: 950, color: card.color, lineHeight: 1, marginBottom: 14 }}>{card.value}</div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#64748b' }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Segment Tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: '14px', paddingX: '20px' }}>
        {[
          { id: 'extraction', label: '⚙️ Assembly of extraction device', color: '#0ea5e9' },
          { id: 'pcr', label: '🧬 Two Bay and Four Bay PCR Machines', color: '#8b5cf6' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '10px',
              border: `3px solid ${activeTab === tab.id ? tab.color : '#e5e7eb'}`,
              background: activeTab === tab.id ? `${tab.color}15` : '#ffffff',
              color: activeTab === tab.id ? tab.color : '#64748b',
              fontWeight: activeTab === tab.id ? 900 : 700,
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '1.15rem'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Grid - Issues Left, Components Right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: '12px', marginBottom: '14px', paddingX: '20px' }}>
        {/* Left: Top Issues & Root Causes (stacked) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
          {/* Top Issues */}
          <div style={{
            background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
            border: '3px solid #ef444430',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(239,68,68,0.05)'
          }}>
            <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#991b1b', marginBottom: 10 }}>🔴 Top Issues</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {currentMetrics.topIssues.map((issue, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: '2px solid #fecaca',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', color: '#111827', fontWeight: 700, flex: 1 }}>{issue[0]}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ef4444' }}>{issue[1]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Root Causes */}
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
            border: '3px solid #f59e0b40',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(245,158,11,0.05)'
          }}>
            <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#92400e', marginBottom: 10 }}>🔍 Root Causes</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {rootCauseEntries.map((cause, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: '2px solid #fcd34d',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', color: '#111827', fontWeight: 700, flex: 1 }}>{cause[0]}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#f59e0b' }}>{cause[1]} ({formatPercent(cause[1], rootCauseTotal)}%)</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Pie & Components */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
          {/* Pie with Legend */}
          <div style={{
            background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
            border: '3px solid #0ea5e940',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(14,165,233,0.05)'
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0369a1', marginBottom: 12, textAlign: 'center' }}>Root Cause Distribution</div>
            
            {/* Pie Chart */}
            <div style={{
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: buildPieStyle(rootCauseEntries),
              border: '5px solid #0ea5e9',
              margin: '0 auto 12px auto',
              boxShadow: '0 4px 12px rgba(14,165,233,0.2)'
            }} />
            
            {/* Legend with details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {rootCauseEntries.map((cause, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '2px solid #bae6fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                    <div style={{
                      width: 16,
                      height: 16,
                      borderRadius: '4px',
                      background: palette[idx % palette.length],
                      border: '2px solid #334155',
                      flexShrink: 0
                    }} />
                    <div style={{ fontSize: '1.15rem', color: '#111827', fontWeight: 700, lineHeight: 1.2 }}>
                      {cause[0]}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexShrink: 0 }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0ea5e9', lineHeight: 1 }}>{cause[1]}</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#64748b', lineHeight: 1 }}>{formatPercent(cause[1], rootCauseTotal)}%</div>
                  </div>
                </div>
              ))}

              {rootCauseEntries.some(([label]) => label === 'Other') && otherDetails.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  <button
                    onClick={() => setShowOtherDetails(!showOtherDetails)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '2px solid #0ea5e9',
                      background: showOtherDetails ? '#e0f2fe' : '#ffffff',
                      color: '#0ea5e9',
                      fontWeight: 900,
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    {showOtherDetails ? 'Hide “Other” details' : 'View “Other” details'}
                  </button>
                  {showOtherDetails && (
                    <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {otherDetails.map((entry, idx) => (
                        <div key={idx} style={{
                          background: '#f8fafc',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '2px solid #cbd5e1',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 10
                        }}>
                          <div style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 700, lineHeight: 1.3, flex: 1 }}>
                            {entry[0]}
                          </div>
                          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0ea5e9', minWidth: 40, textAlign: 'right' }}>
                            {entry[1]}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Components - Compact Grid */}
          <div style={{
            background: 'linear-gradient(135deg, #e9d5ff, #f3e8ff)',
            border: '3px solid #8b5cf640',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(139,92,246,0.05)'
          }}>
            <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#6b21a8', marginBottom: 10 }}>Components</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              {Object.entries(currentMetrics.componentIssues)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6)
                .map((comp, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #d8b4fe',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.3rem', color: '#111827', fontWeight: 700, marginBottom: 6 }}>{comp[0]}</div>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: '#8b5cf6' }}>{comp[1]}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Table - Compact */}
      <div style={{
        background: `linear-gradient(135deg, ${currentBg}, ${currentBg}99)`,
        border: `3px solid ${currentColor}40`,
        borderRadius: '12px',
        padding: '16px',
        marginX: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0369a1', marginBottom: 10 }}>
          📋 {currentData.length} Complaints
        </div>
        <div style={{ overflowX: 'auto', maxHeight: '400px', overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.3rem' }}>
            <thead>
              <tr style={{ background: currentColor, color: '#fff', position: 'sticky', top: 0 }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 900, fontSize: '1.45rem' }}>ID</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 900, fontSize: '1.45rem' }}>Serial</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 900, fontSize: '1.45rem' }}>Issue</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 900, fontSize: '1.45rem' }}>Root Cause</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((complaint, idx) => (
                <tr key={idx} style={{
                  background: idx % 2 === 0 ? '#ffffff' : currentBg,
                  borderBottom: '2px solid #bae6fd',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#dbeafe' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = idx % 2 === 0 ? '#ffffff' : currentBg }}>
                  <td style={{ padding: '11px 14px', fontWeight: 700, color: '#0369a1', fontSize: '1.3rem' }}>{complaint.id}</td>
                  <td style={{ padding: '11px 14px', color: '#111827', fontWeight: 600, fontSize: '1.3rem' }}>{complaint.serial}</td>
                  <td style={{ padding: '11px 14px', color: '#111827', fontSize: '1.3rem' }}>{complaint.issue}</td>
                  <td style={{ padding: '11px 14px', color: '#475569', fontSize: '1.25rem' }}>{complaint.rootCause}</td>
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
