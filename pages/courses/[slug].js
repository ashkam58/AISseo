import { getAllCourses, getCourseBySlug } from '@/lib/mdx';
import { generateSEO, jsonLdBuilders, generateBreadcrumbs } from '@/lib/seo';
import { SEO } from '@/components/SEO';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import Head from 'next/head';

const components = {
  h1: (props) => <h1 style={{ color: '#1f2937', marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.2' }} {...props} />,
  h2: (props) => <h2 style={{ color: '#374151', marginBottom: '1rem', marginTop: '2.5rem', fontSize: '2rem', fontWeight: '600' }} {...props} />,
  h3: (props) => <h3 style={{ color: '#4b5563', marginBottom: '0.75rem', marginTop: '2rem', fontSize: '1.5rem', fontWeight: '600' }} {...props} />,
  p: (props) => <p style={{ lineHeight: '1.8', marginBottom: '1.25rem', color: '#6b7280', fontSize: '1.1rem' }} {...props} />,
  ul: (props) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem', color: '#6b7280' }} {...props} />,
  li: (props) => <li style={{ marginBottom: '0.5rem', color: '#6b7280', lineHeight: '1.6' }} {...props} />,
  strong: (props) => <strong style={{ color: '#1f2937', fontWeight: '600' }} {...props} />,
  a: (props) => <a style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: '500' }} {...props} />,
};

export default function CoursePage({ course, mdxSource }) {
  if (!course) {
    return <div>Course not found</div>;
  }

  const seoData = generateSEO({
    title: course.seo.title,
    description: course.seo.description,
    canonical: `/courses/${course.slug}`
  });

  const breadcrumbs = generateBreadcrumbs(`/courses/${course.slug}`);
  
  return (
    <>
      <SEO {...seoData} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBuilders.breadcrumbs(breadcrumbs))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBuilders.course(course))
          }}
        />
      </Head>
      
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%)',
        padding: '0'
      }}>
        {/* Breadcrumbs */}
        <div style={{
          background: 'white',
          borderBottom: '1px solid #e5e7eb',
          padding: '1rem 0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <nav style={{ fontSize: '0.9rem', color: '#6b7280' }}>
              <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>Home</Link>
              <span style={{ margin: '0 0.5rem' }}>/</span>
              <Link href="/courses" style={{ color: '#3b82f6', textDecoration: 'none' }}>Courses</Link>
              <span style={{ margin: '0 0.5rem' }}>/</span>
              <span style={{ color: '#374151', fontWeight: '500' }}>{course.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '0.75rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}>
              🎓 Premium Course
            </div>
            
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              {course.title}
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '2.5rem',
              lineHeight: '1.6',
              opacity: 0.9,
              maxWidth: '700px',
              margin: '0 auto 2.5rem auto'
            }}>
              {course.short}
            </p>
            
            {/* Course Meta Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
              maxWidth: '800px',
              margin: '0 auto 3rem auto'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '1.5rem',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Level</div>
                <div style={{ opacity: 0.9 }}>{course.level}</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '1.5rem',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏱️</div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Duration</div>
                <div style={{ opacity: 0.9 }}>{course.duration}</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '1.5rem',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Age Group</div>
                <div style={{ opacity: 0.9 }}>{course.audience.join(', ')}</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '1.5rem',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Price</div>
                <div style={{ opacity: 0.9 }}>₹{course.priceINR} / AED {course.priceAED}</div>
              </div>
            </div>
            
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
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }}
              >
                📞 Book FREE Demo Class
              </Link>
              <a 
                href={`https://wa.me/91${process.env.NEXT_PUBLIC_WHATSAPP || '9876543210'}?text=Hi! I'm interested in the ${course.title} course.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  border: '2px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
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
        
        {/* Course Content */}
        <section style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              background: 'white',
              padding: '3rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <MDXRemote {...mdxSource} components={components} />
            </div>
          </div>
        </section>
        
        {/* Related Courses */}
        <section style={{ 
          background: 'white', 
          padding: '4rem 2rem',
          borderTop: '1px solid #e5e7eb'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1f2937'
            }}>
              Other Courses You Might Like
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              justifyContent: 'center'
            }}>
              <Link 
                href="/courses/coding-ai" 
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}
              >
                💻 Coding & AI
              </Link>
              <Link 
                href="/courses/math-foundations-kids" 
                style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}
              >
                📊 Math Foundations
              </Link>
              <Link 
                href="/courses/rubiks-cube" 
                style={{
                  background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                  color: 'white',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}
              >
                🧩 Rubik's Cube
              </Link>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link 
                href="/courses" 
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }}
              >
                🎓 View All Courses
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            fontSize: 2.5rem !important;
          }
          
          .hero-section {
            padding: 3rem 1rem !important;
          }
          
          .course-meta-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1rem !important;
          }
          
          .btn-group {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          
          .btn-group a {
            width: 100% !important;
            text-align: center !important;
          }
          
          .content-section {
            padding: 2rem 1rem !important;
          }
          
          .content-card {
            padding: 2rem 1.5rem !important;
          }
          
          .related-courses {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            fontSize: 2rem !important;
          }
          
          .hero-subtitle {
            fontSize: 1rem !important;
          }
          
          .course-meta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const courses = getAllCourses();
  
  const paths = courses.map((course) => ({
    params: { slug: course.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const course = getCourseBySlug(params.slug);
  
  if (!course) {
    return {
      notFound: true,
    };
  }
  
  const mdxSource = await serialize(course.content);
  
  return {
    props: {
      course,
      mdxSource,
    },
    revalidate: 3600, // Revalidate every hour
  };
}
