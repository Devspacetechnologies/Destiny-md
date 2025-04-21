const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about a GitHub repository.",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Devspacetechnologies/Destiny-md';

    try {
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("Invalid GitHub URL.");

        const [, username, repoName] = match;

        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

        const data = await response.json();

        const message = `
*BOT NAME:* ${data.name}
*OWNER:* ${data.owner.login}
*STARS:* ${data.stargazers_count}
*FORKS:* ${data.forks_count}
*DESCRIPTION:* ${data.description || 'No description'}
*REPO LINK:* ${data.html_url}

> *Powered by pkdriller*
        `.trim();

        reply(message);

    } catch (err) {
        console.error("Repo Command Error:", err);
        reply("Failed to fetch repo info. Please try again later.");
    }
});
