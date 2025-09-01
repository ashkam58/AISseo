// app/about/page.tsx (or wherever your About component lives)
import { SEO } from '@/components/SEO'
import { siteConfig } from '@/site.config'

export default function About() {
  const waText = encodeURIComponent("Hi Ashkam, I'd love a FREE demo!");
  return (
    <>
      <SEO
        title="About Us - Expert Online Education for Kids | Ashkam Intelligence Studio"
        description="🌟 Meet the team behind fun, effective online learning! Expert teachers, child-friendly approach, proven results. Learn why thousands of families trust AIS for their kids' education."
      />

      {/* HERO — Glass gradient, floating doodles */}
      <section className="hero">
        <div className="decor decor-1" aria-hidden />
        <div className="decor decor-2" aria-hidden />
        <div className="decor decor-3" aria-hidden />

        <div className="container">
          <div className="glass hero-card pop">
            <div className="kicker">👋 Meet Our Team</div>
            <h1>Making Learning Fun Since Day One!</h1>
            <p className="lead">
              At <strong>{siteConfig.brand}</strong>, we believe every child is brilliant! 🌟
              Our mission is to unlock their potential through engaging, fun, and effective online education.
            </p>

            <div className="hero-cta">
              <a
                className="btn"
                href={`https://wa.me/${siteConfig.whatsapp}?text=${waText}`}
                aria-label="Book a free demo on WhatsApp"
                rel="noopener noreferrer"
              >
                🎉 Book FREE Demo
              </a>
              <a className="btn outline" href="/courses">📚 View Courses</a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION — playful checklist */}
      <section className="section">
        <div className="container">
          <div className="kicker">🎯 Our Mission</div>
          <h2>Why We Started AIS</h2>
          <div className="glass pad fun-bg">
            <p className="body">
              🎨 We noticed traditional learning often misses the spark. So we built a place where:
            </p>
            <ul className="check">
              <li>🎮 <strong>Learning feels like play:</strong> Every lesson is an interactive mini-adventure.</li>
              <li>🏆 <strong>Every child succeeds:</strong> Pace + style tailored to different learners.</li>
              <li>🚀 <strong>Skills for tomorrow:</strong> Coding, AI, and advanced math — future-proof and fun.</li>
              <li>👨‍👩‍👧‍👦 <strong>Parents stay in the loop:</strong> Clear reports and friendly updates.</li>
              <li>🌈 <strong>Confidence compounds:</strong> Small wins → big momentum.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH — 3 glass cards */}
      <section className="section pastel">
        <div className="container">
          <div className="kicker">👨‍🏫 Our Approach</div>
          <h2>How We Make Magic Happen</h2>

          <div className="grid">
            <div className="card pop">
              <div className="emoji">🎨</div>
              <h3>Kid-First Design</h3>
              <p className="small">Bright colors, playful motion, and intuitive flows kids love.</p>
            </div>

            <div className="card pop">
              <div className="emoji">🏆</div>
              <h3>Expert Teachers</h3>
              <p className="small">Pros who turn tricky topics into “aha!” moments.</p>
            </div>

            <div className="card pop">
              <div className="emoji">📱</div>
              <h3>Modern Tech</h3>
              <p className="small">Interactive boards, live coding, real-time collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS + TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="kicker">🌟 Our Results</div>
          <h2>Success Stories That Inspire Us</h2>

          <div className="stats">
            <div className="stat glass pop">
              <span className="stat-number">1000+</span>
              <span className="stat-label">😊 Happy Students</span>
            </div>
            <div className="stat glass pop">
              <span className="stat-number">95%</span>
              <span className="stat-label">🏆 Parent Satisfaction</span>
            </div>
            <div className="stat glass pop">
              <span className="stat-number">50+</span>
              <span className="stat-label">🥇 Competition Winners</span>
            </div>
            <div className="stat glass pop">
              <span className="stat-number">2+</span>
              <span className="stat-label">📚 Years of Excellence</span>
            </div>
          </div>

          <div className="glass pad bump">
            <h3 className="center primary">💝 What Parents Say</h3>
            <div className="tgrid">
              <div className="tcard">
                <p className="quote">"My daughter went from hating math to asking for extra practice! The teachers are amazing."</p>
                <strong>— Sarah M., Parent</strong>
              </div>
              <div className="tcard">
                <p className="quote">"The coding classes are so engaging. My son built his first game at age 8!"</p>
                <strong>— David L., Parent</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORD OF THE DAY — tiny English boost */}
      <section className="section pastel">
        <div className="container">
          <div className="kicker">🗣️ Word & Phrase of the Day</div>
          <div className="glass pad grid-2 pop">
            <div>
              <h3>Word: <span className="primary">Whiz-kid</span></h3>
              <p className="small">A young person who’s exceptionally skilled or successful at something.</p>
            </div>
            <div>
              <h3>Phrase: <span className="primary">“Cut to the chase”</span></h3>
              <p className="small">Meaning: get straight to the main point. (Like we do with concepts. 😉)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — gradient glass bar */}
      <section className="section cta">
        <div className="container">
          <div className="glass pad center pop">
            <div className="kicker">🎉 Ready to Join?</div>
            <h2>Start Your Child’s Learning Adventure!</h2>
            <p className="lead muted">🌟 Experience the AIS difference with a FREE demo class.</p>
            <div className="hero-cta center">
              <a className="btn" href={`https://wa.me/${siteConfig.whatsapp}?text=${waText}`} rel="noopener noreferrer">
                ✨ Book FREE Demo
              </a>
              <a className="btn outline" href="/courses">📚 Explore Courses</a>
            </div>
          </div>
        </div>
      </section>

      {/* Styles — glassmorphism + pastel gradients + playful motion */}
      <style jsx>{`
        :root {
          --bg: #0b0d15;
          --ink: #0f1224;
          --ink-2: #24273a;
          --primary: #7c5cff;
          --primary-soft: rgba(124, 92, 255, 0.12);
          --accent: #00d2ff;
          --muted: #7a88a7;
          --card: rgba(255,255,255,0.06);
          --glass-border: rgba(255,255,255,0.18);
          --radius: 18px;
          --shadow: 0 8px 30px rgba(0,0,0,0.25);
        }

        .primary { color: var(--primary); }
        .muted { color: var(--muted); }

        .container {
          width: min(1100px, 92vw);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero {
          position: relative;
          padding: 96px 0 72px;
          background:
            radial-gradient(1000px 500px at 10% -10%, rgba(124,92,255,0.18), transparent 60%),
            radial-gradient(900px 500px at 90% 0%, rgba(0,210,255,0.18), transparent 60%),
            linear-gradient(180deg, #0b0d15 0%, #101426 100%);
          overflow: hidden;
          color: #fff;
        }

        .decor {
          position: absolute;
          filter: blur(30px);
          opacity: 0.6;
          border-radius: 50%;
          mix-blend-mode: screen;
        }
        .decor-1 { width: 280px; height: 280px; top: -60px; left: -40px; background: #7c5cff; animation: float 8s ease-in-out infinite; }
        .decor-2 { width: 240px; height: 240px; bottom: -80px; right: 10%; background: #00d2ff; animation: float 9s ease-in-out infinite reverse; }
        .decor-3 { width: 180px; height: 180px; top: 40%; left: 70%; background: #ff67e7; animation: float 7s ease-in-out infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-12px) translateX(6px); }
        }

        .hero-card { padding: 32px 28px; }
        .lead { font-size: 1.15rem; line-height: 1.8; color: #e6e9f5; }

        .kicker {
          font-size: 0.85rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #c9ccf1;
          margin-bottom: 10px;
        }

        .hero-cta, .center {
          display: flex; gap: 14px; align-items: center; flex-wrap: wrap;
        }
        .center { justify-content: center; }

        .section { padding: 72px 0; color: #111827; background: #fafbff; }
        .section.pastel {
          background:
            radial-gradient(900px 400px at -10% 0%, rgba(124,92,255,0.08), transparent 60%),
            radial-gradient(900px 400px at 110% 10%, rgba(0,210,255,0.08), transparent 60%),
            #f7f7ff;
        }
        .section.cta {
          background:
            linear-gradient(180deg, #0f1224 0%, #141937 100%),
            #0f1224;
          color: #fff;
        }

        h1 { font-size: clamp(2rem, 2.2rem + 1vw, 3rem); margin: 8px 0 10px; }
        h2 { font-size: clamp(1.6rem, 1.4rem + 1vw, 2.2rem); margin: 8px 0 18px; color: var(--ink); }
        h3 { font-size: 1.1rem; margin: 0 0 6px; color: var(--ink-2); }
        .body { font-size: 1.05rem; color: #2b2f44; }

        .grid {
          display: grid; gap: 18px;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          margin-top: 16px;
        }

        .grid-2 {
          display: grid; gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .card {
          background: var(--card);
          color: #0f1224;
          border-radius: var(--radius);
          padding: 18px 16px;
          box-shadow: var(--shadow);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .glass {
          background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08));
          border: 1px solid var(--glass-border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .pad { padding: 20px; }
        .bump { margin-top: 24px; }

        .emoji { font-size: 2.2rem; text-align: center; margin: 8px 0; }
        .small { font-size: 0.98rem; color: #3a3f63; }

        .check { margin: 14px 0 0 0; padding: 0 0 0 18px; }
        .check li { margin: 10px 0; }

        .stats {
          margin-top: 18px;
          display: grid; gap: 14px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
        .stat {
          text-align: center; padding: 18px 12px;
        }
        .stat-number { font-weight: 800; font-size: 2rem; display: block; color: var(--primary); }
        .stat-label { color: #3a3f63; font-size: 0.95rem; }

        .tgrid {
          display: grid; gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          margin-top: 10px;
        }
        .tcard {
          background: #fff;
          padding: 16px;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          border: 1px solid rgba(0,0,0,0.06);
        }
        .quote { font-style: italic; margin-bottom: 10px; color: #2b2f44; }

        .btn {
          --btn-bg: linear-gradient(135deg, #7c5cff 0%, #00d2ff 100%);
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 16px; border-radius: 14px;
          color: #0b0d15; background: var(--btn-bg);
          font-weight: 700; text-decoration: none; border: 0;
          transition: transform .12s ease, box-shadow .12s ease, filter .12s ease;
          box-shadow: 0 8px 20px rgba(124,92,255,0.35);
        }
        .btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .btn:active { transform: translateY(0); }

        .btn.outline {
          background: transparent; color: #1b1e35;
          border: 2px solid rgba(124,92,255,0.35);
          box-shadow: none;
        }
        .btn.outline:hover { background: rgba(124,92,255,0.08); }

        .fun-bg { background: rgba(124,92,255,0.06); border-radius: var(--radius); }
        .primary.center, .center.primary { text-align: center; color: var(--primary); }

        /* playful entrance */
        .pop { animation: pop-in .5s ease both; }
        @keyframes pop-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </>
  )
}
