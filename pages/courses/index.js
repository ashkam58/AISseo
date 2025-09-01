import Link from 'next/link'
import { SEO } from '@/components/SEO'
import { getAllCourses } from '@/lib/mdx'

export default function Courses({ courses = [] }) {
  // Define colors and icons for different course types
  const getCourseStyle = (course) => {
    if (course.slug.includes('coding') || course.slug.includes('python') || course.slug.includes('javascript')) {
      return {
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: '💻',
        bgPattern: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E")'
      }
    } else if (course.slug.includes('math') || course.slug.includes('geometry') || course.slug.includes('fraction')) {
      return {
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        icon: '📊',
        bgPattern: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="10" cy="10" r="1.5" fill="%23ffffff" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23dots)"/%3E%3C/svg%3E")'
      }
    } else if (course.slug.includes('ai') || course.slug.includes('machine')) {
      return {
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        icon: '🤖',
        bgPattern: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M10 0v20M0 10h20" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23circuit)"/%3E%3C/svg%3E")'
      }
    } else if (course.slug.includes('rubiks') || course.slug.includes('cube')) {
      return {
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        icon: '🧩',
        bgPattern: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="squares" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Crect width="8" height="8" fill="%23ffffff" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23squares)"/%3E%3C/svg%3E")'
      }
    } else if (course.slug.includes('mental') || course.slug.includes('competition')) {
      return {
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        icon: '🧠',
        bgPattern: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="brain" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M0 10L10 0L20 10L10 20z" fill="%23ffffff" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23brain)"/%3E%3C/svg%3E")'
      }
    } else {
      return {
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: '📚',
        bgPattern: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="default" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23default)"/%3E%3C/svg%3E")'
      }
    }
  }

  return (
    <>
      <SEO
        title="Online Classes for Kids | Coding, AI, Math, Robotics & More | Ashkam Intelligence Studio"
        description="Discover expert-designed online courses for kids aged 6-16. Coding, AI, Math Olympiad, and more."
      />
      
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          fontSize: '4rem',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite'
        }}>🚀</div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          fontSize: '3rem',
          opacity: 0.1,
          animation: 'float 4s ease-in-out infinite delay-1s'
        }}>⭐</div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          fontSize: '3.5rem',
          opacity: 0.1,
          animation: 'float 5s ease-in-out infinite delay-2s'
        }}>🎯</div>
        
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: '800', 
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          background: 'linear-gradient(45deg, #fff, #f0f8ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🌟 Amazing Courses for Kids! 🌟
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          marginBottom: '2rem',
          opacity: 0.9,
          maxWidth: '800px',
          margin: '0 auto 2rem auto'
        }}>
          Discover fun, interactive learning adventures that make education exciting!
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            📊 {courses.length} Courses Available
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            👥 Ages 6-16
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            🏆 Expert Teachers
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ 
        padding: '4rem 2rem', 
        maxWidth: '1400px', 
        margin: '0 auto',
        background: 'linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%)'
      }}>        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {courses.length > 0 ? (
            courses.map((course, index) => {
              const style = getCourseStyle(course);
              return (
                <div
                  key={course.slug}
                  style={{
                    background: style.gradient,
                    backgroundImage: style.bgPattern,
                    borderRadius: '20px',
                    padding: '0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    border: 'none',
                    overflow: 'hidden',
                    position: 'relative',
                    transform: 'translateY(0)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                  }}
                >
                  {/* Course Header */}
                  <div style={{
                    padding: '2rem 2rem 1rem 2rem',
                    borderBottom: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <div style={{
                      fontSize: '4rem',
                      textAlign: 'center',
                      marginBottom: '1rem',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      animation: `bounce 2s infinite ${index * 0.1}s`
                    }}>
                      {style.icon}
                    </div>
                    <h3 style={{ 
                      fontWeight: '700', 
                      marginBottom: '1rem', 
                      fontSize: '1.5rem',
                      textAlign: 'center',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                      {course.title}
                    </h3>
                  </div>

                  {/* Course Content */}
                  <div style={{ padding: '1.5rem 2rem 2rem 2rem' }}>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.9)', 
                      marginBottom: '1.5rem', 
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      {course.short}
                    </p>
                    
                    {/* Course Details */}
                    <div style={{ 
                      background: 'rgba(255,255,255,0.1)',
                      padding: '1rem',
                      borderRadius: '12px',
                      marginBottom: '1.5rem',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                        gap: '0.5rem',
                        fontSize: '0.9rem'
                      }}>
                        <div>
                          <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>Level</div>
                          <div style={{ fontWeight: '600' }}>{course.level}</div>
                        </div>
                        <div>
                          <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>Duration</div>
                          <div style={{ fontWeight: '600' }}>{course.duration}</div>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                          <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>Price</div>
                          <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                            ₹{course.priceINR} / AED {course.priceAED}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      href={`/courses/${course.slug}`}
                      style={{
                        display: 'block',
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        padding: '1rem 1.5rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '700',
                        textAlign: 'center',
                        border: '2px solid rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(10px)',
                        fontSize: '1.1rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      🚀 Start Learning Now!
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem' }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '3rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                <h2>No courses found</h2>
                <p>Debug info: Course count = {courses.length}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @media (max-width: 768px) {
          h1 { fontSize: 2.5rem !important; }
          .course-card { margin: 1rem !important; }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  try {
    const courses = getAllCourses();
    console.log('Courses loaded:', courses.length);
    
    return {
      props: {
        courses
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error loading courses:', error);
    return {
      props: {
        courses: []
      }
    };
  }
}
