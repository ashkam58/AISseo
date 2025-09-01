
'use client'
import { motion } from 'framer-motion'
import { siteConfig } from '@/site.config'

export function Hero(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-300 rounded-full opacity-20"
          animate={{ x: [0, 30, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Future-ready kids
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 font-comic"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Learn, Play, Create
            </span>
            <br />
            <motion.span 
              className="inline-block"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              with Amazing Adventures! ✨
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-purple-700 mb-8 max-w-4xl mx-auto font-nunito"
            variants={itemVariants}
          >
            🎨 Fun online classes in Coding, AI, Rubik's Cube, Math Olympiads & Mental Math. 
            Where learning feels like playing and every lesson is an exciting journey!
          </motion.p>

          {/* Stats section with animations */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {[
              { number: "1000+", label: "😊 Happy Students", delay: 0 },
              { number: "5⭐", label: "🏆 Parent Rating", delay: 0.1 },
              { number: "24/7", label: "💝 Support", delay: 0.2 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200"
                variants={floatVariants}
                initial="initial"
                animate="animate"
                style={{ animationDelay: `${stat.delay}s` }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)"
                }}
              >
                <div className="text-3xl font-black text-purple-600 mb-2">{stat.number}</div>
                <div className="text-purple-500 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Ashkam%2C%20I'd%20love%20a%20FREE%20demo!`}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(124, 58, 237, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">🎉 Book a FREE Demo</span>
            </motion.a>
            
            <motion.a
              href="/courses"
              className="px-8 py-4 border-3 border-purple-500 text-purple-500 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#7c3aed",
                color: "#ffffff"
              }}
              whileTap={{ scale: 0.95 }}
            >
              🔍 Explore Courses
            </motion.a>
          </motion.div>

          {/* Feature highlights */}
          <motion.div 
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-5xl mx-auto border border-purple-200"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-black text-purple-600 mb-6">🌟 What Makes Us Special?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: "🎨", title: "Fun & Interactive", desc: "Every lesson feels like a game!" },
                { emoji: "👨‍🏫", title: "Expert Teachers", desc: "Friendly instructors who care" },
                { emoji: "🏠", title: "Learn from Home", desc: "Safe, comfortable environment" },
                { emoji: "📱", title: "Parent Dashboard", desc: "Track progress easily" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-4xl mb-3">{feature.emoji}</div>
                  <h4 className="font-bold text-purple-600 mb-2">{feature.title}</h4>
                  <p className="text-purple-500 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}