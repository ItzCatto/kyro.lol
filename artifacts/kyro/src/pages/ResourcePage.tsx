import { useParams, Link } from "wouter";
import { links } from "@/data/links";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import NotFound from "./not-found";
import { motion } from "framer-motion";

export default function ResourcePage() {
  const params = useParams();
  const id = params.id;
  
  const resource = links.find(l => l.id === id);
  
  if (!resource) {
    return <NotFound />;
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <Link href="/browse" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-8" data-testid="back-link">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Browse
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-card-border rounded-2xl p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold text-white tracking-tight">{resource.title}</h1>
              {resource.featured && (
                <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">Featured</Badge>
              )}
            </div>
            <Link href={`/category/${resource.category}`}>
              <Badge variant="secondary" className="capitalize hover:bg-secondary cursor-pointer">
                {resource.category}
              </Badge>
            </Link>
          </div>
          
          <Button asChild size="lg" className="w-full md:w-auto bg-primary hover:bg-accent text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(167,139,250,0.5)] transition-all font-semibold">
            <a href={resource.url} target="_blank" rel="noopener noreferrer" data-testid="visit-site-btn">
              Visit Site <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {resource.description}
          </p>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-medium text-white mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {resource.tags?.map(tag => (
                <Badge key={tag} variant="outline" className="text-muted-foreground border-border bg-background/50">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground bg-background/50 px-4 py-2 rounded-lg border border-border">
            <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
            Verified Kyro Resource
          </div>
        </div>
      </motion.div>
    </div>
  );
}
