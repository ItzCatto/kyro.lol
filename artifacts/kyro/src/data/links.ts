export interface KyroLink {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "games" | "emulators" | "movies" | "tools" | "roms";
  url: string;
  tags?: string[];
  featured?: boolean;
}

export const links: KyroLink[] = [
  {
    id: "game-1",
    slug: "now-gg",
    title: "Now.gg",
    description: "Play Android games free in your browser — no downloads required.",
    category: "games",
    url: "https://now.gg",
    tags: ["browser", "android"],
    featured: true,
  },
  {
    id: "emu-1",
    slug: "emulatorjs",
    title: "EmulatorJS",
    description: "Browser-based emulator for SNES, GBA, N64, and more.",
    category: "emulators",
    url: "https://emulatorjs.org",
    tags: ["browser", "retro"],
    featured: true,
  },
  {
    id: "rom-1",
    slug: "vimms-lair",
    title: "Vimm's Lair",
    description: "Massive archive of classic ROMs and ISOs for emulation.",
    category: "roms",
    url: "https://vimm.net",
    tags: ["archive", "classic"],
  },
  {
    id: "movie-1",
    slug: "soap2day",
    title: "Soap2Day",
    description: "Watch free movies and TV shows online.",
    category: "movies",
    url: "https://soap2day.rs",
    tags: ["streaming"],
    featured: true,
  },
  {
    id: "movie-2",
    slug: "123movies",
    title: "123Movies",
    description: "High-quality free movie streaming with huge library.",
    category: "movies",
    url: "https://123movies.ai",
    tags: ["streaming", "hd"],
  },
  {
    id: "tool-1",
    slug: "discord",
    title: "Kyro Discord",
    description: "Join the Kyro community for updates, tools, and more.",
    category: "tools",
    url: "https://discord.gg/kyro",
    tags: ["community"],
    featured: true,
  },
];
