import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, LifeBuoy } from "lucide-react";

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
          Free games, emulators, movies, shows, exploits, and tools.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <a
            href="https://discord.gg/bxxvUQWhS7"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-discord"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Discord
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="https://discord.gg/kyro"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-support"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
          >
            <LifeBuoy className="w-4 h-4" />
            Support
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
