export interface KyroLink {
slug: string;
title: string;
url: string;
}
 
export const links: KyroLink[] = [
// Streaming
{ slug: "cineby", title: "CineBy", url: "https://cineby.gd" },
 
// PC Games
{ slug: "steamrip", title: "SteamRip", url: "https://steamrip.com/" },
{ slug: "fitgirl", title: "FitGirl", url: "https://fitgirl-repacks.site" },
 
// Music
{ slug: "artistgrid", title: "ArtistGrid", url: "https://artistgrid.cx/" },
{ slug: "cobalt", title: "Cobalt Tools", url: "https://cobalt.tools/" },
 
// Tools
{ slug: "7zip", title: "7-Zip", url: "https://www.7-zip.org/" },
{ slug: "awesome-piracy", title: "Awesome Piracy", url: "https://shakil-shahadat.github.io/awesome-piracy/" },
 
// Emulators (1 per console/platform)
{ slug: "retroarch", title: "RetroArch", url: "https://www.retroarch.com/" }, // Multi-system
{ slug: "xemu", title: "xemu", url: "https://xemu.app/" }, // Xbox
{ slug: "xenia", title: "xenia", url: "https://xenia.jp/" }, // Xbox 360
{ slug: "dolphin", title: "Dolphin", url: "https://dolphin-emu.org/" }, // GameCube/Wii
{ slug: "cemu", title: "Cemu", url: "https://cemu.info/" }, // Wii U
{ slug: "melonds", title: "melonDS", url: "https://melonds.kuribo64.net/" }, // DS
{ slug: "mgba", title: "mGBA", url: "https://mgba.io/" }, // GBA
{ slug: "project64", title: "Project64", url: "https://www.pj64-emu.com/" }, // N64
{ slug: "snes9x", title: "Snes9X", url: "https://www.snes9x.com/" }, // SNES
{ slug: "sameboy", title: "SameBoy", url: "https://sameboy.github.io/" }, // Game Boy
{ slug: "eden", title: "Eden", url: "https://eden-emu.dev/" }, // Switch
{ slug: "kega-fusion", title: "Kega Fusion", url: "https://www.carpeludum.com/kega-fusion/" }, // Sega
{ slug: "redream", title: "redream", url: "https://redream.io/" }, // Dreamcast
{ slug: "duckstation", title: "DuckStation", url: "https://www.duckstation.org/" }, // PS1
{ slug: "pcsx2", title: "PCSX2", url: "https://pcsx2.net/" }, // PS2
{ slug: "rpcs3", title: "RPCS3", url: "https://rpcs3.net/" }, // PS3
{ slug: "ppsspp", title: "PPSSPP", url: "https://www.ppsspp.org/" }, // PSP
{ slug: "vita3k", title: "Vita3K", url: "https://vita3k.github.io/" }, // Vita
{ slug: "emudeck", title: "EmuDeck", url: "https://www.emudeck.com/" }, // Steam Deck
 
// ROM Sites
{ slug: "vimms-lair", title: "Vimm's Lair", url: "https://vimm.net/" },
{ slug: "romhacking", title: "ROMhacking", url: "https://www.romhacking.net/" },
{ slug: "romulation", title: "RomUlation", url: "https://www.romulation.org/" },
{ slug: "retrostic", title: "Retrostic", url: "https://www.retrostic.com/" },
{ slug: "nxbrew", title: "NXBrew", url: "https://nxbrew.net/" },
];
