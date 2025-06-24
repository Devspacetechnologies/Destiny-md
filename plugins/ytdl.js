// Required Modules
const { ytSearch } = require('@dark-yasiya/yt-dl.js'); // YouTube downloader module
const axios = require('axios'); // HTTP client
const config = require('../config'); // Bot configuration
const { commands } = require('../command'); // Bot commands

// Add new command to the bot
commands.add({
  name: 'ytdl3',
  main: async (client, message, text) => {
    // If no text is provided, return a prompt
    if (!text) {
      return client.sendMessage(message.key.remoteJid, { text: "Please provide a YouTube URL or song name." });
    }

    try {
      // Search YouTube for the provided text or URL
      const searchResult = await ytSearch(text);
      const video = searchResult.result[0]; // First video result

      if (!video) {
        return client.sendMessage(message.key.remoteJid, { text: "Failed to fetch the video. Please try again later." });
      }

      // Create message with video details
      const messageText = `
🎬 *${video.title}*
👤 *Author:* ${video.author}
👀 *Views:* ${video.views}
⏳ *Duration:* ${video.timestamp}
🔗 *Link:* ${video.url}

*Choose download format:*
1. 📄 Document (no preview)
2. ▶️ Normal Video (with preview)

_Reply to this message with 1 or 2 to download._
      `.trim();

      // Send video preview with buttons
      const sentMessage = await client.sendMessage(message.key.remoteJid, {
        video: { url: video.thumbnail },
        caption: messageText,
        contextInfo: { externalAdReply: { title: "Download YouTube video", mediaType: 2, thumbnailUrl: video.thumbnail } }
      });

      // Listen for user reply (choices 1 or 2)
      client.once('messages.upsert', async (reply) => {
        const replyMessage = reply.messages?.[0];
        const replyText = replyMessage?.message?.conversation;

        // Validate reply
        if (!['1', '2'].includes(replyText)) {
          return client.sendMessage(message.key.remoteJid, { text: "Invalid selection. Please select 1 or 2 🔴" });
        }

        // Decide format
        const isDocument = replyText === '1';
        const downloadUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${video.url}`;

        try {
          // Download the video
          const { data } = await axios.get(downloadUrl);

          // Send the downloaded video
          await client.sendMessage(message.key.remoteJid, {
            video: { url: data.download_url },
            mimetype: isDocument ? 'video/mp4' : undefined,
            caption: `🎬 *${video.title}*\n🔗 *Link:* ${video.url}`,
          });
        } catch (err) {
          console.error(err);
          client.sendMessage(message.key.remoteJid, { text: "Failed to fetch the video. Please try again later." });
        }
      });
    } catch (error) {
      console.error(error);
      client.sendMessage(message.key.remoteJid, { text: "An error occurred. Please try again later." });
    }
  },
  download: true,
  author: 'MARK TECH',
  description: 'Download YouTube video',
  category: 'video',
});
