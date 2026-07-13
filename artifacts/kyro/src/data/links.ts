export interface KyroLink {
  slug: string;
  title: string;
  url: string;
}

export const links: KyroLink[] = [
  // Streaming / Television
  { slug: "cineby", title: "CineBy", url: "https://cineby.at/" },
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
    // Roblox Executors (from whatexpsare.online)
  { slug: "volt", title: "Volt", url: "https://buyvolt.xyz/" },
  { slug: "potassium", title: "Potassium", url: "https://potassium.dev/" },
  { slug: "wave", title: "Wave", url: "https://waveexecutor.net/" },
  { slug: "synapsez", title: "Synapse Z", url: "https://synapsez.to/" },
  { slug: "seliware", title: "Seliware", url: "https://seliware.com/" },
  { slug: "madium", title: "Madium", url: "https://madium.xyz/" },
  { slug: "cosmic", title: "Cosmic", url: "https://cosmicexploits.com/" },
  { slug: "velocity", title: "Velocity", url: "https://velocityexecutor.com/" },
  { slug: "sirhurt", title: "SirHurt", url: "https://sirhurt.net/" },

  // Mac Executors
  { slug: "macsploit", title: "MacSploit", url: "https://macsploit.com/" },
  { slug: "opiumware", title: "Opiumware", url: "https://opiumware.xyz/" },

  // Android Executors
  { slug: "delta", title: "Delta", url: "https://delta-executor.com/" },
  { slug: "vegax", title: "Vega X", url: "https://vegax.lol/" },
  { slug: "codex", title: "Codex", url: "https://codex.lol/" },

  // External / Others
  { slug: "serotonin", title: "Serotonin", url: "https://serotonin.lol/" },
  { slug: "severe", title: "Severe", url: "https://discord.gg/QaheZpKzsX" },
  { slug: "rbxcli", title: "RbxCli", url: "https://discord.gg/RZgUP8UZQ3" },
  { slug: "lumen", title: "Lumen", url: "https://getlumen.net/" },
  { slug: "matcha", title: "Matcha", url: "https://matcha-latte.win/" },
  { slug: "matrixhub", title: "Matrix Hub", url: "https://matrixhubs.shop/" },
  { slug: "photon", title: "Photon", url: "https://photonsys.sellpass.io/" },
  { slug: "dx9ware", title: "DX9WARE V2", url: "https://cultofintellect.com/" },
  { slug: "whatexpsare", title: "WhatExpsAre.Online", url: "https://whatexpsare.online/" },
   // Quest Spoofers & Others
  { slug: "questspoofer", title: "Quest Spoofer", url: "https://sites.google.com/view/questspoofer/home" },
  { slug: "discordptb", title: "Discord PTB", url: "https://ptb.discord.com/" },
  { slug: "contributor", title: "Contributor Form", url: "https://form.typeform.com/to/JgbuVUcv" },
    // Stream Aggregators
  { slug: "pstream", title: "P-Stream Forks", url: "https://fmhy.net/video/#p-stream-forks" },
  { slug: "lordflix", title: "LordFlix", url: "https://lordflix.org" },
  { slug: "rive", title: "Rive / CorsFlix Forks", url: "https://fmhy.net/video#streaming-sites" },
  { slug: "flixer", title: "Flixer / Hexa", url: "https://fmhy.net/video#streaming-sites" },
  { slug: "popcornmovies", title: "PopcornMovies / BingeBox", url: "https://popcornmovies.io/" },
  { slug: "67movies", title: "67Movies / 456Movie", url: "https://67movies.nl/" },
  { slug: "coreflix", title: "Coreflix", url: "https://coreflix.tv/" },
  { slug: "flickystream", title: "FlickyStream / MeowTV / CineMora", url: "https://flickystream.su/" },
  { slug: "bcine", title: "bCine", url: "https://bcine.ru/" },
  { slug: "shuttletv", title: "ShuttleTV", url: "https://shuttletv.su/" },
  { slug: "toustream", title: "TouStream", url: "https://toustream.xyz/" },
  { slug: "vyla", title: "Vyla", url: "https://vyla.cc/" },
  { slug: "goated", title: "GOATED", url: "https://goated.cx/" },
  { slug: "arrowtv", title: "ArrowTV / Cinezo / Flikhub", url: "https://arrowtv.net/" },
  { slug: "dulo", title: "dulo.tv", url: "https://dulo.tv/" },
  { slug: "moviebite", title: "MovieBite", url: "https://moviebite.cc/" },
  { slug: "overlook", title: "Overlook", url: "https://overlook.cx/" },
  { slug: "stigstream", title: "Stigstream", url: "https://stigstream.ru/" },
  { slug: "cinemabz", title: "Cinema.BZ", url: "https://cinema.bz/" },
  { slug: "cinetaro", title: "Cinetaro", url: "https://cinetaro.tv/" },
  { slug: "cinevibe", title: "Cinevibe", url: "https://cinevibe.asia/" },
  { slug: "streamo", title: "Streamo", url: "https://streamo.pro/" },
  { slug: "cinegram", title: "Cinegram", url: "https://cinegram.tv/" },
  { slug: "willow", title: "Willow", url: "https://willowmovies.com/" },
  { slug: "chillflix", title: "Chillflix", url: "https://chillflix.lol/" },
  { slug: "movish", title: "Movish / LatestMovies", url: "https://movish.net/" },
  { slug: "cinrift", title: "cinrift", url: "https://cinrift.me/" },
  { slug: "flixtrz", title: "Flixtrz", url: "https://flixtrz.com/" },
  { slug: "nomorflix", title: "NomorFlix", url: "https://nomorflix.icu/" },
  { slug: "cinebolt", title: "CineBolt", url: "https://cinebolt.org/" },
  { slug: "zxcstream", title: "ZXCSTREAM", url: "https://zxcprime.icu/" },
  { slug: "frame", title: "FRAME / SanuFlix", url: "https://frameweb.pages.dev/" },
  { slug: "cinepro", title: "CinePro / SMovies / CineFlix", url: "https://cinepro.fstream.app/" },
  { slug: "opstream", title: "OpStream", url: "https://opstream.fun/" },
  { slug: "nextbox", title: "Nextbox", url: "https://nextbox.uno/" },
  { slug: "movienight", title: "Movie Night", url: "https://movienig.ht/" },
  { slug: "smashystream", title: "Smashystream / AnyEmbed", url: "https://flix.smashystream.xyz/" },
  { slug: "allyoucanwatch", title: "All You Can Watch", url: "https://allyoucanwatch.net/" },
  { slug: "nelvix", title: "Nelvix", url: "https://nelvix.xyz/" },
  { slug: "netplay", title: "NetPlay / Cinelove", url: "https://netplayz.top/" },
  { slug: "xyra", title: "XYRA", url: "https://xyra.stream/" },
  { slug: "moovie", title: "Moovie", url: "https://moovie.fun/" },
  { slug: "screenscape", title: "Screenscape", url: "https://screenscape.me/" },
  { slug: "surfacestream", title: "Surface Stream", url: "https://watchsurface.stream/" },
  { slug: "mapple", title: "Mapple.tv", url: "https://mappl.tv/" },
  { slug: "filmora", title: "Filmora", url: "https://filmora.qzz.io/" },
  { slug: "apexmovies", title: "Apexmovies", url: "https://apexmovies.net/" },
  { slug: "watchott", title: "Watchott / EmnexMovies", url: "https://watchott.ru/" },
  { slug: "streamvaults", title: "StreamVaults / ReelStream", url: "https://streamvaults.ru/" },
  { slug: "gaiaflix", title: "GaiaFlix", url: "https://gaiaflix.live/" },
  { slug: "nxsha", title: "Nxsha", url: "https://web.nxsha.app/" },
  { slug: "vegetatv", title: "Vegeta TV", url: "http://vegetatv.duckdns.org/" },
  { slug: "vidplay", title: "VidPlay", url: "https://vidplay.to/" },
  { slug: "playtorrio", title: "PlayTorrio", url: "https://playtorrio.xyz/" },
  { slug: "movcli", title: "mov-cli", url: "https://mov-cli.github.io/" },
  { slug: "hianime", title: "HiAnime", url: "https://hianime.ms/" },
];
