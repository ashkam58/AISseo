import Link from 'next/link'
import { SEO } from '@/components/SEO'
import { Hero } from '@/components/HeroNew'
import { siteConfig } from '@/site.config'

export default function Home() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.brand,
    "url": siteConfig.siteUrl,
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91 " + siteConfig.whatsapp
    }]
  };

  return (
    <>
      <SEO
        title="Best Coding, Math & AI Classes for Kids | Fun Online Learning"
        description="🎨 Fun online classes for kids in Coding, AI, Rubik's Cube, Math Olympiads & Mental Math. Expert teachers, child-friendly design. Book FREE demo today!"
        jsonLd={orgLd}
      />
      <Hero/>
      
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
        backdropFilter: 'blur(20px)'
      }}>
        <div className="container">
          <div style={{
            fontWeight: '800',
            color: '#7c3aed',
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ede9fe, #fce7f3)',
            padding: '0.5rem 1.5rem',
            borderRadius: '25px',
            display: 'inline-block',
            width: '100%'
          }}>🎯 Our Amazing Courses</div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            margin: '1rem 0 2rem',
            color: '#2d1b69',
            textAlign: 'center',
            fontFamily: 'Fredoka One, Comic Neue, cursive'
          }}>Pick Your Superpower Adventure!</h2>
          
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#6366f1',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            fontWeight: '600'
          }}>
            🌈 Choose from our exciting courses designed to spark creativity, build confidence, and make learning absolutely fun!
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <CourseCard 
              href="/courses/coding-ai" 
              title="🤖 Coding & AI" 
              badge="💻 Build & Create"
              emoji="🚀"
              text="From Scratch to Python, AI basics to amazing projects! Build games, create art, and bring your ideas to life with code!"
              color="#ff6b6b"
            />
            <CourseCard 
              href="/courses/rubiks-cube" 
              title="🧩 Rubik's Cube" 
              badge="⚡ Speed & Memory"
              emoji="🏃‍♂️"
              text="Master the magical cube with smart patterns and memory tricks! Become a speed-solving champion!"
              color="#4ecdc4"
            />
            <CourseCard 
              href="/courses/math-competitions" 
              title="🏆 Math Competitions" 
              badge="🥇 Olympiad & Kangaroo"
              emoji="🧠"
              text="Discover the joy of problem-solving! Train for Olympiads with fun strategies and confidence-building practice."
              color="#ffe66d"
            />
            <CourseCard 
              href="/courses/mental-math" 
              title="⚡ Mental Math" 
              badge="🔢 Quick Calculations"
              emoji="💫"
              text="Become a math wizard! Lightning-fast calculations through fun games and magical number tricks."
              color="#a8e6cf"
            />
          </div>
        </div>
      </section>

      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #ff9a9e, #fecfef, #f093fb)',
        color: 'white'
      }}>
        <div className="container">
          <div style={{
            fontWeight: '800',
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1.5rem',
            borderRadius: '25px',
            display: 'inline-block',
            width: '100%'
          }}>✨ Why Parents Love Us</div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            margin: '1rem 0 2rem',
            textAlign: 'center',
            fontFamily: 'Fredoka One, Comic Neue, cursive',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>Serious Learning, Seriously Fun!</h2>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(15px)',
            borderRadius: '25px',
            padding: '2rem',
            margin: '2rem 0'
          }}>
            <ul style={{
              paddingLeft: '0',
              maxWidth: '800px',
              margin: '2rem auto',
              listStyle: 'none'
            }}>
              <li style={{
                margin: '1rem 0',
                padding: '1rem',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}>🎨 <strong>Kid-First Design:</strong> Bright, engaging, and calming interface that kids absolutely love!</li>
              <li style={{
                margin: '1rem 0',
                padding: '1rem',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}>👨‍👩‍👧‍👦 <strong>Parent-Friendly:</strong> Clear learning outcomes, flexible scheduling, and detailed progress reports.</li>
              <li style={{
                margin: '1rem 0',
                padding: '1rem',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}>🚀 <strong>Modern Technology:</strong> Fast, secure platform built with the latest technology for seamless learning.</li>
              <li style={{
                margin: '1rem 0',
                padding: '1rem',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}>🎮 <strong>Gamified Learning:</strong> Points, badges, and achievements make every lesson feel like an adventure!</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #4facfe, #00f2fe)'
      }}>
        <div className="container">
          <div style={{
            fontWeight: '800',
            color: 'white',
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1.5rem',
            borderRadius: '25px',
            display: 'inline-block',
            width: '100%'
          }}>🎉 Ready to Start?</div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            margin: '1rem 0 2rem',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Fredoka One, Comic Neue, cursive',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>Join Thousands of Happy Families!</h2>
          
          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <p style={{
              fontSize: '1.3rem',
              color: 'white',
              marginBottom: '2rem',
              fontWeight: '600',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
              🌟 Book your FREE demo today and watch your child's eyes light up with excitement!
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Ashkam%2C%20I'd%20love%20a%20FREE%20demo!`} style={{
                background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
                fontSize: '1.3rem',
                padding: '1.2rem 2.5rem',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                boxShadow: '0 10px 25px rgba(255, 107, 107, 0.4)',
                borderRadius: '50px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease'
              }} className="bounce">
                🎉 Book FREE Demo Now
              </a>
              <a href="/courses" style={{
                border: '3px solid white',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '700',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}>
                📚 View All Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CourseCard({href, title, badge, text, emoji, color}) {
  return (
    <Link href={href} style={{
      background: 'white',
      border: `3px solid ${color}`,
      borderRadius: '25px',
      padding: '2rem',
      boxShadow: `0 15px 35px ${color}40`,
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
      position: 'relative',
      overflow: 'hidden'
    }} className="fade-in float">
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        height: '6px',
        background: `linear-gradient(90deg, ${color}, ${color}80)`,
        transition: 'height 0.3s ease'
      }}></div>
      
      <div style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>{emoji}</div>
      
      <span style={{
        display: 'inline-block',
        background: `${color}20`,
        color: color,
        padding: '0.5rem 1rem',
        borderRadius: '25px',
        fontSize: '0.9rem',
        fontWeight: '700',
        marginBottom: '1rem'
      }}>{badge}</span>
      
      <h3 style={{
        margin: '0.5rem 0 1rem',
        fontSize: '1.4rem',
        fontWeight: '800',
        color: '#2d1b69'
      }}>{title}</h3>
      
      <p style={{
        fontSize: '1rem',
        color: '#6366f1',
        lineHeight: '1.6',
        marginBottom: '1rem'
      }}>{text}</p>
      
      <div style={{
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: color,
        fontWeight: '600'
      }}>
        Click to explore →
      </div>
    </Link>
  )
}
