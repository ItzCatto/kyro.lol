import { useParams, Link } from "wouter";
import { links } from "@/data/links";
import ResourceCard from "@/components/ResourceCard";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "./not-found";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  
  const validCategories = ["games", "emulators", "roms", "movies", "tools"];
  if (!validCategories.includes(category)) {
    return <NotFound />;
  }

  const categoryLinks = links.filter(l => l.category === category);

  return (
    <div className="space-y-8 pb-12 pt-4">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors" data-testid="back-link">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Hub
      </Link>
      
      <div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4 capitalize">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{category}</span> Collection
        </h1>
        <p className="text-muted-foreground">All resources categorized under {category}.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryLinks.map((link, i) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <ResourceCard link={link} />
          </motion.div>
        ))}
        {categoryLinks.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground border border-dashed border-border rounded-xl">
            No resources found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
