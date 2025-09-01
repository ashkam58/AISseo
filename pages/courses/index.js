
import Link from 'next/link'
import { SEO } from '@/components/SEO'
import { getAllCourses } from '@/lib/mdx'
import { generateSEO, jsonLdBuilders } from '@/lib/seo'
import Head from 'next/head'
import { useState } from 'react'

export default function Courses({ courses }) {
  const [selectedGrade, setSelectedGrade] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const seoData = generateSEO({
    title: "Online Classes for Kids | Coding, AI, Math, Robotics & More | Ashkam Intelligence Studio",
    description: "Discover 50+ expert-designed online courses for kids aged 6-16. Coding, AI, Math Olympiad, Robotics, Financial Literacy, Science, English & SAT prep. Small batches, certified teachers, proven results.",
    canonical: "/courses",
    keywords: "online classes for kids, coding classes, math olympiad, AI courses, robotics classes, financial literacy, science classes, english classes, SAT prep, self-paced courses"
  });

  const gradeFilters = [
    { value: 'all', label: 'All Grades' },
    { value: '1-3', label: 'Grade 1-3 (Ages 6-8)' },
    { value: '4-6', label: 'Grade 4-6 (Ages 9-11)' },
    { value: '7-10', label: 'Grade 7-10 (Ages 12-15)' },
    { value: '11-12', label: 'Grade 11-12 (Ages 16+)' }
  ]

  const subjectFilters = [
    { value: 'all', label: 'All Subjects' },
    { value: 'coding', label: 'Coding & Programming' },
    { value: 'ai', label: 'AI & Machine Learning' },
    { value: 'math', label: 'Math & Olympiad' },
    { value: 'robotics', label: 'Robotics & Engineering' },
    { value: 'finance', label: 'Financial Literacy' },
    { value: 'science', label: 'Science & STEM' },
    { value: 'english', label: 'English & Communication' },
    { value: 'cognitive', label: 'Cognitive & Life Skills' }
  ]

  const typeFilters = [
    { value: 'all', label: 'All Course Types' },
    { value: 'live', label: 'Live 1-on-1 Classes' },
    { value: 'group', label: 'Small Group Classes' },
    { value: 'self-paced', label: 'Self-Paced DIY' },
    { value: 'sat', label: 'SAT Preparation' }
  ]

  // All comprehensive courses inspired by BrightChamps
  const allCourses = [
    // CODING & PROGRAMMING COURSES
    {
      id: 'coding-starter-1',
      title: 'Coding Starter I: Beginner Coding Class for Kids (Grade 1-3)',
      description: 'Introduction to visual programming with Scratch. Kids create games, animations, and interactive stories while learning logic and problem-solving.',
      category: 'coding',
      type: 'live',
      level: 'Beginner',
      sessions: '12 sessions',
      duration: '3 months',
      priceINR: '3999',
      priceAED: '239',
      originalPriceINR: '5999',
      originalPriceAED: '359',
      enrolled: '245+',
      rating: '4.8',
      reviews: '186',
      ageGroup: '6-8',
      grade: '1-3',
      badge: '🚀 PROGRAMMING',
      image: '/images/coding-course-bg.jpg',
      href: '/courses/coding-ai',
      features: ['Visual Programming', 'Game Creation', 'Animation Projects', 'Logic Building']
    },
    {
      id: 'coding-accelerator-1',
      title: 'Coding Accelerator I: Advanced Coding Course for Kids (Grade 1-3)',
      description: 'Advanced Scratch programming with complex game development, app creation, and introduction to text-based coding concepts.',
      category: 'coding',
      type: 'group',
      level: 'Intermediate',
      sessions: '24 sessions',
      duration: '6 months',
      priceINR: '7999',
      priceAED: '479',
      originalPriceINR: '11999',
      originalPriceAED: '719',
      enrolled: '189+',
      rating: '4.9',
      reviews: '142',
      ageGroup: '6-8',
      grade: '1-3',
      badge: '🎮 GAME DEVELOPMENT',
      image: '/images/coding-course-bg.jpg',
      href: '/courses/coding-ai',
      features: ['Advanced Scratch', 'Game Development', 'App Creation', 'Logic Mastery']
    },
    {
      id: 'python-fundamentals',
      title: 'Python Fundamentals: Text-Based Programming for Kids (Grade 4-6)',
      description: 'Learn Python programming from scratch! Build real applications, games, and automation scripts while mastering programming fundamentals.',
      category: 'coding',
      type: 'live',
      level: 'Beginner',
      sessions: '20 sessions',
      duration: '5 months',
      priceINR: '8999',
      priceAED: '539',
      originalPriceINR: '12999',
      originalPriceAED: '779',
      enrolled: '312+',
      rating: '4.9',
      reviews: '298',
      ageGroup: '9-11',
      grade: '4-6',
      badge: '🐍 PYTHON',
      image: '/images/coding-course-bg.jpg',
      href: '/courses/coding-ai',
      features: ['Python Basics', 'Real Applications', 'Game Programming', 'Automation']
    },
    {
      id: 'web-development',
      title: 'Web Development Mastery: HTML, CSS, JavaScript for Teens',
      description: 'Create professional websites and web applications. Learn HTML, CSS, JavaScript, and modern web development frameworks.',
      category: 'coding',
      type: 'group',
      level: 'Intermediate',
      sessions: '30 sessions',
      duration: '8 months',
      priceINR: '12999',
      priceAED: '779',
      originalPriceINR: '18999',
      originalPriceAED: '1139',
      enrolled: '156+',
      rating: '4.8',
      reviews: '124',
      ageGroup: '12-16',
      grade: '7-12',
      badge: '🌐 WEB DEVELOPMENT',
      image: '/images/coding-course-bg.jpg',
      href: '/courses/coding-ai',
      features: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Portfolio Projects']
    },

    // AI & MACHINE LEARNING COURSES
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals: Introduction to Artificial Intelligence for Kids',
      description: 'Discover AI concepts through hands-on projects. Create chatbots, image recognition apps, and simple machine learning models.',
      category: 'ai',
      type: 'live',
      level: 'Beginner',
      sessions: '16 sessions',
      duration: '4 months',
      priceINR: '9999',
      priceAED: '599',
      originalPriceINR: '14999',
      originalPriceAED: '899',
      enrolled: '203+',
      rating: '4.9',
      reviews: '167',
      ageGroup: '10-14',
      grade: '4-10',
      badge: '🤖 ARTIFICIAL INTELLIGENCE',
      image: '/images/ai-course-bg.jpeg',
      href: '/courses/coding-ai',
      features: ['AI Concepts', 'Chatbot Creation', 'Image Recognition', 'ML Basics']
    },
    {
      id: 'machine-learning-advanced',
      title: 'Machine Learning Mastery: Advanced AI Projects for Teens',
      description: 'Build real ML models, neural networks, and AI applications. Work with datasets and create intelligent systems.',
      category: 'ai',
      type: 'group',
      level: 'Advanced',
      sessions: '25 sessions',
      duration: '7 months',
      priceINR: '15999',
      priceAED: '959',
      originalPriceINR: '22999',
      originalPriceAED: '1379',
      enrolled: '98+',
      rating: '4.9',
      reviews: '87',
      ageGroup: '13-16',
      grade: '7-12',
      badge: '🧠 MACHINE LEARNING',
      image: '/images/ai-course-bg.jpeg',
      href: '/courses/coding-ai',
      features: ['Neural Networks', 'Data Science', 'AI Applications', 'Research Projects']
    },

    // MATHEMATICS COURSES
    {
      id: 'math-olympiad-prep',
      title: 'Math Olympiad Champion: Competition Prep & Problem Solving',
      description: 'Excel in AMC 8, AMC 10, Mathcounts, and ARML competitions! Master advanced problem-solving strategies and mathematical thinking.',
      category: 'math',
      type: 'live',
      level: 'Advanced',
      sessions: '40 sessions',
      duration: '10 months',
      priceINR: '11999',
      priceAED: '719',
      originalPriceINR: '17999',
      originalPriceAED: '1079',
      enrolled: '167+',
      rating: '4.9',
      reviews: '124',
      ageGroup: '8-16',
      grade: '3-12',
      badge: '🏆 MATH OLYMPIAD',
      image: '/images/math-course-bg.jpeg',
      href: '/courses/math-competitions',
      features: ['Competition Strategies', 'Number Theory', 'Geometry', 'Combinatorics']
    },
    {
      id: 'vedic-math',
      title: 'Vedic Mathematics: Fast Calculation Techniques',
      description: 'Learn ancient Indian mathematical techniques for lightning-fast calculations. Perfect for competitive exams and mental math.',
      category: 'math',
      type: 'group',
      level: 'Intermediate',
      sessions: '18 sessions',
      duration: '4.5 months',
      priceINR: '5999',
      priceAED: '359',
      originalPriceINR: '8999',
      originalPriceAED: '539',
      enrolled: '289+',
      rating: '4.8',
      reviews: '234',
      ageGroup: '8-14',
      grade: '3-10',
      badge: '⚡ MENTAL MATH',
      image: '/images/math-course-bg.jpeg',
      href: '/courses/mental-math',
      features: ['Fast Calculations', 'Mental Math', 'Exam Preparation', 'Confidence Building']
    },

    // ROBOTICS & ENGINEERING
    {
      id: 'robotics-fundamentals',
      title: 'Robotics Fundamentals: Build & Program Your First Robot',
      description: 'Design, build, and program robots using LEGO Mindstorms and Arduino. Learn engineering principles through hands-on projects.',
      category: 'robotics',
      type: 'live',
      level: 'Beginner',
      sessions: '20 sessions',
      duration: '5 months',
      priceINR: '10999',
      priceAED: '659',
      originalPriceINR: '15999',
      originalPriceAED: '959',
      enrolled: '134+',
      rating: '4.8',
      reviews: '109',
      ageGroup: '8-14',
      grade: '3-10',
      badge: '🤖 ROBOTICS',
      image: '/images/robotics-course-bg.jpg',
      href: '/courses/robotics',
      features: ['Robot Building', 'Programming', 'Sensors & Motors', 'Engineering Design']
    },
    {
      id: 'advanced-robotics',
      title: 'Advanced Robotics: AI-Powered Intelligent Machines',
      description: 'Create sophisticated robots with AI capabilities, computer vision, and autonomous navigation systems.',
      category: 'robotics',
      type: 'group',
      level: 'Advanced',
      sessions: '30 sessions',
      duration: '8 months',
      priceINR: '16999',
      priceAED: '1019',
      originalPriceINR: '24999',
      originalPriceAED: '1499',
      enrolled: '67+',
      rating: '4.9',
      reviews: '54',
      ageGroup: '12-16',
      grade: '7-12',
      badge: '🚁 ADVANCED ROBOTICS',
      image: '/images/robotics-course-bg.jpg',
      href: '/courses/robotics',
      features: ['AI Integration', 'Computer Vision', 'Autonomous Systems', 'Competition Prep']
    },

    // FINANCIAL LITERACY
    {
      id: 'smart-investing',
      title: 'Smart Investing: Financial Literacy & Money Management for Kids',
      description: 'Learn investing basics, stock market fundamentals, budgeting, and money management through interactive activities.',
      category: 'finance',
      type: 'live',
      level: 'Beginner',
      sessions: '15 sessions',
      duration: '4 months',
      priceINR: '6999',
      priceAED: '419',
      originalPriceINR: '9999',
      originalPriceAED: '599',
      enrolled: '234+',
      rating: '4.7',
      reviews: '189',
      ageGroup: '10-16',
      grade: '5-12',
      badge: '💰 FINANCIAL LITERACY',
      image: '/images/finance-course-bg.jpg',
      href: '/courses/financial-literacy',
      features: ['Investment Basics', 'Stock Market', 'Budgeting', 'Financial Planning']
    },
    {
      id: 'entrepreneurship',
      title: 'Young Entrepreneur: Business & Startup Skills for Teens',
      description: 'Develop business ideas, create business plans, learn marketing, and understand entrepreneurship fundamentals.',
      category: 'finance',
      type: 'group',
      level: 'Intermediate',
      sessions: '20 sessions',
      duration: '5 months',
      priceINR: '8999',
      priceAED: '539',
      originalPriceINR: '12999',
      originalPriceAED: '779',
      enrolled: '145+',
      rating: '4.8',
      reviews: '123',
      ageGroup: '12-16',
      grade: '7-12',
      badge: '🚀 ENTREPRENEURSHIP',
      image: '/images/finance-course-bg.jpg',
      href: '/courses/entrepreneurship',
      features: ['Business Planning', 'Marketing', 'Leadership', 'Innovation']
    },

    // SCIENCE & STEM
    {
      id: 'science-experiments',
      title: 'Science Explorers: Fun Experiments & STEM Projects',
      description: 'Conduct amazing science experiments, learn scientific methods, and explore physics, chemistry, and biology concepts.',
      category: 'science',
      type: 'live',
      level: 'Beginner',
      sessions: '16 sessions',
      duration: '4 months',
      priceINR: '7999',
      priceAED: '479',
      originalPriceINR: '11999',
      originalPriceAED: '719',
      enrolled: '198+',
      rating: '4.8',
      reviews: '156',
      ageGroup: '6-12',
      grade: '1-8',
      badge: '🔬 SCIENCE',
      image: '/images/science-course-bg.jpg',
      href: '/courses/science',
      features: ['Hands-on Experiments', 'Scientific Method', 'STEM Projects', 'Critical Thinking']
    },

    // ENGLISH & COMMUNICATION
    {
      id: 'public-speaking',
      title: 'Public Speaking Mastery: Confidence & Communication Skills',
      description: 'Build confidence, improve communication, and master public speaking through interactive sessions and practical exercises.',
      category: 'english',
      type: 'live',
      level: 'Beginner',
      sessions: '12 sessions',
      duration: '3 months',
      priceINR: '5999',
      priceAED: '359',
      originalPriceINR: '8999',
      originalPriceAED: '539',
      enrolled: '267+',
      rating: '4.9',
      reviews: '221',
      ageGroup: '8-16',
      grade: '3-12',
      badge: '🎤 COMMUNICATION',
      image: '/images/english-course-bg.jpg',
      href: '/courses/communication',
      features: ['Confidence Building', 'Presentation Skills', 'Voice Training', 'Leadership']
    },

    // COGNITIVE & LIFE SKILLS
    {
      id: 'rubiks-cube-mastery',
      title: 'Rubik\'s Cube Mastery: Logic & Speed Training',
      description: 'Master the world\'s most famous puzzle! Learn layer-by-layer method, advanced algorithms, and speedcubing techniques.',
      category: 'cognitive',
      type: 'group',
      level: 'Beginner',
      sessions: '12 sessions',
      duration: '3 months',
      priceINR: '4999',
      priceAED: '299',
      originalPriceINR: '7999',
      originalPriceAED: '479',
      enrolled: '412+',
      rating: '4.7',
      reviews: '378',
      ageGroup: '6-16',
      grade: '1-12',
      badge: '🧩 COGNITIVE DEVELOPMENT',
      image: '/images/rubiks-course-bg.jpeg',
      href: '/courses/rubiks-cube',
      features: ['Layer Method', 'Speed Algorithms', 'Memory Training', 'Concentration']
    },

    // SELF-PACED DIY COURSES
    {
      id: 'become-youtuber',
      title: 'Become a YouTuber: Video Creation & Content Strategy',
      description: 'Learn video creation, editing, storytelling, and channel growth strategies for confident online presence.',
      category: 'cognitive',
      type: 'self-paced',
      level: 'Beginner',
      sessions: '10 modules',
      duration: 'Self-paced',
      priceINR: '2999',
      priceAED: '179',
      originalPriceINR: '4999',
      originalPriceAED: '299',
      enrolled: '543+',
      rating: '4.8',
      reviews: '467',
      ageGroup: '10-16',
      grade: '5-12',
      badge: '📹 CONTENT CREATION',
      image: '/images/youtube-course-bg.jpg',
      href: '/courses/youtube-creation',
      features: ['Video Creation', 'Editing Skills', 'Channel Strategy', 'Online Presence']
    },
    {
      id: 'digital-art',
      title: 'Digital Art & Design: Creative Expression Through Technology',
      description: 'Create stunning digital artwork, learn design principles, and express creativity through digital tools.',
      category: 'cognitive',
      type: 'self-paced',
      level: 'Beginner',
      sessions: '12 modules',
      duration: 'Self-paced',
      priceINR: '3999',
      priceAED: '239',
      originalPriceINR: '5999',
      originalPriceAED: '359',
      enrolled: '298+',
      rating: '4.7',
      reviews: '234',
      ageGroup: '8-16',
      grade: '3-12',
      badge: '🎨 DIGITAL ART',
      image: '/images/art-course-bg.jpg',
      href: '/courses/digital-art',
      features: ['Digital Tools', 'Design Principles', 'Creative Projects', 'Portfolio Building']
    },

    // SAT PREPARATION COURSES
    {
      id: 'sat-prep-comprehensive',
      title: 'Comprehensive SAT Prep: Complete Test Preparation',
      description: 'Master all SAT sections with proven strategies, practice tests, and personalized coaching for top scores.',
      category: 'sat',
      type: 'sat',
      level: 'Advanced',
      sessions: '40 sessions',
      duration: '6 months',
      priceINR: '18999',
      priceAED: '1139',
      originalPriceINR: '25999',
      originalPriceAED: '1559',
      enrolled: '123+',
      rating: '4.9',
      reviews: '98',
      ageGroup: '15-18',
      grade: '10-12',
      badge: '📚 SAT PREP',
      image: '/images/sat-course-bg.jpg',
      href: '/courses/sat-prep',
      features: ['Full SAT Coverage', 'Practice Tests', 'Strategy Training', 'Score Improvement']
    },
    {
      id: 'sat-math-focus',
      title: 'SAT Math Mastery: Advanced Mathematics for High Scores',
      description: 'Focus on SAT Math sections with advanced problem-solving techniques and comprehensive practice.',
      category: 'sat',
      type: 'sat',
      level: 'Advanced',
      sessions: '25 sessions',
      duration: '4 months',
      priceINR: '12999',
      priceAED: '779',
      originalPriceINR: '17999',
      originalPriceAED: '1079',
      enrolled: '89+',
      rating: '4.8',
      reviews: '71',
      ageGroup: '15-18',
      grade: '10-12',
      badge: '🔢 SAT MATH',
      image: '/images/sat-math-bg.jpg',
      href: '/courses/sat-math',
      features: ['Advanced Math', 'Problem Solving', 'Time Management', 'Score Strategies']
    }
  ]

  // Filter courses based on selected filters
  const filteredCourses = allCourses.filter(course => {
    const gradeMatch = selectedGrade === 'all' || course.grade.includes(selectedGrade.split('-')[0])
    const subjectMatch = selectedSubject === 'all' || course.category === selectedSubject
    const typeMatch = selectedType === 'all' || course.type === selectedType
    
    return gradeMatch && subjectMatch && typeMatch
  })

  return (
    <>
      <SEO {...seoData} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBuilders.courseCollection(courses))
          }}
        />
      </Head>
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/images/hero-kids-coding.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Online Classes for Kids
          </h1>
          <p style={{ 
            fontSize: '1.25rem',
            marginBottom: '1rem',
            opacity: 0.95
          }}>
            Personalized Curriculum Designed by Experts
          </p>
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '700px',
            margin: '0 auto 2rem auto',
            opacity: 0.9
          }}>
            We customize our courses to match each child's unique learning needs, ensuring an engaging and effective learning experience
          </p>
          
          {/* Course Category Quick Links */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            {[
              { label: '💻 Coding', value: 'coding' },
              { label: '🤖 AI', value: 'ai' },
              { label: '📊 Math', value: 'math' },
              { label: '🔬 Science', value: 'science' },
              { label: '💰 Finance', value: 'finance' },
              { label: '🤖 Robotics', value: 'robotics' }
            ].map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedSubject(cat.value)}
                style={{
                  background: selectedSubject === cat.value ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Your Options */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '700' }}>
            Explore Your Options
          </h2>
          
          {/* Advanced Filters */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Filters</h3>
            
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Grade</label>
                <select 
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    background: 'white',
                    minWidth: '180px'
                  }}
                >
                  {gradeFilters.map(filter => (
                    <option key={filter.value} value={filter.value}>{filter.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Subject</label>
                <select 
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    background: 'white',
                    minWidth: '220px'
                  }}
                >
                  {subjectFilters.map(filter => (
                    <option key={filter.value} value={filter.value}>{filter.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Course Type</label>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    background: 'white',
                    minWidth: '180px'
                  }}
                >
                  {typeFilters.map(filter => (
                    <option key={filter.value} value={filter.value}>{filter.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Filter Summary */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <span style={{ fontWeight: '600', color: '#1f2937' }}>
                Showing {filteredCourses.length} courses
              </span>
              {(selectedGrade !== 'all' || selectedSubject !== 'all' || selectedType !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedGrade('all')
                    setSelectedSubject('all')
                    setSelectedType('all')
                  }}
                  style={{
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Course Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {filteredCourses.map((course) => (
              <BrightChampsStyleCourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#6b7280' }}>No courses found</h3>
              <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
                Try adjusting your filters to see more courses
              </p>
              <button
                onClick={() => {
                  setSelectedGrade('all')
                  setSelectedSubject('all')
                  setSelectedType('all')
                }}
                style={{
                  background: '#6366f1',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Course Categories Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Complete Course Categories
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
              Comprehensive learning paths designed for every interest and skill level
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <CategoryCard 
              title="Coding & Programming"
              description="From Scratch to Python, JavaScript to web development. Build real applications and games."
              icon="💻"
              courseCount="12+"
              ageRange="6-16 years"
              onClick={() => setSelectedSubject('coding')}
            />
            <CategoryCard 
              title="AI & Machine Learning"
              description="Explore artificial intelligence, create chatbots, and build intelligent applications."
              icon="🤖"
              courseCount="6+"
              ageRange="10-16 years"
              onClick={() => setSelectedSubject('ai')}
            />
            <CategoryCard 
              title="Mathematics & Olympiad"
              description="Excel in competitions, master mental math, and develop problem-solving skills."
              icon="📊"
              courseCount="8+"
              ageRange="8-16 years"
              onClick={() => setSelectedSubject('math')}
            />
            <CategoryCard 
              title="Robotics & Engineering"
              description="Design, build, and program robots. Learn engineering through hands-on projects."
              icon="🤖"
              courseCount="5+"
              ageRange="8-16 years"
              onClick={() => setSelectedSubject('robotics')}
            />
            <CategoryCard 
              title="Financial Literacy"
              description="Learn investing, budgeting, entrepreneurship, and smart money management."
              icon="💰"
              courseCount="7+"
              ageRange="10-16 years"
              onClick={() => setSelectedSubject('finance')}
            />
            <CategoryCard 
              title="Science & STEM"
              description="Conduct experiments, explore scientific concepts, and develop critical thinking."
              icon="🔬"
              courseCount="6+"
              ageRange="6-16 years"
              onClick={() => setSelectedSubject('science')}
            />
            <CategoryCard 
              title="Communication & English"
              description="Build confidence, improve speaking skills, and master public communication."
              icon="🎤"
              courseCount="4+"
              ageRange="8-16 years"
              onClick={() => setSelectedSubject('english')}
            />
            <CategoryCard 
              title="SAT Preparation"
              description="Comprehensive test prep with proven strategies for top scores."
              icon="📚"
              courseCount="5+"
              ageRange="15-18 years"
              onClick={() => setSelectedType('sat')}
            />
          </div>
        </div>
      </section>
  

      {/* Expert Teachers Section */}
      <section style={{ padding: '4rem 0', background: '#f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Our Expert Community
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              A team of guiding stars committed to student success
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <TeacherCard 
              name="Arjun Sharma"
              experience="5 years"
              rating="4.9"
              reviews="1,240"
              certifications="IIT Delhi, Python, Child Engagement, AI/ML"
              location="India"
              image="/images/teacher-arjun.jpeg"
              description="Passionate coding educator from IIT Delhi with 5+ years of teaching experience. Specialized in making complex programming concepts simple and fun for kids."
            />
            <TeacherCard 
              name="Priya Patel"
              experience="4 years"
              rating="4.8"
              reviews="890"
              certifications="NIT Surathkal, Mathematics, Olympiad Training"
              location="India"
              image="/images/teacher-priya.jpeg"
              description="Mathematics expert with proven track record in Olympiad training. Has helped 200+ students achieve national-level competition success."
            />
            <TeacherCard 
              name="Rahul Kumar"
              experience="3 years"
              rating="4.9"
              reviews="650"
              certifications="BIT Mesra, Cognitive Training, Rubik's Cube"
              location="India"
              image="/images/teacher-rahul.jpeg"
              description="Cognitive development specialist and certified speedcubing trainer. Expert in memory enhancement and logical thinking development."
            />
          </div>
        </div>
      </section>

      {/* Student Spotlight */}
      <section style={{ padding: '4rem 0', background: '#f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Student Spotlight
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
              Our shining stars making an impact
            </p>
          </div>
          </div>
        </section>
      {/* Student Spotlight */}
      <section style={{ padding: '4rem 0', background: '#f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Student Spotlight
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
              Our shining stars making an impact
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <StudentSpotlight 
              name="Enzo"
              age="12"
              courses="Coding & AI"
              country="USA"
              image="/images/student-arjun.jpeg"
              testimonial="Coding classes helped me build my first mobile app and win 1st place in school's tech fair! Now I'm planning to participate in national coding competitions."
            />
            <StudentSpotlight 
              name="Arya"
              age="14"
              courses="Math Olympiad"
              country="India"
              image="/images/student-priya.jpeg"
              testimonial="Math Olympiad training helped me qualify for nationals! Mental math tricks helped me solve problems 3x faster than before."
            />
            <StudentSpotlight 
              name="Alex"
              age="10"
              courses="Rubik's Cube"
              country="UAE"
              image="/images/student-rohit.jpeg"
              testimonial="Can solve Rubik's cube in 45 seconds! My memory and focus improved so much that my school grades went from B to A+."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700' }}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FAQItem 
              question="What age group are Ashkam Intelligence Studio courses designed for?"
              answer="All our programs and courses are designed for children aged 6-16 years, with structured learning paths tailored to their age and skill level. We recommend at least two sessions (1 hour each) per week for the best learning experience."
            />
            <FAQItem 
              question="How is my child's data and privacy protected?"
              answer="We strictly follow data protection guidelines and do not collect more data than necessary. Our systems and staff are trained to ensure a safe and private learning space for all students."
            />
            <FAQItem 
              question="Can I get the recording of the classes for my child?"
              answer="To ensure student privacy, we do not provide recordings. However, detailed class notes, projects and activities are shared after each session for kids to revise at their own pace."
            />
            <FAQItem 
              question="Is there any homework or outside practice required?"
              answer="While there's no mandatory homework, we do encourage optional practice tasks, projects or games that reinforce class concepts which help your child apply their learning in a fun and engaging way."
            />
            <FAQItem 
              question="How are classes conducted?"
              answer="Our classes are conducted live online where students engage with teachers in real time. We offer small batch sizes (maximum 6 students) to ensure every student gets personalized attention and learning experience."
            />
            <FAQItem 
              question="What devices or softwares are needed for classes?"
              answer="A basic laptop or desktop with internet access is perfect. We'll guide you with any platform setup instructions before the course begins!"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function BrightChampsStyleCourseCard({ course }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ':hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
      }
    }}>
      {/* Course Image */}
      <div style={{
        height: '200px',
        backgroundImage: `url("${course.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'rgba(255,255,255,0.95)',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: '#1f2937'
        }}>
          {course.badge}
        </div>
      </div>
      
      {/* Course Content */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          marginBottom: '0.75rem',
          color: '#1f2937',
          lineHeight: '1.3'
        }}>
          {course.title}
        </h3>
        
        {/* Student Avatars */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', marginLeft: '-0.5rem' }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#6366f1',
              border: '2px solid white',
              marginLeft: '-0.25rem'
            }}></div>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#8b5cf6',
              border: '2px solid white',
              marginLeft: '-0.25rem'
            }}></div>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#06b6d4',
              border: '2px solid white',
              marginLeft: '-0.25rem'
            }}></div>
          </div>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            {course.enrolled} Enrolled
          </span>
        </div>
        
        {/* Rating */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <span style={{ color: '#fbbf24', fontSize: '1rem' }}>⭐</span>
          <span style={{ fontWeight: '600', color: '#1f2937' }}>{course.rating}</span>
          <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>({course.reviews} ratings)</span>
        </div>
        
        <p style={{
          color: '#6b7280',
          marginBottom: '1.5rem',
          lineHeight: '1.6',
          fontSize: '0.9rem'
        }}>
          {course.description}
        </p>
        
        {/* Course Details */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>
          <span>⭐ Ages {course.ageGroup}</span>
          <span>🎯 {course.level}</span>
          <span>⏰ {course.sessions}</span>
        </div>
        
        {/* Pricing */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#1f2937'
              }}>
                ₹{course.priceINR}
              </span>
              <span style={{
                fontSize: '1rem',
                color: '#6b7280',
                textDecoration: 'line-through'
              }}>
                ₹{course.originalPriceINR}
              </span>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              AED {course.priceAED} (${Math.round(course.priceAED * 0.27)} per class)
            </div>
          </div>
        </div>
        
        {/* Enroll Button */}
        <Link href={course.href} style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}>
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  )
}

function TeacherCard({ name, experience, rating, reviews, certifications, location, image, description }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <img 
          src={image} 
          alt={name}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            margin: '0 auto'
          }}
        />
      </div>
      <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#1f2937' }}>{name}</h4>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '0.5rem'
      }}>
        <span style={{ color: '#fbbf24' }}>⭐</span>
        <span style={{ fontWeight: '600' }}>{rating}</span>
        <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>({reviews} ratings)</span>
      </div>
      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
        <div><strong>Experience:</strong> {experience}</div>
        <div><strong>Location:</strong> {location}</div>
      </div>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
        {description}
      </p>
      <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
        <strong>Certifications:</strong> {certifications}
      </p>
    </div>
  )
}

function StudentSpotlight({ name, age, courses, country, image, testimonial }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <img 
          src={image} 
          alt={name}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            margin: '0 auto'
          }}
        />
      </div>
      <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#1f2937' }}>
        {name}, Age {age}
      </h4>
      <div style={{ fontSize: '0.875rem', color: '#6366f1', fontWeight: '600', marginBottom: '0.5rem' }}>
        {courses} | {country}
      </div>
      <p style={{ 
        fontSize: '0.9rem', 
        color: '#6b7280', 
        lineHeight: '1.6',
        fontStyle: 'italic'
      }}>
        "{testimonial}"
      </p>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      marginBottom: '1rem',
      overflow: 'hidden'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '1.5rem',
          background: 'white',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#1f2937',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {question}
        <span style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div style={{
          padding: '0 1.5rem 1.5rem 1.5rem',
          background: '#f9fafb',
          color: '#6b7280',
          lineHeight: '1.6'
        }}>
          {answer}
        </div>
      )}
    </div>
  )
}

function CategoryCard({ title, description, icon, courseCount, ageRange, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
        }
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937' }}>
        {title}
      </h3>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
        {description}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        background: '#f8fafc',
        borderRadius: '8px',
        fontSize: '0.875rem'
      }}>
        <span style={{ fontWeight: '600', color: '#1f2937' }}>{courseCount} courses</span>
        <span style={{ color: '#6b7280' }}>{ageRange}</span>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const courses = getAllCourses();
  
  return {
    props: {
      courses
    },
    revalidate: 3600 // Revalidate every hour
  };
}
