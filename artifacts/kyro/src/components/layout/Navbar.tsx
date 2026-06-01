import { Link } from "wouter";
import { Gamepad2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Gamepad2 className="w-6 h-6 text-accent" />
          <span className="font-bold text-xl tracking-tight text-white">Kyro</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors" data-testid="nav-home">Home</Link>
          <Link href="/browse" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors" data-testid="nav-browse">Browse</Link>
          <a href="https://discord.gg/kyro" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors" data-testid="nav-discord">Discord</a>
        </div>
      </div>
    </nav>
  );
}
