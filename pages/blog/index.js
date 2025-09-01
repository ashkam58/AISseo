
import Link from 'next/link'
import { SEO } from '@/components/SEO'
import { getAllBlogPosts } from '@/lib/mdx'
import { generateSEO, jsonLdBuilders } from '@/lib/seo'
import Head from 'next/head'

export default function BlogIndex({ posts }) {
  const seoData = generateSEO({
    title: "Blog | Educational Guides for Parents & Students",
    description: "Expert guides on coding, math competitions, mental math, Rubik's Cube, AI, and digital skills. Helping children excel in STEM education.",
    canonical: "/blog"
  });

  return (
    <>
      <SEO {...seoData} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBuilders.blogCollection(posts))
          }}
        />
      </Head>
      
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
              📚 Educational Blog
            </div>
            <h1 style={{ marginBottom: '1rem' }}>Learning Guides & Expert Tips</h1>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover expert insights on coding, mathematics, creativity, and future skills for children's education.
            </p>
          </div>
          
          <div className="list" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {posts.map(post => (
              <BlogCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                title={post.title}
                excerpt={post.short || post.seo?.description || 'Read this comprehensive guide...'}
                date={post.date}
                author={post.author}
                categories={post.categories}
                tags={post.tags}
                featured={post.featured}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function BlogCard({ href, title, excerpt, date, author, categories, tags, featured, readTime }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link href={href} className="card" style={{
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      border: featured ? '2px solid var(--primary)' : '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '2rem',
      background: 'var(--surface-1)',
      position: 'relative',
      ':hover': {
        transform: 'translateY(-4px)',
        boxShadow: 'var(--shadow-lg)'
      }
    }}>
      <div>
        {featured && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'var(--primary)',
            color: 'white',
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            ⭐ Featured
          </div>
        )}
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          {categories && categories.slice(0, 2).map(category => (
            <span 
              key={category}
              style={{
                background: 'var(--secondary-light)',
                color: 'var(--secondary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 style={{ 
          marginBottom: '0.75rem',
          color: 'var(--text-primary)',
          fontSize: '1.25rem',
          fontWeight: '700',
          lineHeight: '1.3'
        }}>
          {title}
        </h3>
        
        <p style={{ 
          color: 'var(--text-secondary)',
          marginBottom: '1.5rem',
          lineHeight: '1.6',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {excerpt}
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-light)'
        }}>
          <div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--text-muted)',
              marginBottom: '0.25rem'
            }}>
              {formatDate(date)}
            </div>
            {author && (
              <div style={{ 
                fontSize: '0.75rem', 
                color: 'var(--text-muted)'
              }}>
                By {author}
              </div>
            )}
          </div>
          <div style={{
            color: 'var(--primary)',
            fontWeight: '600',
            fontSize: '0.875rem'
          }}>
            Read more →
          </div>
        </div>
        
        {tags && tags.length > 0 && (
          <div style={{ 
            marginTop: '1rem',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            {tags.slice(0, 3).map(tag => (
              <span 
                key={tag}
                style={{
                  background: 'var(--surface-2)',
                  color: 'var(--text-muted)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '8px',
                  fontSize: '0.65rem'
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

export async function getStaticProps() {
  const posts = getAllBlogPosts();
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return {
    props: {
      posts: sortedPosts
    },
    revalidate: 3600 // Revalidate every hour
  };
}