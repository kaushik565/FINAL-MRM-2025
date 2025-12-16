export default function RAContents() {
  const contentItems = [
    {
      number: '01',
      color: '#3b82f6',
      title: 'Product License CLA/SLA',
      subtitle: 'Submitted, Approved, Inprocess, Queries, Products in pipeline',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      icon: '📋'
    },
    {
      number: '02',
      color: '#ef4444',
      title: 'Global Registrations',
      subtitle: 'Countrywise product registration status (registered / ongoing)',
      gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
      icon: '🌍'
    },
    {
      number: '03',
      color: '#06b6d4',
      title: 'Technical Dossier',
      subtitle: 'Section-Wise schedule for WHO Technical Dossier (TD)',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      icon: '📑'
    },
    {
      number: '04',
      color: '#f59e0b',
      title: 'Implementation',
      subtitle: 'IVDR 2017/746 implementation and Launch of regulatory update forum',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      icon: '⚙️'
    },
    {
      number: '05',
      color: '#14b8a6',
      title: 'Quality Objectives',
      subtitle: 'Current status of quality objectives 2025',
      gradient: 'linear-gradient(135deg, #14b8a6, #0d9488)',
      icon: '🎯'
    },
    {
      number: '06',
      color: '#ec4899',
      title: 'QMS Certifications',
      subtitle: 'ISO 13485, MDSAP, IVDR 2017/746 certificates',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      icon: '🏆'
    }
  ];

  return (
    <section style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'radial-gradient(ellipse at top right, #dbeafe 0%, #f8fafc 50%, #fce7f3 100%)',
      padding: '30px 50px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      {/* Header */}
      <div style={{
        marginBottom: '25px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{
            width: '6px',
            height: '50px',
            background: 'linear-gradient(to bottom, #3b82f6, #ec4899)',
            borderRadius: '3px'
          }}></div>
          <h1 style={{
            fontSize: '3em',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #3b82f6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }}>
            Regulatory Affairs Overview
          </h1>
        </div>
      </div>

      {/* Content Grid - 2 columns x 3 rows */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '18px',
        flex: 1,
        position: 'relative',
        zIndex: 1
      }}>
        {contentItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              background: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 15px 40px ${item.color}30`;
              e.currentTarget.style.borderColor = item.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            {/* Top Accent Bar */}
            <div style={{
              height: '5px',
              background: item.gradient
            }}></div>

            {/* Content Container */}
            <div style={{
              padding: '20px 25px',
              display: 'flex',
              gap: '15px',
              alignItems: 'flex-start'
            }}>
              {/* Number Badge */}
              <div style={{
                minWidth: '60px',
                height: '60px',
                borderRadius: '16px',
                background: item.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 20px ${item.color}40`,
                position: 'relative',
                flexShrink: 0
              }}>
                <span style={{
                  fontSize: '1.8em',
                  fontWeight: '900',
                  color: '#ffffff'
                }}>
                  {item.number}
                </span>
                {/* Icon Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9em',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                }}>
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div style={{
                flex: 1,
                minWidth: 0
              }}>
                <h2 style={{
                  fontSize: '1.2em',
                  fontWeight: '800',
                  color: '#0f172a',
                  margin: '0 0 8px 0',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h2>
                <p style={{
                  fontSize: '0.85em',
                  color: '#64748b',
                  margin: 0,
                  fontWeight: '500',
                  lineHeight: '1.5',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {item.subtitle}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: `${item.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                opacity: 0.7,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <span style={{
                  color: item.color,
                  fontSize: '1.2em',
                  fontWeight: '900'
                }}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
