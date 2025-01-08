
const https = require('https');

const sites = [
  'https://google.onrender.com/',
  'https://apple.onrender.com/'
];

function pingSite(site) {
  https
    .get(site, (res) => {
      const { statusCode } = res;
      if (statusCode >= 200 && statusCode < 300) {
        console.log(`SUCCESS: Pinged ${site} - Status Code: ${statusCode}`);
      } else {
        console.warn(`WARNING: Pinged ${site} - Status Code: ${statusCode}`);
      }
    })
    .on('error', (err) => {
      console.error(`ERROR: Failed to ping ${site} - ${err.message}`);
    });
}

function pingAllSites() {
  console.log(`Pinging ${sites.length} site(s) at ${new Date().toISOString()}`);
  sites.forEach(pingSite);
}

const PING_INTERVAL = 60000 * 10; 
setInterval(pingAllSites, PING_INTERVAL);
pingAllSites();

module.exports = { pingSite, pingAllSites };
