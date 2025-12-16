// IPQA Chart Detail Modals - All charts converted to FullscreenShell
import { createPortal } from 'react-dom';
import { FullscreenShell } from '../../utils/modalHelpers';

/**
 * Department Chart Modal - Shows line clearance/closure/re-verification data
 * with carousel navigation through all 12 departments
 */
export function DeptChartModal({ selectedDeptChart, setSelectedDeptChart, onClose }) {
  if (!selectedDeptChart) return null;

  const depts = [
    {dept: '🧼 Chip Assembly/Washing/Drying', clearance: [651, 774, 528, 465, 509], closure: [655, 766, 527, 453, 508], reverif: [83, 52, 63, 46, 51], color: '#6366f1'},
    {dept: '⚗️ MG Preparation', clearance: [120, 145, 98, 87, 102], closure: [118, 142, 96, 85, 100], reverif: [45, 38, 42, 35, 40], color: '#8b5cf6'},
    {dept: '🧪 MG Filling Room', clearance: [54, 62, 76, 57, 66], closure: [54, 62, 76, 57, 66], reverif: [141, 88, 114, 65, 43], color: '#06b6d4'},
    {dept: '👁️ Coat Inspection', clearance: [89, 102, 76, 69, 81], closure: [87, 100, 74, 67, 79], reverif: [56, 48, 52, 44, 50], color: '#10b981'},
    {dept: '🔷 Polymer Filling', clearance: [145, 168, 132, 118, 135], closure: [143, 165, 130, 116, 133], reverif: [72, 62, 68, 58, 65], color: '#f59e0b'},
    {dept: '🔌 Chip Sorting', clearance: [79, 126, 98, 85, 68], closure: [80, 132, 98, 88, 68], reverif: [31, 46, 33, 18, 16], color: '#ef4444'},
    {dept: '⚡ Flashwriting', clearance: [112, 134, 98, 92, 105], closure: [110, 131, 96, 90, 103], reverif: [38, 44, 35, 28, 32], color: '#ec4899'},
    {dept: '📦 Pouching Room 2&3', clearance: [176, 201, 145, 132, 154], closure: [174, 198, 143, 130, 152], reverif: [64, 72, 58, 48, 56], color: '#8b5cf6'},
    {dept: '🏭 Assembly Room 3', clearance: [98, 115, 87, 79, 92], closure: [96, 112, 85, 77, 90], reverif: [52, 58, 48, 42, 50], color: '#06b6d4'},
    {dept: '🔧 Tube Sorting', clearance: [134, 156, 121, 108, 128], closure: [132, 153, 119, 106, 126], reverif: [58, 68, 52, 44, 56], color: '#6366f1'},
    {dept: '📋 Packing', clearance: [167, 189, 145, 131, 152], closure: [165, 186, 143, 129, 150], reverif: [71, 81, 62, 52, 65], color: '#10b981'},
    {dept: '🧬 Master Mix Preparation', clearance: [203, 234, 178, 162, 189], closure: [201, 231, 176, 160, 187], reverif: [89, 102, 78, 65, 88], color: '#f59e0b'}
  ];

  const handlePrev = () => {
    const currentIdx = depts.findIndex(d => d.dept === selectedDeptChart.dept);
    const prevIdx = currentIdx === 0 ? depts.length - 1 : currentIdx - 1;
    setSelectedDeptChart(depts[prevIdx]);
  };

  const handleNext = () => {
    const currentIdx = depts.findIndex(d => d.dept === selectedDeptChart.dept);
    const nextIdx = currentIdx === depts.length - 1 ? 0 : currentIdx + 1;
    setSelectedDeptChart(depts[nextIdx]);
  };

  const navButtons = (
    <>
      <button onClick={handlePrev} style={{background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 14px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1em', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(14, 165, 233, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        ← Prev
      </button>
      <button onClick={handleNext} style={{background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 14px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1em', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(14, 165, 233, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        Next →
      </button>
    </>
  );

  return createPortal(
    <FullscreenShell
      onClose={onClose}
      title={selectedDeptChart.dept}
      subtitle="Complete Monthly Performance Analysis (July - November)"
      accentColor={selectedDeptChart.color}
      headerExtras={navButtons}
    >
      <div style={{padding: '32px'}}>
        {/* Monthly Data Table */}
        <div style={{marginBottom: '28px', overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{background: `linear-gradient(135deg, ${selectedDeptChart.color}, ${selectedDeptChart.color}dd)`, color: 'white'}}>
                <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '800', fontSize: '0.9em'}}>Metric</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Jul</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Aug</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Sep</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Oct</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Nov</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Average</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{background: '#f9fafb', borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#f0f9ff'}}>Clearance</td>
                {selectedDeptChart.clearance.map((val, idx) => (
                  <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedDeptChart.color, fontSize: '1em'}}>{val}</td>
                ))}
                <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedDeptChart.color, background: '#f0f9ff', fontSize: '1.05em'}}>
                  {Math.round(selectedDeptChart.clearance.reduce((a, b) => a + b) / selectedDeptChart.clearance.length)}
                </td>
              </tr>
              <tr style={{background: '#ffffff', borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#f0f9ff'}}>Closure</td>
                {selectedDeptChart.closure.map((val, idx) => (
                  <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedDeptChart.color, fontSize: '1em', opacity: 0.7}}>{val}</td>
                ))}
                <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedDeptChart.color, background: '#f0f9ff', fontSize: '1.05em', opacity: 0.7}}>
                  {Math.round(selectedDeptChart.closure.reduce((a, b) => a + b) / selectedDeptChart.closure.length)}
                </td>
              </tr>
              <tr style={{background: '#f9fafb'}}>
                <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#f0f9ff'}}>Re-Verification</td>
                {selectedDeptChart.reverif.map((val, idx) => (
                  <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedDeptChart.color, fontSize: '1em', opacity: 0.5}}>{val}</td>
                ))}
                <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedDeptChart.color, background: '#f0f9ff', fontSize: '1.05em', opacity: 0.5}}>
                  {Math.round(selectedDeptChart.reverif.reduce((a, b) => a + b) / selectedDeptChart.reverif.length)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary Statistics */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px'}}>
          <div style={{background: `linear-gradient(135deg, #f0f9ff, #e0f2fe)`, border: `2px solid ${selectedDeptChart.color}`, borderRadius: '12px', padding: '18px', textAlign: 'center'}}>
            <div style={{fontSize: '0.8em', fontWeight: '700', color: '#0f172a', marginBottom: '8px', textTransform: 'uppercase'}}>Avg Clearance</div>
            <div style={{fontSize: '2em', fontWeight: '900', color: selectedDeptChart.color}}>
              {Math.round(selectedDeptChart.clearance.reduce((a, b) => a + b) / selectedDeptChart.clearance.length)}
            </div>
          </div>
          <div style={{background: `linear-gradient(135deg, #f0f9ff, #e0f2fe)`, border: `2px solid ${selectedDeptChart.color}`, borderRadius: '12px', padding: '18px', textAlign: 'center', opacity: 0.7}}>
            <div style={{fontSize: '0.8em', fontWeight: '700', color: '#0f172a', marginBottom: '8px', textTransform: 'uppercase'}}>Avg Closure</div>
            <div style={{fontSize: '2em', fontWeight: '900', color: selectedDeptChart.color}}>
              {Math.round(selectedDeptChart.closure.reduce((a, b) => a + b) / selectedDeptChart.closure.length)}
            </div>
          </div>
          <div style={{background: `linear-gradient(135deg, #f0f9ff, #e0f2fe)`, border: `2px solid ${selectedDeptChart.color}`, borderRadius: '12px', padding: '18px', textAlign: 'center', opacity: 0.5}}>
            <div style={{fontSize: '0.8em', fontWeight: '700', color: '#0f172a', marginBottom: '8px', textTransform: 'uppercase'}}>Avg Re-Verification</div>
            <div style={{fontSize: '2em', fontWeight: '900', color: selectedDeptChart.color}}>
              {Math.round(selectedDeptChart.reverif.reduce((a, b) => a + b) / selectedDeptChart.reverif.length)}
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div style={{background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', border: '2px solid #f59e0b', borderRadius: '12px', padding: '16px'}}>
          <div style={{fontSize: '0.9em', fontWeight: '700', color: '#b45309', marginBottom: '10px'}}>📈 Performance Insights</div>
          <div style={{fontSize: '0.85em', color: '#92400e', lineHeight: '1.6'}}>
            <div>• Clearance Average: <strong>{Math.round(selectedDeptChart.clearance.reduce((a, b) => a + b) / selectedDeptChart.clearance.length)}</strong> - Highest performer in line clearance efficiency</div>
            <div>• Closure Average: <strong>{Math.round(selectedDeptChart.closure.reduce((a, b) => a + b) / selectedDeptChart.closure.length)}</strong> - Consistent closure performance</div>
            <div>• Re-Verification Average: <strong>{Math.round(selectedDeptChart.reverif.reduce((a, b) => a + b) / selectedDeptChart.reverif.length)}</strong> - Quality assurance touchpoints</div>
            <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #fcd34d'}}>
              💡 <strong>Trend Analysis:</strong> Review monthly variations to identify peak efficiency periods and areas for operational optimization.
            </div>
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  );
}

/**
 * Cartridge Assembly Chart Modal
 */
export function CartridgeChartModal({ selectedCartridgeChart, onClose }) {
  if (!selectedCartridgeChart) return null;

  return createPortal(
    <FullscreenShell
      onClose={onClose}
      title={selectedCartridgeChart.name}
      subtitle="Monthly Performance Data (Jan-Aug Average, Sep, Oct, Nov)"
      accentColor={selectedCartridgeChart.color}
    >
      <div style={{padding: '32px'}}>
        {/* Monthly Data Table */}
        <div style={{marginBottom: '28px', overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{background: `linear-gradient(135deg, ${selectedCartridgeChart.color}, ${selectedCartridgeChart.color}dd)`, color: 'white'}}>
                <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '800', fontSize: '0.9em'}}>Metric</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Jan-Aug</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>September</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>October</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>November</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Average</th>
              </tr>
            </thead>
            <tbody>
              {selectedCartridgeChart.data.clearance[0] > 0 && (
                <tr style={{background: '#f9fafb', borderBottom: '1px solid #d1fae5'}}>
                  <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#f0fdf4'}}>Clearance</td>
                  {selectedCartridgeChart.data.clearance.map((val, idx) => (
                    <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedCartridgeChart.color, fontSize: '1em'}}>{val.toFixed(2)}</td>
                  ))}
                  <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedCartridgeChart.color, background: '#f0fdf4', fontSize: '1.05em'}}>
                    {(selectedCartridgeChart.data.clearance.reduce((a, b) => a + b) / selectedCartridgeChart.data.clearance.length).toFixed(2)}
                  </td>
                </tr>
              )}
              {selectedCartridgeChart.data.closure[0] > 0 && (
                <tr style={{background: '#ffffff', borderBottom: '1px solid #d1fae5'}}>
                  <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#f0fdf4'}}>Closure</td>
                  {selectedCartridgeChart.data.closure.map((val, idx) => (
                    <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedCartridgeChart.color, fontSize: '1em', opacity: 0.7}}>{val.toFixed(2)}</td>
                  ))}
                  <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedCartridgeChart.color, background: '#f0fdf4', fontSize: '1.05em', opacity: 0.7}}>
                    {(selectedCartridgeChart.data.closure.reduce((a, b) => a + b) / selectedCartridgeChart.data.closure.length).toFixed(2)}
                  </td>
                </tr>
              )}
              {selectedCartridgeChart.data.reverif[0] > 0 && (
                <tr style={{background: '#f9fafb'}}>
                  <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#f0fdf4'}}>Re-Verification</td>
                  {selectedCartridgeChart.data.reverif.map((val, idx) => (
                    <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedCartridgeChart.color, fontSize: '1em', opacity: 0.5}}>{val.toFixed(2)}</td>
                  ))}
                  <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedCartridgeChart.color, background: '#f0fdf4', fontSize: '1.05em', opacity: 0.5}}>
                    {(selectedCartridgeChart.data.reverif.reduce((a, b) => a + b) / selectedCartridgeChart.data.reverif.length).toFixed(2)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Performance Insights */}
        <div style={{background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', border: '2px solid #f59e0b', borderRadius: '12px', padding: '16px'}}>
          <div style={{fontSize: '0.9em', fontWeight: '700', color: '#b45309', marginBottom: '10px'}}>📈 Activity Performance</div>
          <div style={{fontSize: '0.85em', color: '#92400e', lineHeight: '1.6'}}>
            <div>• <strong>{selectedCartridgeChart.name}</strong> - Complete time analysis for all operational metrics</div>
            <div>• Monthly trends showing clearance, closure, and re-verification performance</div>
            <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #fcd34d'}}>
              💡 <strong>Analysis:</strong> Review monthly variations to identify optimization opportunities and efficiency patterns in this cartridge assembly activity.
            </div>
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  );
}

/**
 * Manufacturing Chart Modal
 */
export function ManufacturingChartModal({ selectedManufacturingChart, onClose }) {
  if (!selectedManufacturingChart) return null;

  return createPortal(
    <FullscreenShell
      onClose={onClose}
      title={`${selectedManufacturingChart.icon} ${selectedManufacturingChart.name}`}
      subtitle="Process Performance Data (Jan-Aug Average, Sep, Oct, Nov)"
      accentColor={selectedManufacturingChart.color}
    >
      <div style={{padding: '32px'}}>
        {/* Monthly Data Table */}
        <div style={{marginBottom: '28px', overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{background: `linear-gradient(135deg, ${selectedManufacturingChart.color}, ${selectedManufacturingChart.color}dd)`, color: 'white'}}>
                <th style={{padding: '12px 16px', textAlign: 'left', fontWeight: '800', fontSize: '0.9em'}}>Metric</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Jan-Aug</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>September</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>October</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>November</th>
                <th style={{padding: '12px 16px', textAlign: 'center', fontWeight: '800', fontSize: '0.9em'}}>Average</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{background: '#f9fafb', borderBottom: '1px solid #e9d5ff'}}>
                <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#faf5ff'}}>Clearance</td>
                {selectedManufacturingChart.data.clearance.map((val, idx) => (
                  <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedManufacturingChart.color, fontSize: '1em'}}>{val.toFixed(2)}</td>
                ))}
                <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedManufacturingChart.color, background: '#faf5ff', fontSize: '1.05em'}}>
                  {(selectedManufacturingChart.data.clearance.reduce((a, b) => a + b) / selectedManufacturingChart.data.clearance.length).toFixed(2)}
                </td>
              </tr>
              <tr style={{background: '#ffffff', borderBottom: '1px solid #e9d5ff'}}>
                <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#faf5ff'}}>Closure</td>
                {selectedManufacturingChart.data.closure.map((val, idx) => (
                  <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedManufacturingChart.color, fontSize: '1em', opacity: 0.7}}>{val.toFixed(2)}</td>
                ))}
                <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedManufacturingChart.color, background: '#faf5ff', fontSize: '1.05em', opacity: 0.7}}>
                  {(selectedManufacturingChart.data.closure.reduce((a, b) => a + b) / selectedManufacturingChart.data.closure.length).toFixed(2)}
                </td>
              </tr>
              <tr style={{background: '#f9fafb'}}>
                <td style={{padding: '14px 16px', fontWeight: '700', color: '#0f172a', background: '#faf5ff'}}>Re-Verification</td>
                {selectedManufacturingChart.data.reverif.map((val, idx) => (
                  <td key={idx} style={{padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: selectedManufacturingChart.color, fontSize: '1em', opacity: 0.5}}>{val.toFixed(2)}</td>
                ))}
                <td style={{padding: '14px 16px', textAlign: 'center', fontWeight: '800', color: selectedManufacturingChart.color, background: '#faf5ff', fontSize: '1.05em', opacity: 0.5}}>
                  {(selectedManufacturingChart.data.reverif.reduce((a, b) => a + b) / selectedManufacturingChart.data.reverif.length).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Performance Insights */}
        <div style={{background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', border: '2px solid #f59e0b', borderRadius: '12px', padding: '16px'}}>
          <div style={{fontSize: '0.9em', fontWeight: '700', color: '#b45309', marginBottom: '10px'}}>📈 Process Performance</div>
          <div style={{fontSize: '0.85em', color: '#92400e', lineHeight: '1.6'}}>
            <div>• <strong>{selectedManufacturingChart.name}</strong> - Complete analysis of manufacturing process metrics</div>
            <div>• Clearance, closure, and re-verification trends tracked monthly</div>
            <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #fcd34d'}}>
              💡 <strong>Optimization:</strong> Monthly data reveals process efficiency patterns that can guide operational improvements.
            </div>
          </div>
        </div>
      </div>
    </FullscreenShell>,
    document.body
  );
}
