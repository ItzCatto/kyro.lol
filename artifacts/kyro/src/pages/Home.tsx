import { links } from "@/data/links";
import ResourceCard from "@/components/ResourceCard";
import { Link } from "wouter";
import { motion } from "framer-motion";

const categories = [
  { id: "games", label: "Games", count: links.filter(l => l.category === "games").length },
  { id: "emulators", label: "Emulators", count: links.filter(l => l.category === "emulators").length },
  { id: "roms", label: "ROMs", count: links.filter(l => l.category === "roms").length },
  { id: "movies", label: "Movies", count: links.filter(l => l.category === "movies").length },
  { id: "tools", label: "Tools", count: links.filter(l => l.category === "tools").length },
];

export default function Home() {
  const featuredLinks = links.filter((l) => l.featured);

  return (
    <div className="space-y-16 pb-12">
      {/* Hero */}
      <section className="py-20 text-center relative max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-accent/5 blur-[100px] -z-10 rounded-full" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6"
        >
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kyro Hub</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Your curated underground portal to free games, retro emulators, movies, and community tools.
        </motion.p>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-primary rounded-full block"></span>
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <Link key={cat.id} href={`/category/${cat.id}`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card hover:bg-secondary border border-card-border p-6 rounded-xl text-center cursor-pointer transition-colors group"
                data-testid={`category-${cat.id}`}
              >
                <div className="text-lg font-semibold text-white group-hover:text-accent transition-colors">{cat.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{cat.count} items</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-accent rounded-full block"></span>
            Featured Picks
          </h2>
          <Link href="/browse" className="text-sm text-primary hover:text-primary-foreground transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLinks.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
            >
              <ResourceCard link={link} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
