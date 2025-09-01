
import { SEO } from '@/components/SEO'
import { siteConfig } from '@/site.config'

export default function Page() {
  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Rubik’s Cube Solving",
    "description": "Master patterns, algorithms, and memory tricks to crack the cube confidently and quickly.",
    "provider": {
      "@type": "Organization",
      "name": siteConfig.brand,
      "sameAs": siteConfig.siteUrl
    }
  };
  return (
    <>
      <SEO title="Rubik’s Cube Solving" description={"Master patterns, algorithms, and memory tricks to crack the cube confidently and quickly."} jsonLd={{ ...courseLd }} />

      {/* Course Hero Section */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("/images/rubiks-cube-hero.jpg")',
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
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.85) 0%, rgba(52, 211, 153, 0.85) 100%)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <img src="/images/rubiks-cube-icon-large.png" alt="Rubik's Cube" style={{ width: '120px', height: '120px', marginBottom: '2rem' }} />
            <h1 style={{ 
              color: 'white', 
              fontSize: '3rem', 
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>Rubik's Cube Solving</h1>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem', 
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}>
              Master patterns, algorithms, and memory tricks to crack the cube confidently and quickly.
            </p>
            <a className="btn" style={{ 
              background: 'white', 
              color: '#10b981',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }} href={`https://wa.me/${siteConfig.whatsapp}?text=I%20want%20to%20join%20rubiks-cube%20course`}>Join via WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1>Rubik’s Cube Solving</h1>
          <ul className="check">
            <li>Layer-by-layer method with visual demos.</li>
            <li>Practise algorithms + finger tricks; time your solves.</li>
            <li>Mind gym: memory palaces & spaced repetition.</li>
          </ul>
          <a className="btn" href={`https://wa.me/${siteConfig.whatsapp}?text=I%20want%20to%20join%20rubiks-cube%20course`}>Join via WhatsApp</a>
        </div>
      </section>
    </>
  )
}
