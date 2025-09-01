
import { SEO } from '@/components/SEO'
import { siteConfig } from '@/site.config'

export default function Page(){
  const courseLd = {
    "@context":"https://schema.org",
    "@type":"Course",
    "name": "Math Competitions – Olympiad, Kangaroo, NJSLA",
    "description": "Targeted strategy, drills, and past-paper analysis for Kangaroo Math, Olympiads, and NJSLA.",
    "provider": {"@type":"Organization","name": siteConfig.brand,"sameAs": siteConfig.siteUrl}
  };
  return (
    <>
      <SEO title="Math Competitions – Olympiad, Kangaroo, NJSLA" description={"Targeted strategy, drills, and past-paper analysis for Kangaroo Math, Olympiads, and NJSLA."} jsonLd={{...courseLd}} />
      
      {/* Course Hero Section */}
      {/* --- Exams Overview (SEO-rich) --- */}
<section className="section" style={{paddingTop: '2rem'}}>
  <div className="container">
    <h2>Math Exams We Prepare For (Grades 1–12)</h2>
    <p>
      We turn stress into strategy. From <strong>NJSLA Math</strong> (New Jersey Student Learning Assessments) to global contests like <strong>Math Kangaroo</strong>, <strong>AMC 8/10/12</strong>, <strong>MATHCOUNTS</strong>, <strong>UKMT JMC/IMC</strong>, <strong>Noetic</strong>, <strong>CEMC Gauss</strong>, and regional champs like <strong>Challenge ME (UAE)</strong> — this page breaks down formats, who they’re for, and how we prep. 
    </p>

    {/* NJSLA */}
    <h3 id="njsla-math">NJSLA Math (Grades 3–8, NJ)</h3>
    <p>
      NJSLA measures how well students meet the New Jersey Student Learning Standards in <em>mathematics</em>. Expect a mix of multiple-choice, technology-enhanced items, and short constructed responses that demand reasoning and modeling. We drill grade-level skills, word-problem tactics, and calculator vs. no-calculator discipline.
    </p>
    <ul className="check">
      <li><strong>Who it’s for:</strong> Grades 3–8; HS math is assessed via course tests in NJ, with NJGPA in Grade 11 for graduation.</li>
      <li><strong>What we practice:</strong> Operations &amp; Algebraic Thinking, Fractions &amp; Ratios, Expressions &amp; Equations, Geometry, Statistics &amp; Probability.</li>
      <li><strong>Our method:</strong> weekly mini-mocks, blueprint-aligned drills, and TestNav-style practice so the interface feels familiar.</li>
    </ul>

    {/* Competitions */}
    <h3>Global & National Math Competitions</h3>

    <h4>Math Kangaroo (K–12)</h4>
    <p>
      A joyful, puzzle-first contest held annually around March. Perfect for building logical reasoning early — we emphasize pattern spotting, estimation, and elegant solution paths.
    </p>
    <ul className="check">
      <li><strong>We focus on:</strong> quick heuristics, diagramming, and trap-avoidance for tricky multiple-choice items.</li>
    </ul>

    <h4>MAA AMC 8 / 10 / 12 (Middle–High School)</h4>
    <p>
      MAA’s flagship problem-solving contests. AMC 8 targets middle-school content; AMC 10/12 escalate to deeper algebra/number theory/geometry. Great on-ramp to AIME.
    </p>
    <ul className="check">
      <li><strong>We focus on:</strong> time management (25Q sprint), counting/probability fluency, similarity &amp; number theory basics, and clean scratch-work.</li>
    </ul>

    <h4>MATHCOUNTS (US, Grades 6–8)</h4>
    <p>
      Four iconic rounds (Sprint, Target, Team, Countdown). It rewards accuracy <em>and</em> speed. We train “calm speed,” mental math, and team communication drills.
    </p>
    <ul className="check">
      <li><strong>We focus on:</strong> Sprint stamina, Target precision, team strategies, and buzzer-style reflex for Countdown.</li>
    </ul>

    <h4>UKMT JMC/IMC (UK &amp; International)</h4>
    <p>
      Beautifully crafted multiple-choice challenges (60 minutes) with follow-on rounds (Kangaroo/Olympiad). We teach false-trail detection and tidy algebraic reasoning.
    </p>

    <h4>Noetic Learning Math Contest (Grades 2–8)</h4>
    <p>
      Semiannual contest — approachable but sneaky. Great for consistency and confidence. We run short “Noetic sprints” to sharpen accuracy under a 45–50 minute clock.
    </p>

    <h4>CEMC Gauss (Grades 7–8) &amp; more (Waterloo, Canada)</h4>
    <p>
      Polished problems that reward careful reading and creative methods. We lean into drawing, parity checks, and unit analysis to avoid common traps.
    </p>

    <h4>Challenge ME Maths Championship (MENA, ages 8–18)</h4>
    <p>
      A multi-stage school championship popular across the UAE. Team energy + individual grit. We simulate stages with collaborative rounds and “quest-style” problem sets.
    </p>

    {/* Diagnostics commonly faced in schools */}
    <h3>School & Diagnostic Assessments We Also Support</h3>
    <h4>NWEA MAP Growth (Math)</h4>
    <p>
      Adaptive K–12 assessment used multiple times per year to track achievement and growth (RIT scale). We translate reports into bite-size goal paths and targeted practice.
    </p>

    <h4>CAT4 (Cognitive Abilities Test)</h4>
    <p>
      Measures verbal, quantitative, non-verbal, and spatial reasoning. We coach thinking strategies (patterning, nets/rotations, analogies) to raise reasoning confidence.
    </p>

    {/* How we prep */}
    <h3>How Our Prep Works (FAST)</h3>
    <ul className="check">
      <li><strong>F</strong>ocus: blueprint-aligned plans per exam (NJSLA unit maps; contest past papers).</li>
      <li><strong>A</strong>ctive recall: timed drills, error logs, and “wrong-turn autopsies.”</li>
      <li><strong>S</strong>imulations: weekly mini-mocks with pacing overlays and instant review.</li>
      <li><strong>T</strong>actics: elimination, bounding, parity, invariants, similarity, and quick &amp; dirty estimates.</li>
    </ul>

    {/* CTA */}
    <div style={{marginTop: '1.25rem'}}>
      <a className="btn" href={`https://wa.me/${siteConfig.whatsapp}?text=I%20want%20NJSLA%20and%20math%20contest%20prep%20details`}>
        Book a FREE strategy call
      </a>
    </div>

    {/* Bonus: tiny vocab for your English-teaching flavor */}
    <aside style={{marginTop: '1.75rem', background:'#FFF7ED', border:'1px solid #FED7AA', borderRadius:'12px', padding:'1rem'}}>
      <strong>Word of the Day:</strong> <em>heuristic</em> — a quick rule-of-thumb method to solve or estimate a problem when a full solution is overkill. (“When time is short, use a heuristic, not heroics.”)
    </aside>
  </div>
</section>

{/* --- SEO FAQ Schema (drop at end of page) --- */}
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {
      "@type":"Question",
      "name":"What is NJSLA Math and which grades take it?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"NJSLA Math assesses the New Jersey Student Learning Standards in Grades 3–8, with course-based high school assessments and NJGPA in Grade 11 for graduation. We prepare students with blueprint-aligned drills, TestNav-style practice, and weekly mini-mocks."
      }
    },
    {
      "@type":"Question",
      "name":"How do you prepare for Math Kangaroo?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"We train pattern spotting, estimation, and elimination through timed sets and past questions, building joyful problem-solving without over-memorizing formulas."
      }
    },
    {
      "@type":"Question",
      "name":"What’s the difference between AMC 8 and MATHCOUNTS?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"AMC 8 is a 25-question, 40-minute individual contest; MATHCOUNTS has Sprint, Target, Team, and Countdown rounds with speed and teamwork. We coach both formats."
      }
    },
    {
      "@type":"Question",
      "name":"Do you support MAP Growth and CAT4?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Yes. We turn MAP RIT reports into targeted skill paths and build reasoning drills for CAT4’s verbal, quantitative, non-verbal, and spatial batteries."
      }
    }
  ]
})}}/>

    </>
  )
}

/* Mobile Responsive Styles */
const styles = `
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
      max-width: 100%;
    }
    
    .section {
      padding: 1.5rem 0;
    }
    
    h1 {
      font-size: 1.8rem;
      line-height: 1.2;
    }
    
    h2 {
      font-size: 1.5rem;
      line-height: 1.3;
    }
    
    h3 {
      font-size: 1.3rem;
      line-height: 1.3;
    }
    
    h4 {
      font-size: 1.1rem;
      line-height: 1.4;
    }
    
    p {
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    .check li {
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 0.5rem;
    }
    
    /* Better spacing for lists */
    ul, ol {
      padding-left: 1.2rem;
    }
    
    /* Improve readability */
    strong {
      font-weight: 600;
    }
    
    em {
      font-style: italic;
    }
    
    /* Link styling for mobile */
    a {
      color: #0066cc;
      text-decoration: underline;
      word-break: break-word;
    }
    
    /* Code elements */
    code {
      font-size: 0.85rem;
      padding: 0.2rem 0.4rem;
      background-color: #f5f5f5;
      border-radius: 3px;
    }
  }
  
  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
    
    h2 {
      font-size: 1.3rem;
    }
    
    h3 {
      font-size: 1.2rem;
    }
    
    .section {
      padding: 1rem 0;
    }
    
    .container {
      padding: 0 0.8rem;
    }
    
    p {
      font-size: 0.9rem;
    }
    
    .check li {
      font-size: 0.85rem;
    }
  }
  
  /* Touch device optimizations */
  @media (hover: none) {
    a:hover {
      text-decoration: underline;
    }
  }
  
  /* Reduced motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
