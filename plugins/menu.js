const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🇰🇪",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
< 彡༺⌘༆❞*${config.BOT_NAME}*彡༺⌘༆❞ >
│👑 *Owner:* ${config.OWNER_NAME}
│🌀 *Baileys:* Multi Device
│💻 *Type:* NodeJs
│☁️ *Platform:* Heroku
│🌐 *Mode:* [${config.MODE}]
│⚡ *Prefix:* [${config.PREFIX}]
│🛠 *Version:* 3.0.0 ★
└───────────────

©𝐬𝐢𝐫 𝐌𝐚𝐫𝐤

1 *Quranmenu*
♦ 2 .surah1
♦ 3 .surah2
♦ 4.surah3
♦ 5 .surah4
♦ 6.surah5
♦ 7.surah6
♦ 8.surah7
♦ 9.surah8
♦ 10.surah9
♦ 11.surah10
_________________________
📌 N.Prayertime*
★🔥 .Prayertime
_________________________
→ 1 *Aimenu*
→ 2 .ai
→ 3 .chatgpt2
→ 4 .openai
→ 5 .deepseek
→ 6 .fluxai
→ 7 .imagine2
→ 8 .imagine3
→ 9 .wallpaper
→ 10 .image
_________________________
¶📌N.AnimeIMGE*
¶1 .anime
¶2 .anime1
¶3 .anime2
¶4 .anime3
¶5 .anime4
¶6 .anime5
¶7 .garl
¶8 .waifu
¶9 .neko
¶10 .maid
¶11 .awoo
¶12 .animegirl
¶13 .animegirl1
¶14 .animegirl2
¶15 .animegirl3
¶16 .animegirl4
¶17 .animegirl5
¶18 .dog
_________________________
📌 N.Reactions📌
◈ 1 .cry
◈ 2 .cuddle
◈ 3 .bully
◈ 4 .hug
◈ 5 .awoo
◈ 6 .lick
◈ 7 .pat
◈ 8 .smug
◈ 9 .bonk
◈ 10 .yeet
◈ 11 .blush
◈ 12 .handhold
◈ 13 .highfive
◈ 14 .nom
◈ 15 .wave
◈ 16 .smile
◈ 17 .wink
◈ 18 .happy
◈ 19 .glomp
◈ 20 .bite
◈ 21 .poke
◈ 22 .cringe
◈ 23 .dance
◈ 24 .kill
◈ 25 .slap
◈ 26 .kiss
_________________________
📌 N.Convertmenu*
◈ 1 .sticker
◈ 2 .topdf
◈ 3 .gif
◈ 4 .attp
◈ 5 .tts2
◈ 6.tts3
◈ 7.tts
◈ 8 .trt
◈ 9 .fancy
◈ 10 .gitclone
◈ 11 .url
◈ 12 .logo
◈ 13 .fetch
◈ 14 .emoji
_________________________
📌 N.Funmenu*
→ 1 .define
→ 2 .emix 😀,🤣
→ 3 .happy
→ 4 .heart
→ 5 .angry
→ 6 .sad
→ 7 .shy
→ 8 .moon
→ 9 .confused
→ 10 .hot
→ 11 .nikal
→ 12 .compatibility
→ 13 .aura
→ 14 .roast
→ 15 .8ball
→ 16 .compliment
→ 17 .lovetest
→ 18 .joke
→ 19 .hack
_________________________
📌 N.Dlmenu*
★ 1 .capcut
★ 2 .ringtone
★ 3.tiktok2
★ 4 .tiktok
★ 5 .tiktoksearch
★ 6 .Instagram
★ 7 .facebook
★ 8 .snapchat
★ 9 .twitter
★ 10 .mediafire
★ 11 .gdrive  
★ 12 .apk
★ 13 .gdrive
★ 14 .likee
★ 15 .pinterest
★ 16 .spotifysearch
★ 17 .yts
★ 18 .mp4
★ 19 .mp3
★ 20 .video
★ 21 .video2
→ 22 .video3
★ 23 .video5
★ 24 .play
★ 25 .play2
★ 26 .img
★ 27 .apk2
★ 28 .video7
_________________________
📌 N.Groupmenu*
★ 1 .admin
★ 2 .admin1
★ 3 .tagall
★ 4.tag
★ 5 .taggp
★ 6 .hidetag
★ 7 .unmute
★ 8 .unlockgc
★ 9 .kickall
★ 10 .kickall2
★ 11 .kick
★ 12 .removeadmins
★ 13 .leave
★ 14 .join
★ 15 .invite
★ 16 .resetglink
★ 17 .jid1
★ 18 .gjid
★ 19 .removeall
★ 20 .remove(+2'')
_________________________
📌N.Othermenu*
↓ 1 .ytsearch
↓ 2 .githubstalk
↓ 3 .tiktokstalk
↓ 4 .wikipedia
↓ 5 .movie
↓ 6 .srepo
↓ 7 .screenweb
↓ 8 .weather
↓ 9 .rcolor
↓ 10 .roll
↓ 11 .coinflip
↓ 12 .time
↓ 13 .date
↓ 14 .count
↓ 15 .shapar
. 16  .get
. 17  .dev
↓ 18 .mee
_________________________
📌 N.Ownermenu*
.1 .alive
.2 .version
.3 .antidelete
.4 .pkpayments 
.5 .vv
.6 .vv2
.7 .forward
.8 .save
.9 .env
.10 .allvar
.11 .pair
.12 .repo
.13 .sc
.14 .script
.15 .update
.16 .menu
.17 .list
.18 .owner
.19 .shutdown
.20 .broadcast
.21 .ping
.22 .speed
.23 .fetch
.24 .report
.25.adult
.25.pk
.27.mpesamenu
_________________________

*${config.DESCRIPTION}*`;

        await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/qiwymc.jpg` }, caption: dec }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
      
