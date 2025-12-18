import { useState } from 'react'

export default function RAProductLicenseSummary() {
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    '/content_1/1.png',
    '/content_1/2.png',
    '/content_1/3.png',
    '/content_1/4.png',
    '/content_1/5.png'
  ]

  const nextImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--light)',
        color: 'var(--dark)'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '22px 32px',
          background: 'var(--dark)',
          color: '#ffffff',
          borderBottom: '6px solid var(--primary-red)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.01em' }}>
              Product License CLA/SLA
            </div>
            <div style={{ marginTop: '6px', fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', fontWeight: 700 }}>
              Document {currentImage + 1} of {images.length}
            </div>
          </div>

          {/* Compact progress */}
          <div style={{ width: '180px' }}>
            <div
              style={{
                height: '8px',
                width: '100%',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.18)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${((currentImage + 1) / images.length) * 100}%`,
                  background: 'var(--secondary-red)',
                  transition: 'width 0.25s ease'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateRows: '1fr auto',
          padding: '18px 24px 24px',
          gap: '14px',
          overflow: 'hidden'
        }}
      >
        {/* Stage */}
        <div
          style={{
            position: 'relative',
            background: '#ffffff',
            borderRadius: '14px',
            border: '2px solid var(--accent)',
            boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px'
          }}
        >
          <img
            key={currentImage}
            src={images[currentImage]}
            alt={`Product License ${currentImage + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
              animation: 'raImageFade 120ms ease-out'
            }}
          />

          {/* Left/Right */}
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous image"
            title="Previous"
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--secondary-red)',
              border: 'none',
              color: '#ffffff',
              fontSize: '2rem',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 8px 16px rgba(239, 68, 68, 0.35)',
              zIndex: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            title="Next"
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--secondary-red)',
              border: 'none',
              color: '#ffffff',
              fontSize: '2rem',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 8px 16px rgba(239, 68, 68, 0.35)',
              zIndex: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ›
          </button>
        </div>

        {/* Thumbnails (numbers only, minimal) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            paddingTop: '2px'
          }}
        >
          {images.map((_, idx) => {
            const isActive = idx === currentImage
            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setCurrentImage(idx)
                }}
                aria-label={`Go to image ${idx + 1}`}
                title={`Image ${idx + 1}`}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  border: isActive ? '2px solid var(--primary-red)' : '2px solid var(--accent)',
                  background: isActive ? 'var(--secondary-red)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--dark)',
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 6px 16px rgba(239, 68, 68, 0.25)' : '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)'
                }}
              >
                {idx + 1}
              </button>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes raImageFade {
          from { opacity: 0.65; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
