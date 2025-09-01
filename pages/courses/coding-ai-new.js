"use client";

import { SEO } from "@/components/SEO";
import { siteConfig } from "@/site.config";
import { useState, useRef } from "react";

export default function CodingAIPage() {
  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Coding & AI Adventures for Kids! 🤖✨",
    description: "Join Captain Code and AI Bot Luna on an epic coding journey! Learn Scratch, Python, and AI through fun cartoon adventures. Perfect for kids aged 6-16!",
    provider: { "@type": "Organization", name: siteConfig.brand, sameAs: siteConfig.siteUrl },
    courseCode: "CA101",
    educationalLevel: "Beginner to Intermediate",
    teaches: ["Scratch Block Programming", "Python Coding Adventures", "AI and Machine Learning Magic", "Game Development Studio", "Creative Problem Solving", "Digital Storytelling"],
    timeRequired: "P12W",
    coursePrerequisites: "None - Complete Beginner Friendly!",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "847" },
  };

  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const heroRef = useRef(null);

  const characters = [
    {
      name: "Captain Code 👨‍💻",
      role: "Programming Guide",
      description: "Your friendly Scratch and Python teacher who loves pizza and debugging!",
      quote: "Coding is like solving puzzles, but way more fun! 🍕",
      color: "#6366f1",
      emoji: "👨‍💻"
    },
    {
      name: "AI Bot Luna 🤖",
      role: "Machine Learning Expert", 
      description: "The smartest robot in the galaxy who teaches AI and dreams in binary!",
      quote: "01001000 01101001! (That's 'Hi!' in binary!) 🌙",
      color: "#8b5cf6",
      emoji: "🤖"
    },
    {
      name: "Pixel Pete 🎮",
      role: "Game Development Master",
      description: "The ultimate game creator who shows you how to build amazing games!",
      quote: "Every great game starts with a single pixel! Level up! 🏆",
      color: "#10b981",
      emoji: "🎮"
    }
  ];

  const projects = [
    { 
      title: "Virtual Pet Adventure 🐱", 
      tech: "Scratch Magic", 
      difficulty: "Super Beginner", 
      description: "Create your own digital pet that talks, plays, and grows!",
      icon: "🐱"
    },
    { 
      title: "Space Hero Journey 🚀", 
      tech: "Python Power", 
      difficulty: "Cool Kid", 
      description: "Build an epic space adventure with aliens and power-ups!",
      icon: "🚀"
    },
    { 
      title: "Smart Chatbot Buddy 🤖", 
      tech: "AI Magic", 
      difficulty: "Code Wizard", 
      description: "Program your own AI friend that learns and grows smarter!",
      icon: "🤖"
    },
    { 
      title: "Weather Crystal Ball 🔮", 
      tech: "ML Sorcery", 
      difficulty: "Code Wizard", 
      description: "Create a magical weather predictor using AI!",
      icon: "🔮"
    },
    { 
      title: "Super Platformer Game 🍄", 
      tech: "Game Studio", 
      difficulty: "Cool Kid", 
      description: "Design Mario-style levels with jumping, coins, and enemies!",
      icon: "🍄"
    },
    { 
      title: "Math Genius Helper 🧠", 
      tech: "Smart Code", 
      difficulty: "Code Wizard", 
      description: "Build a calculator that solves word problems like magic!",
      icon: "🧠"
    }
  ];

  const quiz = [
    { q: "What makes a computer think? 🤔", a: "code", options: ["magic", "code", "electricity"] },
    { q: "In Scratch, blocks fit together like ___", a: "puzzle pieces", options: ["puzzle pieces", "toys", "books"] },
    { q: "Python is named after a ___", a: "comedy show", options: ["snake", "comedy show", "food"] }
  ];

  const checkAnswer = (selectedAnswer) => {
    const ok = selectedAnswer === quiz[qIndex].a;
    setIsCorrect(ok);
    if (ok) {
      setQuizScore(prev => prev + 1);
      setTimeout(() => { 
        setQIndex((i) => (i + 1) % quiz.length); 
        setIsCorrect(null); 
      }, 1500);
    } else {
      setTimeout(() => setIsCorrect(null), 1000);
    }
  };

  const burst = (x, y) => {
    const root = heroRef.current;
    if (!root) return;
    for (let i = 0; i < 20; i++) {
      const s = document.createElement("span");
      s.innerHTML = ["🎉", "⭐", "🌟", "💫", "🎊"][Math.floor(Math.random() * 5)];
      s.style.position = "absolute";
      s.style.left = x + "px";
      s.style.top = y + "px";
      s.style.fontSize = "20px";
      s.style.pointerEvents = "none";
      s.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * -200 - 50}px)`;
      s.style.transition = "all 1s ease-out";
      s.style.opacity = "0";
      root.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  };

  const onStartTrial = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    burst(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <>
      <SEO
        title="Coding & AI Adventures for Kids | Learn Programming with Fun Characters | AIS Academy"
        description="Join Captain Code, AI Bot Luna & Pixel Pete on epic coding adventures! Kids learn Scratch, Python & AI through cartoon characters. Ages 6-16. Start free trial!"
        keywords="coding for kids, AI for children, Scratch programming, Python kids, machine learning children, programming classes kids, coding bootcamp children"
        jsonLd={courseLd}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative text-white min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "2rem 0",
        }}
      >
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🌟</div>
          <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">⚡</div>
          <div className="absolute bottom-20 left-20 text-4xl opacity-20 animate-bounce">🚀</div>
          <div className="absolute bottom-10 right-10 text-5xl opacity-20 animate-pulse">💫</div>
        </div>

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            {/* Main Character Showcase */}
            <div className="relative mb-8">
              <div className="text-8xl md:text-9xl drop-shadow-2xl animate-bounce">
                {characters[currentCharacter].emoji}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Coding & AI Adventures for Kids! 🌟
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto drop-shadow-md">
              Join Captain Code, AI Bot Luna, and Pixel Pete on an epic coding journey! 
              From Scratch blocks to Python magic to AI wizardry! 🐍✨🤖
            </p>

            {/* Character Selector */}
            <div className="flex justify-center gap-4 mb-8">
              {characters.map((char, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCharacter(index)}
                  className={`text-4xl p-3 rounded-full transition-all duration-300 ${
                    currentCharacter === index 
                      ? 'bg-white/20 scale-110 shadow-lg' 
                      : 'hover:scale-105 hover:bg-white/10'
                  }`}
                >
                  {char.emoji}
                </button>
              ))}
            </div>

            {/* Character Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold mb-2" style={{ color: characters[currentCharacter].color }}>
                {characters[currentCharacter].name}
              </h3>
              <p className="text-lg mb-2 opacity-90">{characters[currentCharacter].role}</p>
              <p className="mb-3 opacity-80">{characters[currentCharacter].description}</p>
              <p className="text-lg italic font-medium text-yellow-200">
                "{characters[currentCharacter].quote}"
              </p>
            </div>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button
                onClick={onStartTrial}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-pink-500/25 flex items-center gap-2"
              >
                🎮 Start FREE Adventure!
              </button>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=I%20want%20to%20join%20the%20Coding%20AI%20Adventure!`}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-green-500/25 flex items-center gap-2"
              >
                💬 Chat with Us!
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span>10,000+ Happy Kids</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span>Ages 6-16</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span>12 Fun-Filled Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%)" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Why Kids LOVE Our Coding Adventures! 🎉
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We turn learning into an epic adventure with cartoon friends, fun projects, and magical coding quests!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "No Boring Lectures!",
                description: "Learn through colorful Scratch blocks, fun animations, and interactive games. Coding feels like playing!",
                color: "from-purple-400 to-pink-400"
              },
              {
                icon: "🏆",
                title: "Build Real Projects!",
                description: "Create games, chatbots, and AI apps you can actually show off to friends and family!",
                color: "from-blue-400 to-cyan-400"
              },
              {
                icon: "👥",
                title: "Learn with Friends!",
                description: "Join our community of young coders! Share projects, get help, and celebrate wins together!",
                color: "from-green-400 to-emerald-400"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {feature.icon}
                </div>
                <div className={`bg-gradient-to-r ${feature.color} text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300`}>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Epic Projects You'll Build! 🚀
            </h2>
            <p className="text-xl text-gray-600">
              Real projects that will amaze your friends and family!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-200"
              >
                <div className="text-4xl mb-4 text-center animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.tech}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.difficulty === 'Super Beginner' ? 'bg-green-100 text-green-800' :
                    project.difficulty === 'Cool Kid' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Test Your Coding Knowledge! 🧠
            </h2>
            <p className="text-xl text-white/90">
              Let's see how much you already know! Score: {quizScore}/{quiz.length}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">
                {quiz[qIndex].q}
              </h3>
              
              <div className="grid gap-4 max-w-md mx-auto">
                {quiz[qIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => checkAnswer(option)}
                    className={`p-4 rounded-xl font-medium transition-all duration-300 ${
                      isCorrect === null 
                        ? 'bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50' 
                        : option === quiz[qIndex].a 
                          ? 'bg-green-500 text-white border-2 border-green-400' 
                          : 'bg-red-300 text-red-800 border-2 border-red-400'
                    }`}
                    disabled={isCorrect !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {isCorrect !== null && (
                <div className="mt-6">
                  {isCorrect ? (
                    <div className="text-green-300 text-xl">
                      🎉 Awesome! You're getting the hang of this!
                    </div>
                  ) : (
                    <div className="text-red-300 text-xl">
                      💪 Good try! Keep learning and you'll get it!
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Your Epic Coding Journey! 🗺️
            </h2>
            <p className="text-xl text-gray-600">
              From zero to coding hero in 12 magical weeks! Each level unlocks new superpowers! 🦸‍♀️
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                level: "Weeks 1-3",
                title: "Scratch Block Magic 🧙‍♂️",
                description: "Start with colorful drag-and-drop blocks! Create animations, stories, and simple games. No typing needed - just pure creativity!",
                icon: "🎨",
                color: "#ff6b6b",
                projects: ["Dancing Cat Animation", "Interactive Story", "Simple Maze Game"]
              },
              {
                level: "Weeks 4-6",
                title: "Python Snake Adventure 🐍",
                description: "Meet Python the friendly coding snake! Learn variables, loops, and functions through fun mini-games and challenges.",
                icon: "🐍",
                color: "#4ecdc4",
                projects: ["Number Guessing Game", "Password Generator", "Simple Calculator"]
              },
              {
                level: "Weeks 7-9",
                title: "Game Development Studio 🎮",
                description: "Build epic games! Platformers, puzzles, and arcade classics. Add graphics, sounds, and special effects!",
                icon: "🎮",
                color: "#45b7d1",
                projects: ["Space Invaders", "Platform Adventure", "Puzzle Master"]
              },
              {
                level: "Weeks 10-12",
                title: "AI Magic & Machine Learning 🤖",
                description: "Enter the world of AI! Create chatbots, image recognition, and smart programs that learn and grow!",
                icon: "🧠",
                color: "#f9ca24",
                projects: ["Smart Chatbot", "Image Classifier", "Weather Predictor"]
              }
            ].map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl" style={{ background: `linear-gradient(135deg, ${phase.color}20, ${phase.color}10)` }}>
                <div className="text-6xl animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <div 
                    className="inline-block text-white font-bold px-4 py-2 rounded-full mb-3"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.level}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{phase.title}</h3>
                  <p className="text-gray-600 mb-4 text-lg">{phase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.projects.map((project, pidx) => (
                      <span key={pidx} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow">
                        ✨ {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Ready to Start Your Adventure? 🚀
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of kids coding their dreams into reality!
          </p>
          
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl text-white relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-bl-2xl font-bold">
              🔥 Special Launch Price!
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Complete Coding Adventure Package</h3>
            
            <div className="text-center mb-6">
              <div className="text-lg line-through opacity-70">$299</div>
              <div className="text-5xl font-bold mb-2">$197</div>
              <div className="text-lg opacity-90">One-time payment • Lifetime access</div>
            </div>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=I%20want%20to%20enroll%20in%20the%20Coding%20AI%20Adventure%20course!`}
                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-6 rounded-xl text-center text-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🚀 Start Learning Now!
              </a>
              
              <button
                onClick={onStartTrial}
                className="block w-full bg-white/20 backdrop-blur-md text-white font-bold py-4 px-6 rounded-xl text-center border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                🎮 Try Free Demo First
              </button>
            </div>

            <div className="text-center mt-6 text-sm opacity-90">
              💰 30-day money-back guarantee<br/>
              🎁 Free bonus: AI Ethics for Kids course
            </div>
          </div>

          {/* What's Included */}
          <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">🎁 What's Included:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>🎥 48 Interactive Video Lessons</li>
                <li>🎮 12 Hands-on Projects</li>
                <li>📖 Downloadable Resources</li>
                <li>💬 24/7 Student Community</li>
                <li>🏆 Completion Certificate</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">⭐ Why Choose Us:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>👨‍🏫 Expert Kid-Friendly Instructors</li>
                <li>🎯 Age-Appropriate Content</li>
                <li>🔒 Safe Learning Environment</li>
                <li>📱 Works on All Devices</li>
                <li>🔄 Lifetime Access</li>
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Don't wait! Captain Code, AI Bot Luna, and Pixel Pete are ready to meet you! 🤖👨‍💻🎮
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=I'm%20ready%20to%20start%20my%20coding%20adventure!`}
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎉 Join the Adventure Now!
            </a>
            <p className="mt-4 text-sm text-gray-500">
              ✅ No credit card required for demo • ✅ Start learning immediately • ✅ Join 10,000+ happy students
            </p>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-bounce { 
          animation: bounce 2s infinite; 
        }
        .animate-pulse { 
          animation: pulse 2s infinite; 
        }
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
