import { useParams } from "wouter";
import { links } from "@/data/links";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import NotFound from "./not-found";

export default function ResourcePage() {
  const params = useParams<{ slug: string }>();
  const resource = links.find(l => l.slug === params.slug);

  if (!resource) return <NotFound />;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-12 text-center"
      >
        {resource.slug}
      </motion.h1>

      <motion.a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-open"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
      >
        Open
        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
      </motion.a>
    </div>
  );
}
