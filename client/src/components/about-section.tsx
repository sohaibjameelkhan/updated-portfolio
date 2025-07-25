export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">Senior Mobile Application Developer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about creating exceptional mobile experiences that users love. With over 4 years of hands-on experience, 
              I specialize in building scalable, high-performance applications that serve thousands of users across Pakistan and the UAE.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the entire mobile development lifecycle, from concept to deployment, with a strong focus on 
              clean architecture, performance optimization, and user experience.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">90%</div>
                <div className="text-muted-foreground">5-Star Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="glass-effect p-6 rounded-xl bg-white/90 dark:bg-background/80 backdrop-blur-sm shadow-lg dark:shadow-none border border-white/50 dark:border-transparent">
              <h4 className="text-lg font-semibold mb-2 text-blue-400">Current Focus</h4>
              <p className="text-muted-foreground">Leading mobile development at SoftLinks FZCO, building cutting-edge Flutter applications for global markets.</p>
            </div>
            <div className="glass-effect p-6 rounded-xl bg-white/90 dark:bg-background/80 backdrop-blur-sm shadow-lg dark:shadow-none border border-white/50 dark:border-transparent">
              <h4 className="text-lg font-semibold mb-2 text-purple-400">Specialization</h4>
              <p className="text-muted-foreground">Cross-platform mobile development with Flutter, native iOS development with Swift, and Android development with Kotlin.</p>
            </div>
            <div className="glass-effect p-6 rounded-xl bg-white/90 dark:bg-background/80 backdrop-blur-sm shadow-lg dark:shadow-none border border-white/50 dark:border-transparent">
              <h4 className="text-lg font-semibold mb-2 text-cyan-400">Location</h4>
              <p className="text-muted-foreground">Based in Islamabad, Pakistan, working with clients worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
