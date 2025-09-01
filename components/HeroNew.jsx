import { siteConfig } from '@/site.config'

export function Hero(){
  return (
    <section className="hero fade-in" style={{
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #f093fb 75%, #4facfe 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem 0'
    }}>
      {/* Floating fun elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        fontSize: '3rem',
        animation: 'float 4s ease-in-out infinite',
        opacity: '0.6'
      }}>🌟</div>
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        fontSize: '2.5rem',
        animation: 'float 5s ease-in-out infinite',
        animationDelay: '1s',
        opacity: '0.6'
      }}>🚀</div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '15%',
        fontSize: '2rem',
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '2s',
        opacity: '0.6'
      }}>🎨</div>
      <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '20%',
        fontSize: '2.8rem',
        animation: 'float 4.5s ease-in-out infinite',
        animationDelay: '0.5s',
        opacity: '0.6'
      }}>💫</div>

      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div className="kicker rainbow-text" style={{
          fontWeight: '800',
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>🚀 Future-ready kids</div>
        
        <h1 className="bounce" style={{
          fontFamily: 'Fredoka One, Comic Neue, cursive',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #ffe66d, #a8e6cf, #ff8b94)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          textAlign: 'center',
          lineHeight: '1.1'
        }}>
          Learn, Play, Create — with Amazing Adventures! ✨
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
          color: '#2d1b69',
          fontWeight: '600',
          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
          background: 'rgba(255,255,255,0.2)',
          padding: '1rem 2rem',
          borderRadius: '25px',
          backdropFilter: 'blur(10px)',
          margin: '0 auto 2rem',
          maxWidth: '800px',
          textAlign: 'center'
        }}>
          🎨 Fun online classes in Coding, AI, Rubik's Cube, Math Olympiads & Mental Math. Where learning feels like playing and every lesson is an exciting journey!
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          margin: '3rem 0',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div className="stat float pulse-fun" style={{
            background: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
            border: '3px solid #fff',
            borderRadius: '25px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(255, 154, 158, 0.4)'
          }}>
            <span style={{fontSize: '3rem', fontWeight: '900', color: '#fff', display: 'block', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>1000+</span>
            <span style={{fontSize: '1.1rem', color: '#2d1b69', fontWeight: '700'}}>😊 Happy Students</span>
          </div>
          
          <div className="stat float pulse-fun" style={{
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            border: '3px solid #fff',
            borderRadius: '25px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(79, 172, 254, 0.4)',
            animationDelay: '0.2s'
          }}>
            <span style={{fontSize: '3rem', fontWeight: '900', color: '#fff', display: 'block', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>5⭐</span>
            <span style={{fontSize: '1.1rem', color: '#2d1b69', fontWeight: '700'}}>🏆 Parent Rating</span>
          </div>
          
          <div className="stat float pulse-fun" style={{
            background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
            border: '3px solid #fff',
            borderRadius: '25px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(255, 236, 210, 0.4)',
            animationDelay: '0.4s'
          }}>
            <span style={{fontSize: '3rem', fontWeight: '900', color: '#fff', display: 'block', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>24/7</span>
            <span style={{fontSize: '1.1rem', color: '#2d1b69', fontWeight: '700'}}>💝 Support</span>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <a className="btn bounce" href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Ashkam%2C%20I'd%20love%20a%20FREE%20demo!`} style={{
            background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
            fontSize: '1.3rem',
            padding: '1.2rem 2.5rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            boxShadow: '0 10px 25px rgba(255, 107, 107, 0.4)',
            transform: 'scale(1.05)',
            borderRadius: '50px',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '700',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            🎉 Book a FREE Demo
          </a>
          
          <a href="/courses" style={{
            border: '3px solid #ff6b6b',
            color: '#ff6b6b',
            fontSize: '1.2rem',
            fontWeight: '700',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }} className="float">
            🔍 Explore Courses
          </a>
        </div>
      </div>
    </section>
  )
}
