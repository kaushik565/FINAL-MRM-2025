import { useEffect, useRef } from 'react'

export default function ContentsSlide() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const triggerAnimation = () => {
      if (sectionRef.current) {
        const section = sectionRef.current
        const isActive = section.classList.contains('present')
        
        if (isActive) {
          const items = section.querySelectorAll('.contents-item')
          const title = section.querySelector('.contents-title')
          
          if (title) {
            title.style.animation = 'none'
            title.offsetWidth
            setTimeout(() => {
              title.style.animation = ''
            }, 5)
          }
          
          items.forEach((element) => {
            if (element) {
              element.style.animation = 'none'
              element.offsetWidth
              setTimeout(() => {
                element.style.animation = ''
              }, 5)
            }
          })
        }
      }
    }

    const handleSlideChanged = () => {
      setTimeout(triggerAnimation, 100)
    }
    
    setTimeout(() => {
      if (sectionRef.current && sectionRef.current.classList.contains('present')) {
        triggerAnimation()
      }
    }, 200)
    
    if (window.Reveal) {
      window.Reveal.on('slidechanged', handleSlideChanged)
      return () => {
        if (window.Reveal) {
          window.Reveal.off('slidechanged', handleSlideChanged)
        }
      }
    }
  }, [])

  const slideContents = [
    "1. Monitoring and Measurement of Process - QMS / IPQA",
    "2. Monitoring and Measurement of Product - Site IV / Lab QA",
    "3. Customer Complaints Overview",
    "4. Audit Findings",
    "5. Quality Objectives",
    "6. Quality Week Celebrations overview",
    "7. Improvements"
  ]

  return (
    <section className="contents-slide" data-state="contents-slide" data-transition="none" ref={sectionRef}>
      <div className="contents-container">
        <h1 className="contents-title">Contents</h1>
        <div className="contents-list">
          {slideContents.map((item, index) => (
            <div key={index} className="contents-item">
              <span className="contents-item-icon">►</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
