import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6"
        >
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Kyro Hub
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Your curated underground portal to free games, retro emulators, movies, and community tools.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="https://discord.gg/kyro"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-discord"
            className="inline-block px-8 py-3 rounded-lg bg-black/60 border border-white/10 text-white/80 text-sm font-medium tracking-wide hover:bg-black/80 hover:border-white/20 hover:text-white transition-all"
          >
            Discord
          </a>
        </motion.div>
      </section>
    </div>
  );
}
