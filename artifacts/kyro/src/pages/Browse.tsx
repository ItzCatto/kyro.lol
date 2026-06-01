import { links } from "@/data/links";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function Browse() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-12 text-center"
      >
        Links
      </motion.h1>

      <div className="flex flex-col items-center gap-3 w-full max-w-sm">
        {links.map((link, i) => (
          <Link key={link.id} href={`/${link.slug}`} className="w-full">
            <motion.div
              data-testid={`link-${link.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
              className="w-full flex items-center justify-between px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-all group cursor-pointer"
            >
              <span>{link.title}</span>
              <span className="inline-flex items-center gap-1 text-white/40 group-hover:text-white/70 transition-colors text-xs">
                Open
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
