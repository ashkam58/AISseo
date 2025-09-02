import Link from 'next/link'
import { SEO } from '@/components/SEO'
import { getAllCourses } from '@/lib/mdx'

export default function Courses({ courses = [] }) {
  // Define modern course categories with better styling
  const getCourseCategory = (course) => {
    if (course.slug.includes('coding') || course.slug.includes('python') || course.slug.includes('javascript')) {
      return {
        category: 'Programming',
        color: '#3b82f6',
        bgColor: '#eff6ff',
        icon: '💻',
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'
      }
    } else if (course.slug.includes('math') || course.slug.includes('geometry') || course.slug.includes('fraction')) {
      return {
        category: 'Mathematics',
        color: '#ec4899',
        bgColor: '#fdf2f8',
        icon: '📊',
        gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
      }
    } else if (course.slug.includes('ai') || course.slug.includes('machine')) {
      return {
        category: 'Artificial Intelligence',
        color: '#10b981',
        bgColor: '#ecfdf5',
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)'
      }
    } else if (course.slug.includes('rubiks') || course.slug.includes('cube')) {
      return {
        category: 'Problem Solving',
        color: '#f59e0b',
        bgColor: '#fffbeb',
        icon: '🧩',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
      }
    } else if (course.slug.includes('mental') || course.slug.includes('competition')) {
      return {
        category: 'Mental Math',
        color: '#8b5cf6',
        bgColor: '#f5f3ff',
        icon: '🧠',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
      }
    } else if (course.slug.includes('art') || course.slug.includes('digital')) {
      return {
        category: 'Digital Arts',
        color: '#f97316',
        bgColor: '#fff7ed',
        icon: '🎨',
        gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
      }
    } else {
      return {
        category: 'General',
        color: '#6b7280',
        bgColor: '#f9fafb',
        icon: '📚',
        gradient: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'
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
      <section style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
        color: 'white',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              color: 'white'
            }}>
              Premium Education Programs
            </h1>
            <p style={{
              fontSize: '1.25rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              color: 'white'
            }}>
              Expertly crafted courses designed to unlock your child's potential in technology, mathematics, and creative thinking.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
              <div style={{ fontWeight: '700', marginBottom: '0.25rem', color: 'white' }}>14+ Courses</div>
              <div style={{ opacity: 0.8, fontSize: '0.9rem', color: 'white' }}>Premium Programs</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👨‍🏫</div>
              <div style={{ fontWeight: '700', marginBottom: '0.25rem', color: 'white' }}>Expert Teachers</div>
              <div style={{ opacity: 0.8, fontSize: '0.9rem', color: 'white' }}>Industry Professionals</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💎</div>
              <div style={{ fontWeight: '700', marginBottom: '0.25rem', color: 'white' }}>Ages 6-16</div>
              <div style={{ opacity: 0.8, fontSize: '0.9rem', color: 'white' }}>Age-Appropriate Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Courses Grid */}
      <section style={{
        padding: '5rem 2rem',
        background: '#ffffff',
        minHeight: '100vh'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Our Course Portfolio
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Choose from our carefully curated selection of courses designed to inspire and educate young minds.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {courses.length > 0 ? (
              courses.map((course, index) => {
                const category = getCourseCategory(course);
                return (
                  <div
                    key={course.slug}
                    style={{
                      background: 'white',
                      borderRadius: '20px',
                      padding: '0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      border: '1px solid #e2e8f0',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      height: 'auto',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    }}
                  >
                    {/* Course Header */}
                    <div style={{
                      background: category.gradient,
                      padding: '2rem',
                      color: 'white',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                      }}>
                        {category.icon}
                      </div>
                      <div style={{
                        background: 'rgba(255,255,255,0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        display: 'inline-block'
                      }}>
                        {category.category}
                      </div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        lineHeight: '1.3',
                        margin: '0'
                      }}>
                        {course.title}
                      </h3>
                    </div>

                    {/* Course Content */}
                    <div style={{
                      padding: '2rem',
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <p style={{
                        color: '#64748b',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        flex: '1'
                      }}>
                        {course.short}
                      </p>
                      
                      {/* Course Details */}
                      <div style={{
                        background: '#f8fafc',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        marginBottom: '1.5rem'
                      }}>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '1rem',
                          fontSize: '0.875rem'
                        }}>
                          <div>
                            <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Level</div>
                            <div style={{ fontWeight: '600', color: '#1e293b' }}>{course.level}</div>
                          </div>
                          <div>
                            <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Duration</div>
                            <div style={{ fontWeight: '600', color: '#1e293b' }}>{course.duration}</div>
                          </div>
                          <div style={{ gridColumn: 'span 2' }}>
                            <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Price</div>
                            <div style={{ fontWeight: '700', fontSize: '1.1rem', color: category.color }}>
                              ₹{course.priceINR} / AED {course.priceAED}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link 
                        href={`/courses/${course.slug}`}
                        style={{
                          background: category.gradient,
                          color: 'white',
                          padding: '1rem 1.5rem',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          fontWeight: '700',
                          textAlign: 'center',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          display: 'block'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        📚 Explore Course
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
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                  <h2 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>No courses found</h2>
                  <p style={{ color: '#64748b' }}>Debug info: Course count = {courses.length}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            Ready to Start Learning?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2.5rem',
            opacity: 0.9,
            color: 'white'
          }}>
            Join thousands of students who are already advancing their skills with our expert-led courses.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/contact"
              style={{
                background: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              📞 Book Free Demo
            </Link>
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          .hero-section {
            padding: 3rem 1rem !important;
          }
          
          .courses-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .course-card {
            margin: 0 !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
          }
          
          .cta-buttons a {
            width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }
          
          h2 {
            font-size: 1.75rem !important;
          }
          
          .hero-stats {
            grid-template-columns: 1fr !important;
          }
          
          section {
            padding: 2rem 1rem !important;
          }
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
