import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { KyroLink } from "@/data/links";
import { ExternalLink } from "lucide-react";

export default function ResourceCard({ link }: { link: KyroLink }) {
  return (
    <div className="group relative flex flex-col p-5 bg-card rounded-xl border border-card-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(167,139,250,0.15)] hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-white tracking-tight">{link.title}</h3>
        <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border/50 capitalize">
          {link.category}
        </Badge>
      </div>
      <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
        {link.description}
      </p>
      <div className="mt-auto">
        <Link href={`/resource/${link.id}`}>
          <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 transition-all font-medium" data-testid={`view-resource-${link.id}`}>
            View Resource
          </Button>
        </Link>
      </div>
    </div>
  );
}
