export default function ImprovementsSlide() {
  const improvements = [
    'Significant improvements have been successfully implemented across all sub divisions of QA (QMS/IPQA/LABQA)',
    'Engaged in monitoring and measurement of product performance thorugh APQR and LAB QA.',
    'LAB QA implemented across all the sites',
    'OOS ownership was taken by the QA across all the sites',
    'Implementation of work instructions',
    'Inter deparmental Collaborative meetings',
    'QA collaboration daily meetings across the sites',
    'Improved competencey of all QA personnel',
    'Encouraging a proactive approach to process risk management',
    'Introduction of COQ SOP - Under Progress',
    'Weekly QA Team lead meeting across sites - Under Progress'
  ]

  return (
    <section 
      className="content-slide" 
      data-state="improvements-slide"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'auto',
        background: '#ffffff',
        padding: '0',
        margin: '0'
      }}
    >
      <h2 style={{
        borderBottom: '4px solid #b91c1c',
        paddingBottom: '8px',
        color: '#b91c1c',
        fontSize: '1.8em',
        fontWeight: '600',
        margin: '0',
        padding: '24px 32px 20px 32px',
        background: '#ffffff'
      }}>
        📈 Improvements
      </h2>

      <div style={{ padding: '32px' }}>
        {/* Progress Summary Cards - Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Completed Card */}
          <div style={{
            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
            border: '4px solid #10b981',
            borderRadius: '16px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.3)'
          }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: '900',
              color: '#10b981',
              marginBottom: '8px'
            }}>
              9
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: '#047857'
            }}>
              ✓ Completed
            </div>
          </div>

          {/* In Progress Card */}
          <div style={{
            background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
            border: '4px solid #fb923c',
            borderRadius: '16px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(251, 146, 60, 0.3)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(251, 146, 60, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(251, 146, 60, 0.3)'
          }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: '900',
              color: '#ea580c',
              marginBottom: '8px'
            }}>
              2
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: '#c2410c'
            }}>
              🚧 In Progress
            </div>
          </div>

          {/* Total Card */}
          <div style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)',
            border: '4px solid #3b82f6',
            borderRadius: '16px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(59, 130, 246, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)'
          }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: '900',
              color: '#3b82f6',
              marginBottom: '8px'
            }}>
              11
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: '#1e40af'
            }}>
              📊 Total Improvements
            </div>
          </div>
        </div>

        {/* Improvements List - Single Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {improvements.map((improvement, idx) => {
            const isUnderProgress = improvement.includes('Under Progress')
            
            return (
              <div
                key={idx}
                style={{
                  background: isUnderProgress 
                    ? 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)' 
                    : 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                  border: isUnderProgress 
                    ? '3px solid #fb923c' 
                    : '3px solid #10b981',
                  borderRadius: '12px',
                  padding: '16px 24px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Number Badge */}
                <div style={{
                  width: '55px',
                  height: '55px',
                  background: isUnderProgress ? '#fb923c' : '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.7rem',
                  fontWeight: '900',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  flexShrink: 0
                }}>
                  {idx + 1}
                </div>

                {/* Content */}
                <div style={{
                  fontSize: '1.65rem',
                  color: '#111827',
                  fontWeight: '700',
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  {improvement.replace(' - Under Progress', '')}
                </div>

                {/* Status Badge */}
                <div style={{
                  background: isUnderProgress ? '#fb923c' : '#10b981',
                  color: '#ffffff',
                  padding: '10px 24px',
                  borderRadius: '25px',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  boxShadow: isUnderProgress 
                    ? '0 2px 8px rgba(251, 146, 60, 0.3)' 
                    : '0 2px 8px rgba(16, 185, 129, 0.3)',
                  flexShrink: 0,
                  minWidth: '170px',
                  textAlign: 'center'
                }}>
                  {isUnderProgress ? '🚧 In Progress' : '✓ Completed'}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
