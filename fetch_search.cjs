const https = require('https');
https.get('https://www.youtube.com/results?search_query=American+Dream+Mall+4k', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
    if (match) console.log(match[1]);
  });
});
