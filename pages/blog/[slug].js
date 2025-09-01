
import { getAllBlogPosts, getBlogPostBySlug, calculateReadingTime } from '@/lib/mdx';
import { generateSEO, jsonLdBuilders, generateBreadcrumbs } from '@/lib/seo';
import { SEO } from '@/components/SEO';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import Head from 'next/head';

const components = {
  h1: (props) => <h1 style={{ color: 'var(--primary)', marginBottom: '1rem', marginTop: '2rem' }} {...props} />,
  h2: (props) => <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', marginTop: '2rem' }} {...props} />,
  h3: (props) => <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1.5rem' }} {...props} />,
  h4: (props) => <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1rem' }} {...props} />,
  p: (props) => <p style={{ lineHeight: '1.7', marginBottom: '1rem', color: 'var(--text-secondary)' }} {...props} />,
  ul: (props) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }} {...props} />,
  ol: (props) => <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }} {...props} />,
  li: (props) => <li style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }} {...props} />,
  strong: (props) => <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }} {...props} />,
  em: (props) => <em style={{ fontStyle: 'italic' }} {...props} />,
  a: (props) => <a style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }} {...props} />,
  blockquote: (props) => (
    <blockquote style={{
      borderLeft: '4px solid var(--primary)',
      paddingLeft: '1rem',
      marginLeft: '0',
      marginBottom: '1rem',
      fontStyle: 'italic',
      color: 'var(--text-secondary)'
    }} {...props} />
  ),
  code: (props) => (
    <code style={{
      background: 'var(--surface-2)',
      padding: '0.2rem 0.4rem',
      borderRadius: '4px',
      fontSize: '0.9em',
      fontFamily: 'monospace'
    }} {...props} />
  ),
  pre: (props) => (
    <pre style={{
      background: 'var(--surface-2)',
      padding: '1rem',
      borderRadius: 'var(--radius-sm)',
      overflow: 'auto',
      marginBottom: '1rem'
    }} {...props} />
  ),
  table: (props) => (
    <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid var(--border)'
      }} {...props} />
    </div>
  ),
  th: (props) => (
    <th style={{
      background: 'var(--surface-2)',
      padding: '0.75rem',
      border: '1px solid var(--border)',
      textAlign: 'left',
      fontWeight: '600'
    }} {...props} />
  ),
  td: (props) => (
    <td style={{
      padding: '0.75rem',
      border: '1px solid var(--border)'
    }} {...props} />
  ),
};

export async function getStaticPaths() {
  const posts = getAllBlogPosts();
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }
  
  const mdxSource = await serialize(post.content);
  const readingTime = calculateReadingTime(post.content);
  
  return {
    props: {
      post: {
        ...post,
        readingTime
      },
      mdxSource,
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default function BlogPost({ post, mdxSource }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  const seoData = generateSEO({
    title: post.seo?.title || post.title,
    description: post.seo?.description || `Read our comprehensive guide on ${post.title.toLowerCase()}.`,
    canonical: `/blog/${post.slug}`,
    type: 'article'
  });

  const breadcrumbs = generateBreadcrumbs(`/blog/${post.slug}`);
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
            __html: JSON.stringify(jsonLdBuilders.article({
              ...post,
              seo: post.seo || { description: `Comprehensive guide on ${post.title}` }
            }))
          }}
        />
      </Head>
      
      <div className="container">
        {/* Article Header */}
        <section className="section-hero">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Breadcrumbs */}
            <nav style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
                <span style={{ margin: '0 0.5rem' }}>›</span>
                <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
                <span style={{ margin: '0 0.5rem' }}>›</span>
                <span style={{ color: 'var(--text-primary)' }}>{post.title}</span>
              </div>
            </nav>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                {post.categories.slice(0, 3).map(category => (
                  <span 
                    key={category}
                    style={{
                      background: 'var(--primary-light)',
                      color: 'var(--primary-dark)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      marginRight: '0.5rem'
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            
            <h1 style={{ 
              marginBottom: '1rem',
              fontSize: '2.5rem',
              lineHeight: '1.2',
              color: 'var(--text-primary)'
            }}>
              {post.title}
            </h1>
            
            {/* Article Meta */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--border)',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <strong>Published:</strong> {formatDate(post.date)}
              </div>
              {post.author && (
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <strong>By:</strong> {post.author}
                </div>
              )}
              {post.readingTime && (
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <strong>Read time:</strong> {post.readingTime}
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="section">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <article style={{ 
              fontSize: '1.125rem',
              lineHeight: '1.7'
            }}>
              <MDXRemote {...mdxSource} components={components} />
            </article>
          </div>
        </section>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <section style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)'
          }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Topics:</h3>
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              flexWrap: 'wrap' 
            }}>
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  style={{
                    background: 'var(--surface-2)',
                    color: 'var(--text-secondary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>
        )}
        
        {/* Call to Action */}
        <section className="section" style={{ background: 'var(--surface-2)' }}>
          <div style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            textAlign: 'center',
            padding: '3rem 2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
            <p style={{ 
              fontSize: '1.125rem', 
              marginBottom: '2rem',
              color: 'var(--text-secondary)'
            }}>
              Turn learning into adventure! Explore our courses and give your child the skills they need to succeed.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/courses" className="btn">
                🎓 View Our Courses
              </Link>
              <Link href="/contact" className="btn outline">
                📞 Book Free Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
