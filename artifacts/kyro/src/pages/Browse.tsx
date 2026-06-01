import { useState } from "react";
import { links } from "@/data/links";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = ["all", "games", "emulators", "roms", "movies", "tools"];

export default function Browse() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredLinks = activeFilter === "all" 
    ? links 
    : links.filter(l => l.category === activeFilter);

  return (
    <div className="space-y-8 pb-12 pt-4">
      <div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Browse Directory</h1>
        <p className="text-muted-foreground">Discover our complete collection of curated resources.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={activeFilter === cat ? "default" : "secondary"}
            className="capitalize rounded-full px-6"
            onClick={() => setActiveFilter(cat)}
            data-testid={`filter-${cat}`}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLinks.map((link, i) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <ResourceCard link={link} />
          </motion.div>
        ))}
        {filteredLinks.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground border border-dashed border-border rounded-xl">
            No resources found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
