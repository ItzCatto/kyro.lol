export interface KyroLink {
  slug: string;
  title: string;
  url: string;
}

export const links: KyroLink[] = [
  // Streaming / Television
  { slug: "cineby", title: "CineBy", url: "https://cineby.gd" },
  { slug: "backrooms", title: "Backrooms", url: "https://lordflix.org/watch/movie/1083381" },
  { slug: "fmhy-streaming", title: "FMHY Streaming", url: "https://fmhy.net/streaming" },

  // PC Games
  { slug: "steamrip", title: "SteamRip", url: "https://steamrip.com/" },
  { slug: "fitgirl", title: "FitGirl Repacks", url: "https://fitgirl-repacks.site" },
  { slug: "csrin", title: "CS.RIN.RU", url: "https://cs.rin.ru/" },
  { slug: "gog-games", title: "GOG Games", url: "https://gog-games.to/" },
  { slug: "iggames", title: "IGG Games", url: "https://igg-games.com" },

  // Roblox Exploits / Executors / Scripts
  { slug: "solara", title: "Solara", url: "https://getsolara.dev/download/static/files/BootstrapperNew.exe" },
  { slug: "xeno", title: "Xeno", url: "https://www.xeno.now/download" },
  { slug: "bloodsync", title: "BloodSync", url: "https://www.youtube.com/watch?v=UzyzAqQ3DXI" },
  { slug: "rscripts", title: "Rscripts", url: "https://rscripts.net/" },
  { slug: "scriptblox", title: "ScriptBlox", url: "https://scriptblox.com/" },
  { slug: "rbxscript", title: "RBXScript", url: "https://rbxscript.com/" },
  { slug: "cattohub", title: "CattoHub", url: "https://discord.gg/Ey9uGhp3vQ" },
  { slug: "volt", title: "Volt", url: "https://voltbz.net" },

  // Music
  { slug: "artistgrid", title: "ArtistGrid", url: "https://artistgrid.cx/" },
  { slug: "cobalt", title: "Cobalt Tools", url: "https://cobalt.tools/" },

  // Tools
  { slug: "7zip", title: "7-Zip", url: "https://www.7-zip.org/" },
  { slug: "awesome-piracy", title: "Awesome Piracy", url: "https://shakil-shahadat.github.io/awesome-piracy/" },
  { slug: "internet-archive", title: "Internet Archive", url: "https://archive.org/" },

  // Emulators
  { slug: "retroarch", title: "RetroArch", url: "https://www.retroarch.com/" },
  { slug: "xemu", title: "xemu", url: "https://xemu.app/" },
  { slug: "xenia", title: "xenia", url: "https://xenia.jp/" },
  { slug: "dolphin", title: "Dolphin", url: "https://dolphin-emu.org/" },
  { slug: "cemu", title: "Cemu", url: "https://cemu.info/" },
  { slug: "melonds", title: "melonDS", url: "https://melonds.kuribo64.net/" },
  { slug: "mgba", title: "mGBA", url: "https://mgba.io/" },
  { slug: "project64", title: "Project64", url: "https://www.pj64-emu.com/" },
  { slug: "snes9x", title: "Snes9X", url: "https://www.snes9x.com/" },
  { slug: "sameboy", title: "SameBoy", url: "https://sameboy.github.io/" },
  { slug: "eden", title: "Eden", url: "https://eden-emu.dev/" },
  { slug: "kega-fusion", title: "Kega Fusion", url: "https://www.carpeludum.com/kega-fusion/" },
  { slug: "redream", title: "redream", url: "https://redream.io/" },
  { slug: "duckstation", title: "DuckStation", url: "https://www.duckstation.org/" },
  { slug: "pcsx2", title: "PCSX2", url: "https://pcsx2.net/" },
  { slug: "rpcs3", title: "RPCS3", url: "https://rpcs3.net/" },
  { slug: "ppsspp", title: "PPSSPP", url: "https://www.ppsspp.org/" },
  { slug: "vita3k", title: "Vita3K", url: "https://vita3k.github.io/" },
  { slug: "emudeck", title: "EmuDeck", url: "https://www.emudeck.com/" },

  // ROMs
  { slug: "vimms-lair", title: "Vimm's Lair", url: "https://vimm.net/" },
  { slug: "romhacking", title: "ROMhacking", url: "https://www.romhacking.net/" },
  { slug: "romulation", title: "RomUlation", url: "https://www.romulation.org/" },
  { slug: "retrostic", title: "Retrostic", url: "https://www.retrostic.com/" },
  { slug: "nxbrew", title: "NXBrew", url: "https://nxbrew.net/" },
  { slug: "myabandonware", title: "My Abandonware", url: "https://www.myabandonware.com/" },
  { slug: "cattolol", title: "CattoLoL", url: "https://sites.google.com/view/lolcatto" },

  // Torrent Sites (Cleaned - Safer ones only)
  { slug: "1337x", title: "1337x", url: "https://1337x.to" },
  { slug: "piratebay", title: "The Pirate Bay", url: "https://thepiratebay.org/index.html" },
  { slug: "yts", title: "YTS", url: "https://www12.yts-official.to" },
  { slug: "rarbg", title: "RARBG Proxy", url: "https://www.rarbgproxy.to" },
  { slug: "nyaa", title: "Nyaa", url: "https://nyaa.eu" },
  { slug: "rutracker", title: "RuTracker", url: "https://rutracker.org" },
  { slug: "torrentleech", title: "TorrentLeech", url: "https://www.torrentleech.org/" },
  { slug: "iptorrents", title: "IPTorrents", url: "https://iptorrents.me" },

  // A.I. / Others
  { slug: "fmhy-ai", title: "FMHY AI", url: "https://fmhy.net/ai" },
  { slug: "leofame", title: "LeoFame", url: "https://leofame.com" },
  { slug: "venaceai", title: "Venace AI", url: "https://venice.ai" },
  { slug: "qqtube", title: "QQtube", url: "https://qqtube.com/free" },

  // School / Proxies
  { slug: "croxyproxy", title: "CroxyProxy", url: "https://www.croxyproxy.com/" },
  { slug: "unblockit", title: "UnblockIt", url: "https://unblockit.buzz/" },
  { slug: "c00lkiddtech", title: "c00lkiddtech", url: "https://c00lkiddtech.live"},
  { slug: "bestspark", title: "BestSpark's Site", url: "https://bestspark.org"},

  // Discord Mods
  { slug: "betterdiscord", title: "BetterDiscord", url: "https://betterdiscord.app/" },
  { slug: "vencord", title: "Vencord", url: "https://vencord.dev/" },
  { slug: "velocity", title: "Velocity", url: "https://velocityexecutor.com/" },
  { slug: "madium", title: "Madium", url: "https://madium.xyz/" },
  { slug: "wave", title: "Wave", url: "https://waveexecutor.net/" },
  { slug: "synapsez", title: "Synapse Z", url: "https://synapsez.to/" },
];
