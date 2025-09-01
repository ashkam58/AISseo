import { getAllCourses, getCourseBySlug } from '@/lib/mdx';
import { generateSEO, jsonLdBuilders, generateBreadcrumbs } from '@/lib/seo';
import { SEO } from '@/components/SEO';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import Head from 'next/head';

const components = {
  h1: (props) => <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }} {...props} />,
  h2: (props) => <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', marginTop: '2rem' }} {...props} />,
  h3: (props) => <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1.5rem' }} {...props} />,
  p: (props) => <p style={{ lineHeight: '1.7', marginBottom: '1rem', color: 'var(--text-secondary)' }} {...props} />,
  ul: (props) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }} {...props} />,
  li: (props) => <li style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }} {...props} />,
  strong: (props) => <strong style={{ color: 'var(--text-primary)' }} {...props} />,
  a: (props) => <a style={{ color: 'var(--primary)', textDecoration: 'none' }} {...props} />,
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
      
      <div className="container">
        {/* Hero Section */}
        <section className="section-hero">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              🎓 Course Details
            </div>
            
            <h1 style={{ marginBottom: '1rem' }}>{course.title}</h1>
            
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {course.short}
            </p>
            
            {/* Course Meta */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
              padding: '2rem',
              background: 'var(--surface-1)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)'
            }}>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Level</div>
                <div style={{ color: 'var(--text-secondary)' }}>{course.level}</div>
              </div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Duration</div>
                <div style={{ color: 'var(--text-secondary)' }}>{course.duration}</div>
              </div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Age Group</div>
                <div style={{ color: 'var(--text-secondary)' }}>{course.audience.join(', ')}</div>
              </div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Price</div>
                <div style={{ color: 'var(--text-secondary)' }}>₹{course.priceINR} / AED {course.priceAED}</div>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/contact" className="btn">
                📞 Book FREE Demo Class
              </Link>
              <a 
                href={`https://wa.me/91${process.env.NEXT_PUBLIC_WHATSAPP || '9876543210'}?text=Hi! I'm interested in the ${course.title} course.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>
        
        {/* Course Content */}
        <section className="section">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ padding: '3rem' }}>
              <MDXRemote {...mdxSource} components={components} />
            </div>
          </div>
        </section>
        
        {/* Related Courses */}
        <section className="section" style={{ background: 'var(--surface-2)' }}>
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Other Courses You Might Like
            </h2>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/courses/python-beginners" className="btn outline">
                Python for Beginners
              </Link>
              <Link href="/courses/math-olympiad" className="btn outline">
                Math Olympiad
              </Link>
              <Link href="/courses/scratch-kids" className="btn outline">
                Scratch for Kids
              </Link>
            </div>
          </div>
        </section>
      </div>
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
