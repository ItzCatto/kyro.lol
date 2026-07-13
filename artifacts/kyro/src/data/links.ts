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

  // Torrent Sites
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
  { slug: "c00lkiddtech", title: "c00lkiddtech", url: "https://c00lkiddtech.live" },
  { slug: "bestspark", title: "BestSpark's Site", url: "https://bestspark.org" },

  // Discord Mods & Tools
  { slug: "betterdiscord", title: "BetterDiscord", url: "https://betterdiscord.app/" },
  { slug: "vencord", title: "Vencord", url: "https://vencord.dev/" },

  // Roblox Executors
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

  // === NEW DISCORD TOOLS ===
  { slug: "stolenshoes", title: "stolen.shoes", url: "https://stolen.shoes" },
  { slug: "fxembed", title: "FxEmbed", url: "https://github.com/FxEmbed/FxEmbed" },
  { slug: "disblock", title: "Disblock Origin", url: "https://codeberg.org/ridge/Discord-AdBlock" },
  { slug: "openasar", title: "OpenAsar", url: "https://openasar.dev/" },
  { slug: "nelly", title: "Nelly", url: "https://nelly.tools/" },
  { slug: "discrub", title: "Discrub", url: "https://github.com/prathercc/discrub-ext" },
  { slug: "answersoverflow", title: "AnswersOverflow", url: "https://www.answeroverflow.com/" },
  { slug: "profileviewer", title: "Discord Profile Viewer", url: "https://addynrpfp.vercel.app/" },
  { slug: "chatexporter", title: "Discord Chat Exporter", url: "https://github.com/Tyrrrz/DiscordChatExporter" },
  { slug: "wumpuscentral", title: "Wumpus Central", url: "https://discord.gg/zZ6szdKQu6" },
  { slug: "simplediscordcrypt", title: "SimpleDiscordCrypt", url: "https://gitlab.com/An0/SimpleDiscordCrypt" },
  { slug: "dscgg", title: "dsc.gg", url: "https://dsc.gg/" },
  { slug: "instaparty", title: "instaparty", url: "https://instaparty.gg/" },
  { slug: "discordtemplates", title: "Discord Templates", url: "https://discordtemplates.me/" },
  { slug: "discordbadges", title: "discord-badges", url: "https://github.com/mezotv/discord-badges" },
  { slug: "discordpreviews", title: "Discord Previews", url: "https://discordpreviews.com/" },
  { slug: "discordapi", title: "Discord-Api", url: "https://discord.gg/discord-api" },
  { slug: "discorddatamining", title: "Discord-Datamining", url: "https://github.com/Discord-Datamining/Discord-Datamining" },
  { slug: "discordtts", title: "Discord TTS Bot", url: "https://docs.moonstar-x.dev/discord-tts-bot/" },
  { slug: "webpconv", title: "WebP-Conv", url: "https://webp-conv.pages.dev/" },
  { slug: "embedvisualizer", title: "Embed Visualizer", url: "https://embed.discord.website/" },
  { slug: "usefulembed", title: "Useful Embed Index", url: "https://gist.github.com/mohsreg/927bf8b2092515ee1a8ee88c3e4d2c14" },
  { slug: "bettertwitfix", title: "BetterTwitFix", url: "https://github.com/dylanpdx/BetterTwitFix" },
  { slug: "axinstagram", title: "axinstagram", url: "https://axinstagram.com/" },
  { slug: "fxtiktok", title: "fxTikTok", url: "https://github.com/okdargy/fxTikTok" },
  { slug: "discordpackages", title: "Discord Packages", url: "https://github.com/peterhanania/discord-package" },
  { slug: "timestamps", title: "Discord Timestamp Generators", url: "https://hammertime.cyou/" },
  { slug: "tagmap", title: "TagMap", url: "https://tagmap.io/" },
  { slug: "discord3rdparties", title: "Discord3rdParties", url: "https://fmhy.net/social-media-tools#discord-tools" },
  { slug: "legcord", title: "Legcord", url: "https://legcord.app/" },
  { slug: "spacebar", title: "Spacebar", url: "https://github.com/spacebarchat/spacebarchat" },
  { slug: "dorion", title: "Dorion", url: "https://spikehd.github.io/projects/dorion/" },
  { slug: "concord", title: "Concord", url: "https://github.com/chojs23/concord" },
  { slug: "dissent", title: "Dissent", url: "https://github.com/diamondburned/dissent" },
  { slug: "clientthemes", title: "Client Themes", url: "https://github.com/topics/discord-theme" },
  { slug: "discohook", title: "Discohook", url: "https://discohook.org/" },
  { slug: "customrp", title: "CustomRP", url: "https://github.com/maxxriver/CustomRP" },
  { slug: "bdeditor", title: "BD Editor", url: "https://bdeditor.dev/" },
  { slug: "overlayed", title: "Overlayed", url: "https://overlayed.dev/" },
  { slug: "colouredtext", title: "Coloured-Text-Generator", url: "https://rebane2001.com/discord-colored-text-generator/" },
  { slug: "autocreavite", title: "Auto Creavite", url: "https://auto.creavite.co/icons" },
  { slug: "discordavatarmaker", title: "Discord Avatar Maker", url: "https://discord-avatar-maker.app/" },
  { slug: "betterdefaultdiscord", title: "Better Default Discord", url: "https://better-default-discord.netlify.app/" },
  { slug: "pfps", title: "Pfps.gg", url: "https://pfps.gg/" },
  { slug: "usrbg", title: "USRBG", url: "https://github.com/Discord-Custom-Covers/usrbg" },
  { slug: "emojigg", title: "emoji.gg", url: "https://emoji.gg/" },
  { slug: "emojidownloader", title: "Discord-Emoji-Downloader", url: "https://thatiemsz.github.io/Discord-Emoji-Downloader/" },
  { slug: "imageclipboard", title: "ImageClipboard", url: "https://imageclipboard.com/" },
  { slug: "premid", title: "PreMiD", url: "https://premid.app/" },
  { slug: "musicpresence", title: "Music Presence", url: "https://musicpresence.app/" },
  { slug: "jellyfinrpc", title: "Jellyfin RPC", url: "https://github.com/Radiicall/jellyfin-rpc" },
  { slug: "adobediscordrpc", title: "Adobe Discord RPC", url: "https://github.com/teeteeteeteetee/adobe-discord-rpc" },
  { slug: "freestuffbot", title: "FreeStuff Bot", url: "https://freestuffbot.xyz/" },
  { slug: "fixembed", title: "FixEmbed", url: "https://fixembed.app/" },
  { slug: "esmbot", title: "esmBot", url: "https://github.com/esmBot/esmBot" },
  { slug: "notquitenitro", title: "NotQuiteNitro", url: "https://nqn.blue/" },
  { slug: "fmbot", title: "fmbot", url: "https://fmbot.xyz/" },
  { slug: "chuu", title: "Chuu", url: "https://github.com/ishwi/Chuu" },
  { slug: "craig", title: "Craig", url: "https://craig.chat/" },
  { slug: "monitorss", title: "MonitoRSS", url: "https://monitorss.xyz/" },
  { slug: "appeal", title: "appeal.gg", url: "https://dashboard.appeal.gg/" },
  { slug: "wispbyte", title: "Wispbyte", url: "https://wispbyte.com/" },
  { slug: "wickbot", title: "Wickbot", url: "https://wickbot.com/" },
  { slug: "internetarchivalbot", title: "Internet Archival Bot", url: "https://internet-archival.xyz/" },
  { slug: "antiphishing", title: "anti-phishing-bot", url: "https://github.com/Benricheson101/anti-phishing-bot" },
  { slug: "honeypot", title: "Honeypot", url: "https://discord.com/discovery/applications/1450060292716494940" },
  { slug: "modmail", title: "Modmail", url: "https://github.com/modmail-dev/modmail" },
  { slug: "discordlinux", title: "Discord-Linux", url: "https://discord-linux.com/" },
  { slug: "disboard", title: "DISBOARD", url: "https://disboard.org/" },
  { slug: "topgg", title: "Top.gg", url: "https://top.gg/" }
];
