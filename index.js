const core = require('@actions/core');
const fetch = require('cross-fetch');

try {

  const token = core.getInput('token');
  const list = core.getInput('list');
  const slack_emoji_url = `https://slack.com/api/emoji.list`;
  const github_emoji_url = 'https://api.github.com/emojis';
  const header =  {
      "Content-Type": "application/json"
  };
  fetch(slack_emoji_url, {
    headers: { header, "Authorization": "Bearer " + token},
    method: 'GET'
  }).then(res => res.json()).then(async slack_response => {
    const slack_emojis = Object.keys(slack_response.emoji);
    var github_emojis = [];
    
    if(list == "all")
      github_emojis = Object.keys(
        await fetch(github_emoji_url, { headers: header, method: 'GET'}).then(res => res.json())
      );
    
    const all_emojis = [...slack_emojis, ...github_emojis];
    const random_emoji = all_emojis[Math.floor(Math.random() * all_emojis.length)];
    
    core.setOutput("emoji", random_emoji);
  });
} catch (error) {
  core.setFailed(error);
}
