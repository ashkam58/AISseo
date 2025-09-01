import Link from 'next/link'
import { SEO } from '@/components/SEO'
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
      
      {/* Modern Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {/* Fun Badge */}
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              🚀 India's Most Fun Learning Platform for Kids
            </div>
            
            <h1>
              Learn <span className="gradient-text">Coding, AI & Math</span><br />
              the Fun Way! 🎯
            </h1>
            
            <p>
              Interactive online classes designed for kids aged 6-16. Build real projects, 
              solve puzzles, and develop skills that matter for the future - all with expert teachers who make learning exciting!
            </p>
            
            <div className="hero-cta">
              <a href="#courses" className="btn">
                🎨 Explore Courses
              </a>
              <a href="/contact" className="btn outline">
                📞 Book FREE Demo
              </a>
            </div>
            
            {/* Stats */}
            <div className="stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Expert Teachers</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9⭐</span>
                <span className="stat-label">Parent Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Course Completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ec4899, #f472b6)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              🎯 Our Amazing Courses
            </div>
            
            <h2>Pick Your Superpower Adventure!</h2>
            
            <p style={{
              textAlign: 'center',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              🌈 Choose from our exciting courses designed to spark creativity, build confidence, and make learning absolutely fun!
            </p>
          </div>
          
          <div className="grid grid-2">
            {/* Coding Course */}
            <div className="card course-coding">
              <div className="badge coding">💻 CODING</div>
              <h3>Kids Coding Adventures</h3>
              <p>
                Build games, apps & websites! Learn Scratch, Python, JavaScript through fun projects. 
                Perfect for beginners aged 6-16.
              </p>
              <div style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                ✨ Ages 6-16 • 🎯 Beginner to Advanced • ⏰ 1 hour/session
              </div>
              <Link href="/courses/coding-ai" className="btn">
                Start Coding Journey 🚀
              </Link>
            </div>

            {/* AI Course */}
            <div className="card course-ai">
              <div className="badge ai">🤖 ARTIFICIAL INTELLIGENCE</div>
              <h3>AI for Young Innovators</h3>
              <p>
                Discover the magic of AI! Create chatbots, smart games, and learn how AI works 
                through exciting hands-on projects.
              </p>
              <div style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                ✨ Ages 10-16 • 🎯 Beginner Friendly • ⏰ 1.5 hours/session
              </div>
              <Link href="/courses/coding-ai" className="btn secondary">
                Explore AI Magic 🤖
              </Link>
            </div>

            {/* Math Course */}
            <div className="card course-math">
              <div className="badge math">🧮 MATH MASTERY</div>
              <h3>Math Competitions & Mental Math</h3>
              <p>
                Master Olympiad problems, mental math tricks, and problem-solving strategies. 
                Make math your superpower!
              </p>
              <div style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                ✨ Ages 8-16 • 🎯 All Levels • ⏰ 1 hour/session
              </div>
              <Link href="/courses/math-competitions" className="btn accent">
                Master Math 🎯
              </Link>
            </div>

            {/* Rubik's Cube */}
            <div className="card course-rubiks">
              <div className="badge rubiks">🧩 PUZZLE SOLVING</div>
              <h3>Rubik's Cube Mastery</h3>
              <p>
                Learn to solve the Rubik's cube step-by-step! Improve memory, focus, and 
                problem-solving skills through this amazing puzzle.
              </p>
              <div style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                ✨ Ages 6-16 • 🎯 Beginner to Speedcubing • ⏰ 45 min/session
              </div>
              <Link href="/courses/rubiks-cube" className="btn success">
                Solve the Cube 🧩
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '4rem 0', background: 'var(--surface-2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Why Parents & Kids Love Us 💝</h2>
            <p style={{
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              We're not just another online school - we're your child's learning adventure partners!
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎮</div>
              <h3>Learn Through Play</h3>
              <p>
                Our gamified approach makes learning addictive! Kids earn points, badges, 
                and build real projects they can show off to friends.
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🏫</div>
              <h3>Expert Teachers</h3>
              <p>
                IIT/NIT graduates and industry experts who know how to make complex 
                concepts simple and fun for young minds.
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
              <h3>Real Results</h3>
              <p>
                95% course completion rate, improved school grades, and kids who 
                actually look forward to their next class!
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3>Personalized Learning</h3>
              <p>
                Small class sizes (max 6 students) ensure every child gets personal 
                attention and learns at their own pace.
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3>Affordable Excellence</h3>
              <p>
                Premium quality education at pocket-friendly prices. Plus, try any 
                course with our FREE demo class!
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏰</div>
              <h3>Flexible Timing</h3>
              <p>
                Morning, evening, or weekend batches. We fit into your family's 
                schedule, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ 
        padding: '4rem 0', 
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>
            Ready to Start Your Child's Learning Adventure? 🚀
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join 500+ happy families who've transformed their kids' learning journey with us. 
            Book a FREE demo class and see the magic yourself!
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'white',
              color: '#6366f1',
              padding: '1rem 2rem',
              borderRadius: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease'
            }}>
              📞 Book FREE Demo Class
            </Link>
            
            <a href={`https://wa.me/91${siteConfig.whatsapp}?text=Hi! I want to know more about online classes for my child 😊`} 
               target="_blank"
               rel="noopener noreferrer"
               style={{
                 display: 'inline-flex',
                 alignItems: 'center',
                 gap: '0.75rem',
                 background: 'rgba(255, 255, 255, 0.2)',
                 color: 'white',
                 padding: '1rem 2rem',
                 borderRadius: '16px',
                 fontWeight: '600',
                 textDecoration: 'none',
                 border: '2px solid rgba(255, 255, 255, 0.3)',
                 transition: 'all 0.2s ease'
               }}>
              💬 WhatsApp Us
            </a>
          </div>
          
          <div style={{ 
            marginTop: '2rem', 
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            ✨ No commitment required • 💯 100% satisfaction guarantee • 🎁 Free trial class
          </div>
        </div>
      </section>
    </>
  )
}
