
import { SEO } from '@/components/SEO'
import { siteConfig } from '@/site.config'

export default function Page(){
  const courseLd = {
    "@context":"https://schema.org",
    "@type":"Course",
    "name": "Mental Math Sprint",
    "description": "Lightning arithmetic with playful practice: speed, accuracy, and confidence without calculators.",
    "provider": {"@type":"Organization","name": siteConfig.brand,"sameAs": siteConfig.siteUrl}
  };
  return (
    <>
      <SEO title="Mental Math Sprint" description={"Lightning arithmetic with playful practice: speed, accuracy, and confidence without calculators."} jsonLd={{...courseLd}} />
      
      {/* Course Hero Section */}
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url("/images/mental-math-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.85) 0%, rgba(244, 114, 182, 0.85) 100%)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <img src="/images/mental-math-icon-large.png" alt="Mental Math" style={{ width: '120px', height: '120px', marginBottom: '2rem' }} />
            <h1 style={{ 
              color: 'white', 
              fontSize: '3rem', 
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>Mental Math Sprint</h1>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem', 
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}>
              Lightning arithmetic with playful practice: speed, accuracy, and confidence without calculators.
            </p>
            <a className="btn" style={{ 
              background: 'white', 
              color: '#ec4899',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }} href={`https://wa.me/${siteConfig.whatsapp}?text=I%20want%20to%20join%20mental-math%20course`}>Join via WhatsApp</a>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h1>Mental Math Sprint</h1>
          <ul className="check">
            <li>Friendly shortcuts + number sense.</li><li>Progressive daily sprints and gamified goals.</li><li>Real-life word problems to apply speed maths.</li>
          </ul>
          <a className="btn" href={`https://wa.me/${siteConfig.whatsapp}?text=I%20want%20to%20join%20mental-math%20course`}>Join via WhatsApp</a>
        </div>
      </section>
    </>
  )
}
