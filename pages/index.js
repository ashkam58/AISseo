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
        title="Best Online Coding, Math & AI Classes for Kids | STEM Education India | Ashkam Intelligence Studio"
        description="🚀 Top-rated online coding, AI, math olympiad, and Rubik's cube classes for kids aged 6-16. Expert IIT/NIT teachers, project-based learning, 95% completion rate. Book FREE demo class today! Perfect for homeschooling, after-school programs, and skill development."
        keywords="coding classes for kids, programming for children, AI classes kids, math olympiad training, mental math course, Rubik's cube lessons, STEM education India, online classes children, coding bootcamp kids, scratch programming, python for kids, javascript children, robotics classes"
        jsonLd={orgLd}
      />
      
      {/* Modern Hero Section */}
  <section className="hero">
  <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center hero-inner">
            {/* Left: Text & CTAs */}
            <div>
              {/* Fun Badge */}
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginBottom: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                🚀 India's Most Fun Learning Platform for Kids
              </div>

              <h1>
                Transform Your Child's Future with <span className="gradient-text">Coding, AI & Math</span><br />
                Skills That Matter in 2025! 🎯
              </h1>

              <p>
                India's premier online learning platform for kids aged 6-16. Our expert teachers from IIT/NIT make coding, artificial intelligence, math olympiads, and problem-solving fun through hands-on projects. Join 500+ successful students who've built games, solved complex problems, and discovered their passion for technology. Perfect for homeschooling, after-school enrichment, and future career preparation.
              </p>

              <div className="hero-cta" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 18 }}>
                <Link href="/courses" className="btn" style={{ width: '100%', textAlign: 'center' }}>
                  🎨 Explore Courses
                </Link>
                <Link href="/blog" className="btn secondary" style={{ width: '100%', textAlign: 'center' }}>
                  📚 Read Blog
                </Link>
                <Link href="/contact" className="btn outline" style={{ width: '100%', textAlign: 'center' }}>
                  📞 Book FREE Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="stats grid grid-cols-2 gap-4 mt-6">
                <div className="stat">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Students Taught</div>
                </div>
                <div className="stat">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">IIT/NIT Teachers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4.9⭐</div>
                  <div className="stat-label">Parent Rating</div>
                </div>
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Course Completion</div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="flex justify-center hero-image" style={{ position: 'relative', zIndex: 12 }}>
              <img 
                src="/images/hero-kids-coding.png" 
                alt="Kids learning coding and AI" 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto', 
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          overflow: visible;
        }

  /* (background image removed) */

        /* Ensure background keeps aspect ratio and doesn't stretch on small screens */
        .hero-inner { min-height: 520px; }

        /* Make hero shorter on small screens to avoid heavy vertical space */
        @media (max-width: 1200px) {
          .hero-inner { min-height: 480px; }
        }

        @media (max-width: 992px) {
          .hero-inner { min-height: 420px; }
        }

        @media (max-width: 768px) {
          .hero-inner { min-height: 320px; }
          .hero { background-attachment: scroll; background-position: center top; }
        }

        /* On very small devices, use 'contain' to avoid cropping important parts */
        @media (max-width: 420px) {
          .hero { background-size: contain; background-position: center top; }
          .hero-inner { min-height: 260px; }
        }

        /* Allow the right illustration to overflow and remain visible like the provided screenshot */
        .hero-image { overflow: visible; }
        .hero-image img { display: block; max-width: 100%; height: auto; }
      `}</style>

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
              🎯 Award-Winning STEM Programs
            </div>
            
            <h2>Master Future-Ready Skills Through Play</h2>
            
            <p style={{
              textAlign: 'center',
              fontSize: '1.125rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              🌈 Our curriculum is designed by education experts and tech industry professionals. Each course combines theory with hands-on projects, ensuring your child not only learns but creates real applications, games, and solutions.
            </p>
          </div>
          
          <div className="grid grid-2">
            {/* Coding Course */}
            <div className="card course-coding" style={{
              position: 'relative',
              backgroundImage: 'url("/images/coding-course-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden'
            }}>
              {/* Overlay for better text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
                zIndex: 1
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <img src="/images/coding-icon.png" alt="Coding" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="badge coding">💻 CODING & PROGRAMMING</div>
              <h3 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Complete Coding Mastery Program</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.95)', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                Master Scratch, Python, JavaScript, HTML/CSS, and app development! Build 10+ real projects including games, websites, and mobile apps. Perfect introduction to software engineering for kids. Industry-aligned curriculum preparing students for future tech careers.
              </p>
              <div style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                ✨ Ages 6-16 • 🎯 Beginner to Advanced • ⏰ 1-1.5 hour/session • 📱 Project Portfolio Included
              </div>
              <Link href="/courses/coding-ai" className="btn">
                Start Coding Journey 🚀
              </Link>
              </div>
            </div>

            {/* AI Course */}
            <div className="card course-ai" style={{
              position: 'relative',
              backgroundImage: 'url("/images/ai-course-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden'
            }}>
              {/* Overlay for better text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.9) 0%, rgba(244, 114, 182, 0.9) 100%)',
                zIndex: 1
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <img src="/images/ai-icon.png" alt="AI" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="badge ai">🤖 ARTIFICIAL INTELLIGENCE</div>
              <h3 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>AI & Machine Learning for Kids</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.95)', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                Discover artificial intelligence, machine learning, and chatbot development! Create AI-powered games, smart assistants, and predictive models. Learn concepts behind ChatGPT, computer vision, and voice recognition through age-appropriate projects and experiments.
              </p>
              <div style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                ✨ Ages 10-16 • 🎯 Beginner to Intermediate • ⏰ 1.5 hours/session • 🤖 Build Real AI Apps
              </div>
              <Link href="/courses/coding-ai" className="btn secondary">
                Explore AI Magic 🤖
              </Link>
              </div>
            </div>

            {/* Math Course */}
            <div className="card course-math" style={{
              position: 'relative',
              backgroundImage: 'url("/images/math-course-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden'
            }}>
              {/* Overlay for better text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.9) 0%, rgba(251, 191, 36, 0.9) 100%)',
                zIndex: 1
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <img src="/images/math-icon.png" alt="Math" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="badge math">🧮 MATH OLYMPIAD TRAINING</div>
              <h3 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Advanced Math & Competition Prep</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.95)', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                Excel in Math Olympiads, mental math competitions, and advanced problem-solving! Master algebra, geometry, number theory, and combinatorics. Our students consistently rank in top 10% of national competitions and improve school grades by 2+ letter grades.
              </p>
              <div style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                ✨ Ages 8-16 • 🎯 Beginner to Competition Level • ⏰ 1-1.5 hour/session • 🏆 Competition Ready
              </div>
              <Link href="/courses/math-competitions" className="btn accent">
                Master Math Competitions 🎯
              </Link>
              </div>
            </div>

            {/* Rubik's Cube */}
            <div className="card course-rubiks" style={{
              position: 'relative',
              backgroundImage: 'url("/images/rubiks-course-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden'
            }}>
              {/* Overlay for better text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(52, 211, 153, 0.9) 100%)',
                zIndex: 1
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <img src="/images/rubiks-icon.png" alt="Rubik's Cube" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="badge rubiks">🧩 COGNITIVE DEVELOPMENT</div>
              <h3 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Rubik's Cube & Logic Training</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.95)', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                Master the world's most famous puzzle! Learn layer-by-layer method, advanced algorithms, and speedcubing techniques. Improves spatial reasoning, memory, concentration, and problem-solving skills. Many students solve under 2 minutes within 8 weeks!
              </p>
              <div style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                ✨ Ages 6-16 • 🎯 Complete Beginner to Speedcubing • ⏰ 45-60 min/session • ⚡ Under 2 Min Goal
              </div>
              <Link href="/courses/rubiks-cube" className="btn success">
                Solve Like a Pro 🧩
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Methodology Section */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(90deg, #f0f9ff 0%, #e0e7ff 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Our Proven Teaching Methodology</h2>
            <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Backed by educational research and refined through 1000+ successful student outcomes
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/project-based-learning.png" alt="Project Based Learning" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>Project-Based Learning</h3>
              <p>Every concept is taught through real projects. Students build games, apps, and solutions while learning core principles.</p>
            </div>
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/small-batch-teaching.png" alt="Small Batch Teaching" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>Small Batch Teaching</h3>
              <p>Maximum 6 students per batch ensures personalized attention, doubt clearing, and peer-to-peer learning.</p>
            </div>
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/progress-tracking.png" alt="Progress Tracking" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>Progress Tracking</h3>
              <p>Regular assessments, parent reports, and skill badges help track your child's learning journey effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Student Success Stories</h2>
            <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Real achievements from our amazing students and proud parents
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card" style={{ background: '#f8fafc', border: '2px solid #e2e8f0' }}>
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <img src="/images/student-arjun.jpeg" alt="Arjun" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <h4>Arjun, Age 12</h4>
              <p>"Built my first mobile app and won 1st place in school's tech fair! Now planning to participate in national coding competitions."</p>
              <small style={{ color: 'var(--text-muted)' }}>Coding Program Graduate</small>
            </div>
            <div className="card" style={{ background: '#f8fafc', border: '2px solid #e2e8f0' }}>
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <img src="/images/student-priya.jpeg" alt="Priya" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <h4>Priya, Age 14</h4>
              <p>"Qualified for Math Olympiad nationals! Mental math tricks helped me solve problems 3x faster than before."</p>
              <small style={{ color: 'var(--text-muted)' }}>Math Olympiad Program</small>
            </div>
            <div className="card" style={{ background: '#f8fafc', border: '2px solid #e2e8f0' }}>
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <img src="/images/student-rohit.jpeg" alt="Rohit" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <h4>Rohit, Age 10</h4>
              <p>"Can solve Rubik's cube in 45 seconds! My memory and focus improved so much that my school grades went from B to A+."</p>
              <small style={{ color: 'var(--text-muted)' }}>Rubik's Cube Master</small>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials Section */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(90deg, #fdf2f8 0%, #f3e8ff 100%)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 700, marginBottom: 32 }}>What Parents Are Saying</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: 32, maxWidth: 380 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <img src="/images/parent-priya-sharma.jpeg" alt="Priya Sharma" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '12px' }} />
                <span style={{ color: '#fbbf24', fontSize: '1.5rem' }}>⭐⭐⭐⭐⭐</span>
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: 16, fontSize: '1.1rem' }}>"My son went from struggling with basic math to qualifying for state olympiad in just 6 months! The teachers are incredibly patient and skilled."</p>
              <div style={{ fontWeight: 600 }}>- Priya Sharma, Mother of Arjun (Age 11)</div>
            </div>
            <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: 32, maxWidth: 380 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <img src="/images/parent-rajesh-kumar.jpeg" alt="Rajesh Kumar" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '12px' }} />
                <span style={{ color: '#fbbf24', fontSize: '1.5rem' }}>⭐⭐⭐⭐⭐</span>
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: 16, fontSize: '1.1rem' }}>"Best investment we made for our daughter's future! She built her first website at age 12 and now wants to become a software engineer."</p>
              <div style={{ fontWeight: 600 }}>- Rajesh Kumar, Father of Kavya (Age 12)</div>
            </div>
            <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: 32, maxWidth: 380 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <img src="/images/parent-anita-patel.jpeg" alt="Anita Patel" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '12px' }} />
                <span style={{ color: '#fbbf24', fontSize: '1.5rem' }}>⭐⭐⭐⭐⭐</span>
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: 16, fontSize: '1.1rem' }}>"The flexibility is amazing! My child takes classes from anywhere, and the recorded sessions help with revision. Highly recommend!"</p>
              <div style={{ fontWeight: 600 }}>- Anita Patel, Mother of Dev (Age 9)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 700, marginBottom: 40 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#1f2937' }}>What age groups do you teach?</h4>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>We offer specialized programs for ages 6-16, with curriculum tailored to different age groups: Ages 6-8 (Visual programming with Scratch), Ages 9-12 (Python basics and logic building), Ages 13-16 (Advanced programming, AI, and competition prep).</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#1f2937' }}>What devices and software do I need?</h4>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>Just a laptop/desktop with stable internet. We provide all software installations and setup guidance. Tablets can work for some courses but laptops are recommended for coding classes.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#1f2937' }}>How do you ensure my child stays engaged online?</h4>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>Small batches (max 6 students), interactive coding exercises, gamified learning with points/badges, regular project showcases, and teachers trained specifically in online child engagement techniques.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#1f2937' }}>What if my child misses a class?</h4>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>All classes are recorded and available for 1 year. We also offer makeup sessions and one-on-one doubt clearing. No learning is ever lost!</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#1f2937' }}>How do you track progress and provide feedback?</h4>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>Monthly progress reports, project portfolio development, skill assessments, parent-teacher meetings, and real-time dashboard showing completed modules and achievements.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#1f2937' }}>What's your refund policy?</h4>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>100% money-back guarantee if not satisfied within first 3 classes. We're confident your child will love learning with us!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '4rem 0', background: 'var(--surface-2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Why 1000+ Parents Trust Ashkam Intelligence Studio 💝</h2>
            <p style={{
              fontSize: '1.125rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              We're not just another online school - we're India's most trusted learning partner for future-ready skills. Here's what makes us different:
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/gamified-learning.jpeg" alt="Gamified Learning" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>Gamified Learning Experience</h3>
              <p>
                Our proprietary learning platform makes education addictive! Kids earn XP points, unlock achievements, and build impressive project portfolios. 98% of students complete their courses vs. 15% industry average.
              </p>
            </div>
            
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/expert-faculty.png" alt="Expert Faculty" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>IIT/NIT Expert Faculty</h3>
              <p>
                Learn from alumni of India's top engineering institutions with 5+ years industry experience. Our teachers are trained in child psychology and age-appropriate teaching methods for maximum engagement.
              </p>
            </div>
            
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/measurable-results.png" alt="Measurable Results" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>Measurable Results</h3>
              <p>
                95% course completion rate, 2+ grade improvement in school math/science, and 500+ competition winners. We track every milestone and provide detailed progress reports to parents monthly.
              </p>
            </div>
            
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/personalized-learning.png" alt="Personalized Learning" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>Personalized Learning Paths</h3>
              <p>
                AI-powered assessment identifies your child's learning style and pace. Maximum 6 students per batch ensures individual attention, customized projects, and one-on-one doubt clearing sessions.
              </p>
            </div>
            
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/affordable-price.png" alt="Affordable Pricing" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>Premium Quality, Affordable Price</h3>
              <p>
                World-class education at 70% less cost than offline coaching institutes. Includes lifetime access to recorded sessions, project templates, and career guidance from industry mentors.
              </p>
            </div>
            
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <img src="/images/flexible-schedule.png" alt="Flexible Schedule" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3>Flexible Schedule Options</h3>
              <p>
                Morning, evening, or weekend batches available. Miss a class? No problem! Makeup sessions and recorded lectures ensure zero learning loss. Perfect for busy families and homeschooling.
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
            🎯 Ready to Give Your Child a Competitive Edge?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            Join 1000+ successful students who've mastered coding, AI, and math competitions with us. 
            Start with a completely FREE demo class - no credit card required, no hidden fees, just pure learning experience!
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
            ✨ 100% Free Demo Class • 💯 Money-Back Guarantee • 🎁 No Hidden Fees • 🏆 Trusted by 1000+ Families
          </div>
        </div>
      </section>
    </>
  )
}
